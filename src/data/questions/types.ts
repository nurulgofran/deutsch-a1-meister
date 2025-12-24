export interface Question {
  id: string;
  text_de: string;
  text_en: string;
  options: {
    de: string;
    en: string;
  }[];
  correctIndex: number;
  category: 'politics' | 'history' | 'society';
  isStateSpecific: boolean;
  state?: string;
}

export const categories = [
  { id: 'politics', name_de: 'Politik', name_en: 'Politics', icon: 'Landmark' },
  { id: 'history', name_de: 'Geschichte', name_en: 'History', icon: 'BookOpen' },
  { id: 'society', name_de: 'Gesellschaft', name_en: 'Society', icon: 'Users' }
] as const;

export const bundeslaender = [
  "Baden-Württemberg",
  "Bayern",
  "Berlin",
  "Brandenburg",
  "Bremen",
  "Hamburg",
  "Hessen",
  "Mecklenburg-Vorpommern",
  "Niedersachsen",
  "Nordrhein-Westfalen",
  "Rheinland-Pfalz",
  "Saarland",
  "Sachsen",
  "Sachsen-Anhalt",
  "Schleswig-Holstein",
  "Thüringen"
] as const;

export type Bundesland = typeof bundeslaender[number];
