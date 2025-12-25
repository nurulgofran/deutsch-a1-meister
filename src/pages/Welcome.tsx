import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, ChevronRight, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { bundeslaender, Bundesland } from '@/data/questions/index';
import { cn } from '@/lib/utils';

import { storage } from '@/lib/storage';

interface WelcomeProps {
  onComplete: (bundesland: Bundesland) => void;
}

export default function Welcome({ onComplete }: WelcomeProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedBundesland, setSelectedBundesland] = useState<Bundesland>('Berlin');

  const handleComplete = () => {
    storage.set('hasSeenOnboarding', 'true');
    onComplete(selectedBundesland);
    navigate('/');
  };

  const steps = [
    // Step 1: Welcome
    <div key="welcome" className="flex flex-col items-center justify-center text-center px-6 animate-fade-in">
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-xl animate-float">
          <GraduationCap className="w-16 h-16 text-primary" strokeWidth={1.5} />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center animate-bounce-in">
          <Sparkles className="w-4 h-4 text-accent-foreground" />
        </div>
      </div>
      
      <h1 className="text-3xl font-display font-bold text-foreground mb-4">
        Willkommen! 🎉
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xs">
        Ready to pass your <span className="text-primary font-semibold">Leben in Deutschland</span> test?
      </p>
      
      <Button 
        onClick={() => setStep(1)} 
        size="lg"
        className="w-full max-w-xs shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
      >
        Get Started
        <ChevronRight className="w-5 h-5 ml-2" />
      </Button>
    </div>,

    // Step 2: Value
    <div key="value" className="flex flex-col items-center justify-center text-center px-6 animate-fade-in">
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center shadow-xl animate-float">
          <BookOpen className="w-16 h-16 text-success" strokeWidth={1.5} />
        </div>
      </div>
      
      <h2 className="text-2xl font-display font-bold text-foreground mb-4">
        Learn Anywhere, Anytime
      </h2>
      <p className="text-lg text-muted-foreground mb-6 max-w-xs">
        Master all <span className="text-primary font-bold">310</span> official questions offline
      </p>
      
      {/* Gamified progress preview */}
      <div className="w-full max-w-xs bg-card rounded-2xl p-4 shadow-card mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">Your Progress</span>
          <span className="text-sm font-bold text-primary">85%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out"
            style={{ width: '85%' }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {['Politics', 'History', 'Society'].map((cat, i) => (
            <div key={cat} className="flex items-center gap-1">
              <div className={cn(
                "w-2 h-2 rounded-full",
                i === 0 && "bg-politics",
                i === 1 && "bg-history",
                i === 2 && "bg-society"
              )} />
              <span className="text-xs text-muted-foreground">{cat}</span>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        onClick={() => setStep(2)} 
        size="lg"
        className="w-full max-w-xs shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
      >
        Continue
        <ChevronRight className="w-5 h-5 ml-2" />
      </Button>
    </div>,

    // Step 3: Setup
    <div key="setup" className="flex flex-col items-center justify-center text-center px-6 animate-fade-in">
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-warning/20 flex items-center justify-center shadow-xl">
          <span className="text-5xl">🇩🇪</span>
        </div>
      </div>
      
      <h2 className="text-2xl font-display font-bold text-foreground mb-2">
        Which state are you in?
      </h2>
      <p className="text-muted-foreground mb-6 max-w-xs">
        We'll include 10 state-specific questions for your Bundesland
      </p>
      
      <div className="w-full max-w-xs mb-8">
        <Select 
          value={selectedBundesland} 
          onValueChange={(val) => setSelectedBundesland(val as Bundesland)}
        >
          <SelectTrigger className="h-14 text-lg bg-card border-2 border-muted shadow-card">
            <SelectValue placeholder="Select your state" />
          </SelectTrigger>
          <SelectContent className="bg-card border-muted">
            {bundeslaender.map((land) => (
              <SelectItem key={land} value={land} className="text-base py-3">
                {land}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Button 
        onClick={handleComplete} 
        size="lg"
        className="w-full max-w-xs bg-success hover:bg-success/90 text-success-foreground shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
      >
        <Check className="w-5 h-5 mr-2" />
        Let's Study!
      </Button>
    </div>
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-primary/5 via-background to-accent/5 flex flex-col">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-success/10 rounded-full blur-2xl" />
      
      {/* Progress dots */}
      <div className="flex justify-center gap-2 pt-12 pb-8">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => i < step && setStep(i)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              step === i 
                ? "w-8 bg-primary" 
                : step > i 
                  ? "bg-primary/50 cursor-pointer hover:bg-primary/70" 
                  : "bg-muted"
            )}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        {steps[step]}
      </div>
      
      {/* Skip button on first two steps */}
      {step < 2 && (
        <div className="pb-8 text-center">
          <button
            onClick={() => setStep(2)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip to setup
          </button>
        </div>
      )}
    </div>
  );
}
