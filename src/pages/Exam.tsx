import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, AlertTriangle, Trophy, XCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QuestionCard } from '@/components/QuestionCard';
import { AdSpace } from '@/components/AdSpace';
import { useApp } from '@/contexts/AppContext';
import { questions } from '@/data/questions';
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

export default function Exam() {
  const navigate = useNavigate();
  const { settings, recordExamResult, t } = useApp();
  
  const [examState, setExamState] = useState<ExamState>('intro');
  const [examQuestions, setExamQuestions] = useState<typeof questions>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [startTime, setStartTime] = useState(0);

  // Generate exam questions
  const generateExam = useCallback(() => {
    const generalQuestions = questions.filter(q => !q.isStateSpecific);
    const stateQuestions = questions.filter(
      q => q.isStateSpecific && q.state === settings.bundesland
    );

    // Shuffle and select
    const shuffledGeneral = [...generalQuestions].sort(() => Math.random() - 0.5);
    const shuffledState = [...stateQuestions].sort(() => Math.random() - 0.5);

    const selectedGeneral = shuffledGeneral.slice(0, Math.min(30, shuffledGeneral.length));
    const selectedState = shuffledState.slice(0, Math.min(3, shuffledState.length));

    // Fill remaining with general if not enough state questions
    const remaining = TOTAL_QUESTIONS - selectedGeneral.length - selectedState.length;
    const extraGeneral = shuffledGeneral.slice(selectedGeneral.length, selectedGeneral.length + remaining);

    setExamQuestions([...selectedGeneral, ...selectedState, ...extraGeneral].slice(0, TOTAL_QUESTIONS));
  }, [settings.bundesland]);

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
    setExamState('active');
  };

  const finishExam = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const score = Object.entries(answers).reduce((acc, [index, answer]) => {
      const question = examQuestions[parseInt(index)];
      return acc + (question && answer === question.correctIndex ? 1 : 0);
    }, 0);

    recordExamResult({
      date: new Date().toISOString(),
      score,
      total: examQuestions.length,
      passed: score >= PASSING_SCORE,
      timeSpent
    });

    setExamState('results');
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

  // Results calculation
  const score = Object.entries(answers).reduce((acc, [index, answer]) => {
    const question = examQuestions[parseInt(index)];
    return acc + (question && answer === question.correctIndex ? 1 : 0);
  }, 0);
  const passed = score >= PASSING_SCORE;

  // Intro Screen
  if (examState === 'intro') {
    return (
      <div className="min-h-screen pb-24 safe-area-top">
        <div className="px-5 pt-6 pb-4">
          <h1 className="text-2xl font-bold mb-1">
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
    );
  }

  // Active Exam Screen
  if (examState === 'active' && examQuestions[currentIndex]) {
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

        {/* Question */}
        <div className="p-5">
          <QuestionCard
            key={examQuestions[currentIndex].id}
            question={examQuestions[currentIndex]}
            showFeedback={false}
            selectedAnswer={answers[currentIndex] ?? null}
            onSelectAnswer={handleSelectAnswer}
            showBookmark={false}
          />

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

          <AdSpace className="mt-6" />
        </div>
      </div>
    );
  }

  return null;
}
