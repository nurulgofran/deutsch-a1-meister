import { useState } from 'react';
import { Globe, MapPin, RotateCcw, Info, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import { bundeslaender } from '@/data/questions/index';

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
