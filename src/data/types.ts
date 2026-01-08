import { Language } from '@/i18n';

// Vocabulary word structure
export interface VocabWord {
  id: string;
  german: string;
  article?: 'der' | 'die' | 'das'; // For nouns
  plural?: string;
  translations: Record<Language, string>;
  example?: {
    german: string;
    translations: Record<Language, string>;
  };
  audioFile?: string;
  imageFile?: string;
  category: LessonId;
}

// Lesson/Node structure for the learning path
export type LessonId = 
  | 'greetings'
  | 'personal'
  | 'family'
  | 'numbers'
  | 'time'
  | 'food'
  | 'shopping'
  | 'living'
  | 'work'
  | 'hobbies'
  | 'transport'
  | 'health';

export interface Lesson {
  id: LessonId;
  order: number;
  icon: string; // Lucide icon name
  color: string; // Tailwind color class
  requiredXP: number; // XP needed to unlock
  vocabCount: number;
  isPremium: boolean;
}

// Grammar pattern structure
export interface GrammarPattern {
  id: string;
  titleKey: string; // i18n key
  order: number;
  isPremium: boolean;
  exercises: GrammarExercise[];
}

export interface GrammarExercise {
  id: string;
  type: 'sentence-builder' | 'fill-blank' | 'multiple-choice';
  prompt: {
    german: string;
    translations: Record<Language, string>;
  };
  correctAnswer: string[];
  options?: string[];
  explanation: Record<Language, string>;
}

// User progress for the learning path
export interface LessonProgress {
  lessonId: LessonId;
  wordsLearned: string[]; // word IDs
  correctAnswers: number;
  totalAnswers: number;
  completedAt?: string;
  masteryPercent: number;
}

// XP and Level system
export const XP_PER_CORRECT = 5;
export const XP_LESSON_BONUS = 25;
export const XP_GRAMMAR_BONUS = 30;
export const XP_STREAK_BONUS = 10;
export const XP_PER_LEVEL = 100;
export const MAX_LEVEL = 50;

export function calculateLevel(xp: number): number {
  return Math.min(Math.floor(xp / XP_PER_LEVEL) + 1, MAX_LEVEL);
}

export function xpForNextLevel(currentXP: number): number {
  const currentLevel = calculateLevel(currentXP);
  if (currentLevel >= MAX_LEVEL) return 0;
  return (currentLevel * XP_PER_LEVEL) - currentXP;
}

export function xpProgressPercent(currentXP: number): number {
  const currentLevel = calculateLevel(currentXP);
  if (currentLevel >= MAX_LEVEL) return 100;
  const xpInCurrentLevel = currentXP - ((currentLevel - 1) * XP_PER_LEVEL);
  return Math.round((xpInCurrentLevel / XP_PER_LEVEL) * 100);
}

// Lesson definitions
export const lessons: Lesson[] = [
  { id: 'greetings', order: 1, icon: 'Hand', color: 'emerald', requiredXP: 0, vocabCount: 25, isPremium: false },
  { id: 'personal', order: 2, icon: 'User', color: 'blue', requiredXP: 50, vocabCount: 30, isPremium: false },
  { id: 'family', order: 3, icon: 'Users', color: 'purple', requiredXP: 100, vocabCount: 35, isPremium: false },
  { id: 'numbers', order: 4, icon: 'Hash', color: 'amber', requiredXP: 175, vocabCount: 40, isPremium: true },
  { id: 'time', order: 5, icon: 'Clock', color: 'rose', requiredXP: 275, vocabCount: 45, isPremium: true },
  { id: 'food', order: 6, icon: 'Utensils', color: 'orange', requiredXP: 400, vocabCount: 50, isPremium: true },
  { id: 'shopping', order: 7, icon: 'ShoppingBag', color: 'pink', requiredXP: 550, vocabCount: 45, isPremium: true },
  { id: 'living', order: 8, icon: 'Home', color: 'teal', requiredXP: 700, vocabCount: 50, isPremium: true },
  { id: 'work', order: 9, icon: 'Briefcase', color: 'indigo', requiredXP: 875, vocabCount: 45, isPremium: true },
  { id: 'hobbies', order: 10, icon: 'Gamepad2', color: 'cyan', requiredXP: 1050, vocabCount: 40, isPremium: true },
  { id: 'transport', order: 11, icon: 'Bus', color: 'slate', requiredXP: 1200, vocabCount: 40, isPremium: true },
  { id: 'health', order: 12, icon: 'Heart', color: 'red', requiredXP: 1350, vocabCount: 45, isPremium: true },
];

export function isLessonUnlocked(lessonId: LessonId, userXP: number, isPro: boolean): boolean {
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return false;
  
  // Check premium requirement
  if (lesson.isPremium && !isPro) return false;
  
  // Check XP requirement
  return userXP >= lesson.requiredXP;
}

export function getNextLesson(userXP: number, isPro: boolean): Lesson | null {
  for (const lesson of lessons) {
    if (!isLessonUnlocked(lesson.id, userXP, isPro)) {
      return lesson;
    }
  }
  return null; // All lessons unlocked
}
