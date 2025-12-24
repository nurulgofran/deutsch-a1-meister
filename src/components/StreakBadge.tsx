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
        "inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl",
        "bg-accent/15 border-2 border-accent/30",
        "font-display font-bold text-accent",
        className
      )}
    >
      <Flame className="h-5 w-5 animate-flame glow-accent text-accent" />
      <span className="text-base">{streak}</span>
    </div>
  );
}
