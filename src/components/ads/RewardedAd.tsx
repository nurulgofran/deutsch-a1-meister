import { useEffect, useState, forwardRef } from 'react';
import { Gift, Play, X, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAds } from '@/contexts/AdContext';
import { useApp } from '@/contexts/AppContext';

export const RewardedAd = forwardRef<HTMLDivElement>(function RewardedAd(_, ref) {
  const { showRewarded, closeRewardedAd, adUnitIds, isPro } = useAds();
  const { t } = useApp();
  const [adState, setAdState] = useState<'ready' | 'playing' | 'completed'>('ready');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!showRewarded) {
      setAdState('ready');
      setProgress(0);
      return;
    }
  }, [showRewarded]);

  const handleWatchAd = () => {
    setAdState('playing');
    const duration = 5000;
    const interval = 100;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);
      
      if (elapsed >= duration) {
        clearInterval(timer);
        setAdState('completed');
      }
    }, interval);
  };

  const handleClaimReward = () => {
    closeRewardedAd(true);
  };

  const handleCancel = () => {
    closeRewardedAd(false);
  };

  if (!showRewarded || isPro) return null;

  return (
    <div ref={ref} className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6">
      <Card className="w-full max-w-sm border-0 shadow-card overflow-hidden">
        {adState === 'ready' && (
          <>
            <div className="bg-gradient-to-br from-accent via-accent to-accent/80 p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                {t('Belohnung erhalten', 'Get Reward')}
              </h3>
              <p className="text-white/90 text-sm mt-1">
                {t('Schau ein kurzes Video', 'Watch a short video')}
              </p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div 
                id="rewarded-ad-container"
                data-ad-unit-id={adUnitIds.rewarded}
                className="w-full aspect-video rounded-xl border-2 border-dashed border-border/50 bg-muted/30 flex items-center justify-center"
              >
                <div className="text-center">
                  <Play className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground">
                    {t('Video-Werbung', 'Video Ad')}
                  </p>
                </div>
              </div>
              
              <Button 
                className="w-full h-12 text-base font-semibold gap-2"
                onClick={handleWatchAd}
              >
                <Play className="h-5 w-5" />
                {t('Video ansehen', 'Watch Video')}
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={handleCancel}
              >
                {t('Abbrechen', 'Cancel')}
              </Button>
            </CardContent>
          </>
        )}

        {adState === 'playing' && (
          <>
            <div className="p-4 border-b border-border flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                {t('Werbung läuft...', 'Ad playing...')}
              </span>
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            </div>
            <CardContent className="p-6">
              <div className="w-full aspect-video rounded-xl bg-muted/50 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-pulse" />
                <div className="relative text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-background/80 flex items-center justify-center">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">
                    {t('Video wird abgespielt', 'Video playing')}
                  </p>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-center text-muted-foreground mt-2">
                {t('Bitte warte...', 'Please wait...')}
              </p>
            </CardContent>
          </>
        )}

        {adState === 'completed' && (
          <>
            <div className="bg-gradient-to-br from-success via-success to-success/80 p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pop">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                {t('Geschafft!', 'Completed!')}
              </h3>
              <p className="text-white/90 text-sm mt-1">
                {t('Deine Belohnung ist bereit', 'Your reward is ready')}
              </p>
            </div>
            <CardContent className="p-6 space-y-4">
              <Button 
                className="w-full h-12 text-base font-semibold gap-2 bg-success hover:bg-success/90"
                onClick={handleClaimReward}
              >
                <Gift className="h-5 w-5" />
                {t('Belohnung einlösen', 'Claim Reward')}
              </Button>
            </CardContent>
          </>
        )}
      </Card>

      {adState !== 'ready' && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-muted-foreground"
          onClick={handleCancel}
          disabled={adState === 'playing'}
        >
          <X className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
});
