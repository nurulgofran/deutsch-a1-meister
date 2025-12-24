import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StreakBadgeProps {
  streak: number;
  className?: string;
}

export function StreakBadge({ streak, className }: StreakBadgeProps) {
  if (streak === 0) return null;

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent font-semibold",
        className
      )}
    >
      <Flame className="h-5 w-5 animate-flame" />
      <span>{streak}</span>
    </div>
  );
}
