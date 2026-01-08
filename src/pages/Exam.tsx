import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Clock, Trophy, Headphones, BookOpen, PenLine, Lock, 
  ArrowLeft, Play, Check, X, Volume2, ChevronRight, Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useApp } from '@/contexts/AppContext';
import { useAds } from '@/contexts/AdContext';
import { cn } from '@/lib/utils';
import { 
  listeningQuestions, 
  readingQuestions, 
  writingQuestions,
  EXAM_CONFIG,
  ListeningQuestion,
  ReadingQuestion,
  WritingQuestion
} from '@/data/exam';

type ExamState = 'intro' | 'listening' | 'reading' | 'writing' | 'results';

interface ExamAnswers {
  listening: Record<string, number | boolean>;
  reading: Record<string, number | boolean>;
  writing: Record<string, string>;
}

export default function Exam() {
  const navigate = useNavigate();
  const { t, language } = useApp();
  const { isPro } = useAds();

  const [examState, setExamState] = useState<ExamState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_CONFIG.totalDuration);
  const [answers, setAnswers] = useState<ExamAnswers>({
    listening: {},
    reading: {},
    writing: {}
  });
  const [startTime, setStartTime] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Timer
  useEffect(() => {
    if (examState === 'intro' || examState === 'results') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const playAudio = (text: string) => {
    if (isPlayingAudio) return;
    
    setIsPlayingAudio(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.8;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    speechSynthesis.speak(utterance);
  };

  const startExam = () => {
    setExamState('listening');
    setCurrentQuestionIndex(0);
    setTimeLeft(EXAM_CONFIG.totalDuration);
    setStartTime(Date.now());
    setAnswers({ listening: {}, reading: {}, writing: {} });
  };

  const handleNextSection = () => {
    if (examState === 'listening') {
      setExamState('reading');
      setCurrentQuestionIndex(0);
    } else if (examState === 'reading') {
      setExamState('writing');
      setCurrentQuestionIndex(0);
    } else if (examState === 'writing') {
      handleFinishExam();
    }
  };

  const handleNextQuestion = () => {
    const questions = getCurrentQuestions();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleNextSection();
    }
  };

  const handleFinishExam = () => {
    setExamState('results');
  };

  const getCurrentQuestions = () => {
    switch (examState) {
      case 'listening': return listeningQuestions;
      case 'reading': return readingQuestions;
      case 'writing': return writingQuestions;
      default: return [];
    }
  };

  const setAnswer = (section: keyof ExamAnswers, questionId: string, value: number | boolean | string) => {
    setAnswers(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [questionId]: value
      }
    }));
  };

  // Calculate scores
  const calculateScores = () => {
    let listeningScore = 0;
    let readingScore = 0;
    let writingScore = 0;

    // Listening
    listeningQuestions.forEach(q => {
      if (answers.listening[q.id] === q.correctAnswer) {
        listeningScore += q.points;
      }
    });

    // Reading
    readingQuestions.forEach(q => {
      if (answers.reading[q.id] === q.correctAnswer) {
        readingScore += q.points;
      }
    });

    // Writing - simplified scoring (check if form is filled / message has content)
    writingQuestions.forEach(q => {
      const answer = answers.writing[q.id];
      if (answer && answer.length > 10) {
        writingScore += q.points * 0.7; // Give 70% for any reasonable attempt
      }
    });

    const totalScore = Math.round(listeningScore + readingScore + writingScore);
    const passed = totalScore >= EXAM_CONFIG.passingScore;

    return { listeningScore, readingScore, writingScore, totalScore, passed };
  };

  // Intro Screen
  if (examState === 'intro') {
    const examSections = [
      { icon: Headphones, title: 'Hören (Listening)', duration: '20 min', points: 25, color: 'blue' },
      { icon: BookOpen, title: 'Lesen (Reading)', duration: '25 min', points: 25, color: 'emerald' },
      { icon: PenLine, title: 'Schreiben (Writing)', duration: '20 min', points: 25, color: 'purple' }
    ];

    const colorClasses: Record<string, { bg: string; text: string }> = {
      blue: { bg: 'bg-blue-500/15', text: 'text-blue-600' },
      emerald: { bg: 'bg-emerald-500/15', text: 'text-emerald-600' },
      purple: { bg: 'bg-purple-500/15', text: 'text-purple-600' }
    };

    return (
      <div className="min-h-screen pb-24 safe-area-top">
        <div className="px-5 pt-6 pb-4">
          <h1 className="text-2xl font-bold mb-1">{t('exam.title')}</h1>
          <p className="text-muted-foreground">{t('exam.subtitle')}</p>
        </div>

        <div className="px-5 space-y-4">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
            <CardContent className="p-5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Start Deutsch 1</h2>
                  <p className="text-sm text-muted-foreground">Goethe-Zertifikat A1</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-card rounded-xl">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Duration</span>
                  </div>
                  <p className="text-lg font-bold mt-1">{t('exam.duration')}</p>
                </div>
                <div className="p-3 bg-card rounded-xl">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Pass Score</span>
                  </div>
                  <p className="text-lg font-bold mt-1">60% (45/75)</p>
                </div>
              </div>

              {!isPro && (
                <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 mb-4">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium text-amber-700">
                      Premium feature - Upgrade to unlock
                    </span>
                  </div>
                </div>
              )}

              <Button 
                className="w-full h-12 font-bold"
                disabled={!isPro}
                onClick={startExam}
              >
                <Play className="w-5 h-5 mr-2" />
                {isPro ? t('exam.startExam') : 'Upgrade to Pro'}
              </Button>
            </CardContent>
          </Card>

          <h3 className="text-lg font-bold mt-6">{t('exam.sections')}</h3>
          
          <div className="space-y-3">
            {examSections.map((section, index) => {
              const Icon = section.icon;
              const colors = colorClasses[section.color];
              
              return (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{section.title}</h4>
                      <p className="text-sm text-muted-foreground">{section.duration} • {section.points} points</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Listening Section
  if (examState === 'listening') {
    const question = listeningQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / listeningQuestions.length) * 100;
    const currentAnswer = answers.listening[question.id];

    return (
      <div className="min-h-screen pb-6 safe-area-top">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">{t('exam.listening')}</span>
            </div>
            <div className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-full",
              timeLeft < 300 ? "bg-red-500/10 text-red-600" : "bg-secondary"
            )}>
              <Clock className="h-4 w-4" />
              <span className="font-mono font-semibold">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-sm font-medium">
              {currentQuestionIndex + 1}/{listeningQuestions.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="p-5 space-y-6">
          {/* Audio Player */}
          <Card className="bg-blue-500/5 border-blue-500/20">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-3">
                Listen to the audio and answer the question
              </p>
              <Button
                onClick={() => playAudio(question.audioText)}
                disabled={isPlayingAudio}
                className="w-full h-14"
                variant="outline"
              >
                {isPlayingAudio ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Volume2 className="w-5 h-5 mr-2" />
                )}
                {isPlayingAudio ? 'Playing...' : 'Play Audio'}
              </Button>
            </CardContent>
          </Card>

          {/* Question */}
          <Card>
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold mb-4">
                {question.question[language]}
              </h3>

              {question.type === 'multiple-choice' && question.options && (
                <div className="space-y-3">
                  {question.options[language].map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={cn(
                        "w-full h-auto p-4 text-left justify-start",
                        currentAnswer === index && "bg-primary/10 border-primary"
                      )}
                      onClick={() => setAnswer('listening', question.id, index)}
                    >
                      <span className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold",
                        currentAnswer === index ? "bg-primary text-white" : "bg-muted"
                      )}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </Button>
                  ))}
                </div>
              )}

              {question.type === 'true-false' && (
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className={cn(
                      "flex-1 h-14",
                      currentAnswer === true && "bg-emerald-500/10 border-emerald-500"
                    )}
                    onClick={() => setAnswer('listening', question.id, true)}
                  >
                    <Check className="w-5 h-5 mr-2" />
                    True
                  </Button>
                  <Button
                    variant="outline"
                    className={cn(
                      "flex-1 h-14",
                      currentAnswer === false && "bg-red-500/10 border-red-500"
                    )}
                    onClick={() => setAnswer('listening', question.id, false)}
                  >
                    <X className="w-5 h-5 mr-2" />
                    False
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Button
            className="w-full h-12 font-bold"
            onClick={handleNextQuestion}
            disabled={currentAnswer === undefined}
          >
            {currentQuestionIndex < listeningQuestions.length - 1 ? 'Next Question' : 'Continue to Reading'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Reading Section
  if (examState === 'reading') {
    const question = readingQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / readingQuestions.length) * 100;
    const currentAnswer = answers.reading[question.id];

    return (
      <div className="min-h-screen pb-6 safe-area-top">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold">{t('exam.reading')}</span>
            </div>
            <div className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-full",
              timeLeft < 300 ? "bg-red-500/10 text-red-600" : "bg-secondary"
            )}>
              <Clock className="h-4 w-4" />
              <span className="font-mono font-semibold">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-sm font-medium">
              {currentQuestionIndex + 1}/{readingQuestions.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="p-5 space-y-6">
          {/* Text to Read */}
          <Card className="bg-emerald-500/5 border-emerald-500/20">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-2">Read the text:</p>
              <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed">
                {question.text}
              </pre>
            </CardContent>
          </Card>

          {/* Question */}
          <Card>
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold mb-4">
                {question.question[language]}
              </h3>

              {question.type === 'multiple-choice' && question.options && (
                <div className="space-y-3">
                  {question.options[language].map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={cn(
                        "w-full h-auto p-4 text-left justify-start",
                        currentAnswer === index && "bg-primary/10 border-primary"
                      )}
                      onClick={() => setAnswer('reading', question.id, index)}
                    >
                      <span className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold",
                        currentAnswer === index ? "bg-primary text-white" : "bg-muted"
                      )}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </Button>
                  ))}
                </div>
              )}

              {question.type === 'true-false' && (
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className={cn(
                      "flex-1 h-14",
                      currentAnswer === true && "bg-emerald-500/10 border-emerald-500"
                    )}
                    onClick={() => setAnswer('reading', question.id, true)}
                  >
                    <Check className="w-5 h-5 mr-2" />
                    True
                  </Button>
                  <Button
                    variant="outline"
                    className={cn(
                      "flex-1 h-14",
                      currentAnswer === false && "bg-red-500/10 border-red-500"
                    )}
                    onClick={() => setAnswer('reading', question.id, false)}
                  >
                    <X className="w-5 h-5 mr-2" />
                    False
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Button
            className="w-full h-12 font-bold"
            onClick={handleNextQuestion}
            disabled={currentAnswer === undefined}
          >
            {currentQuestionIndex < readingQuestions.length - 1 ? 'Next Question' : 'Continue to Writing'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Writing Section
  if (examState === 'writing') {
    const question = writingQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / writingQuestions.length) * 100;

    return (
      <div className="min-h-screen pb-6 safe-area-top">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <PenLine className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">{t('exam.writing')}</span>
            </div>
            <div className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-full",
              timeLeft < 300 ? "bg-red-500/10 text-red-600" : "bg-secondary"
            )}>
              <Clock className="h-4 w-4" />
              <span className="font-mono font-semibold">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-sm font-medium">
              {currentQuestionIndex + 1}/{writingQuestions.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="p-5 space-y-6">
          {/* Prompt */}
          <Card className="bg-purple-500/5 border-purple-500/20">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-2">Task:</p>
              <p className="whitespace-pre-line">{question.prompt[language]}</p>
            </CardContent>
          </Card>

          {/* Form Type */}
          {question.type === 'form' && question.fields && (
            <Card>
              <CardContent className="p-5 space-y-4">
                {question.fields.map((field) => (
                  <div key={field.id}>
                    <Label className="text-sm font-medium mb-2 block">
                      {field.label[language]}
                    </Label>
                    <Input
                      placeholder={field.placeholder}
                      value={(answers.writing[`${question.id}_${field.id}`] as string) || ''}
                      onChange={(e) => setAnswer('writing', `${question.id}_${field.id}`, e.target.value)}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Message Type */}
          {question.type === 'message' && (
            <Card>
              <CardContent className="p-5">
                <Label className="text-sm font-medium mb-2 block">
                  Your message (in German):
                </Label>
                <Textarea
                  placeholder="Schreiben Sie hier..."
                  className="min-h-[150px]"
                  value={(answers.writing[question.id] as string) || ''}
                  onChange={(e) => setAnswer('writing', question.id, e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Write approximately 30 words
                </p>
              </CardContent>
            </Card>
          )}

          <Button
            className="w-full h-12 font-bold"
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex < writingQuestions.length - 1 ? 'Next Task' : 'Finish Exam'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Results Screen
  if (examState === 'results') {
    const scores = calculateScores();
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    return (
      <div className="min-h-screen pb-24 safe-area-top">
        <div className="px-5 pt-10 pb-6 text-center">
          <div className={cn(
            "w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center",
            scores.passed ? "bg-emerald-500" : "bg-amber-500"
          )}>
            <Trophy className="w-12 h-12 text-white" />
          </div>
          
          <h1 className={cn(
            "text-3xl font-bold mb-2",
            scores.passed ? "text-emerald-600" : "text-amber-600"
          )}>
            {scores.passed ? t('exam.passed') : t('exam.failed')}
          </h1>
          
          <p className="text-5xl font-bold text-primary mb-2">
            {scores.totalScore}/{EXAM_CONFIG.maxScore}
          </p>
          <p className="text-muted-foreground">
            {Math.round((scores.totalScore / EXAM_CONFIG.maxScore) * 100)}% correct
          </p>
        </div>

        <div className="px-5 space-y-4">
          {/* Section Breakdown */}
          <Card>
            <CardContent className="p-5 space-y-4">
              <h3 className="font-semibold">Score Breakdown</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-blue-600" />
                    <span>Listening</span>
                  </div>
                  <span className="font-bold">{scores.listeningScore}/25</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    <span>Reading</span>
                  </div>
                  <span className="font-bold">{scores.readingScore}/25</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PenLine className="w-4 h-4 text-purple-600" />
                    <span>Writing</span>
                  </div>
                  <span className="font-bold">{Math.round(scores.writingScore)}/25</span>
                </div>
              </div>

              <div className="pt-3 border-t">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Time spent:</span>
                  <span>{formatTime(timeSpent)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Pass score:</span>
                  <span>{EXAM_CONFIG.passingScore}/75 (60%)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full h-12 font-bold" onClick={startExam}>
            {t('exam.tryAgain')}
          </Button>

          <Button 
            variant="outline" 
            className="w-full h-12"
            onClick={() => setExamState('intro')}
          >
            Back to Overview
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
