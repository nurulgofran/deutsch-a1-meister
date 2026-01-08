import { GrammarPattern } from '../types';

export const verbsGrammar: GrammarPattern = {
  id: 'grammar_verbs',
  titleKey: 'grammar.verbs.title',
  order: 2,
  isPremium: false,
  exercises: [
    {
      id: 'verb_001',
      type: 'sentence-builder',
      prompt: {
        german: 'Ich ___ (lernen) Deutsch.',
        translations: { en: 'I learn German.', bn: 'আমি জার্মান শিখছি।', tr: 'Ben Almanca öğreniyorum.', hi: 'मैं जर्मन सीख रहा हूँ।', ar: 'أنا أتعلم الألمانية.' }
      },
      correctAnswer: ['lerne'],
      options: ['lernst', 'lerne', 'lernt'],
      explanation: {
        en: 'For "ich" (I), the verb ending is "-e" (Ich lerne).',
        bn: '"ich" (আমি) এর জন্য, ক্রিয়ার শেষটি "-e" (Ich lerne)।',
        tr: '"ich" (ben) için fiil eki "-e" dir (Ich lerne).',
        hi: '"ich" (मैं) के लिए, क्रिया का अंत "-e" है (Ich lerne)।',
        ar: 'مع "ich" (أنا)، ينتهي الفعل بـ "-e" (Ich lerne).'
      }
    },
    {
      id: 'verb_002',
      type: 'sentence-builder',
      prompt: {
        german: 'Du ___ (kommen) aus Berlin.',
        translations: { en: 'You come from Berlin.', bn: 'তুমি বার্লিন থেকে এসেছ।', tr: 'Sen Berlin\'den geliyorsun.', hi: 'तुम बर्लिन से आते हो।', ar: 'أنت تأتي من برلين.' }
      },
      correctAnswer: ['kommst'],
      options: ['komme', 'kommst', 'kommt'],
      explanation: {
        en: 'For "du" (you), the verb ending is "-st" (Du kommst).',
        bn: '"du" (তুমি) এর জন্য, ক্রিয়ার শেষটি "-st" (Du kommst)।',
        tr: '"du" (sen) için fiil eki "-st" dir (Du kommst).',
        hi: '"du" (तुम) के लिए, क्रिया का अंत "-st" है (Du kommst)।',
        ar: 'مع "du" (أنت)، ينتهي الفعل بـ "-st" (Du kommst).'
      }
    },
    {
      id: 'verb_003',
      type: 'sentence-builder',
      prompt: {
        german: 'Er ___ (wohnen) in München.',
        translations: { en: 'He lives in Munich.', bn: 'সে মিউনিখে থাকে।', tr: 'O Münih\'te yaşıyor.', hi: 'वह म्यूनिख में रहता है।', ar: 'هو يسكن في ميونيخ.' }
      },
      correctAnswer: ['wohnt'],
      options: ['wohne', 'wohnst', 'wohnt'],
      explanation: {
        en: 'For "er/sie/es", the verb ending is "-t" (Er wohnt).',
        bn: '"er/sie/es" এর জন্য, ক্রিয়ার শেষটি "-t" (Er wohnt)।',
        tr: '"er/sie/es" (o) için fiil eki "-t" dir (Er wohnt).',
        hi: '"er/sie/es" के लिए, क्रिया का अंत "-t" है (Er wohnt)।',
        ar: 'مع "er/sie/es" (هو/هي)، ينتهي الفعل بـ "-t" (Er wohnt).'
      }
    },
    {
      id: 'verb_004',
      type: 'fill-blank',
      prompt: {
        german: 'Wir ___ (spielen) Fußball.',
        translations: { en: 'We play football.', bn: 'আমরা ফুটবল খেলছি।', tr: 'Biz futbol oynuyoruz.', hi: 'हम फुटबॉल खेल रहे हैं।', ar: 'نحن نلعب كرة القدم.' }
      },
      correctAnswer: ['spielen'],
      explanation: {
        en: 'For "wir" (we), the verb usually keeps the infinitive "-en" (Wir spielen).',
        bn: '"wir" (আমরা) এর জন্য, ক্রিয়াটি সাধারণত মূল রূপ "-en" ধরে রাখে (Wir spielen)।',
        tr: '"wir" (biz) için fiil genellikle "-en" mastar ekini korur (Wir spielen).',
        hi: '"wir" (हम) के लिए, क्रिया आमतौर पर "-en" के साथ रहती है (Wir spielen)।',
        ar: 'مع "wir" (نحن)، يبقى الفعل عادة في المصدر "-en" (Wir spielen).'
      }
    },
    {
      id: 'verb_005',
      type: 'fill-blank',
      prompt: {
        german: 'Ihr ___ (trinken) Wasser.',
        translations: { en: 'You (plural) drink water.', bn: 'তোমরা জল পান করছ।', tr: 'Siz su içiyorsunuz.', hi: 'तुम सब पानी पीते हो।', ar: 'أنتم تشربون الماء.' }
      },
      correctAnswer: ['trinkt'],
      explanation: {
        en: 'For "ihr" (you plural), the verb ending is "-t" (Ihr trinkt).',
        bn: '"ihr" (তোমরা) এর জন্য, ক্রিয়ার শেষটি "-t" (Ihr trinkt)।',
        tr: '"ihr" (sizler) için fiil eki "-t" dir (Ihr trinkt).',
        hi: '"ihr" (तुम सब) के लिए, क्रिया का अंत "-t" है (Ihr trinkt)।',
        ar: 'مع "ihr" (أنتم)، ينتهي الفعل بـ "-t" (Ihr trinkt).'
      }
    }
  ]
};
