import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useAppStore, UserProgress, AppSettings } from '@/hooks/useAppStore';
import { LessonId } from '@/data';
import { t as translate, Language, getTranslations } from '@/i18n';

interface AppContextType {
  // Progress & State
  progress: UserProgress;
  settings: AppSettings;
  isLoaded: boolean;
  level: number;
  levelProgress: number;
  isStreakActiveToday: boolean;
  streakJustIncremented: boolean;
  
  // Actions
  clearStreakIncrement: () => void;
  addXP: (amount: number) => void;
  recordCorrectAnswer: (lessonId: LessonId, wordId: string) => void;
  recordIncorrectAnswer: (lessonId: LessonId) => void;
  completeLesson: (lessonId: LessonId) => void;
  completeGrammar: (patternId: string) => void;
  addAchievement: (achievementId: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  resetProgress: () => void;
  getLessonMastery: (lessonId: LessonId) => number;
  isLessonCompleted: (lessonId: LessonId) => boolean;
  
  // i18n
  t: (path: string) => string;
  translations: ReturnType<typeof getTranslations>;
  language: Language;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const store = useAppStore();

  // Translation helper using current language
  const t = (path: string): string => {
    return translate(store.settings.language, path);
  };

  // Get all translations for current language
  const translations = useMemo(() => {
    return getTranslations(store.settings.language);
  }, [store.settings.language]);

  const contextValue: AppContextType = {
    ...store,
    t,
    translations,
    language: store.settings.language
  };

  return (
    <AppContext.Provider value={contextValue}>
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
