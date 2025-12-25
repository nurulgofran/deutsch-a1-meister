import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface StreakBadgeProps {
  streak: number;
  className?: string;
}

export function StreakBadge({ streak, className }: StreakBadgeProps) {
  const { isStreakActiveToday, streakJustIncremented, clearStreakIncrement, t } = useApp();
  const [showPopover, setShowPopover] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Show celebration toast when streak increments
  useEffect(() => {
    if (streakJustIncremented && !hasAnimated) {
      setHasAnimated(true);
      toast.success(
        t(
          `Tag ${streak}! Du wirst zum Profi! 🇩🇪`,
          `Day ${streak}! You're becoming a Pro! 🇩🇪`
        ),
        {
          duration: 4000,
          icon: '🔥',
        }
      );
    }
    
    if (!streakJustIncremented) {
      setHasAnimated(false);
    }
  }, [streakJustIncremented, streak, t, hasAnimated]);

  // Auto-dismiss popover after 5 seconds
  useEffect(() => {
    if (showPopover) {
      const timer = setTimeout(() => setShowPopover(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopover]);

  // Always show badge, but with different states
  const displayStreak = streak === 0 ? 0 : streak;

  return (
    <Popover open={showPopover} onOpenChange={setShowPopover}>
      <PopoverTrigger asChild>
        <button 
          className={cn(
            "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl",
            "border transition-all duration-500",
            "font-display font-bold",
            // Active state - vibrant and glowing
            isStreakActiveToday && [
              "bg-gradient-to-r from-accent/20 to-accent/10",
              "border-accent/30",
              "text-accent",
              streakJustIncremented && "animate-bounce-in"
            ],
            // Inactive state - grayscale and muted
            !isStreakActiveToday && [
              "bg-muted/50",
              "border-muted",
              "text-muted-foreground",
              "grayscale"
            ],
            className
          )}
        >
          <div className="relative">
            <Flame 
              className={cn(
                "h-5 w-5 transition-all duration-500",
                isStreakActiveToday && "animate-flame",
                !isStreakActiveToday && "opacity-50"
              )} 
            />
            {/* Glow effect - only when active */}
            {isStreakActiveToday && (
              <div className="absolute inset-0 blur-sm opacity-50 pointer-events-none">
                <Flame className="h-5 w-5 text-accent" />
              </div>
            )}
          </div>
          <span className="text-sm">{displayStreak}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-72 p-4" 
        align="end"
        sideOffset={8}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Flame className="h-4 w-4 text-accent" />
            </div>
            <h4 className="font-display font-bold text-base">
              {t('Lernstreak 🔥', 'Study Streak 🔥')}
            </h4>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t(
              'Halte deine Flamme am Brennen! Beantworte jeden Tag mindestens eine Frage, um deinen Streak zu erhöhen. Wenn du einen Tag verpasst, startet der Zähler bei 1.',
              'Keep your flame glowing! Answer at least one question every day to increase your streak. If you miss a day, the counter resets to 1.'
            )}
          </p>

          {/* Status indicator */}
          <div className={cn(
            "flex items-center gap-2 p-2 rounded-lg text-sm",
            isStreakActiveToday 
              ? "bg-success/10 text-success" 
              : "bg-muted text-muted-foreground"
          )}>
            <div className={cn(
              "w-2 h-2 rounded-full",
              isStreakActiveToday ? "bg-success animate-pulse" : "bg-muted-foreground"
            )} />
            {isStreakActiveToday 
              ? t('Heute aktiv! ✓', 'Active today! ✓')
              : t('Beantworte eine Frage um aktiv zu werden', 'Answer a question to become active')
            }
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => setShowPopover(false)}
          >
            {t('Verstanden', 'Got it')}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
