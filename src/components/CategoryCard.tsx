import { Landmark, BookOpen, Users, LucideIcon, ChevronRight } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  BookOpen,
  Users
};

interface CategoryCardProps {
  id: string;
  name_de: string;
  name_en: string;
  icon: string;
  totalQuestions: number;
  onClick: () => void;
}

export function CategoryCard({
  id,
  name_de,
  name_en,
  icon,
  totalQuestions,
  onClick
}: CategoryCardProps) {
  const { progress, settings, t } = useApp();
  const Icon = iconMap[icon] || BookOpen;
  
  const categoryStats = progress.categoryProgress[id] || { correct: 0, total: 0 };
  const progressValue = totalQuestions > 0 ? (categoryStats.total / totalQuestions) * 100 : 0;
  const masteredCount = categoryStats.correct;

  const categoryStyles: Record<string, { icon: string; progress: string }> = {
    politics: {
      icon: 'bg-politics/15 text-politics',
      progress: 'bg-politics'
    },
    history: {
      icon: 'bg-history/15 text-history',
      progress: 'bg-history'
    },
    society: {
      icon: 'bg-society/15 text-society',
      progress: 'bg-society'
    }
  };

  const styles = categoryStyles[id] || categoryStyles.politics;

  return (
    <div 
      className="card-floating p-5 cursor-pointer transition-all hover:shadow-lg active:scale-[0.99]"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0",
          styles.icon
        )}>
          <Icon className="h-7 w-7" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-display font-bold text-lg">
              {settings.language === 'de' ? name_de : name_en}
            </h3>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
          
          <p className="text-sm text-muted-foreground font-medium mb-3">
            {masteredCount}/{totalQuestions} {t('gemeistert', 'mastered')}
          </p>
          
          {/* Chunky progress bar with orange gradient */}
          <div className="progress-chunky">
            <div 
              className="progress-chunky-fill"
              style={{ width: `${progressValue}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
