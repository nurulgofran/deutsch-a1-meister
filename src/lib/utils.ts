import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Fisher-Yates shuffle algorithm - unbiased randomization
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle options and return new correct index
export function shuffleOptionsWithCorrectIndex<T>(
  options: T[],
  correctIndex: number
): { shuffledOptions: T[]; newCorrectIndex: number } {
  const indices = options.map((_, i) => i);
  const shuffledIndices = shuffleArray(indices);
  const shuffledOptions = shuffledIndices.map(i => options[i]);
  const newCorrectIndex = shuffledIndices.indexOf(correctIndex);
  return { shuffledOptions, newCorrectIndex };
}
