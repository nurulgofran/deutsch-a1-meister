import { useState, useEffect } from 'react';
import { Volume2, RotateCcw, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { VocabWord } from '@/data';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';

interface FlashcardProps {
  word: VocabWord;
  onCorrect: () => void;
  onIncorrect: () => void;
  showTranslation?: boolean;
}

export function Flashcard({ word, onCorrect, onIncorrect, showTranslation = false }: FlashcardProps) {
  const { language, t } = useApp();
  const [isFlipped, setIsFlipped] = useState(showTranslation);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Reset when word changes
  useEffect(() => {
    setIsFlipped(showTranslation);
    setHasAnswered(false);
  }, [word.id, showTranslation]);

  const handleFlip = () => {
    if (!hasAnswered) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleAnswer = (correct: boolean) => {
    setHasAnswered(true);
    setIsFlipped(true); // Show answer
    
    setTimeout(() => {
      if (correct) {
        onCorrect();
      } else {
        onIncorrect();
      }
    }, 800);
  };

  const playAudio = () => {
    // Use Web Speech API for pronunciation
    const utterance = new SpeechSynthesisUtterance(word.german);
    utterance.lang = 'de-DE';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  const translation = word.translations[language] || word.translations.en;

  return (
    <div className="w-full max-w-sm mx-auto perspective-1000">
      {/* Card */}
      <div
        onClick={handleFlip}
        className={cn(
          "relative w-full aspect-[3/4] cursor-pointer transition-transform duration-500 transform-style-preserve-3d",
          isFlipped && "rotate-y-180"
        )}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front - German */}
        <div 
          className="absolute inset-0 backface-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 shadow-xl p-6 flex flex-col items-center justify-center text-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {word.article && (
            <span className="text-lg opacity-80 mb-2">{word.article}</span>
          )}
          <h2 className="text-4xl font-bold text-center mb-4">{word.german}</h2>
          
          <button
            onClick={(e) => { e.stopPropagation(); playAudio(); }}
            className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <Volume2 className="w-7 h-7" />
          </button>
          
          <p className="absolute bottom-6 text-sm opacity-70">
            {t('flashcard.tapToFlip')}
          </p>
        </div>

        {/* Back - Translation */}
        <div 
          className="absolute inset-0 rounded-3xl bg-card border-2 border-primary/20 shadow-xl p-6 flex flex-col items-center justify-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {word.article && (
            <span className="text-sm text-muted-foreground mb-1">{word.article}</span>
          )}
          <h3 className="text-xl font-medium text-muted-foreground mb-2">{word.german}</h3>
          <h2 className="text-3xl font-bold text-center text-primary mb-4">{translation}</h2>
          
          {word.example && (
            <div className="mt-4 p-3 bg-muted/50 rounded-xl w-full">
              <p className="text-sm text-center font-medium">{word.example.german}</p>
              <p className="text-xs text-center text-muted-foreground mt-1">
                {word.example.translations[language] || word.example.translations.en}
              </p>
            </div>
          )}

          <button
            onClick={(e) => { e.stopPropagation(); playAudio(); }}
            className="mt-4 w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
          >
            <Volume2 className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      {/* Answer Buttons */}
      {!hasAnswered && (
        <div className="flex gap-4 mt-6 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 h-14 border-2 border-red-500/50 text-red-600 hover:bg-red-500/10"
            onClick={() => handleAnswer(false)}
          >
            <X className="w-5 h-5 mr-2" />
            {t('flashcard.incorrect')}
          </Button>
          <Button
            size="lg"
            className="flex-1 h-14 bg-emerald-500 hover:bg-emerald-600"
            onClick={() => handleAnswer(true)}
          >
            <Check className="w-5 h-5 mr-2" />
            {t('flashcard.correct')}
          </Button>
        </div>
      )}

      {hasAnswered && (
        <div className="flex justify-center mt-6">
          <div className={cn(
            "px-6 py-3 rounded-full font-bold",
            hasAnswered ? "bg-emerald-500/20 text-emerald-600" : ""
          )}>
            +5 XP ✨
          </div>
        </div>
      )}
    </div>
  );
}
