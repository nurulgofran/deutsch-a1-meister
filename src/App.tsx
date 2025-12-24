import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import { BottomNav } from "@/components/BottomNav";
import Dashboard from "./pages/Dashboard";
import Study from "./pages/Study";
import Exam from "./pages/Exam";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import { Bundesland } from "@/data/questions/index";

const queryClient = new QueryClient();

function AppContent() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = localStorage.getItem('hasSeenOnboarding') === 'true';
    setHasSeenOnboarding(seen);
  }, []);

  const handleOnboardingComplete = (bundesland: Bundesland) => {
    // Save the selected bundesland to settings
    const currentSettings = localStorage.getItem('lid-settings');
    const settings = currentSettings ? JSON.parse(currentSettings) : {};
    settings.bundesland = bundesland;
    localStorage.setItem('lid-settings', JSON.stringify(settings));
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
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study" element={<Study />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <AppProvider>
            <Toaster />
            <Sonner />
            <AppContent />
          </AppProvider>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
