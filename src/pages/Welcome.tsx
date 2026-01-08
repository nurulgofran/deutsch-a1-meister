import { useState } from 'react';
import { BookOpen, Globe, Zap, Trophy, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Language, languages } from '@/i18n';

interface WelcomeProps {
  onComplete: () => void;
}

const features = [
  {
    icon: BookOpen,
    color: 'emerald',
    titleKey: 'Vocabulary Flashcards',
    descKey: 'Learn 600+ A1 words with images and audio'
  },
  {
    icon: Zap,
    color: 'amber',
    titleKey: 'Grammar Patterns',
    descKey: 'Master essential A1 grammar rules'
  },
  {
    icon: Trophy,
    color: 'purple',
    titleKey: 'Mock Exams',
    descKey: 'Practice with real Start Deutsch 1 format'
  }
];

export default function Welcome({ onComplete }: WelcomeProps) {
  const [step, setStep] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');

  const handleGetStarted = () => {
    // Save selected language
    const settings = { language: selectedLanguage, notificationsEnabled: true };
    localStorage.setItem('a1m-settings', JSON.stringify(settings));
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-background flex flex-col">
      {/* Header */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/30 mb-6">
          <span className="text-4xl">🇩🇪</span>
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">
          Deutsch A1 Meister
        </h1>
        
        <p className="text-muted-foreground text-center mb-8 max-w-sm">
          Master German A1 with gamified learning. Based on the official Goethe-Institut curriculum.
        </p>

        {/* Features */}
        <div className="w-full max-w-sm space-y-3 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses: Record<string, string> = {
              emerald: 'bg-emerald-500/15 text-emerald-600',
              amber: 'bg-amber-500/15 text-amber-600',
              purple: 'bg-purple-500/15 text-purple-600'
            };
            
            return (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    colorClasses[feature.color]
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.titleKey}</h3>
                    <p className="text-sm text-muted-foreground">{feature.descKey}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Language Selection */}
        <div className="w-full max-w-sm mb-6">
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            <Globe className="w-4 h-4" />
            Choose your language
          </label>
          <Select value={selectedLanguage} onValueChange={(v) => setSelectedLanguage(v as Language)}>
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
          <p className="text-xs text-muted-foreground mt-2">
            German words will be shown with translations in your selected language.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 safe-area-bottom">
        <Button 
          className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20"
          onClick={handleGetStarted}
        >
          Get Started
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
        
        <p className="text-xs text-center text-muted-foreground mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
