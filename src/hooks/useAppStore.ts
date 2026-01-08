import { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  LessonId, 
  LessonProgress,
  XP_PER_CORRECT,
  XP_LESSON_BONUS,
  XP_STREAK_BONUS,
  calculateLevel,
  xpProgressPercent
} from '@/data';
import { Language } from '@/i18n';

export interface UserProgress {
  xp: number;
  lessonProgress: Record<LessonId, LessonProgress>;
  wordsLearned: string[]; // All learned word IDs
  streak: number;
  lastActiveDate: string;
  achievements: string[];
}

export interface AppSettings {
  language: Language;
  notificationTime?: string; // HH:mm format
  notificationsEnabled: boolean;
}

const DEFAULT_PROGRESS: UserProgress = {
  xp: 0,
  lessonProgress: {} as Record<LessonId, LessonProgress>,
  wordsLearned: [],
  streak: 0,
  lastActiveDate: '',
  achievements: []
};

const DEFAULT_SETTINGS: AppSettings = {
  language: 'en',
  notificationsEnabled: true,
  notificationTime: '20:00'
};

// Detect browser language
const detectLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('bn')) return 'bn';
  if (browserLang.startsWith('tr')) return 'tr';
  if (browserLang.startsWith('hi')) return 'hi';
  if (browserLang.startsWith('ar')) return 'ar';
  return 'en';
};

// Get today's date string
const getTodayString = () => new Date().toISOString().split('T')[0];

export function useAppStore() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);
  const [streakJustIncremented, setStreakJustIncremented] = useState(false);

  // Derived values
  const level = useMemo(() => calculateLevel(progress.xp), [progress.xp]);
  const levelProgress = useMemo(() => xpProgressPercent(progress.xp), [progress.xp]);
  
  // Check if user has been active today
  const isStreakActiveToday = useMemo(() => {
    return progress.lastActiveDate === getTodayString();
  }, [progress.lastActiveDate]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('a1m-progress');
    const savedSettings = localStorage.getItem('a1m-settings');

    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        console.error('Failed to parse progress:', e);
      }
    }

    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.error('Failed to parse settings:', e);
      }
    } else {
      // Auto-detect language on first launch
      setSettings(prev => ({ ...prev, language: detectLanguage() }));
    }

    setIsLoaded(true);
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('a1m-progress', JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  // Save settings to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('a1m-settings', JSON.stringify(settings));
    }
  }, [settings, isLoaded]);

  // Update streak - returns true if streak was incremented
  const updateStreak = useCallback((): boolean => {
    const today = getTodayString();
    const lastActive = progress.lastActiveDate;

    // Already active today, no change needed
    if (lastActive === today) return false;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const wasConsecutive = lastActive === yesterdayStr;
    const newStreak = wasConsecutive ? progress.streak + 1 : 1;

    setProgress(prev => ({
      ...prev,
      streak: newStreak,
      lastActiveDate: today,
      xp: prev.xp + XP_STREAK_BONUS // Bonus XP for daily activity
    }));

    setStreakJustIncremented(true);
    setTimeout(() => setStreakJustIncremented(false), 3000);

    return true;
  }, [progress.lastActiveDate, progress.streak]);

  // Clear the streak increment flag
  const clearStreakIncrement = useCallback(() => {
    setStreakJustIncremented(false);
  }, []);

  // Add XP
  const addXP = useCallback((amount: number) => {
    setProgress(prev => ({
      ...prev,
      xp: prev.xp + amount
    }));
  }, []);

  // Record a correct answer
  const recordCorrectAnswer = useCallback((lessonId: LessonId, wordId: string) => {
    updateStreak();
    
    setProgress(prev => {
      const lessonProgress = prev.lessonProgress[lessonId] || {
        lessonId,
        wordsLearned: [],
        correctAnswers: 0,
        totalAnswers: 0,
        masteryPercent: 0
      };

      const isNewWord = !lessonProgress.wordsLearned.includes(wordId);
      const newWordsLearned = isNewWord 
        ? [...lessonProgress.wordsLearned, wordId]
        : lessonProgress.wordsLearned;

      return {
        ...prev,
        xp: prev.xp + XP_PER_CORRECT,
        wordsLearned: isNewWord ? [...prev.wordsLearned, wordId] : prev.wordsLearned,
        lessonProgress: {
          ...prev.lessonProgress,
          [lessonId]: {
            ...lessonProgress,
            wordsLearned: newWordsLearned,
            correctAnswers: lessonProgress.correctAnswers + 1,
            totalAnswers: lessonProgress.totalAnswers + 1,
            masteryPercent: Math.round((newWordsLearned.length / 20) * 100) // Assume 20 words per lesson avg
          }
        }
      };
    });
  }, [updateStreak]);

  // Record an incorrect answer
  const recordIncorrectAnswer = useCallback((lessonId: LessonId) => {
    updateStreak();
    
    setProgress(prev => {
      const lessonProgress = prev.lessonProgress[lessonId] || {
        lessonId,
        wordsLearned: [],
        correctAnswers: 0,
        totalAnswers: 0,
        masteryPercent: 0
      };

      return {
        ...prev,
        lessonProgress: {
          ...prev.lessonProgress,
          [lessonId]: {
            ...lessonProgress,
            totalAnswers: lessonProgress.totalAnswers + 1
          }
        }
      };
    });
  }, [updateStreak]);

  // Complete a lesson
  const completeLesson = useCallback((lessonId: LessonId) => {
    setProgress(prev => {
      const lessonProgress = prev.lessonProgress[lessonId];
      if (lessonProgress?.completedAt) return prev; // Already completed

      return {
        ...prev,
        xp: prev.xp + XP_LESSON_BONUS,
        lessonProgress: {
          ...prev.lessonProgress,
          [lessonId]: {
            ...(lessonProgress || { lessonId, wordsLearned: [], correctAnswers: 0, totalAnswers: 0, masteryPercent: 100 }),
            completedAt: new Date().toISOString(),
            masteryPercent: 100
          }
        }
      };
    });
  }, []);

  // Add achievement
  const addAchievement = useCallback((achievementId: string) => {
    setProgress(prev => {
      if (prev.achievements.includes(achievementId)) return prev;
      return {
        ...prev,
        achievements: [...prev.achievements, achievementId]
      };
    });
  }, []);

  // Update settings
  const updateSettings = useCallback((newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  // Reset all progress
  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
    localStorage.removeItem('a1m-progress');
  }, []);

  // Get lesson mastery percentage
  const getLessonMastery = useCallback((lessonId: LessonId): number => {
    return progress.lessonProgress[lessonId]?.masteryPercent || 0;
  }, [progress.lessonProgress]);

  // Check if lesson is completed
  const isLessonCompleted = useCallback((lessonId: LessonId): boolean => {
    return !!progress.lessonProgress[lessonId]?.completedAt;
  }, [progress.lessonProgress]);

  return {
    progress,
    settings,
    isLoaded,
    level,
    levelProgress,
    isStreakActiveToday,
    streakJustIncremented,
    clearStreakIncrement,
    addXP,
    recordCorrectAnswer,
    recordIncorrectAnswer,
    completeLesson,
    addAchievement,
    updateSettings,
    resetProgress,
    getLessonMastery,
    isLessonCompleted
  };
}

export type AppStore = ReturnType<typeof useAppStore>;
