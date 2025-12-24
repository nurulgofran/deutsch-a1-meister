import React, { createContext, useContext, ReactNode } from 'react';
import { useAppStore, UserProgress, AppSettings, ExamResult } from '@/hooks/useAppStore';

interface AppContextType {
  progress: UserProgress;
  settings: AppSettings;
  isLoaded: boolean;
  recordAnswer: (questionId: string, category: string, isCorrect: boolean) => void;
  recordExamResult: (result: ExamResult) => void;
  toggleBookmark: (questionId: string) => void;
  addAchievement: (achievementId: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  resetProgress: () => void;
  getReadinessScore: () => number;
  getMasteredCount: () => number;
  t: (de: string, en: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const store = useAppStore();

  // Translation helper
  const t = (de: string, en: string): string => {
    return store.settings.language === 'de' ? de : en;
  };

  return (
    <AppContext.Provider value={{ ...store, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
