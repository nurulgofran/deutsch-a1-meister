import { useState, useEffect, useMemo } from 'react';
import { Bookmark, BookmarkCheck, Lightbulb, Play, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Question } from '@/data/questions/index';
import { useApp } from '@/contexts/AppContext';
import { useAds } from '@/contexts/AdContext';
import { ProModal } from '@/components/ProModal';
import { cn, shuffleOptionsWithCorrectIndex } from '@/lib/utils';
import { toast } from 'sonner';

interface QuestionCardProps {
  question: Question;
  showFeedback: boolean;
  onAnswer?: (isCorrect: boolean) => void;
  selectedAnswer?: number | null;
  onSelectAnswer?: (index: number) => void;
  showBookmark?: boolean;
}

export function QuestionCard({
  question,
  showFeedback,
  onAnswer,
  selectedAnswer,
  onSelectAnswer,
  showBookmark = true
}: QuestionCardProps) {
  const { settings, progress, toggleBookmark, t } = useApp();
  const { triggerRewardedAd, isPro } = useAds();
  const [localSelected, setLocalSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showProModal, setShowProModal] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [hintIndex, setHintIndex] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Shuffle options once per question to prevent memorization
  const { shuffledOptions, correctIndexShuffled } = useMemo(() => {
    const result = shuffleOptionsWithCorrectIndex(question.options, question.correctIndex);
    return {
      shuffledOptions: result.shuffledOptions,
      correctIndexShuffled: result.newCorrectIndex
    };
  }, [question.id, question.options, question.correctIndex]);

  const selected = selectedAnswer ?? localSelected;
  const isBookmarked = progress.bookmarkedQuestions.includes(question.id);

  useEffect(() => {
    setLocalSelected(null);
    setShowResult(false);
    setHintUsed(false);
    setHintIndex(null);
    setShowExplanation(false);
  }, [question.id]);

  const handleSelect = (index: number) => {
    if (showResult && showFeedback) return;
    
    if (onSelectAnswer) {
      onSelectAnswer(index);
    } else {
      setLocalSelected(index);
    }

    if (showFeedback) {
      setShowResult(true);
      const isCorrect = index === correctIndexShuffled;
      onAnswer?.(isCorrect);
    }
  };

  const handleGetHint = () => {
    if (isPro) {
      // Pro users get hints for free - use shuffled options
      const wrongAnswers = shuffledOptions
        .map((_, index) => index)
        .filter(index => index !== correctIndexShuffled);
      
      if (wrongAnswers.length > 0) {
        const randomWrong = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
        setHintIndex(randomWrong);
        setHintUsed(true);
        toast.success(t('Hinweis: Eine falsche Antwort wurde markiert!', 'Hint: One wrong answer has been marked!'));
      }
    } else {
      // Non-pro users watch an ad - use shuffled options
      triggerRewardedAd(() => {
        const wrongAnswers = shuffledOptions
          .map((_, index) => index)
          .filter(index => index !== correctIndexShuffled);
        
        if (wrongAnswers.length > 0) {
          const randomWrong = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
          setHintIndex(randomWrong);
          setHintUsed(true);
          toast.success(t('Hinweis: Eine falsche Antwort wurde markiert!', 'Hint: One wrong answer has been marked!'));
        }
      });
    }
  };

  const handleShowExplanation = () => {
    if (isPro) {
      setShowExplanation(!showExplanation);
    } else {
      setShowProModal(true);
    }
  };

  const getOptionClasses = (index: number) => {
    const isSelected = selected === index;
    const isCorrect = index === correctIndexShuffled;
    const isHintedWrong = hintIndex === index;
    
    const baseClasses = "w-full min-h-[60px] h-auto p-4 text-left justify-start font-medium text-base transition-all duration-200 rounded-xl border-2 animate-pop flex items-center gap-3";
    
    // Show hint - crossed out wrong answer
    if (isHintedWrong && !showResult) {
      return cn(
        baseClasses,
        "bg-muted/50 border-muted text-muted-foreground opacity-50 line-through cursor-not-allowed"
      );
    }
    
    if (!showResult || !showFeedback) {
      return cn(
        baseClasses,
        isSelected 
          ? "bg-primary/10 border-primary shadow-sm" 
          : "bg-card border-border hover:border-primary/50 hover:bg-primary/5"
      );
    }

    // Show feedback
    if (isCorrect) {
      return cn(
        baseClasses,
        "bg-success/10 border-success text-success",
        isSelected && "animate-success-pulse shadow-lg shadow-success/20"
      );
    }

    if (isSelected && !isCorrect) {
      return cn(
        baseClasses,
        "bg-destructive/10 border-destructive text-destructive animate-shake"
      );
    }

    return cn(baseClasses, "bg-card border-border opacity-40");
  };

  const questionText = settings.language === 'de' ? question.text_de : question.text_en;
  const explanationText = settings.language === 'de' ? question.explanation_de : question.explanation_en;
  const hasExplanation = !!(question.explanation_de || question.explanation_en);

  return (
    <>
      <Card className="border-0 shadow-card animate-slide-up overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-3 mb-6">
            <h2 className="text-xl font-display font-bold leading-snug flex-1">
              {questionText}
            </h2>
            {showBookmark && (
              <button
                onClick={() => toggleBookmark(question.id)}
                className={cn(
                  "p-2.5 -m-2 rounded-xl transition-all duration-200",
                  isBookmarked 
                    ? "text-accent bg-accent/10" 
                    : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                )}
                aria-label={isBookmarked ? t("Lesezeichen entfernen", "Remove bookmark") : t("Lesezeichen hinzufügen", "Add bookmark")}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="h-5 w-5" />
                ) : (
                  <Bookmark className="h-5 w-5" />
                )}
              </button>
            )}
          </div>

          {/* Hint button - show before answering */}
          {showFeedback && !showResult && !hintUsed && (
            <Button
              variant="outline"
              size="sm"
              className="mb-4 gap-2 text-accent border-accent/30 hover:bg-accent/10"
              onClick={handleGetHint}
            >
              <Play className="h-4 w-4" />
              {isPro 
                ? t('Hinweis anzeigen', 'Show hint') 
                : t('Video ansehen für Hinweis', 'Watch video for hint')
              }
            </Button>
          )}

          <div className={cn(
            "space-y-3",
            question.hasImages && "grid grid-cols-2 gap-3 space-y-0"
          )}>
            {shuffledOptions.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={cn(
                  getOptionClasses(index),
                  question.hasImages && "flex-col h-auto py-3"
                )}
                onClick={() => handleSelect(index)}
                disabled={(showResult && showFeedback) || hintIndex === index}
              >
                {question.hasImages && option.image && (
                  <img 
                    src={option.image} 
                    alt={settings.language === 'de' ? option.de : option.en}
                    className="w-16 h-16 object-contain mb-2"
                  />
                )}
                <span className={cn(
                  "inline-flex items-center justify-center rounded-lg text-sm font-bold shrink-0 transition-colors",
                  question.hasImages ? "w-6 h-6" : "w-8 h-8",
                  selected === index 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground",
                  hintIndex === index && "line-through"
                )}>
                  {String.fromCharCode(65 + index)}
                </span>
                {!question.hasImages && (
                  <span className={cn(
                    "text-left font-medium flex-1 whitespace-normal break-words",
                    hintIndex === index && "line-through"
                  )}>
                    {settings.language === 'de' ? option.de : option.en}
                  </span>
                )}
              </Button>
            ))}
          </div>

          {/* Show explanation button after answering */}
          {showResult && showFeedback && (
            <div className="mt-4 space-y-3">
              <Button
                variant="ghost"
                className={cn(
                  "w-full h-12 gap-2",
                  isPro 
                    ? "text-primary hover:bg-primary/10" 
                    : "text-muted-foreground hover:text-primary"
                )}
                onClick={handleShowExplanation}
              >
                {isPro ? (
                  showExplanation ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <Lightbulb className="h-5 w-5" />
                  )
                ) : (
                  <Lock className="h-5 w-5" />
                )}
                {isPro
                  ? (showExplanation 
                      ? t('Erklärung ausblenden', 'Hide explanation') 
                      : t('Erklärung anzeigen', 'Show explanation'))
                  : t('Erklärung anzeigen (Pro)', 'Show explanation (Pro)')
                }
              </Button>

              {/* Explanation content for Pro users */}
              {isPro && showExplanation && (
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 animate-fade-in">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-sm mb-1 text-primary">
                        {t('Erklärung', 'Explanation')}
                      </h4>
                      <p className="text-sm text-foreground leading-relaxed">
                        {hasExplanation 
                          ? explanationText 
                          : t(
                              'Erklärung wird bald hinzugefügt.',
                              'Explanation will be added soon.'
                            )
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {question.isStateSpecific && (
            <div className="mt-5 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-pulse-soft"></span>
                <span className="font-medium">
                  {t(`Landesspezifisch: ${question.state}`, `State-specific: ${question.state}`)}
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <ProModal open={showProModal} onOpenChange={setShowProModal} />
    </>
  );
}
