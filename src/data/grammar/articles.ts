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
    },
    {
      id: 'art_006',
      type: 'fill-blank',
      prompt: {
        german: 'Das ist ___ Buch.',
        translations: { en: 'That is a book.', bn: 'ওটা একটি বই।', tr: 'Bu bir kitap.', hi: 'वह एक किताब है।', ar: 'هذا كتاب.' }
      },
      correctAnswer: ['ein'],
      explanation: {
        en: '"Buch" is neuter (das). Indefinite article for neuter is "ein".',
        bn: '"Buch" ক্লীবলিঙ্গ (das)। ক্লীবলিঙ্গের জন্য অনির্দিষ্ট আর্টিকেল হলো "ein"।',
        tr: '"Buch" nötrdür (das). Nötr için belirsiz artikel "ein" dir.',
        hi: '"Buch" नपुंसक लिंग (das) है। नपुंसक लिंग के लिए अनिश्चित लेख "ein" है।',
        ar: '"Buch" محايد (das). أداة النكرة للمحايد هي "ein".'
      }
    },
    {
      id: 'art_007',
      type: 'fill-blank',
      prompt: {
        german: 'Das ist ___ Tasche.',
        translations: { en: 'That is a bag.', bn: 'ওটা একটি ব্যাগ।', tr: 'Bu bir çanta.', hi: 'वह एक बैग है।', ar: 'هذه حقيبة.' }
      },
      correctAnswer: ['eine'],
      explanation: {
        en: '"Tasche" is feminine (die). Indefinite article for feminine is "eine".',
        bn: '"Tasche" স্ত্রীলিঙ্গ (die)। স্ত্রীলিঙ্গের জন্য অনির্দিষ্ট আর্টিকেল হলো "eine"।',
        tr: '"Tasche" dişildir (die). Dişil için belirsiz artikel "eine" dir.',
        hi: '"Tasche" स्त्रीलिंग (die) है। स्त्रीलिंग के लिए अनिश्चित लेख "eine" है।',
        ar: '"Tasche" مؤنث (die). أداة النكرة للمؤنث هي "eine".'
      }
    },
    {
      id: 'art_008',
      type: 'fill-blank',
      prompt: {
        german: 'Das ist ___ Stift.',
        translations: { en: 'That is a pen.', bn: 'ওটা একটি কলম।', tr: 'Bu bir kalem.', hi: 'वह एक कलम है।', ar: 'هذا قلم.' }
      },
      correctAnswer: ['ein'],
      explanation: {
        en: '"Stift" is masculine (der). Indefinite article for masculine is "ein".',
        bn: '"Stift" পুংলিঙ্গ (der)। পুংলিঙ্গের জন্য অনির্দিষ্ট আর্টিকেল হলো "ein"।',
        tr: '"Stift" erildir (der). Eril için belirsiz artikel "ein" dir.',
        hi: '"Stift" पुल्लिंग (der) है। पुल्लिंग के लिए अनिश्चित लेख "ein" है।',
        ar: '"Stift" مذكر (der). أداة النكرة للمذكر هي "ein".'
      }
    },
    {
      id: 'art_009',
      type: 'fill-blank',
      prompt: {
        german: 'Das ist ___ Buch.',
        translations: { en: 'That is no book.', bn: 'ওটা কোন বই না।', tr: 'Bu bir kitap değil.', hi: 'वह कोई किताब नहीं है।', ar: 'هذا ليس كتابًا.' }
      },
      correctAnswer: ['kein'],
      explanation: {
        en: 'To say "no book" (neuter), we use "kein".',
        bn: '"কোন বই না" (ক্লীবলিঙ্গ) বলতে, আমরা "kein" ব্যবহার করি।',
        tr: '"Kitap değil" (nötr) demek için "kein" kullanırız.',
        hi: '"कोई किताब नहीं" (नपुंसक लिंग) कहने के लिए, हम "kein" का उपयोग करते हैं।',
        ar: 'للقول "ليس كتابًا" (محايد)، نستخدم "kein".'
      }
    },
    {
      id: 'art_010',
      type: 'fill-blank',
      prompt: {
        german: 'Das ist ___ Tasche.',
        translations: { en: 'That is no bag.', bn: 'ওটা কোন ব্যাগ না।', tr: 'Bu bir çanta değil.', hi: 'वह कोई बैग नहीं है।', ar: 'هذه ليست حقيبة.' }
      },
      correctAnswer: ['keine'],
      explanation: {
        en: 'To say "no bag" (feminine), we use "keine".',
        bn: '"কোন ব্যাগ না" (স্ত্রীলিঙ্গ) বলতে, আমরা "keine" ব্যবহার করি।',
        tr: '"Çanta değil" (dişil) demek için "keine" kullanırız.',
        hi: '"कोई बैग नहीं" (स्त्रीलिंग) कहने के लिए, हम "keine" का उपयोग करते हैं।',
        ar: 'للقول "ليست حقيبة" (مؤنث)، نستخدم "keine".'
      }
    }
  ]
};
