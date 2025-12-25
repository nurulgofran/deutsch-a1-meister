import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Crown, Check, Sparkles, Zap } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useAds } from '@/contexts/AdContext';
import { toast } from 'sonner';

interface ProModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProModal({ open, onOpenChange }: ProModalProps) {
  const { t } = useApp();
  const { setPro } = useAds();

  const features = [
    { de: 'Detaillierte Erklärungen zu jeder Frage', en: 'Detailed explanations for every question', icon: Sparkles },
    { de: 'Alle 460 offiziellen Fragen', en: 'All 460 official questions', icon: Check },
    { de: 'Unbegrenzte Prüfungssimulationen', en: 'Unlimited exam simulations', icon: Zap },
    { de: 'Keine Werbung', en: 'No advertisements', icon: Check },
    { de: 'Offline-Modus für alle Inhalte', en: 'Offline mode for all content', icon: Check }
  ];

  const handlePurchase = () => {
    setPro(true);
    toast.success(t('Pro-Version aktiviert!', 'Pro version activated!'));
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[360px] rounded-3xl border-0 shadow-card p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-accent via-accent to-accent/80 p-6 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10 blur-xl" />
          <div className="relative">
            <div className="mx-auto w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4 shadow-lg">
              <Crown className="h-10 w-10 text-white" />
            </div>
            <DialogTitle className="text-2xl font-display font-extrabold text-white">
              {t('Pro Version', 'Pro Version')}
            </DialogTitle>
            <DialogDescription className="text-white/90 font-medium mt-1">
              {t('Schalte alle Funktionen frei', 'Unlock all features')}
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
            >
              <Sparkles className="h-5 w-5" />
              {t('Pro für 4,99€ kaufen', 'Buy Pro for $4.99')}
            </Button>
            <Button 
              variant="ghost" 
              className="w-full h-12 font-medium"
              onClick={() => onOpenChange(false)}
            >
              {t('Später', 'Maybe later')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
