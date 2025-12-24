import { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Question } from '@/data/questions/index';
import { useApp } from '@/contexts/AppContext';
import { ProModal } from '@/components/ProModal';
import { cn } from '@/lib/utils';

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
  const [localSelected, setLocalSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showProModal, setShowProModal] = useState(false);

  const selected = selectedAnswer ?? localSelected;
  const isBookmarked = progress.bookmarkedQuestions.includes(question.id);

  useEffect(() => {
    setLocalSelected(null);
    setShowResult(false);
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
      const isCorrect = index === question.correctIndex;
      onAnswer?.(isCorrect);
    }
  };

  const getOptionClasses = (index: number) => {
    const isSelected = selected === index;
    const isCorrect = index === question.correctIndex;
    
    const baseClasses = "w-full min-h-[60px] p-4 text-left justify-start font-medium text-base transition-all duration-200 rounded-xl border-2 animate-pop";
    
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

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={getOptionClasses(index)}
                onClick={() => handleSelect(index)}
                disabled={showResult && showFeedback}
              >
                <span className={cn(
                  "inline-flex items-center justify-center w-8 h-8 mr-3 rounded-lg text-sm font-bold shrink-0 transition-colors",
                  selected === index 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-left font-medium">
                  {settings.language === 'de' ? option.de : option.en}
                </span>
              </Button>
            ))}
          </div>

          {/* Show explanation button after answering */}
          {showResult && showFeedback && (
            <Button
              variant="ghost"
              className="w-full mt-4 h-12 gap-2 text-muted-foreground hover:text-primary"
              onClick={() => setShowProModal(true)}
            >
              <Lightbulb className="h-5 w-5" />
              {t('Erklärung anzeigen', 'Show explanation')}
            </Button>
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
