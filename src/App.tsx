import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import { AdProvider } from "@/contexts/AdContext";
import { BottomNav } from "@/components/BottomNav";
import { InterstitialAd, RewardedAd } from "@/components/ads";
import { OfflineBanner } from "@/components/OfflineBanner";
import { StreakMilestone } from "@/components/StreakMilestone";
import Dashboard from "./pages/Dashboard";
import Study from "./pages/Study";
import Exam from "./pages/Exam";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import { Bundesland } from "@/data/questions/index";

import { storage } from '@/lib/storage';

const queryClient = new QueryClient();

function AppContent() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = storage.get<string>('hasSeenOnboarding', 'false') === 'true';
    setHasSeenOnboarding(seen);
  }, []);

  const handleOnboardingComplete = (bundesland: Bundesland) => {
    const settings: any = storage.get('lid-settings', {});
    settings.bundesland = bundesland;
    storage.set('lid-settings', settings);
    setHasSeenOnboarding(true);
  };

  // Loading state while checking localStorage
  if (hasSeenOnboarding === null) {
    return null;
  }

  // Show onboarding if not seen
  if (!hasSeenOnboarding) {
    return <Welcome onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <OfflineBanner />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study" element={<Study />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
      {/* Global ad overlays */}
      <InterstitialAd />
      <RewardedAd />
      {/* Streak milestone celebration */}
      <StreakMilestone />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <AppProvider>
            <AdProvider>
              <Toaster />
              <Sonner />
              <AppContent />
            </AdProvider>
          </AppProvider>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
