import { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Question } from '@/data/questions';
import { useApp } from '@/contexts/AppContext';
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
    
    if (!showResult || !showFeedback) {
      return cn(
        "w-full min-h-[56px] p-4 text-left justify-start font-medium text-base transition-all",
        isSelected 
          ? "bg-secondary border-2 border-primary" 
          : "bg-card border-2 border-border hover:border-primary/50"
      );
    }

    // Show feedback
    if (isCorrect) {
      return cn(
        "w-full min-h-[56px] p-4 text-left justify-start font-medium text-base",
        "bg-success/10 border-2 border-success text-success",
        isSelected && "animate-success-pulse"
      );
    }

    if (isSelected && !isCorrect) {
      return cn(
        "w-full min-h-[56px] p-4 text-left justify-start font-medium text-base",
        "bg-destructive/10 border-2 border-destructive text-destructive animate-shake"
      );
    }

    return "w-full min-h-[56px] p-4 text-left justify-start font-medium text-base bg-card border-2 border-border opacity-50";
  };

  const questionText = settings.language === 'de' ? question.text_de : question.text_en;

  return (
    <Card className="shadow-card animate-slide-up">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3 mb-5">
          <h2 className="text-lg font-semibold leading-snug flex-1">
            {questionText}
          </h2>
          {showBookmark && (
            <button
              onClick={() => toggleBookmark(question.id)}
              className="p-2 -m-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label={isBookmarked ? t("Lesezeichen entfernen", "Remove bookmark") : t("Lesezeichen hinzufügen", "Add bookmark")}
            >
              {isBookmarked ? (
                <BookmarkCheck className="h-5 w-5 text-accent" />
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
              <span className="inline-flex items-center justify-center w-7 h-7 mr-3 rounded-full bg-muted text-sm font-bold shrink-0">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-left">
                {settings.language === 'de' ? option.de : option.en}
              </span>
            </Button>
          ))}
        </div>

        {question.isStateSpecific && (
          <div className="mt-4 text-xs text-muted-foreground flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
            {t(`Landesspezifisch: ${question.state}`, `State-specific: ${question.state}`)}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
