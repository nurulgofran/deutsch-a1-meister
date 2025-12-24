import { useState, useEffect, useCallback } from 'react';
import { Bundesland } from '@/data/questions';

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

export function useAppStore() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

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

  // Update streak
  const updateStreak = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastActive = progress.lastActiveDate;

    if (lastActive === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    setProgress(prev => ({
      ...prev,
      streak: lastActive === yesterdayStr ? prev.streak + 1 : 1,
      lastActiveDate: today
    }));
  }, [progress.lastActiveDate]);

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

  // Calculate readiness score
  const getReadinessScore = useCallback(() => {
    const totalAnswered = Object.keys(progress.questionsAnswered).length;
    const correctAnswers = Object.values(progress.questionsAnswered).filter(Boolean).length;
    
    if (totalAnswered === 0) return 0;
    return Math.round((correctAnswers / totalAnswered) * 100);
  }, [progress.questionsAnswered]);

  // Get mastered questions count
  const getMasteredCount = useCallback(() => {
    return Object.values(progress.questionsAnswered).filter(Boolean).length;
  }, [progress.questionsAnswered]);

  return {
    progress,
    settings,
    isLoaded,
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
