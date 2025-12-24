import { Landmark, BookOpen, Users, LucideIcon } from 'lucide-react';
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

  const categoryColors: Record<string, string> = {
    politics: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    history: 'from-amber-500/20 to-amber-600/20 border-amber-500/30',
    society: 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
  };

  const iconColors: Record<string, string> = {
    politics: 'text-blue-600 bg-blue-500/20',
    history: 'text-amber-600 bg-amber-500/20',
    society: 'text-purple-600 bg-purple-500/20'
  };

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:shadow-card-hover hover:-translate-y-0.5 active:scale-[0.98]",
        "bg-gradient-to-br border-2",
        categoryColors[id]
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
            iconColors[id]
          )}>
            <Icon className="h-6 w-6" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base mb-1">
              {settings.language === 'de' ? name_de : name_en}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {masteredCount}/{totalQuestions} {t('gemeistert', 'mastered')}
            </p>
            <Progress value={progressValue} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
