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

export const questions: Question[] = [
  // Politics Questions
  {
    id: "p1",
    text_de: "Was ist die Hauptstadt der Bundesrepublik Deutschland?",
    text_en: "What is the capital of the Federal Republic of Germany?",
    options: [
      { de: "München", en: "Munich" },
      { de: "Berlin", en: "Berlin" },
      { de: "Hamburg", en: "Hamburg" },
      { de: "Frankfurt", en: "Frankfurt" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "p2",
    text_de: "Wie heißt das deutsche Parlament?",
    text_en: "What is the German Parliament called?",
    options: [
      { de: "Bundesrat", en: "Federal Council" },
      { de: "Bundestag", en: "Bundestag" },
      { de: "Reichstag", en: "Reichstag" },
      { de: "Landtag", en: "State Parliament" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "p3",
    text_de: "Wer wählt in Deutschland den Bundeskanzler / die Bundeskanzlerin?",
    text_en: "Who elects the Federal Chancellor in Germany?",
    options: [
      { de: "Das Volk direkt", en: "The people directly" },
      { de: "Der Bundestag", en: "The Bundestag" },
      { de: "Der Bundesrat", en: "The Federal Council" },
      { de: "Der Bundespräsident", en: "The Federal President" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  // History Questions
  {
    id: "h1",
    text_de: "Wann wurde die Berliner Mauer gebaut?",
    text_en: "When was the Berlin Wall built?",
    options: [
      { de: "1949", en: "1949" },
      { de: "1961", en: "1961" },
      { de: "1989", en: "1989" },
      { de: "1955", en: "1955" }
    ],
    correctIndex: 1,
    category: "history",
    isStateSpecific: false
  },
  {
    id: "h2",
    text_de: "Wann war der Zweite Weltkrieg zu Ende?",
    text_en: "When did World War II end?",
    options: [
      { de: "1943", en: "1943" },
      { de: "1945", en: "1945" },
      { de: "1948", en: "1948" },
      { de: "1950", en: "1950" }
    ],
    correctIndex: 1,
    category: "history",
    isStateSpecific: false
  },
  {
    id: "h3",
    text_de: "Wann fiel die Berliner Mauer?",
    text_en: "When did the Berlin Wall fall?",
    options: [
      { de: "1987", en: "1987" },
      { de: "1989", en: "1989" },
      { de: "1990", en: "1990" },
      { de: "1991", en: "1991" }
    ],
    correctIndex: 1,
    category: "history",
    isStateSpecific: false
  },
  // Society Questions
  {
    id: "s1",
    text_de: "Welche Farben hat die deutsche Flagge?",
    text_en: "What colors are on the German flag?",
    options: [
      { de: "Schwarz-Rot-Gelb", en: "Black-Red-Yellow" },
      { de: "Rot-Weiß-Blau", en: "Red-White-Blue" },
      { de: "Grün-Weiß-Rot", en: "Green-White-Red" },
      { de: "Blau-Weiß", en: "Blue-White" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "s2",
    text_de: "Was ist kein deutscher Feiertag?",
    text_en: "Which is NOT a German public holiday?",
    options: [
      { de: "Tag der Deutschen Einheit", en: "German Unity Day" },
      { de: "Ostermontag", en: "Easter Monday" },
      { de: "Valentinstag", en: "Valentine's Day" },
      { de: "Weihnachten", en: "Christmas" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false
  },
  // State-Specific Questions (Berlin)
  {
    id: "b1",
    text_de: "Welches Tier ist das Wappentier von Berlin?",
    text_en: "Which animal is on Berlin's coat of arms?",
    options: [
      { de: "Löwe", en: "Lion" },
      { de: "Adler", en: "Eagle" },
      { de: "Bär", en: "Bear" },
      { de: "Pferd", en: "Horse" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Berlin"
  },
  {
    id: "b2",
    text_de: "Was ist das berühmteste Wahrzeichen von Berlin?",
    text_en: "What is Berlin's most famous landmark?",
    options: [
      { de: "Kölner Dom", en: "Cologne Cathedral" },
      { de: "Brandenburger Tor", en: "Brandenburg Gate" },
      { de: "Neuschwanstein", en: "Neuschwanstein Castle" },
      { de: "Frauenkirche", en: "Frauenkirche" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Berlin"
  }
];

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
