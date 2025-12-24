import { useNavigate } from 'react-router-dom';
import { ArrowRight, Trophy, Target, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CircularProgress } from '@/components/CircularProgress';
import { StreakBadge } from '@/components/StreakBadge';
import { AdSpace } from '@/components/AdSpace';
import { useApp } from '@/contexts/AppContext';
import { questions } from '@/data/questions';

export default function Dashboard() {
  const navigate = useNavigate();
  const { progress, getReadinessScore, getMasteredCount, t } = useApp();
  
  const readinessScore = getReadinessScore();
  const masteredCount = getMasteredCount();
  const totalQuestions = questions.length;
  const examsPassed = progress.examHistory.filter(e => e.passed).length;

  return (
    <div className="min-h-screen pb-24 safe-area-top">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">
            {t('Willkommen!', 'Welcome!')}
          </h1>
          <StreakBadge streak={progress.streak} />
        </div>
        <p className="text-muted-foreground">
          {t('Leben in Deutschland Test', 'Living in Germany Test')}
        </p>
      </div>

      {/* Readiness Score */}
      <div className="px-5 py-6">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-6 flex flex-col items-center">
            <CircularProgress value={readinessScore} size={180} strokeWidth={14}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{readinessScore}%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t('Prüfungsbereit', 'Exam Ready')}
                </div>
              </div>
            </CircularProgress>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="px-5 grid grid-cols-3 gap-3 mb-6">
        <Card className="bg-card">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-success/10 flex items-center justify-center">
              <Target className="h-5 w-5 text-success" />
            </div>
            <div className="text-2xl font-bold">{masteredCount}</div>
            <div className="text-xs text-muted-foreground">
              {t('Gemeistert', 'Mastered')}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-secondary flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-secondary-foreground" />
            </div>
            <div className="text-2xl font-bold">{totalQuestions}</div>
            <div className="text-xs text-muted-foreground">
              {t('Gesamt', 'Total')}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-accent/10 flex items-center justify-center">
              <Trophy className="h-5 w-5 text-accent" />
            </div>
            <div className="text-2xl font-bold">{examsPassed}</div>
            <div className="text-xs text-muted-foreground">
              {t('Bestanden', 'Passed')}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Continue Learning Button */}
      <div className="px-5 mb-6">
        <Button 
          className="w-full h-14 text-lg font-semibold shadow-button gap-2"
          size="lg"
          onClick={() => navigate('/study')}
        >
          {t('Weiter lernen', 'Continue Learning')}
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="px-5 mb-6">
        <Card 
          className="cursor-pointer hover:shadow-card-hover transition-shadow"
          onClick={() => navigate('/exam')}
        >
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-destructive" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">
                {t('Prüfungssimulation', 'Exam Simulation')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('33 Fragen in 60 Minuten', '33 questions in 60 minutes')}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </div>

      {/* Ad Space */}
      <div className="px-5">
        <AdSpace />
      </div>
    </div>
  );
}
