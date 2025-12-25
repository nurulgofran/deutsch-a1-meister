// Central index that merges all question parts
import { part1Questions } from './part1';
import { part2Questions } from './part2';
import { part3Questions } from './part3';
import { part4Questions } from './part4';
import { part5Questions } from './part5';
import { part6Questions } from './part6';
import { part7Questions } from './part7';
import { additionalStateQuestions } from './stateQuestions';

export type { Question, Bundesland } from './types';
export { categories, bundeslaender } from './types';

// Merge all question parts into a single array
// Total: 300 general + 160 state-specific (10 per state × 16 states) = 460 in DB
// Each user sees: 300 general + 10 for their state = 310 questions
export const questions = [
  ...part1Questions,
  ...part2Questions,
  ...part3Questions,
  ...part4Questions,
  ...part5Questions,
  ...part6Questions,
  ...part7Questions,
  ...additionalStateQuestions,
];
