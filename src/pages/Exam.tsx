import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, AlertTriangle, Trophy, XCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useApp } from '@/contexts/AppContext';
import { useAds } from '@/contexts/AdContext';
import { questions, Question } from '@/data/questions/index';
import { shuffleOptionsWithCorrectIndex } from '@/lib/utils';
import { Capacitor } from '@capacitor/core';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type ExamState = 'intro' | 'active' | 'results';

const EXAM_DURATION = 60 * 60; // 60 minutes in seconds
const TOTAL_QUESTIONS = 33;
const PASSING_SCORE = 17;

// Track shuffled options per question for correct scoring
interface ShuffledQuestion {
  question: Question;
  shuffledOptions: typeof questions[0]['options'];
  correctIndexShuffled: number;
}

export default function Exam() {
  const navigate = useNavigate();
  const { settings, recordExamResult, t, isLoaded } = useApp();
  const { triggerInterstitial } = useAds();
  
  const [examState, setExamState] = useState<ExamState>('intro');
  const [examQuestions, setExamQuestions] = useState<ShuffledQuestion[]>([]);

  // Safety check: redirect to dashboard if visited directly without data loaded or settings
  useEffect(() => {
    if (isLoaded && !settings.bundesland) {
      navigate('/', { replace: true });
    }
  }, [isLoaded, settings.bundesland, navigate]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate exam questions with shuffled options
  const generateExam = useCallback(() => {
    const generalQuestions = questions.filter(q => !q.isStateSpecific);
    const stateQuestions = questions.filter(
      q => q.isStateSpecific && q.state === settings.bundesland
    );

    // Fisher-Yates shuffle for unbiased randomization
    const shuffledGeneral = [...generalQuestions];
    for (let i = shuffledGeneral.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledGeneral[i], shuffledGeneral[j]] = [shuffledGeneral[j], shuffledGeneral[i]];
    }
    const shuffledState = [...stateQuestions];
    for (let i = shuffledState.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledState[i], shuffledState[j]] = [shuffledState[j], shuffledState[i]];
    }

    const selectedGeneral = shuffledGeneral.slice(0, Math.min(30, shuffledGeneral.length));
    const selectedState = shuffledState.slice(0, Math.min(3, shuffledState.length));

    // Fill remaining with general if not enough state questions
    const remaining = TOTAL_QUESTIONS - selectedGeneral.length - selectedState.length;
    const extraGeneral = shuffledGeneral.slice(selectedGeneral.length, selectedGeneral.length + remaining);

    const combinedQuestions = [...selectedGeneral, ...selectedState, ...extraGeneral].slice(0, TOTAL_QUESTIONS);

    // Shuffle options for each question and track the new correct index
    const shuffledExamQuestions: ShuffledQuestion[] = combinedQuestions.map(q => {
      const { shuffledOptions, newCorrectIndex } = shuffleOptionsWithCorrectIndex(q.options, q.correctIndex);
      return {
        question: q,
        shuffledOptions,
        correctIndexShuffled: newCorrectIndex
      };
    });

    setExamQuestions(shuffledExamQuestions);
  }, [settings.bundesland]);

  // Handle Android hardware back button
  useEffect(() => {
    if (examState !== 'active') return;

    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      // Push a new state to prevent navigation
      window.history.pushState(null, '', window.location.href);
      setShowExitDialog(true);
    };

    // Push initial state when exam starts
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [examState]);

  // Timer
  useEffect(() => {
    if (examState !== 'active') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState]);

  const startExam = () => {
    generateExam();
    setAnswers({});
    setCurrentIndex(0);
    setTimeLeft(EXAM_DURATION);
    setStartTime(Date.now());
    setIsSubmitting(false);
    setExamState('active');
  };

  const finishExam = () => {
    // Prevent duplicate submissions
    if (isSubmitting) return;
    setIsSubmitting(true);

    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    // Calculate score using shuffled correct index
    const score = Object.entries(answers).reduce((acc, [index, answer]) => {
      const examQ = examQuestions[parseInt(index)];
      return acc + (examQ && answer === examQ.correctIndexShuffled ? 1 : 0);
    }, 0);

    recordExamResult({
      date: new Date().toISOString(),
      score,
      total: examQuestions.length,
      passed: score >= PASSING_SCORE,
      timeSpent
    });

    setExamState('results');
    
    // Show interstitial ad after exam completion
    triggerInterstitial();
  };

  const handleSelectAnswer = (index: number) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: index }));
  };

  const handleNext = () => {
    if (currentIndex < examQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishExam();
    }
  };

  const handleExit = () => {
    setShowExitDialog(true);
  };

  const confirmExit = () => {
    setShowExitDialog(false);
    setExamState('intro');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Results calculation using shuffled correct index
  const score = useMemo(() => {
    return Object.entries(answers).reduce((acc, [index, answer]) => {
      const examQ = examQuestions[parseInt(index)];
      return acc + (examQ && answer === examQ.correctIndexShuffled ? 1 : 0);
    }, 0);
  }, [answers, examQuestions]);
  
  const passed = score >= PASSING_SCORE;

  // Intro Screen
  if (examState === 'intro') {
    return (
      <div className="min-h-screen pb-24 safe-area-top">
        <div className="max-w-2xl mx-auto">
          <div className="px-5 pt-6 pb-4">
            <h1 className="text-2xl font-display font-bold mb-1">
              {t('Prüfungssimulation', 'Exam Simulation')}
            </h1>
            <p className="text-muted-foreground">
              {t('Teste dein Wissen unter echten Bedingungen', 'Test your knowledge under real conditions')}
            </p>
          </div>

          <div className="px-5 space-y-4">
          <Card>
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Clock className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">{t('60 Minuten', '60 Minutes')}</p>
                  <p className="text-sm text-muted-foreground">{t('Zeitlimit', 'Time limit')}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">{t('33 Fragen', '33 Questions')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('30 allgemein + 3 landesspezifisch', '30 general + 3 state-specific')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold">{t('17 richtige zum Bestehen', '17 correct to pass')}</p>
                  <p className="text-sm text-muted-foreground">{t('Mindestpunktzahl', 'Minimum score')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">
                {t(
                  'Dein ausgewähltes Bundesland: ',
                  'Your selected state: '
                )}
                <strong className="text-foreground">{settings.bundesland}</strong>
              </p>
            </CardContent>
          </Card>

          <Button 
            className="w-full h-14 text-lg font-semibold shadow-button"
            size="lg"
            onClick={startExam}
          >
            {t('Prüfung starten', 'Start Exam')}
          </Button>
          </div>
        </div>
      </div>
    );
  }

  // Active Exam Screen
  if (examState === 'active' && examQuestions[currentIndex]) {
    const currentExamQ = examQuestions[currentIndex];
    const isLastQuestion = currentIndex === examQuestions.length - 1;
    const progressValue = ((currentIndex + 1) / examQuestions.length) * 100;
    const isLowTime = timeLeft < 300; // Less than 5 minutes

    return (
      <div className="min-h-screen pb-24 safe-area-top">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <Button variant="ghost" size="icon" onClick={handleExit}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${isLowTime ? 'bg-destructive/10 text-destructive' : 'bg-secondary'}`}>
              <Clock className="h-4 w-4" />
              <span className="font-mono font-semibold">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-sm font-medium">
              {currentIndex + 1}/{examQuestions.length}
            </div>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>

        {/* Question - Custom exam rendering to use shuffled options */}
        <div className="p-5 max-w-2xl mx-auto">
          <Card className="border-0 shadow-card overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-display font-bold leading-snug mb-6">
                {settings.language === 'de' ? currentExamQ.question.text_de : currentExamQ.question.text_en}
              </h2>

              <div className="space-y-3">
                {currentExamQ.shuffledOptions.map((option, index) => {
                  const isSelected = answers[currentIndex] === index;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className={`w-full min-h-[60px] h-auto p-4 text-left justify-start font-medium text-base transition-all duration-200 rounded-xl border-2 animate-pop flex items-center gap-3 ${
                        isSelected 
                          ? "bg-primary/10 border-primary shadow-sm" 
                          : "bg-card border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                      onClick={() => handleSelectAnswer(index)}
                    >
                      <span className={`inline-flex items-center justify-center rounded-lg text-sm font-bold shrink-0 w-8 h-8 ${
                        isSelected 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-left font-medium flex-1 whitespace-normal break-words">
                        {settings.language === 'de' ? option.de : option.en}
                      </span>
                    </Button>
                  );
                })}
              </div>

              {currentExamQ.question.isStateSpecific && (
                <div className="mt-5 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-pulse-soft"></span>
                    <span className="font-medium">
                      {t(`Landesspezifisch: ${currentExamQ.question.state}`, `State-specific: ${currentExamQ.question.state}`)}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-6">
            <Button 
              className="w-full h-12 text-base font-semibold"
              onClick={handleNext}
              disabled={answers[currentIndex] === undefined}
            >
              {isLastQuestion ? t('Prüfung abgeben', 'Submit Exam') : t('Weiter', 'Next')}
              <ChevronRight className="h-5 w-5 ml-1" />
            </Button>
          </div>
        </div>

        {/* Exit Dialog */}
        <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t('Prüfung abbrechen?', 'Quit exam?')}</AlertDialogTitle>
              <AlertDialogDescription>
                {t(
                  'Dein Fortschritt geht verloren. Bist du sicher?',
                  'Your progress will be lost. Are you sure?'
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t('Weitermachen', 'Continue')}</AlertDialogCancel>
              <AlertDialogAction onClick={confirmExit}>
                {t('Abbrechen', 'Quit')}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  }

  // Results Screen
  if (examState === 'results') {
    return (
      <div className="min-h-screen pb-24 safe-area-top">
        <div className="max-w-2xl mx-auto">
          <div className="px-5 pt-10 pb-6 text-center">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${passed ? 'bg-success/10' : 'bg-destructive/10'}`}>
              {passed ? (
                <Trophy className="h-10 w-10 text-success" />
              ) : (
                <XCircle className="h-10 w-10 text-destructive" />
              )}
            </div>
            <h1 className={`text-3xl font-bold mb-2 ${passed ? 'text-success' : 'text-destructive'}`}>
              {passed ? t('Bestanden!', 'Passed!') : t('Nicht bestanden', 'Not Passed')}
            </h1>
            <p className="text-muted-foreground">
              {t('Du hast', 'You scored')} <strong>{score}</strong> {t('von', 'out of')} <strong>{examQuestions.length}</strong> {t('Punkten erreicht', 'points')}
            </p>
          </div>

        <div className="px-5 space-y-4">
          <Card>
            <CardContent className="p-5">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">{score}</p>
                  <p className="text-sm text-muted-foreground">{t('Richtig', 'Correct')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-destructive">{examQuestions.length - score}</p>
                  <p className="text-sm text-muted-foreground">{t('Falsch', 'Wrong')}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  {t('Benötigt zum Bestehen:', 'Required to pass:')} <strong>{PASSING_SCORE}</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <Button 
            className="w-full h-12 text-base font-semibold"
            onClick={startExam}
          >
            {t('Neue Prüfung starten', 'Start New Exam')}
          </Button>


          <Button 
            variant="outline"
            className="w-full h-12 text-base"
            onClick={() => setExamState('intro')}
          >
            {t('Zurück zur Übersicht', 'Back to Overview')}
          </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
