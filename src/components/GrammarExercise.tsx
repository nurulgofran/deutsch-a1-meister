import { useState } from 'react';
import { Check, X, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useApp } from '@/contexts/AppContext';
import { GrammarExercise as IGrammarExercise, GrammarPattern } from '@/data/types';
import { cn } from '@/lib/utils';
import { useHaptics } from '@/hooks/useHaptics';

interface GrammarExerciseProps {
  pattern: GrammarPattern;
  onComplete: (score: number) => void;
  onExit: () => void;
}

export function GrammarExercise({ pattern, onComplete, onExit }: GrammarExerciseProps) {
  const { t, settings } = useApp();
  const { impact, selection, notification, NotificationType, ImpactStyle } = useHaptics();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [builtSentence, setBuiltSentence] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentExercise = pattern.exercises[currentIndex];
  // Safe progress calculation
  const progress = pattern.exercises.length > 0 ? ((currentIndex) / pattern.exercises.length) * 100 : 0;
  
  // Translation based on current language
  const getTranslation = (obj: Record<string, string>) => {
    return obj[settings.language] || obj['en'] || '';
  };

  const handleOptionSelect = (option: string) => {
    if (isChecked) return;
    selection();
    setSelectedOption(option);
  };

  const handleWordSelect = (word: string) => {
    if (isChecked) return;
    selection();
    if (!builtSentence.includes(word)) {
      setBuiltSentence([...builtSentence, word]);
    } else {
      setBuiltSentence(builtSentence.filter(w => w !== word));
    }
  };
  
  const removeFromSentence = (word: string) => {
    if (isChecked) return;
    selection();
    setBuiltSentence(builtSentence.filter(w => w !== word));
  };

  const checkAnswer = () => {
    if ((!selectedOption && currentExercise.type !== 'sentence-builder') || 
        (builtSentence.length === 0 && currentExercise.type === 'sentence-builder')) return;

    impact(ImpactStyle.Medium);
    
    let correct = false;
    
    if (currentExercise.type === 'sentence-builder') {
      const userAnswer = builtSentence.join(' ');
      correct = currentExercise.correctAnswer[0] === userAnswer; // Simplified check
      // Allow for checking if word is contained in correct answer for simple builder
      if (!correct && currentExercise.correctAnswer.length === 1 && currentExercise.correctAnswer[0].split(' ').length === 1) {
          correct = builtSentence[0] === currentExercise.correctAnswer[0];
      }
    } else {
      correct = currentExercise.correctAnswer.includes(selectedOption || '');
    }

    setIsCorrect(correct);
    setIsChecked(true);
    
    if (correct) {
      setScore(s => s + 1);
      notification(NotificationType.Success);
    } else {
      notification(NotificationType.Error);
    }
  };

  const handleNext = () => {
    if (currentIndex < pattern.exercises.length - 1) {
      setCurrentIndex(c => c + 1);
      resetState();
    } else {
      onComplete(score + (isCorrect ? 1 : 0));
    }
  };

  const resetState = () => {
    setSelectedOption(null);
    setBuiltSentence([]);
    setIsChecked(false);
    setIsCorrect(false);
    setShowExplanation(false);
  };

  return (
    <div className="min-h-screen pb-safe flex flex-col pt-safe bg-background">
      {/* Header */}
      <div className="px-5 py-4 border-b flex items-center gap-4 bg-card z-10 sticky top-0">
        <Button variant="ghost" size="icon" onClick={onExit} className="shrink-0">
          <X className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>{t(pattern.titleKey)}</span>
            <span>{currentIndex + 1} / {pattern.exercises.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Prompt */}
            <div className="space-y-2">
              <h2 className="text-xl font-bold leading-relaxed">
                {currentExercise.prompt.german.split('___').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="inline-block w-16 border-b-2 border-primary mx-1 relative top-1" />
                    )}
                  </span>
                ))}
              </h2>
              <p className="text-muted-foreground text-lg">
                {getTranslation(currentExercise.prompt.translations)}
              </p>
            </div>

            {/* Exercise Content */}
            {currentExercise.type === 'multiple-choice' && (
              <div className="grid gap-3 mt-8">
                {currentExercise.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    disabled={isChecked}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 text-left font-medium transition-all text-lg",
                      selectedOption === option && !isChecked
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20" 
                        : "border-border hover:bg-muted/50",
                      isChecked && currentExercise.correctAnswer.includes(option)
                        ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-500/20 dark:text-green-300"
                        : "",
                      isChecked && selectedOption === option && !currentExercise.correctAnswer.includes(option)
                        ? "border-red-500 bg-red-50 text-red-700 dark:bg-red-500/20 dark:text-red-300"
                        : ""
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            
            {(currentExercise.type === 'sentence-builder' || currentExercise.type === 'fill-blank') && (
              <div className="space-y-6 mt-8">
                {/* Build Area */}
                 <div className="min-h-[80px] p-4 rounded-xl bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex flex-wrap gap-2 items-center">
                    {builtSentence.length === 0 ? (
                      <span className="text-muted-foreground text-sm w-full text-center">
                        {currentExercise.type === 'fill-blank' ? 'Select the correct word' : t('grammar.dragWords')}
                      </span>
                    ) : (
                      builtSentence.map((word, idx) => (
                        <Button
                           key={`${word}-${idx}`}
                           variant="secondary"
                           size="sm"
                           onClick={() => removeFromSentence(word)}
                           className="font-medium"
                           disabled={isChecked}
                        >
                          {word}
                        </Button>
                      ))
                    )}
                 </div>
                 
                 {/* Options Area */}
                 <div className="flex flex-wrap gap-2 justify-center">
                   {currentExercise.options?.map((option) => {
                     const isUsed = builtSentence.includes(option);
                     // For single choice fill-blank, disable others if one is picked (simplified)
                     const isDisabled = isChecked || (currentExercise.type === 'fill-blank' && builtSentence.length > 0 && !isUsed);
                     
                     return (
                        <Button
                          key={option}
                          variant={isUsed ? "ghost" : "outline"}
                          className={cn(
                             "text-base px-6 py-6 h-auto",
                             isUsed && "opacity-50"
                          )}
                          onClick={() => handleWordSelect(option)}
                          disabled={isChecked || (isUsed && currentExercise.type === 'sentence-builder')} // Can't select again if builder logic strict, but simpler is ok
                        >
                          {option}
                        </Button>
                     );
                   })}
                 </div>
              </div>
            )}
            
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <CardFooter className={cn(
        "fixed bottom-0 left-0 right-0 p-5 bg-card border-t shadow-up-lg z-20 transition-colors duration-300 safe-area-bottom",
        isChecked 
          ? (isCorrect ? "bg-green-100 dark:bg-green-950/30 border-green-200 dark:border-green-900" 
                       : "bg-red-100 dark:bg-red-950/30 border-red-200 dark:border-red-900")
          : ""
      )}>
        <div className="w-full space-y-4">
            {isChecked && (
                <div className="flex items-start gap-3">
                    <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                        isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    )}>
                        {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                    </div>
                    <div>
                        <h3 className={cn("font-bold", isCorrect ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400")}>
                            {isCorrect ? t('flashcard.correct') : t('flashcard.incorrect')}
                        </h3>
                        {/* Explanation */}
                        <p className="text-sm mt-1 text-foreground/80">
                           {getTranslation(currentExercise.explanation)}
                        </p>
                    </div>
                </div>
            )}
            
            {!isChecked ? (
                <Button 
                    className="w-full h-12 text-lg font-bold" 
                    size="lg"
                    onClick={checkAnswer}
                    disabled={!selectedOption && builtSentence.length === 0}
                >
                    {t('grammar.checkAnswer')}
                </Button>
            ) : (
                <Button 
                    className={cn(
                        "w-full h-12 text-lg font-bold",
                        isCorrect ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                    )}
                    size="lg"
                    onClick={handleNext}
                >
                    {t('flashcard.next')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            )}
        </div>
      </CardFooter>
    </div>
  );
}
