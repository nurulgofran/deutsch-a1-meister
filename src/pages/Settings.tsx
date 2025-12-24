import { useState } from 'react';
import { Globe, MapPin, RotateCcw, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
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
import { bundeslaender } from '@/data/questions';

export default function Settings() {
  const { settings, updateSettings, resetProgress, t } = useApp();
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

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

  return (
    <div className="min-h-screen pb-28 safe-area-top">
      <div className="px-5 pt-8 pb-5">
        <h1 className="text-3xl font-display font-bold tracking-tight mb-2">
          {t('Einstellungen', 'Settings')}
        </h1>
        <p className="text-muted-foreground font-medium">
          {t('Passe die App an deine Bedürfnisse an', 'Customize the app to your needs')}
        </p>
      </div>

      <div className="px-5 space-y-4 stagger-children">
        {/* Language Toggle */}
        <div className="card-floating p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                <Globe className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <Label className="text-base font-display font-bold">
                  {t('Sprache', 'Language')}
                </Label>
                <p className="text-sm text-muted-foreground font-medium">
                  {settings.language === 'de' ? 'Deutsch' : 'English'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${settings.language === 'de' ? 'text-primary' : 'text-muted-foreground'}`}>DE</span>
              <Switch
                checked={settings.language === 'en'}
                onCheckedChange={handleLanguageToggle}
              />
              <span className={`text-sm font-semibold ${settings.language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}>EN</span>
            </div>
          </div>
        </div>

        {/* Bundesland Selection */}
        <div className="card-floating p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
              <MapPin className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div>
              <Label className="text-base font-display font-bold">
                {t('Bundesland', 'State')}
              </Label>
              <p className="text-sm text-muted-foreground font-medium">
                {t('Für landesspezifische Fragen', 'For state-specific questions')}
              </p>
            </div>
          </div>
          <Select value={settings.bundesland} onValueChange={handleBundeslandChange}>
            <SelectTrigger className="w-full h-14 rounded-xl text-base font-medium">
              <SelectValue placeholder={t('Bundesland wählen', 'Select state')} />
            </SelectTrigger>
            <SelectContent>
              {bundeslaender.map((land) => (
                <SelectItem key={land} value={land} className="text-base">
                  {land}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Reset Progress */}
        <div className="card-floating p-5 border-destructive/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-destructive/15 flex items-center justify-center">
                <RotateCcw className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <Label className="text-base font-display font-bold">
                  {t('Fortschritt zurücksetzen', 'Reset Progress')}
                </Label>
                <p className="text-sm text-muted-foreground font-medium">
                  {t('Alle Daten löschen', 'Delete all data')}
                </p>
              </div>
            </div>
            <AlertDialog open={resetConfirmOpen} onOpenChange={setResetConfirmOpen}>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm" className="rounded-xl font-semibold">
                  {t('Zurücksetzen', 'Reset')}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="rounded-2xl">
                <AlertDialogHeader>
                  <AlertDialogTitle className="font-display">
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
                  <AlertDialogCancel className="rounded-xl">{t('Abbrechen', 'Cancel')}</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleReset}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl"
                  >
                    {t('Ja, löschen', 'Yes, delete')}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* App Info */}
        <div className="card-floating p-5 bg-muted/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
              <Info className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-display font-bold">Leben in Deutschland</p>
              <p className="text-sm text-muted-foreground font-medium">Version 1.0.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
