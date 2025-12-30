import { useEffect, useState, forwardRef } from 'react';
import { Flame, Star, Trophy, Zap } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const MILESTONES = [3, 7, 14, 30, 50, 100];

function getMilestoneIcon(streak: number) {
  if (streak >= 100) return Trophy;
  if (streak >= 50) return Star;
  if (streak >= 14) return Zap;
  return Flame;
}

function getMilestoneMessage(streak: number, t: (de: string, en: string) => string) {
  if (streak >= 100) return t('Unglaublich! 100 Tage Streak!', 'Incredible! 100 Day Streak!');
  if (streak >= 50) return t('Fantastisch! 50 Tage Streak!', 'Fantastic! 50 Day Streak!');
  if (streak >= 30) return t('Wahnsinn! 30 Tage Streak!', 'Amazing! 30 Day Streak!');
  if (streak >= 14) return t('Super! 2 Wochen Streak!', 'Super! 2 Week Streak!');
  if (streak >= 7) return t('Toll! 1 Woche Streak!', 'Great! 1 Week Streak!');
  if (streak >= 3) return t('Guter Start! 3 Tage Streak!', 'Good start! 3 Day Streak!');
  return '';
}

export const StreakMilestone = forwardRef<HTMLDivElement>(function StreakMilestone(_, ref) {
  const { progress, t } = useApp();
  const [showDialog, setShowDialog] = useState(false);
  const [celebratedStreak, setCelebratedStreak] = useState<number | null>(null);

  useEffect(() => {
    const streak = progress.streak;
    const lastCelebrated = localStorage.getItem('lid-last-celebrated-milestone');
    const lastCelebratedNum = lastCelebrated ? parseInt(lastCelebrated, 10) : 0;

    // Check if current streak is a milestone and hasn't been celebrated
    if (MILESTONES.includes(streak) && streak > lastCelebratedNum) {
      setCelebratedStreak(streak);
      setShowDialog(true);
      localStorage.setItem('lid-last-celebrated-milestone', streak.toString());
    }
  }, [progress.streak]);

  const handleClose = () => {
    setShowDialog(false);
    setCelebratedStreak(null);
  };

  if (!celebratedStreak) return null;

  const Icon = getMilestoneIcon(celebratedStreak);
  const message = getMilestoneMessage(celebratedStreak, t);

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="text-center max-w-sm">
        <DialogHeader className="items-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-warning/20 flex items-center justify-center animate-bounce-in">
            <Icon className="h-10 w-10 text-accent animate-flame" />
          </div>
          <DialogTitle className="text-2xl font-display">
            {message}
          </DialogTitle>
          <DialogDescription className="text-base">
            {t(
              `Du hast ${celebratedStreak} Tage in Folge gelernt! Weiter so!`,
              `You've studied ${celebratedStreak} days in a row! Keep going!`
            )}
          </DialogDescription>
        </DialogHeader>
        <Button 
          onClick={handleClose}
          className="w-full mt-4"
        >
          {t('Weitermachen', 'Continue')}
        </Button>
      </DialogContent>
    </Dialog>
  );
});
