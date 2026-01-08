// Main data index for Deutsch A1 Meister
export * from './types';
export * from './vocab';

// Re-export commonly used functions
export { 
  lessons, 
  isLessonUnlocked, 
  getNextLesson,
  calculateLevel,
  xpForNextLevel,
  xpProgressPercent,
  XP_PER_CORRECT,
  XP_LESSON_BONUS,
  XP_GRAMMAR_BONUS,
  XP_STREAK_BONUS,
  XP_PER_LEVEL,
  MAX_LEVEL
} from './types';

export {
  getVocabByLesson,
  getVocabById,
  getAllVocab,
  getVocabCount
} from './vocab';
