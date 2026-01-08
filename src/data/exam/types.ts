import { Language } from '@/i18n';

// Exam section types
export type ExamSection = 'listening' | 'reading' | 'writing';

// Base question interface
export interface ExamQuestion {
  id: string;
  section: ExamSection;
  points: number;
}

// Listening question - multiple choice based on audio
export interface ListeningQuestion extends ExamQuestion {
  section: 'listening';
  type: 'multiple-choice' | 'true-false';
  audioText: string; // The text to be spoken via TTS
  question: Record<Language, string>;
  options?: Record<Language, string[]>;
  correctAnswer: number | boolean;
}

// Reading question - text comprehension
export interface ReadingQuestion extends ExamQuestion {
  section: 'reading';
  type: 'multiple-choice' | 'true-false' | 'matching';
  text: string; // German text to read
  textTranslation?: Record<Language, string>;
  question: Record<Language, string>;
  options?: Record<Language, string[]>;
  correctAnswer: number | boolean | number[];
}

// Writing question - form filling or short message
export interface WritingQuestion extends ExamQuestion {
  section: 'writing';
  type: 'form' | 'message';
  prompt: Record<Language, string>;
  fields?: WritingField[];
  expectedKeywords?: string[]; // For message grading
}

export interface WritingField {
  id: string;
  label: Record<Language, string>;
  placeholder?: string;
  expectedValue?: string;
}

// Exam result
export interface MockExamResult {
  date: string;
  listeningScore: number;
  readingScore: number;
  writingScore: number;
  totalScore: number;
  maxScore: number;
  passed: boolean;
  timeSpent: number; // seconds
}

// Exam configuration
export const EXAM_CONFIG = {
  totalDuration: 65 * 60, // 65 minutes in seconds
  sections: {
    listening: { duration: 20 * 60, maxPoints: 25 },
    reading: { duration: 25 * 60, maxPoints: 25 },
    writing: { duration: 20 * 60, maxPoints: 25 }
  },
  passingScore: 45, // 60% of 75
  maxScore: 75
};

// Calculate if exam passed
export function isExamPassed(result: MockExamResult): boolean {
  return result.totalScore >= EXAM_CONFIG.passingScore;
}

// Calculate percentage
export function getExamPercentage(score: number): number {
  return Math.round((score / EXAM_CONFIG.maxScore) * 100);
}
