import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import { AdProvider } from "@/contexts/AdContext";
import { BottomNav } from "@/components/BottomNav";
import { InterstitialAd, RewardedAd } from "@/components/ads";
import { OfflineBanner } from "@/components/OfflineBanner";
import { StreakMilestone } from "@/components/StreakMilestone";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";
import Exam from "./pages/Exam";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";

import { storage } from '@/lib/storage';
import { initializeBilling } from '@/lib/billing';

const queryClient = new QueryClient();

function AppContent() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const seen = storage.get<string>('hasSeenOnboarding', 'false') === 'true';
    setHasSeenOnboarding(seen);
  }, []);

  const handleOnboardingComplete = () => {
    storage.set('hasSeenOnboarding', 'true');
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

  // Hide bottom nav on learn pages
  const hideBottomNav = location.pathname.startsWith('/learn/');

  return (
    <div className="min-h-screen bg-background">
      <OfflineBanner />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learn/:lessonId" element={<Learn />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideBottomNav && <BottomNav />}
      {/* Global ad overlays */}
      <InterstitialAd />
      <RewardedAd />
      {/* Streak milestone celebration */}
      <StreakMilestone />
    </div>
  );
}

function App() {
  // Initialize RevenueCat on app startup
  useEffect(() => {
    initializeBilling();
  }, []);

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
