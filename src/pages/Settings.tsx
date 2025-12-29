import { useState } from 'react';
import { Globe, MapPin, RotateCcw, Info, Mail, User, Crown, Check, Loader2, Shield, ExternalLink, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
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
import { bundeslaender } from '@/data/questions/index';
import { useAds } from '@/contexts/AdContext';
import { purchasePro, restorePurchases } from '@/lib/billing';
import { Browser } from '@capacitor/browser';
import { toast } from 'sonner';

// Launch Promo Code Configuration
const PROMO_CONFIG = {
  code: 'WELCOME',
  expirationDate: new Date('2025-02-10T23:59:59'),
};

export default function Settings() {
  const { settings, updateSettings, resetProgress, t } = useApp();
  const { isPro, setPro } = useAds();
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const [isLoadingPro, setIsLoadingPro] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [isRedeemingPromo, setIsRedeemingPromo] = useState(false);

  const handleRedeemPromoCode = async () => {
    if (!promoCode.trim()) {
      toast.error(t('Bitte gib einen Code ein', 'Please enter a code'));
      return;
    }

    setIsRedeemingPromo(true);
    
    // Check if promo period has expired
    if (new Date() > PROMO_CONFIG.expirationDate) {
      toast.error(t('Dieser Code ist abgelaufen', 'This code has expired'));
      setIsRedeemingPromo(false);
      return;
    }

    // Validate the code (case-insensitive)
    if (promoCode.trim().toUpperCase() === PROMO_CONFIG.code) {
      setPro(true);
      localStorage.setItem('lid-is-pro', 'true');
      localStorage.setItem('lid-promo-redeemed', 'true');
      toast.success(t('Pro-Version aktiviert! 🎉', 'Pro version activated! 🎉'));
      setPromoCode('');
    } else {
      toast.error(t('Ungültiger Code', 'Invalid code'));
    }
    
    setIsRedeemingPromo(false);
  };

  const handleLanguageToggle = () => {
    updateSettings({ language: settings.language === 'de' ? 'en' : 'de' });
  };

  const handleBundeslandChange = (value: string) => {
    updateSettings({ bundesland: value as typeof settings.bundesland });
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
        setPro(true); // <--- Update Context Immediately
        toast.success(t('Willkommen bei Pro!', 'Welcome to Pro!'));
      } else if (result.error && result.error !== 'cancelled') {
        toast.error(t('Kauf fehlgeschlagen', 'Purchase failed'));
      }
    } catch (error) {
      console.error('Purchase failed', error);
      toast.error(t('Kauf fehlgeschlagen', 'Purchase failed'));
    } finally {
      setIsLoadingPro(false);
    }
  };

  const handleRestore = async () => {
    setIsLoadingPro(true);
    try {
      const result = await restorePurchases();
      if (result.success) {
        setPro(true); // <--- Update Context Immediately
        toast.success(t('Einkäufe wiederhergestellt!', 'Purchases restored!'));
      } else {
        toast.info(t('Keine Einkäufe gefunden', 'No purchases found'));
      }
    } catch (error) {
      toast.error(t('Fehler beim Wiederherstellen', 'Error restoring'));
    } finally {
      setIsLoadingPro(false);
    }
  };

  return (
    <div className="min-h-screen pb-24 safe-area-top">
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-2xl font-bold mb-1">
          {t('Einstellungen', 'Settings')}
        </h1>
        <p className="text-muted-foreground">
          {t('Passe die App an deine Bedürfnisse an', 'Customize the app to your needs')}
        </p>
      </div>

      <div className="px-5 space-y-4">
        
        {/* PRO / PREMIUM Section */}
        <Card className="border-2 border-primary/20 overflow-hidden relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent pointer-events-none" />
          
          <CardContent className="p-5 relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight">
                    {isPro ? t('Pro ist aktiv! 🎉', 'Pro is active! 🎉') : t('Premium Version', 'Premium Version')}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {isPro 
                      ? t('Danke für deine Unterstützung', 'Thanks for your support')
                      : t('Schalte alle Vorteile frei', 'Unlock all benefits')
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {[
                { de: 'Keine Werbung', en: 'No Ads' },
                { de: 'Sofortige Erklärungen', en: 'Instant Explanations' },
                { de: 'Unbegrenzte Prüfungen', en: 'Unlimited Exams' },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="font-medium text-foreground/80">
                    {t(feature.de, feature.en)}
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
                    t('Jetzt upgraden - 4,99€', 'Upgrade Now - €4.99')
                  )}
                </Button>
                
                <button 
                  onClick={handleRestore}
                  disabled={isLoadingPro}
                  className="w-full text-center text-xs font-semibold text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
                >
                  {t('Käufe wiederherstellen', 'Restore Purchases')}
                </button>

                {/* Promo Code Section */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">
                      {t('Promo-Code einlösen', 'Redeem Promo Code')}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder={t('Code eingeben...', 'Enter code...')}
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
                        t('Einlösen', 'Redeem')
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}
             
            {isPro && (
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-center">
                <p className="text-xs font-bold text-primary">
                  {t('Du nutzt die beste Version!', 'You are using the best version!')}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Language Toggle */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Globe className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <Label className="text-base font-medium">
                    {t('Sprache', 'Language')}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {settings.language === 'de' ? 'Deutsch' : 'English'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${settings.language === 'de' ? 'font-semibold' : 'text-muted-foreground'}`}>DE</span>
                <Switch
                  checked={settings.language === 'en'}
                  onCheckedChange={handleLanguageToggle}
                />
                <span className={`text-sm ${settings.language === 'en' ? 'font-semibold' : 'text-muted-foreground'}`}>EN</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bundesland Selection */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <MapPin className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <Label className="text-base font-medium">
                  {t('Bundesland', 'State')}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {t('Für landesspezifische Fragen', 'For state-specific questions')}
                </p>
              </div>
            </div>
            <Select value={settings.bundesland} onValueChange={handleBundeslandChange}>
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder={t('Bundesland wählen', 'Select state')} />
              </SelectTrigger>
              <SelectContent>
                {bundeslaender.map((land) => (
                  <SelectItem key={land} value={land}>
                    {land}
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
                    {t('Fortschritt zurücksetzen', 'Reset Progress')}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {t('Alle Daten löschen', 'Delete all data')}
                  </p>
                </div>
              </div>
              <AlertDialog open={resetConfirmOpen} onOpenChange={setResetConfirmOpen}>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    {t('Zurücksetzen', 'Reset')}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {t('Fortschritt löschen?', 'Delete progress?')}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {t(
                        'Diese Aktion kann nicht rückgängig gemacht werden. Dein gesamter Lernfortschritt, alle Prüfungsergebnisse und Erfolge werden gelöscht.',
                        'This action cannot be undone. All your learning progress, exam results, and achievements will be deleted.'
                      )}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>{t('Abbrechen', 'Cancel')}</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={handleReset}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      {t('Ja, löschen', 'Yes, delete')}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
                <p className="font-medium">Leben in Deutschland</p>
                <p className="text-sm text-muted-foreground">Version 1.0.0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy */}
        <Card>
          <CardContent className="p-4">
            <button 
              onClick={() => Browser.open({ url: 'https://www.nurulgofran.dev/lebenindeutschland/privacypolicy/' })}
              className="flex items-center justify-between w-full text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Shield className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-medium">
                    {t('Datenschutzerklärung', 'Privacy Policy')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('Lesen Sie unsere Datenschutzrichtlinien', 'Read our privacy guidelines')}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </button>
          </CardContent>
        </Card>

        {/* Developer/Author Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-primary">
                  {t('Entwickelt von', 'Developed by')}
                </p>
                <p className="text-sm font-semibold">Md Norul Gofran</p>
              </div>
            </div>
            <div className="pl-13 space-y-2">
              <a 
                href="mailto:nurulgofran@gmail.com?subject=Leben%20in%20Deutschland%20App%20-%20Feedback"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                nurulgofran@gmail.com
              </a>
              <p className="text-xs text-muted-foreground">
                {t(
                  'Haben Sie einen Fehler gefunden oder einen Vorschlag? Schreiben Sie mir gerne!',
                  'Found a bug or have a suggestion? Feel free to reach out!'
                )}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
