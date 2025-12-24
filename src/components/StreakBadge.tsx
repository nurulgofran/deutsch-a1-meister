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
        "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl",
        "bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/20",
        "font-display font-bold text-accent",
        className
      )}
    >
      <div className="relative">
        <Flame className="h-5 w-5 animate-flame" />
        {/* Glow effect */}
        <div className="absolute inset-0 blur-sm opacity-50">
          <Flame className="h-5 w-5 text-accent" />
        </div>
      </div>
      <span className="text-sm">{streak}</span>
    </div>
  );
}
