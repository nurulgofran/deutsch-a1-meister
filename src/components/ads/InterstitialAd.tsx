import { useEffect, useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAds } from '@/contexts/AdContext';
import { useApp } from '@/contexts/AppContext';

export function InterstitialAd() {
  const { showInterstitial, closeInterstitial, adUnitIds, isPro } = useAds();
  const { t } = useApp();
  const [countdown, setCountdown] = useState(5);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if (!showInterstitial) {
      setCountdown(5);
      setCanClose(false);
      return;
    }

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setCanClose(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showInterstitial]);

  if (!showInterstitial || isPro) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <span className="text-sm text-muted-foreground font-medium">
          {t('Werbung', 'Advertisement')}
        </span>
        {canClose ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={closeInterstitial}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            {t('Schließen', 'Close')}
          </Button>
        ) : (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            {t('Schließen in', 'Close in')} {countdown}s
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div 
          id="interstitial-ad-container"
          data-ad-unit-id={adUnitIds.interstitial}
          className="w-full max-w-md aspect-[4/5] rounded-3xl border-2 border-dashed border-border/50 bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 flex items-center justify-center"
        >
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">📺</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium mb-2">
              Interstitial Ad Placeholder
            </p>
            <p className="text-xs text-muted-foreground/70">
              {adUnitIds.interstitial}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">
          {t('Unterstütze uns mit dieser Werbung', 'Support us by viewing this ad')}
        </p>
      </div>
    </div>
  );
}
