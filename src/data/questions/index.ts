// Central index that merges all question parts
import { part1Questions } from './part1';
import { part2Questions } from './part2';
import { part3Questions } from './part3';
import { part4Questions } from './part4';
import { part5Questions } from './part5';
// Import additional parts here as they are created:
// import { part6Questions } from './part6';
// etc.

export type { Question, Bundesland } from './types';
export { categories, bundeslaender } from './types';

// Merge all question parts into a single array
export const questions = [
  ...part1Questions,
  ...part2Questions,
  ...part3Questions,
  ...part4Questions,
  ...part5Questions,
  // Add more parts as needed
];
