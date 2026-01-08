import { GrammarPattern } from '../types';

export const possessiveGrammar: GrammarPattern = {
  id: 'grammar_possessive',
  titleKey: 'grammar.possessive.title',
  order: 10,
  isPremium: true,
  exercises: [
    {
      id: 'poss_001',
      type: 'fill-blank',
      prompt: {
        german: 'Das ist ___ (my) Vater.',
        translations: { en: 'That is my father.', bn: 'ওটা আমার বাবা।', tr: 'Bu benim babam.', hi: 'वह मेरे पिता हैं।', ar: 'هذا أبي.' }
      },
      correctAnswer: ['mein'],
      explanation: {
        en: 'For masculine "der Vater" (nominative), use "mein".',
        bn: 'পুংলিঙ্গ "der Vater" (nominative) এর জন্য "mein" ব্যবহার করুন।',
        tr: 'Eril "der Vater" (yalın hali) için "mein" kullanın.',
        hi: 'पुल्लिंग "der Vater" (nominative) के लिए, "mein" का उपयोग करें।',
        ar: 'للمذكر "der Vater" (المرفوع)، استخدم "mein".'
      }
    },
    {
      id: 'poss_002',
      type: 'fill-blank',
      prompt: {
        german: 'Ist das ___ (your) Mutter?',
        translations: { en: 'Is that your mother?', bn: 'ওটা কি তোমার মা?', tr: 'Bu senin annen mi?', hi: 'क्या वह तुम्हारी माँ है?', ar: 'هل هذه أمك؟' }
      },
      correctAnswer: ['deine'],
      explanation: {
        en: 'For feminine "die Mutter", add "-e": "deine".',
        bn: 'স্ত্রীলিঙ্গ "die Mutter" এর জন্য "-e" যোগ করুন: "deine"।',
        tr: 'Dişil "die Mutter" için "-e" ekleyin: "deine".',
        hi: 'स्त्रीलिंग "die Mutter" के लिए "-e" जोड़ें: "deine"।',
        ar: 'للمؤنث "die Mutter"، أضف "-e": "deine".'
      }
    },
    {
      id: 'poss_003',
      type: 'multiple-choice',
      prompt: {
        german: 'Das ist ___ (his) Auto.',
        translations: { en: 'That is his car.', bn: 'ওটা তার গাড়ি।', tr: 'Bu onun arabası.', hi: 'वह उसकी कार है।', ar: 'هذه سيارته.' }
      },
      correctAnswer: ['sein'],
      options: ['sein', 'seine', 'ihr'],
      explanation: {
        en: 'Neuter "das Auto" (his = sein). No ending for neuter nominative.',
        bn: 'ক্লীবলিঙ্গ "das Auto" (তার = sein)। ক্লীবলিঙ্গ nominative এর জন্য কোনো সমাপ্তি নেই।',
        tr: 'Nötr "das Auto" (onun = sein). Nötr yalın hali için ek yok.',
        hi: 'नपुंसक "das Auto" (उसका = sein)। नपुंसक nominative के लिए कोई अंत नहीं।',
        ar: 'المحايد "das Auto" (له = sein). لا توجد نهاية للمحايد المرفوع.'
      }
    },
    {
      id: 'poss_004',
      type: 'multiple-choice',
      prompt: {
        german: 'Das sind ___ (our) Kinder.',
        translations: { en: 'Those are our children.', bn: 'ওরা আমাদের সন্তান।', tr: 'Bunlar bizim çocuklarımız.', hi: 'वे हमारे बच्चे हैं।', ar: 'هؤلاء أطفالنا.' }
      },
      correctAnswer: ['unsere'],
      options: ['unser', 'unsere', 'eure'],
      explanation: {
        en: 'Plural "die Kinder" takes "-e": "unsere".',
        bn: 'বহুবচন "die Kinder" "-e" গ্রহণ করে: "unsere"।',
        tr: 'Çoğul "die Kinder" "-e" alır: "unsere".',
        hi: 'बहुवचन "die Kinder" "-e" लेता है: "unsere"।',
        ar: 'الجمع "die Kinder" يأخذ "-e": "unsere".'
      }
    }
  ]
};
