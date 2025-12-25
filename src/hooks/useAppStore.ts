import { useState, useEffect, useCallback, useMemo } from 'react';
import { Bundesland, questions } from '@/data/questions/index';
export interface UserProgress {
  questionsAnswered: Record<string, boolean>; // questionId -> correct/incorrect
  categoryProgress: Record<string, { correct: number; total: number }>;
  examHistory: ExamResult[];
  streak: number;
  lastActiveDate: string;
  achievements: string[];
  bookmarkedQuestions: string[];
}

export interface ExamResult {
  date: string;
  score: number;
  total: number;
  passed: boolean;
  timeSpent: number; // in seconds
}

export interface AppSettings {
  bundesland: Bundesland;
  language: 'de' | 'en';
  lastSessionCategory?: string;
  lastSessionQuestionIndex?: number;
}

const DEFAULT_PROGRESS: UserProgress = {
  questionsAnswered: {},
  categoryProgress: {},
  examHistory: [],
  streak: 0,
  lastActiveDate: '',
  achievements: [],
  bookmarkedQuestions: []
};

const DEFAULT_SETTINGS: AppSettings = {
  bundesland: 'Berlin',
  language: 'de'
};

// Detect browser language
const detectLanguage = (): 'de' | 'en' => {
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('de') ? 'de' : 'en';
};

// Get today's date string
const getTodayString = () => new Date().toISOString().split('T')[0];

export function useAppStore() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);
  const [streakJustIncremented, setStreakJustIncremented] = useState(false);

  // Check if user has been active today (answered at least one question)
  const isStreakActiveToday = useMemo(() => {
    return progress.lastActiveDate === getTodayString();
  }, [progress.lastActiveDate]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('lid-progress');
    const savedSettings = localStorage.getItem('lid-settings');

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
      localStorage.setItem('lid-progress', JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  // Save settings to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('lid-settings', JSON.stringify(settings));
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
      lastActiveDate: today
    }));

    // Trigger the confetti/celebration effect
    setStreakJustIncremented(true);
    setTimeout(() => setStreakJustIncremented(false), 3000);

    return true;
  }, [progress.lastActiveDate, progress.streak]);

  // Clear the streak increment flag (for animations)
  const clearStreakIncrement = useCallback(() => {
    setStreakJustIncremented(false);
  }, []);

  // Record answer
  const recordAnswer = useCallback((questionId: string, category: string, isCorrect: boolean) => {
    updateStreak();
    
    setProgress(prev => {
      const categoryStats = prev.categoryProgress[category] || { correct: 0, total: 0 };
      const wasAnsweredBefore = questionId in prev.questionsAnswered;
      
      return {
        ...prev,
        questionsAnswered: {
          ...prev.questionsAnswered,
          [questionId]: isCorrect
        },
        categoryProgress: {
          ...prev.categoryProgress,
          [category]: {
            correct: wasAnsweredBefore 
              ? (prev.questionsAnswered[questionId] ? categoryStats.correct - 1 : categoryStats.correct) + (isCorrect ? 1 : 0)
              : categoryStats.correct + (isCorrect ? 1 : 0),
            total: wasAnsweredBefore ? categoryStats.total : categoryStats.total + 1
          }
        }
      };
    });
  }, [updateStreak]);

  // Record exam result
  const recordExamResult = useCallback((result: ExamResult) => {
    setProgress(prev => ({
      ...prev,
      examHistory: [...prev.examHistory, result]
    }));
  }, []);

  // Toggle bookmark
  const toggleBookmark = useCallback((questionId: string) => {
    setProgress(prev => ({
      ...prev,
      bookmarkedQuestions: prev.bookmarkedQuestions.includes(questionId)
        ? prev.bookmarkedQuestions.filter(id => id !== questionId)
        : [...prev.bookmarkedQuestions, questionId]
    }));
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
    localStorage.removeItem('lid-progress');
  }, []);

  // Calculate readiness score based on mastered questions vs total questions
  const getReadinessScore = useCallback((bundesland: Bundesland) => {
    // Filter questions: 300 general + 10 state-specific for user's Bundesland
    const filteredQuestions = questions.filter(q => 
      !q.isStateSpecific || q.state === bundesland
    );
    const totalQuestions = filteredQuestions.length;
    const masteredCount = Object.values(progress.questionsAnswered).filter(Boolean).length;
    
    if (totalQuestions === 0) return 0;
    return Math.round((masteredCount / totalQuestions) * 100);
  }, [progress.questionsAnswered]);

  // Get mastered questions count
  const getMasteredCount = useCallback(() => {
    return Object.values(progress.questionsAnswered).filter(Boolean).length;
  }, [progress.questionsAnswered]);

  return {
    progress,
    settings,
    isLoaded,
    isStreakActiveToday,
    streakJustIncremented,
    clearStreakIncrement,
    recordAnswer,
    recordExamResult,
    toggleBookmark,
    addAchievement,
    updateSettings,
    resetProgress,
    getReadinessScore,
    getMasteredCount
  };
}
