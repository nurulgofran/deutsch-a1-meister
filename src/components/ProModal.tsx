import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Crown, Sparkles, Ban, Lightbulb, RotateCcw, Loader2, Gift } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useAds } from '@/contexts/AdContext';
import { toast } from 'sonner';
import { purchasePro, restorePurchases, redeemPromoCode, isAndroidPlatform, BILLING_CONFIG } from '@/lib/billing';

interface ProModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProModal({ open, onOpenChange }: ProModalProps) {
  const { t, settings } = useApp();
  const { setPro } = useAds();
  const [isLoading, setIsLoading] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [isRedeeming, setIsRedeeming] = useState(false);
  
  const isAndroid = isAndroidPlatform();

  const handleRedeemPromoCode = async () => {
    setIsRedeeming(true);
    try {
      await redeemPromoCode(promoCode);
      toast.info(t(
        'Nachdem du deinen Code eingelöst hast, klicke auf "Kauf wiederherstellen".',
        'After redeeming your code, click "Restore purchase" below.'
      ));
    } catch (error) {
      toast.error(t(
        'Fehler beim Öffnen von Google Play.',
        'Failed to open Google Play.'
      ));
    } finally {
      setIsRedeeming(false);
      setPromoCode('');
    }
  };

  // Only Pro-exclusive features (things free users DON'T get)
  const features = [
    { 
      de: 'Detaillierte Erklärungen zu jeder Frage', 
      en: 'Detailed explanations for every question', 
      icon: Lightbulb 
    },
    { 
      de: 'Keine Werbung', 
      en: 'No advertisements', 
      icon: Ban 
    },
    { 
      de: 'Kostenlose Hinweise (ohne Videos)', 
      en: 'Free hints (no video ads)', 
      icon: Sparkles 
    },
  ];

  const handlePurchase = async () => {
    setIsLoading(true);
    
    try {
      const result = await purchasePro();
      
      if (result.success) {
        setPro(true);
        toast.success(t('Pro-Version aktiviert! 🎉', 'Pro version activated! 🎉'));
        onOpenChange(false);
      } else if (result.error === 'cancelled') {
        // User cancelled, do nothing
      } else {
        toast.error(t(
          'Kauf fehlgeschlagen. Bitte versuche es erneut.',
          'Purchase failed. Please try again.'
        ));
      }
    } catch (error) {
      toast.error(t(
        'Ein Fehler ist aufgetreten.',
        'An error occurred.'
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestore = async () => {
    setIsRestoring(true);
    
    try {
      const result = await restorePurchases();
      
      if (result.success) {
        setPro(true);
        toast.success(t('Kauf wiederhergestellt! 🎉', 'Purchase restored! 🎉'));
        onOpenChange(false);
      } else {
        toast.info(t(
          'Kein vorheriger Kauf gefunden.',
          'No previous purchase found.'
        ));
      }
    } catch (error) {
      toast.error(t(
        'Wiederherstellung fehlgeschlagen.',
        'Restore failed.'
      ));
    } finally {
      setIsRestoring(false);
    }
  };

  const priceDisplay = settings.language === 'de' 
    ? BILLING_CONFIG.priceDE 
    : BILLING_CONFIG.price;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[360px] rounded-3xl border-0 shadow-card p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-accent via-accent to-accent/80 p-6 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="relative">
            <div className="mx-auto w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4 shadow-lg">
              <Crown className="h-10 w-10 text-white" />
            </div>
            <DialogTitle className="text-2xl font-display font-extrabold text-white">
              {t('Pro Version', 'Pro Version')}
            </DialogTitle>
            <DialogDescription className="text-white/90 font-medium mt-1">
              {t('Lerne ohne Unterbrechungen', 'Learn without interruptions')}
            </DialogDescription>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-3 mb-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="w-8 h-8 rounded-xl bg-success/15 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-sm font-medium">
                    {t(feature.de, feature.en)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            <Button 
              className="w-full h-14 text-base font-display font-bold gap-2 rounded-xl shadow-button animate-pop" 
              size="lg"
              onClick={handlePurchase}
              disabled={isLoading || isRestoring}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Sparkles className="h-5 w-5" />
              )}
              {isLoading 
                ? t('Wird verarbeitet...', 'Processing...') 
                : t(`Pro für ${priceDisplay} kaufen`, `Buy Pro for ${priceDisplay}`)
              }
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-10 text-sm font-medium gap-2"
              onClick={handleRestore}
              disabled={isLoading || isRestoring || isRedeeming}
            >
              {isRestoring ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RotateCcw className="h-4 w-4" />
              )}
              {t('Kauf wiederherstellen', 'Restore purchase')}
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full h-10 font-medium text-muted-foreground"
              onClick={() => onOpenChange(false)}
              disabled={isLoading || isRestoring || isRedeeming}
            >
              {t('Später', 'Maybe later')}
            </Button>
          </div>
          
          {/* Promo Code Section - Android Only */}
          {isAndroid && (
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">
                  {t('Promo-Code einlösen', 'Redeem Promo Code')}
                </span>
              </div>
              
              <p className="text-xs text-muted-foreground mb-3">
                {t(
                  'Hast du einen Code? Löse ihn bei Google Play ein, um Pro freizuschalten.',
                  'Have a code? Redeem it on Google Play to unlock Pro features.'
                )}
              </p>
              
              <div className="flex gap-2">
                <Input
                  placeholder={t('Code eingeben...', 'Enter code...')}
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 h-10"
                  disabled={isRedeeming}
                />
                <Button
                  variant="secondary"
                  className="h-10 px-4"
                  onClick={handleRedeemPromoCode}
                  disabled={isLoading || isRestoring || isRedeeming}
                >
                  {isRedeeming ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    t('Einlösen', 'Redeem')
                  )}
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-2 italic">
                {t(
                  'Nach dem Einlösen bei Google Play, klicke oben auf "Kauf wiederherstellen".',
                  'After redeeming on Google Play, click "Restore purchase" above.'
                )}
              </p>
            </div>
          )}
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            {t(
              'Einmaliger Kauf. Keine Abos.',
              'One-time purchase. No subscriptions.'
            )}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}