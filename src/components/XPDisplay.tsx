import { Zap, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { xpForNextLevel, XP_PER_LEVEL } from '@/data';

interface XPDisplayProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function XPDisplay({ variant = 'default', className }: XPDisplayProps) {
  const { progress, level, levelProgress, t } = useApp();
  
  const xpToNext = xpForNextLevel(progress.xp);
  const xpInLevel = progress.xp % XP_PER_LEVEL;

  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-primary">{progress.xp}</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/10 rounded-full">
          <TrendingUp className="w-4 h-4 text-amber-500" />
          <span className="text-sm font-bold text-amber-600">Lv.{level}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">{progress.xp} XP</p>
            <p className="text-xs text-muted-foreground">{t('dashboard.xp')}</p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-3xl font-bold text-amber-600">{level}</p>
          <p className="text-xs text-muted-foreground">{t('dashboard.level')}</p>
        </div>
      </div>
      
      {/* Progress to next level */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{xpInLevel} / {XP_PER_LEVEL}</span>
          <span>{xpToNext} XP to Lv.{level + 1}</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${levelProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
