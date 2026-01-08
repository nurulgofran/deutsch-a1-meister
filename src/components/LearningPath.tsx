import { Lock, Check, ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { lessons, isLessonUnlocked, LessonId, Lesson } from '@/data';
import { useApp } from '@/contexts/AppContext';
import { useAds } from '@/contexts/AdContext';

interface LessonNodeProps {
  lesson: Lesson;
  isUnlocked: boolean;
  isCompleted: boolean;
  masteryPercent: number;
  onSelect: (lessonId: LessonId) => void;
}

function LessonNode({ lesson, isUnlocked, isCompleted, masteryPercent, onSelect }: LessonNodeProps) {
  const { t } = useApp();
  
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[lesson.icon] || LucideIcons.BookOpen;
  
  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    emerald: { bg: 'bg-emerald-500', border: 'border-emerald-500', text: 'text-emerald-500' },
    blue: { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-500' },
    purple: { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-500' },
    amber: { bg: 'bg-amber-500', border: 'border-amber-500', text: 'text-amber-500' },
    rose: { bg: 'bg-rose-500', border: 'border-rose-500', text: 'text-rose-500' },
    orange: { bg: 'bg-orange-500', border: 'border-orange-500', text: 'text-orange-500' },
    pink: { bg: 'bg-pink-500', border: 'border-pink-500', text: 'text-pink-500' },
    teal: { bg: 'bg-teal-500', border: 'border-teal-500', text: 'text-teal-500' },
    indigo: { bg: 'bg-indigo-500', border: 'border-indigo-500', text: 'text-indigo-500' },
    cyan: { bg: 'bg-cyan-500', border: 'border-cyan-500', text: 'text-cyan-500' },
    slate: { bg: 'bg-slate-500', border: 'border-slate-500', text: 'text-slate-500' },
    red: { bg: 'bg-red-500', border: 'border-red-500', text: 'text-red-500' },
  };
  
  const colors = colorClasses[lesson.color] || colorClasses.emerald;

  return (
    <button
      onClick={() => isUnlocked && onSelect(lesson.id)}
      disabled={!isUnlocked}
      className={cn(
        "relative w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all",
        isUnlocked 
          ? `${colors.border} bg-card hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]`
          : "border-muted bg-muted/30 opacity-60"
      )}
    >
      {/* Node Icon */}
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md",
        isUnlocked ? colors.bg : "bg-muted"
      )}>
        {isUnlocked ? (
          isCompleted ? (
            <Check className="w-7 h-7 text-white" />
          ) : (
            <IconComponent className="w-7 h-7 text-white" />
          )
        ) : (
          <Lock className="w-6 h-6 text-muted-foreground" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 text-left">
        <h3 className={cn(
          "font-bold text-base",
          isUnlocked ? "text-foreground" : "text-muted-foreground"
        )}>
          {t(`lessons.${lesson.id}`)}
        </h3>
        
        {isUnlocked ? (
          <>
            <p className="text-sm text-muted-foreground">
              {lesson.vocabCount} {t('common.words')}
            </p>
            {masteryPercent > 0 && (
              <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className={cn("h-full rounded-full transition-all", colors.bg)}
                  style={{ width: `${masteryPercent}%` }}
                />
              </div>
            )}
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            {lesson.requiredXP} XP {t('learningPath.locked').toLowerCase()}
          </p>
        )}
      </div>

      {/* Arrow */}
      {isUnlocked && (
        <ChevronRight className={cn("w-5 h-5 shrink-0", colors.text)} />
      )}
      
      {/* Premium badge */}
      {lesson.isPremium && !isUnlocked && (
        <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-amber-500 text-white text-xs font-bold rounded-full">
          PRO
        </div>
      )}
    </button>
  );
}

interface LearningPathProps {
  onSelectLesson: (lessonId: LessonId) => void;
}

export function LearningPath({ onSelectLesson }: LearningPathProps) {
  const { progress, getLessonMastery, isLessonCompleted, t } = useApp();
  const { isPro } = useAds();

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold px-1">{t('learningPath.title')}</h2>
      
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-border z-0" />
        
        {/* Lesson Nodes */}
        <div className="relative z-10 space-y-3">
          {lessons.map((lesson) => (
            <LessonNode
              key={lesson.id}
              lesson={lesson}
              isUnlocked={isLessonUnlocked(lesson.id, progress.xp, isPro)}
              isCompleted={isLessonCompleted(lesson.id)}
              masteryPercent={getLessonMastery(lesson.id)}
              onSelect={onSelectLesson}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
