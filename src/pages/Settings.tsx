import { useState, useEffect } from 'react';
import { Globe, RotateCcw, Info, Mail, User, Crown, Check, Loader2, Shield, ExternalLink, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useApp } from '@/contexts/AppContext';
import { useAds } from '@/contexts/AdContext';
import { purchasePro, restorePurchases, getProPrice } from '@/lib/billing';
import { Browser } from '@capacitor/browser';
import { toast } from 'sonner';
import { Language, languages } from '@/i18n';

// Launch Promo Code Configuration
const PROMO_CONFIG = {
  code: 'WELCOME',
  expirationDate: new Date('2026-02-10T23:59:59'),
};

export default function Settings() {
  const { settings, updateSettings, resetProgress, t } = useApp();
  const { isPro, setPro } = useAds();
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const [isLoadingPro, setIsLoadingPro] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [isRedeemingPromo, setIsRedeemingPromo] = useState(false);
  const [dynamicPrice, setDynamicPrice] = useState<string | null>(null);

  // Fetch dynamic price from RevenueCat on mount
  useEffect(() => {
    getProPrice().then(price => {
      if (price) {
        setDynamicPrice(price);
      }
    });
  }, []);

  const handleRedeemPromoCode = async () => {
    if (!promoCode.trim()) {
      toast.error('Please enter a code');
      return;
    }

    setIsRedeemingPromo(true);
    
    if (new Date() > PROMO_CONFIG.expirationDate) {
      toast.error('This code has expired');
      setIsRedeemingPromo(false);
      return;
    }

    if (promoCode.trim().toUpperCase() === PROMO_CONFIG.code) {
      setPro(true);
      localStorage.setItem('a1m-is-pro', 'true');
      localStorage.setItem('a1m-promo-redeemed', 'true');
      toast.success('Pro version activated! 🎉');
      setPromoCode('');
    } else {
      toast.error('Invalid code');
    }
    
    setIsRedeemingPromo(false);
  };

  const handleLanguageChange = (value: string) => {
    updateSettings({ language: value as Language });
  };

  const handleReset = () => {
    resetProgress();
    setResetConfirmOpen(false);
  };

  const handleUpgrade = async () => {
    setIsLoadingPro(true);
    try {
      const result = await purchasePro();
      if (result.success) {
        setPro(true);
        toast.success('Welcome to Pro!');
      } else if (result.error && result.error !== 'cancelled') {
        toast.error('Purchase failed');
      }
    } catch (error) {
      console.error('Purchase failed', error);
      toast.error('Purchase failed');
    } finally {
      setIsLoadingPro(false);
    }
  };

  const handleRestore = async () => {
    setIsLoadingPro(true);
    try {
      const result = await restorePurchases();
      if (result.success) {
        setPro(true);
        toast.success('Purchases restored!');
      } else {
        toast.info('No purchases found');
      }
    } catch (error) {
      toast.error('Error restoring');
    } finally {
      setIsLoadingPro(false);
    }
  };

  return (
    <div className="min-h-screen pb-28 safe-area-top overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <div className="px-5 pt-6 pb-3">
          <h1 className="text-2xl font-bold mb-0.5">
            {t('settings.title')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t('settings.subtitle')}
          </p>
        </div>

        <div className="px-5 space-y-3">
        
        {/* PRO / PREMIUM Section */}
        <Card className="border-2 border-primary/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent pointer-events-none" />
          
          <CardContent className="p-5 relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">
                    {isPro ? t('settings.premiumActive') : t('settings.premium')}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {isPro 
                      ? 'Thanks for your support'
                      : t('settings.premiumSubtitle')
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {[
                'All 12 Vocabulary Lessons',
                'Grammar Patterns',
                'Mock Exam Access',
                'No Ads',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="font-medium text-foreground/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {!isPro && (
              <div className="space-y-3">
                <Button 
                  className="w-full h-12 font-bold text-base shadow-lg shadow-primary/20" 
                  onClick={handleUpgrade}
                  disabled={isLoadingPro}
                >
                  {isLoadingPro ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    dynamicPrice 
                      ? `${t('settings.upgrade')} - ${dynamicPrice}`
                      : t('settings.upgrade')
                  )}
                </Button>
                
                <button 
                  onClick={handleRestore}
                  disabled={isLoadingPro}
                  className="w-full text-center text-xs font-semibold text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
                >
                  {t('settings.restore')}
                </button>

                {/* Promo Code Section */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">
                      Redeem Promo Code
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code..."
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 h-10"
                      disabled={isRedeemingPromo}
                    />
                    <Button
                      variant="secondary"
                      className="h-10 px-4"
                      onClick={handleRedeemPromoCode}
                      disabled={isRedeemingPromo || isLoadingPro}
                    >
                      {isRedeemingPromo ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        'Redeem'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}
             
            {isPro && (
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-center">
                <p className="text-xs font-bold text-primary">
                  You are using the best version!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Language Selection */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Globe className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <Label className="text-base font-medium">
                  {t('settings.language')}
                </Label>
                <p className="text-sm text-muted-foreground">
                  German + your language
                </p>
              </div>
            </div>
            <Select value={settings.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-full h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(languages).map(([code, { name, nativeName }]) => (
                  <SelectItem key={code} value={code}>
                    {nativeName} ({name})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Reset Progress */}
        <Card className="border-destructive/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <RotateCcw className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <Label className="text-base font-medium">
                    {t('settings.reset')}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Delete all data
                  </p>
                </div>
              </div>
              <AlertDialog open={resetConfirmOpen} onOpenChange={setResetConfirmOpen}>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    Reset
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {t('settings.resetConfirm')}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {t('settings.resetWarning')}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>{t('settings.cancel')}</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={handleReset}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      {t('settings.confirm')}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Official Source */}
        <Card className="border-blue-500/30 bg-blue-500/5">
          <CardContent className="p-4">
            <button 
              onClick={() => Browser.open({ url: 'https://www.goethe.de/de/spr/kup/prf/prf/sd1.html' })}
              className="flex items-center justify-between w-full text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">
                    {t('settings.officialSource')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('settings.officialSourceSubtitle')}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </button>
          </CardContent>
        </Card>

        {/* Important Disclaimer */}
        <Card className="border-amber-500/30 bg-amber-500/5">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0">
                <Info className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="font-medium text-amber-700 dark:text-amber-500">
                  {t('settings.disclaimer')}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('settings.disclaimerText')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <Card className="bg-muted/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Info className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">Deutsch A1 Meister</p>
                <p className="text-sm text-muted-foreground">{t('settings.version')} 1.0.0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy */}
        <Card>
          <CardContent className="p-4">
            <button 
              onClick={() => Browser.open({ url: 'https://www.nurulgofran.dev/deutscha1meister/privacypolicy/' })}
              className="flex items-center justify-between w-full text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Shield className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-medium">
                    {t('settings.privacy')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Read our privacy guidelines
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </button>
          </CardContent>
        </Card>

        {/* Developer Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-primary">
                  {t('settings.developer')}
                </p>
                <p className="text-sm font-semibold">Md Norul Gofran</p>
              </div>
            </div>
            <div className="pl-13 space-y-2">
              <a 
                href="mailto:nurulgofran@gmail.com?subject=Deutsch%20A1%20Meister%20-%20Feedback"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                nurulgofran@gmail.com
              </a>
              <p className="text-xs text-muted-foreground">
                Found a bug or have a suggestion? Feel free to reach out!
              </p>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
