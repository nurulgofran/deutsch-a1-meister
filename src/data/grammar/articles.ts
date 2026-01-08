import { GrammarPattern } from '../types';

export const articlesGrammar: GrammarPattern = {
  id: 'grammar_articles',
  titleKey: 'grammar.articles.title',
  order: 1,
  isPremium: false,
  exercises: [
    {
      id: 'art_001',
      type: 'multiple-choice',
      prompt: {
        german: '___ Mann ist groß.',
        translations: { en: 'The man is tall.', bn: 'মানুষটি লম্বা।', tr: 'Adam uzun.', hi: 'आदमी लंबा है।', ar: 'الرجل طويل.' }
      },
      correctAnswer: ['Der'],
      options: ['Der', 'Die', 'Das'],
      explanation: {
        en: '"Mann" is a masculine noun (der Mann).',
        bn: '"Mann" একটি পুংলিঙ্গ বিশেষ্য (der Mann)।',
        tr: '"Mann" eril bir isimdir (der Mann).',
        hi: '"Mann" एक पुल्लिंग संज्ञा है (der Mann)।',
        ar: '"Mann" هو اسم مذكر (der Mann).'
      }
    },
    {
      id: 'art_002',
      type: 'multiple-choice',
      prompt: {
        german: '___ Frau trinkt Kaffee.',
        translations: { en: 'The woman is drinking coffee.', bn: 'মহিলাটি কফি পান করছেন।', tr: 'Kadın kahve içiyor.', hi: 'महिला कॉफी पी रही है।', ar: 'المرأة تشرب القهوة.' }
      },
      correctAnswer: ['Die'],
      options: ['Der', 'Die', 'Das'],
      explanation: {
        en: '"Frau" is a feminine noun (die Frau).',
        bn: '"Frau" একটি স্ত্রীলিঙ্গ বিশেষ্য (die Frau)।',
        tr: '"Frau" dişil bir isimdir (die Frau).',
        hi: '"Frau" एक स्त्रीलिंग संज्ञा है (die Frau)।',
        ar: '"Frau" هو اسم مؤنث (die Frau).'
      }
    },
    {
      id: 'art_003',
      type: 'multiple-choice',
      prompt: {
        german: '___ Kind spielt.',
        translations: { en: 'The child is playing.', bn: 'শিশুটি খেলছে।', tr: 'Çocuk oynuyor.', hi: 'बच्चा खेल रहा है।', ar: 'الطفل يلعب.' }
      },
      correctAnswer: ['Das'],
      options: ['Der', 'Die', 'Das'],
      explanation: {
        en: '"Kind" is a neuter noun (das Kind).',
        bn: '"Kind" একটি ক্লীবলিঙ্গ বিশেষ্য (das Kind)।',
        tr: '"Kind" nötr bir isimdir (das Kind).',
        hi: '"Kind" एक नपुंसक लिंग संज्ञा है (das Kind)।',
        ar: '"Kind" هو اسم محايد (das Kind).'
      }
    },
    {
      id: 'art_004',
      type: 'multiple-choice',
      prompt: {
        german: '___ Tisch ist braun.',
        translations: { en: 'The table is brown.', bn: 'টেবিলটি বাদামী।', tr: 'Masa kahverengi.', hi: 'मेज़ भूरी है।', ar: 'الطاولة بنية.' }
      },
      correctAnswer: ['Der'],
      options: ['Der', 'Die', 'Das'],
      explanation: {
        en: '"Tisch" is masculine (der Tisch).',
        bn: '"Tisch" পুংলিঙ্গ (der Tisch)।',
        tr: '"Tisch" erildir (der Tisch).',
        hi: '"Tisch" पुल्लिंग है (der Tisch)।',
        ar: '"Tisch" مذكر (der Tisch).'
      }
    },
    {
      id: 'art_005',
      type: 'multiple-choice',
      prompt: {
        german: '___ Sonne scheint.',
        translations: { en: 'The sun is shining.', bn: 'সূর্য কিরণ দিচ্ছে।', tr: 'Güneş parlıyor.', hi: 'सूरज चमक रहा है।', ar: 'الشمس مشرقة.' }
      },
      correctAnswer: ['Die'],
      options: ['Der', 'Die', 'Das'],
      explanation: {
        en: '"Sonne" is feminine (die Sonne).',
        bn: '"Sonne" স্ত্রীলিঙ্গ (die Sonne)।',
        tr: '"Sonne" dişildir (die Sonne).',
        hi: '"Sonne" स्त्रीलिंग है (die Sonne)।',
        ar: '"Sonne" مؤنث (die Sonne).'
      }
    }
  ]
};
