import { VocabWord, LessonId } from '../types';
import greetingsVocab from './greetings';
import personalVocab from './personal';
import familyVocab from './family';
import numbersVocab from './numbers';
import timeVocab from './time';
import foodVocab from './food';
import shoppingVocab from './shopping';
import livingVocab from './living';
import workVocab from './work';
import hobbiesVocab from './hobbies';
import transportVocab from './transport';
import healthVocab from './health';

// Import all vocab modules
const vocabModules: Record<LessonId, VocabWord[]> = {
  greetings: greetingsVocab,
  personal: personalVocab,
  family: familyVocab,
  numbers: numbersVocab,
  time: timeVocab,
  food: foodVocab,
  shopping: shoppingVocab,
  living: livingVocab,
  work: workVocab,
  hobbies: hobbiesVocab,
  transport: transportVocab,
  health: healthVocab,
};

export function getVocabByLesson(lessonId: LessonId): VocabWord[] {
  return vocabModules[lessonId] || [];
}

export function getVocabById(wordId: string): VocabWord | undefined {
  for (const lessonId of Object.keys(vocabModules) as LessonId[]) {
    const word = vocabModules[lessonId].find(w => w.id === wordId);
    if (word) return word;
  }
  return undefined;
}

export function getAllVocab(): VocabWord[] {
  return Object.values(vocabModules).flat();
}

export function getVocabCount(lessonId: LessonId): number {
  return vocabModules[lessonId]?.length || 0;
}

export function getTotalVocabCount(): number {
  return Object.values(vocabModules).reduce((sum, vocab) => sum + vocab.length, 0);
}

export { 
  greetingsVocab, 
  personalVocab, 
  familyVocab,
  numbersVocab,
  timeVocab,
  foodVocab,
  shoppingVocab,
  livingVocab,
  workVocab,
  hobbiesVocab,
  transportVocab,
  healthVocab
};
