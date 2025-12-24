import { Landmark, BookOpen, Users, LucideIcon, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
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

  const categoryStyles: Record<string, { bg: string; icon: string; accent: string }> = {
    politics: {
      bg: 'from-politics-light to-politics/5',
      icon: 'bg-politics/20 text-politics',
      accent: 'bg-politics'
    },
    history: {
      bg: 'from-history-light to-history/5',
      icon: 'bg-history/20 text-history',
      accent: 'bg-history'
    },
    society: {
      bg: 'from-society-light to-society/5',
      icon: 'bg-society/20 text-society',
      accent: 'bg-society'
    }
  };

  const styles = categoryStyles[id] || categoryStyles.politics;

  return (
    <Card 
      className={cn(
        "cursor-pointer border-0 shadow-card overflow-hidden group",
        "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 active:scale-[0.98]",
        "bg-gradient-to-br",
        styles.bg
      )}
      onClick={onClick}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0",
            "transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
            styles.icon
          )}>
            <Icon className="h-7 w-7" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display font-bold text-lg">
                {settings.language === 'de' ? name_de : name_en}
              </h3>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            
            <p className="text-sm text-muted-foreground font-medium mb-3">
              {masteredCount}/{totalQuestions} {t('gemeistert', 'mastered')}
            </p>
            
            <div className="relative h-2.5 bg-background/50 rounded-full overflow-hidden">
              <div 
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full transition-all duration-500",
                  styles.accent
                )}
                style={{ width: `${progressValue}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
