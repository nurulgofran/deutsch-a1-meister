// Export all exam-related types and data
export * from './types';
export { listeningQuestions } from './listening';
export { readingQuestions } from './reading';
export { writingQuestions } from './writing';

import { listeningQuestions } from './listening';
import { readingQuestions } from './reading';
import { writingQuestions } from './writing';

// Get all exam questions by section
export function getAllExamQuestions() {
  return {
    listening: listeningQuestions,
    reading: readingQuestions,
    writing: writingQuestions
  };
}

// Get total possible points
export function getTotalExamPoints(): number {
  const listeningPoints = listeningQuestions.reduce((sum, q) => sum + q.points, 0);
  const readingPoints = readingQuestions.reduce((sum, q) => sum + q.points, 0);
  const writingPoints = writingQuestions.reduce((sum, q) => sum + q.points, 0);
  return listeningPoints + readingPoints + writingPoints;
}
