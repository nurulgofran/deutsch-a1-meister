import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GrammarExercise } from '@/components/GrammarExercise';
import { useApp } from '@/contexts/AppContext';
import { grammarPatterns } from '@/data/grammar';
import { cn } from '@/lib/utils';
import { useAds } from '@/contexts/AdContext';

export default function GrammarLesson() {
  const { patternId } = useParams<{ patternId: string }>();
  const navigate = useNavigate();
  const { t, completeGrammar } = useApp();
  const { showInterstitial, isPro } = useAds();
  
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const pattern = grammarPatterns.find(p => p.id === patternId);

  // If pattern not found
  if (!pattern) {
    return (
      <div className="min-h-screen flex items-center justify-center p-5">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Lesson not found</h2>
          <Button onClick={() => navigate('/grammar')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grammar
          </Button>
        </div>
      </div>
    );
  }

  const handleLessonComplete = async (finalScore: number) => {
    setScore(finalScore);
    setIsCompleted(true);
    completeGrammar(pattern.id);
    
    // Show ad for non-pro users upon completion
    if (!isPro && !pattern.isPremium) {
       await showInterstitial();
    }
  };

  const handleRestart = () => {
    setIsCompleted(false);
    setScore(0);
  };

  if (isCompleted) {
    const accuracy = Math.round((score / pattern.exercises.length) * 100);
    
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-5 safe-area-top">
        <div className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center mb-6 animate-in zoom-in duration-500">
          <Trophy className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2 text-center">
          {t('flashcard.correct')}
        </h1>
        
        <p className="text-muted-foreground mb-6 text-center">
          You've mastered this grammar rule!
        </p>

        <div className="text-center mb-8">
          <p className="text-5xl font-bold text-primary">{accuracy}%</p>
          <p className="text-sm text-muted-foreground">Accuracy</p>
        </div>

        <div className="flex gap-4 w-full max-w-xs">
          <Button variant="outline" className="flex-1" onClick={handleRestart}>
            <RotateCcw className="w-4 h-4 mr-2" />
             Retry
          </Button>
          <Button className="flex-1" onClick={() => navigate('/grammar')}>
            Continue
          </Button>
        </div>
      </div>
    );
  }

  return (
    <GrammarExercise
      pattern={pattern}
      onComplete={handleLessonComplete}
      onExit={() => navigate('/grammar')}
    />
  );
}
