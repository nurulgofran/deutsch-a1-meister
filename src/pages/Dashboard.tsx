import { useNavigate } from 'react-router-dom';
import { ArrowRight, Trophy, Target, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CircularProgress } from '@/components/CircularProgress';
import { StreakBadge } from '@/components/StreakBadge';
import { BannerAd } from '@/components/ads';
import { useApp } from '@/contexts/AppContext';
import { questions } from '@/data/questions/index';

export default function Dashboard() {
  const navigate = useNavigate();
  const { progress, getReadinessScore, getMasteredCount, t } = useApp();
  
  const readinessScore = getReadinessScore();
  const masteredCount = getMasteredCount();
  const totalQuestions = questions.length;
  const examsPassed = progress.examHistory.filter(e => e.passed).length;

  return (
    <div className="min-h-screen pb-24 safe-area-top relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/2 -left-32 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />

      {/* Header */}
      <div className="relative px-5 pt-8 pb-6">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h1 className="text-3xl font-display font-extrabold tracking-tight">
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
      <div className="relative stagger-children">
        {/* Readiness Score Card */}
        <div className="px-5 pb-6">
          <Card className="overflow-hidden border-0 shadow-card bg-gradient-to-br from-card via-card to-primary/5">
            <CardContent className="p-6 flex flex-col items-center relative">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-primary/10">
                <Sparkles className="w-16 h-16" />
              </div>
              
              <CircularProgress value={readinessScore} size={200} strokeWidth={16}>
                <div className="text-center">
                  <div className="text-5xl font-display font-extrabold text-gradient-primary">
                    {readinessScore}%
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold mt-1 uppercase tracking-wide">
                    {t('Prüfungsbereit', 'Exam Ready')}
                  </div>
                </div>
              </CircularProgress>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="px-5 grid grid-cols-3 gap-3 mb-6">
          <Card className="border-0 shadow-card bg-card overflow-hidden group hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-4 text-center relative">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-success/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="h-6 w-6 text-success" />
              </div>
              <div className="text-2xl font-display font-extrabold">{masteredCount}</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                {t('Gemeistert', 'Mastered')}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card bg-card overflow-hidden group hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-4 text-center relative">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="text-2xl font-display font-extrabold">{totalQuestions}</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                {t('Gesamt', 'Total')}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card bg-card overflow-hidden group hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-4 text-center relative">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-display font-extrabold">{examsPassed}</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                {t('Bestanden', 'Passed')}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Continue Learning Button */}
        <div className="px-5 mb-6">
          <Button 
            className="w-full h-16 text-lg font-display font-bold shadow-button hover:shadow-button-hover gap-3 rounded-2xl animate-pop group"
            size="lg"
            onClick={() => navigate('/study')}
          >
            <span>{t('Weiter lernen', 'Continue Learning')}</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Exam Card */}
        <div className="px-5 mb-6">
          <Card 
            className="cursor-pointer border-0 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group"
            onClick={() => navigate('/exam')}
          >
            <CardContent className="p-5 flex items-center gap-4 relative">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform">
                <Trophy className="h-7 w-7 text-destructive" />
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="font-display font-bold text-lg">
                  {t('Prüfungssimulation', 'Exam Simulation')}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {t('33 Fragen in 60 Minuten', '33 questions in 60 minutes')}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all relative z-10" />
            </CardContent>
          </Card>
        </div>

        {/* Banner Ad */}
        <div className="px-5">
          <BannerAd />
        </div>
      </div>
    </div>
  );
}
