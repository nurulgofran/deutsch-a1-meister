import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Crown, Check, Sparkles } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

interface ProModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProModal({ open, onOpenChange }: ProModalProps) {
  const { t } = useApp();

  const features = [
    { de: 'Detaillierte Erklärungen zu jeder Frage', en: 'Detailed explanations for every question' },
    { de: 'Alle 460 offiziellen Fragen', en: 'All 460 official questions' },
    { de: 'Unbegrenzte Prüfungssimulationen', en: 'Unlimited exam simulations' },
    { de: 'Keine Werbung', en: 'No advertisements' },
    { de: 'Offline-Modus für alle Inhalte', en: 'Offline mode for all content' }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[340px] rounded-2xl">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-3">
            <Crown className="h-8 w-8 text-accent-foreground" />
          </div>
          <DialogTitle className="text-xl">
            {t('Pro Version freischalten', 'Unlock Pro Version')}
          </DialogTitle>
          <DialogDescription className="text-base">
            {t(
              'Erhalte Zugang zu allen Premium-Funktionen',
              'Get access to all premium features'
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                <Check className="h-3 w-3 text-success" />
              </div>
              <span className="text-sm">
                {t(feature.de, feature.en)}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-2">
          <Button 
            className="w-full h-12 text-base font-semibold gap-2" 
            size="lg"
            onClick={() => onOpenChange(false)}
          >
            <Sparkles className="h-5 w-5" />
            {t('Pro für 4,99€ kaufen', 'Buy Pro for $4.99')}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={() => onOpenChange(false)}
          >
            {t('Später', 'Maybe later')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
