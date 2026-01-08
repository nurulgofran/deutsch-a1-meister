import { Flame, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

interface StreakDisplayProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function StreakDisplay({ variant = 'default', className }: StreakDisplayProps) {
  const { progress, isStreakActiveToday, t } = useApp();

  if (variant === 'compact') {
    return (
      <div className={cn(
        "flex items-center gap-1 px-2 py-1 rounded-full",
        isStreakActiveToday ? "bg-orange-500/10" : "bg-muted"
      )}>
        <Flame className={cn(
          "w-4 h-4",
          isStreakActiveToday ? "text-orange-500" : "text-muted-foreground"
        )} />
        <span className={cn(
          "text-sm font-bold",
          isStreakActiveToday ? "text-orange-600" : "text-muted-foreground"
        )}>
          {progress.streak}
        </span>
      </div>
    );
  }

  return (
    <div className={cn(
      "p-4 rounded-2xl border",
      isStreakActiveToday 
        ? "bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent border-orange-500/20"
        : "bg-muted/30 border-muted"
    , className)}>
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center shadow-lg",
          isStreakActiveToday 
            ? "bg-gradient-to-br from-orange-500 to-amber-500 shadow-orange-500/20"
            : "bg-muted"
        )}>
          <Flame className={cn(
            "w-6 h-6",
            isStreakActiveToday ? "text-white" : "text-muted-foreground"
          )} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className={cn(
              "text-3xl font-bold",
              isStreakActiveToday ? "text-orange-600" : "text-muted-foreground"
            )}>
              {progress.streak}
            </span>
            <span className="text-sm text-muted-foreground">
              {t('dashboard.streak')}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {isStreakActiveToday 
              ? t('dashboard.streakMessage')
              : "Start learning to continue your streak!"
            }
          </p>
        </div>

        {progress.streak >= 7 && (
          <Award className="w-6 h-6 text-amber-500" />
        )}
      </div>
    </div>
  );
}
