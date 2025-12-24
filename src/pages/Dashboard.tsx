import { useNavigate } from 'react-router-dom';
import { ArrowRight, Trophy, Target, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@/components/CircularProgress';
import { StreakBadge } from '@/components/StreakBadge';
import { AdSpace } from '@/components/AdSpace';
import { useApp } from '@/contexts/AppContext';
import { questions } from '@/data/questions';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const navigate = useNavigate();
  const { progress, getReadinessScore, getMasteredCount, t } = useApp();
  
  const readinessScore = getReadinessScore();
  const masteredCount = getMasteredCount();
  const totalQuestions = questions.length;
  const examsPassed = progress.examHistory.filter(e => e.passed).length;

  return (
    <div className="min-h-screen pb-28 safe-area-top">
      {/* Header */}
      <div className="px-5 pt-8 pb-4">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">
              {t('Willkommen!', 'Welcome!')} <span className="inline-block animate-float">👋</span>
            </h1>
            <p className="text-muted-foreground font-medium mt-1">
              {t('Leben in Deutschland Test', 'Living in Germany Test')}
            </p>
          </div>
          <StreakBadge streak={progress.streak} />
        </div>
      </div>

      {/* Content with staggered animations */}
      <div className="stagger-children">
        {/* Readiness Score Card */}
        <div className="px-5 pb-5">
          <div className="card-floating p-6 flex flex-col items-center relative overflow-hidden">
            {/* Subtle decoration */}
            <div className="absolute top-3 right-3 text-muted/30">
              <Sparkles className="w-12 h-12" />
            </div>
            
            <CircularProgress value={readinessScore} size={180} strokeWidth={14}>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-gradient-primary">
                  {readinessScore}%
                </div>
                <div className="text-sm text-muted-foreground font-semibold mt-1 uppercase tracking-wider">
                  {t('Prüfungsbereit', 'Exam Ready')}
                </div>
              </div>
            </CircularProgress>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="px-5 grid grid-cols-3 gap-3 mb-5">
          <div className="card-floating p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-success/15 flex items-center justify-center">
              <Target className="h-6 w-6 text-success" />
            </div>
            <div className="text-2xl font-display font-bold">{masteredCount}</div>
            <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              {t('Gemeistert', 'Mastered')}
            </div>
          </div>

          <div className="card-floating p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-secondary flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div className="text-2xl font-display font-bold">{totalQuestions}</div>
            <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              {t('Gesamt', 'Total')}
            </div>
          </div>

          <div className="card-floating p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-accent/15 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-display font-bold">{examsPassed}</div>
            <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
              {t('Bestanden', 'Passed')}
            </div>
          </div>
        </div>

        {/* Continue Learning Button - 3D Bubbly */}
        <div className="px-5 mb-5">
          <Button 
            className={cn(
              "w-full h-16 text-lg font-display font-bold rounded-2xl",
              "btn-3d bg-primary hover:bg-primary"
            )}
            size="lg"
            onClick={() => navigate('/study')}
          >
            <span>{t('Weiter lernen', 'Continue Learning')}</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        {/* Exam Card */}
        <div className="px-5 mb-5">
          <div 
            className="card-floating p-5 flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg active:scale-[0.99]"
            onClick={() => navigate('/exam')}
          >
            <div className="w-14 h-14 rounded-2xl bg-destructive/15 flex items-center justify-center shrink-0">
              <Trophy className="h-7 w-7 text-destructive" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg">
                {t('Prüfungssimulation', 'Exam Simulation')}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {t('33 Fragen in 60 Minuten', '33 questions in 60 minutes')}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Ad Space */}
        <div className="px-5">
          <AdSpace />
        </div>
      </div>
    </div>
  );
}
