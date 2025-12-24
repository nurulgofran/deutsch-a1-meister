import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, AlertTriangle, Trophy, XCircle, ChevronRight, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuestionCard } from '@/components/QuestionCard';
import { AdSpace } from '@/components/AdSpace';
import { useApp } from '@/contexts/AppContext';
import { questions } from '@/data/questions';
import { cn } from '@/lib/utils';
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

    const shuffledGeneral = [...generalQuestions].sort(() => Math.random() - 0.5);
    const shuffledState = [...stateQuestions].sort(() => Math.random() - 0.5);

    const selectedGeneral = shuffledGeneral.slice(0, Math.min(30, shuffledGeneral.length));
    const selectedState = shuffledState.slice(0, Math.min(3, shuffledState.length));

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
      <div className="min-h-screen pb-28 safe-area-top">
        <div className="px-5 pt-8 pb-5">
          <h1 className="text-3xl font-display font-bold tracking-tight mb-2">
            {t('Prüfungssimulation', 'Exam Simulation')}
          </h1>
          <p className="text-muted-foreground font-medium">
            {t('Teste dein Wissen unter echten Bedingungen', 'Test your knowledge under real conditions')}
          </p>
        </div>

        <div className="px-5 space-y-4 stagger-children">
          <div className="card-floating p-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                <Clock className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">{t('60 Minuten', '60 Minutes')}</p>
                <p className="text-sm text-muted-foreground font-medium">{t('Zeitlimit', 'Time limit')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                <Trophy className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">{t('33 Fragen', '33 Questions')}</p>
                <p className="text-sm text-muted-foreground font-medium">
                  {t('30 allgemein + 3 landesspezifisch', '30 general + 3 state-specific')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-success/15 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">{t('17 richtige zum Bestehen', '17 correct to pass')}</p>
                <p className="text-sm text-muted-foreground font-medium">{t('Mindestpunktzahl', 'Minimum score')}</p>
              </div>
            </div>
          </div>

          <div className="card-floating p-4 bg-muted/50">
            <p className="text-sm text-muted-foreground font-medium">
              {t('Dein ausgewähltes Bundesland: ', 'Your selected state: ')}
              <strong className="text-foreground">{settings.bundesland}</strong>
            </p>
          </div>

          <Button 
            className={cn(
              "w-full h-16 text-lg font-display font-bold rounded-2xl",
              "btn-3d bg-primary hover:bg-primary"
            )}
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
    const isLowTime = timeLeft < 300;

    return (
      <div className="min-h-screen pb-28 safe-area-top">
        {/* Header */}
        <div className="sticky top-0 z-10 glass border-b border-border/50 px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <Button variant="ghost" size="icon" onClick={handleExit} className="rounded-xl">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className={cn(
              "flex items-center gap-1.5 px-4 py-2 rounded-full font-display font-bold",
              isLowTime ? "bg-destructive/15 text-destructive" : "bg-secondary text-secondary-foreground"
            )}>
              <Clock className="h-4 w-4" />
              <span className="font-mono">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-sm font-display font-bold bg-muted px-3 py-1.5 rounded-full">
              {currentIndex + 1}/{examQuestions.length}
            </div>
          </div>
          
          {/* Chunky progress bar */}
          <div className="progress-chunky">
            <div 
              className="progress-chunky-fill"
              style={{ width: `${progressValue}%` }}
            />
          </div>
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
              className={cn(
                "w-full h-14 text-base font-display font-bold rounded-xl",
                "btn-3d bg-primary hover:bg-primary"
              )}
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
          <AlertDialogContent className="rounded-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-display">{t('Prüfung abbrechen?', 'Quit exam?')}</AlertDialogTitle>
              <AlertDialogDescription>
                {t('Dein Fortschritt geht verloren. Bist du sicher?', 'Your progress will be lost. Are you sure?')}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="rounded-xl">{t('Weitermachen', 'Continue')}</AlertDialogCancel>
              <AlertDialogAction onClick={confirmExit} className="rounded-xl">
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
      <div className="min-h-screen pb-28 safe-area-top">
        <div className="px-5 pt-12 pb-6 text-center stagger-children">
          <div className={cn(
            "w-24 h-24 mx-auto mb-5 rounded-3xl flex items-center justify-center",
            passed ? "bg-success/15" : "bg-destructive/15",
            "animate-bounce-in"
          )}>
            {passed ? (
              <Trophy className="h-12 w-12 text-success" />
            ) : (
              <XCircle className="h-12 w-12 text-destructive" />
            )}
          </div>
          <h1 className={cn(
            "text-4xl font-display font-bold mb-2",
            passed ? "text-success" : "text-destructive"
          )}>
            {passed ? t('Bestanden!', 'Passed!') : t('Nicht bestanden', 'Not Passed')}
          </h1>
          <p className="text-muted-foreground font-medium text-lg">
            {t('Du hast', 'You scored')} <strong className="text-foreground">{score}</strong> {t('von', 'out of')} <strong className="text-foreground">{examQuestions.length}</strong> {t('Punkten erreicht', 'points')}
          </p>
        </div>

        <div className="px-5 space-y-4">
          <div className="card-floating p-6">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-4xl font-display font-bold text-success">{score}</p>
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{t('Richtig', 'Correct')}</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-destructive">{examQuestions.length - score}</p>
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{t('Falsch', 'Wrong')}</p>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-border text-center">
              <p className="text-sm text-muted-foreground font-medium">
                {t('Benötigt zum Bestehen:', 'Required to pass:')} <strong className="text-foreground">{PASSING_SCORE}</strong>
              </p>
            </div>
          </div>

          <Button 
            className={cn(
              "w-full h-14 text-base font-display font-bold rounded-xl",
              "btn-3d bg-primary hover:bg-primary"
            )}
            onClick={startExam}
          >
            {t('Neue Prüfung starten', 'Start New Exam')}
          </Button>

          <Button 
            variant="outline"
            className="w-full h-14 text-base font-display font-semibold rounded-xl"
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
