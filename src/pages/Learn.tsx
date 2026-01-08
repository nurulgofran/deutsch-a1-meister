import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Flashcard } from '@/components/Flashcard';
import { useApp } from '@/contexts/AppContext';
import { getVocabByLesson, LessonId, lessons } from '@/data';
import { cn } from '@/lib/utils';

type LessonMode = 'flashcard' | 'quiz' | 'complete';

export default function Learn() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { t, recordCorrectAnswer, recordIncorrectAnswer, completeLesson } = useApp();
  
  const [mode, setMode] = useState<LessonMode>('flashcard');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const vocab = getVocabByLesson(lessonId as LessonId);
  const lesson = lessons.find(l => l.id === lessonId);
  const currentWord = vocab[currentIndex];
  const totalWords = vocab.length;
  const progress = totalWords > 0 ? ((currentIndex + 1) / totalWords) * 100 : 0;

  useEffect(() => {
    // Reset when lesson changes
    setMode('flashcard');
    setCurrentIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
  }, [lessonId]);

  const handleCorrect = () => {
    setCorrectCount(c => c + 1);
    recordCorrectAnswer(lessonId as LessonId, currentWord.id);
    
    setTimeout(() => {
      if (currentIndex < totalWords - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        handleLessonComplete();
      }
    }, 500);
  };

  const handleIncorrect = () => {
    setIncorrectCount(c => c + 1);
    recordIncorrectAnswer(lessonId as LessonId);
    
    setTimeout(() => {
      if (currentIndex < totalWords - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        handleLessonComplete();
      }
    }, 500);
  };

  const handleLessonComplete = () => {
    const accuracy = totalWords > 0 ? (correctCount / totalWords) * 100 : 0;
    if (accuracy >= 80) {
      completeLesson(lessonId as LessonId);
    }
    setMode('complete');
  };

  const handleRestart = () => {
    setMode('flashcard');
    setCurrentIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
  };

  if (!lesson || vocab.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-5">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Lesson not found</h2>
          <p className="text-muted-foreground mb-4">This lesson doesn't have any content yet.</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  // Completion screen
  if (mode === 'complete') {
    const accuracy = totalWords > 0 ? Math.round((correctCount / totalWords) * 100) : 0;
    const passed = accuracy >= 80;
    
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-5 safe-area-top">
        <div className={cn(
          "w-24 h-24 rounded-full flex items-center justify-center mb-6",
          passed ? "bg-emerald-500" : "bg-amber-500"
        )}>
          <Trophy className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">
          {passed ? "Lesson Complete! 🎉" : "Keep Practicing!"}
        </h1>
        
        <p className="text-muted-foreground mb-6 text-center">
          {passed 
            ? t('learningPath.completed')
            : "You need 80% accuracy to complete this lesson."
          }
        </p>

        <div className="grid grid-cols-2 gap-4 w-full max-w-xs mb-8">
          <div className="p-4 bg-emerald-500/10 rounded-xl text-center">
            <p className="text-3xl font-bold text-emerald-600">{correctCount}</p>
            <p className="text-sm text-muted-foreground">Correct</p>
          </div>
          <div className="p-4 bg-red-500/10 rounded-xl text-center">
            <p className="text-3xl font-bold text-red-600">{incorrectCount}</p>
            <p className="text-sm text-muted-foreground">Incorrect</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-5xl font-bold text-primary">{accuracy}%</p>
          <p className="text-sm text-muted-foreground">Accuracy</p>
        </div>

        <div className="flex gap-4 w-full max-w-xs">
          <Button variant="outline" className="flex-1" onClick={handleRestart}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Retry
          </Button>
          <Button className="flex-1" onClick={() => navigate('/')}>
            Continue
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 safe-area-top">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-5 py-4 border-b">
        <div className="flex items-center gap-3 mb-3">
          <button 
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold">{t(`lessons.${lessonId}`)}</h1>
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} / {totalWords}
            </p>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Content */}
      <div className="p-5">
        {mode === 'flashcard' && currentWord && (
          <Flashcard
            word={currentWord}
            onCorrect={handleCorrect}
            onIncorrect={handleIncorrect}
          />
        )}
      </div>
    </div>
  );
}
