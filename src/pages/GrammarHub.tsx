import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lock, Check, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useApp } from '@/contexts/AppContext';
import { useAds } from '@/contexts/AdContext';
import { grammarPatterns } from '@/data/grammar';
import { cn } from '@/lib/utils';

export default function GrammarHub() {
  const navigate = useNavigate();
  const { t, settings, progress } = useApp();
  const { isPro } = useAds();

  // Sort patterns by order
  const patterns = [...grammarPatterns].sort((a, b) => a.order - b.order);

  const handlePatternClick = (id: string, isLocked: boolean) => {
    if (isLocked) return;
    navigate(`/grammar/${id}`);
  };

  return (
    <div className="min-h-screen pb-24 safe-area-top bg-background">
      {/* Header */}
      <div className="px-5 py-4 bg-background/95 backdrop-blur-sm sticky top-0 z-10 border-b">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">{t('grammar.title')}</h1>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {patterns.map((pattern) => {
          const isLocked = pattern.isPremium && !isPro;
          // Safe access to grammarProgress in case it's undefined in older state
          const isCompleted = progress.grammarProgress && progress.grammarProgress[pattern.id];
          
          return (
            <Card 
              key={pattern.id}
              className={cn(
                "overflow-hidden transition-all duration-200",
                !isLocked && "hover:border-primary/50 active:scale-[0.98]",
                isCompleted && "border-green-500/50 bg-green-500/5"
              )}
              onClick={() => handlePatternClick(pattern.id, isLocked)}
            >
              <CardContent className="p-0">
                <div className="flex items-center p-4 gap-4">
                  {/* Icon Status */}
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm",
                    isCompleted ? "bg-green-500 text-white" : 
                    isLocked ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"
                  )}>
                    {isCompleted ? (
                      <Check className="w-6 h-6" />
                    ) : isLocked ? (
                      <Lock className="w-5 h-5" />
                    ) : (
                      <BookOpen className="w-6 h-6" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={cn("font-bold truncate", isLocked && "text-muted-foreground")}>
                        {t(pattern.titleKey)}
                      </h3>
                      {pattern.isPremium && !isPro && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 uppercase tracking-wider">
                          PRO
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground truncate">
                       {pattern.exercises.length} Exercises
                    </p>
                  </div>
                </div>
                
                {/* Progress Bar for potential future detailed progress */}
                {isCompleted && (
                   <div className="h-1 bg-green-500 w-full" />
                )}
              </CardContent>
            </Card>
          );
        })}
        
        {/* Placeholder for "Coming Soon" */}
        <div className="p-6 text-center border-2 border-dashed border-muted rounded-xl">
           <Calendar className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-50" />
           <p className="text-muted-foreground font-medium">More lessons coming soon!</p>
        </div>
      </div>
    </div>
  );
}
