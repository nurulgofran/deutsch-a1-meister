import { GrammarPattern } from '../types';

export const imperativeGrammar: GrammarPattern = {
  id: 'grammar_imperative',
  titleKey: 'grammar.imperative.title',
  order: 7,
  isPremium: false,
  exercises: [
    {
      id: 'imp_001',
      type: 'sentence-builder',
      prompt: {
        german: '___ das Fenster auf! (du)',
        translations: { en: 'Open the window!', bn: 'জানালাটি খোলো!', tr: 'Pencereyi aç!', hi: 'खिड़की खोलो!', ar: 'افتح النافذة!' }
      },
      correctAnswer: ['Mach'],
      options: ['Mach', 'Machst', 'Machen', 'Mache'],
      explanation: {
        en: 'For "du" imperative, remove the "-st" ending and the pronoun "du". (Du machst -> Mach!)',
        bn: '"du" অনুজ্ঞার জন্য, "-st" এবং "du" সর্বনামটি বাদ দিন। (Du machst -> Mach!)',
        tr: '"du" emir kipi için, "-st" ekini ve "du" zamirini kaldırın. (Du machst -> Mach!)',
        hi: '"du" आज्ञा के लिए, "-st" अंत और सर्वनाम "du" हटा दें। (Du machst -> Mach!)',
        ar: 'لصيغة الأمر مع "du"، احذف النهاية "-st" والضمير "du". (Du machst -> Mach!)'
      }
    },
    {
      id: 'imp_002',
      type: 'fill-blank',
      prompt: {
        german: '___ Sie bitte leise. (sein)',
        translations: { en: 'Please be quiet.', bn: 'দয়া করে শান্ত থাকুন।', tr: 'Lütfen sessiz olun.', hi: 'कृपया शांत रहें।', ar: 'يرجى التزام الهدوء.' }
      },
      correctAnswer: ['Seien'],
      explanation: {
        en: 'For polite "Sie", use "Seien Sie". This is irregular.',
        bn: 'ভদ্র "Sie"-এর জন্য "Seien Sie" ব্যবহার করুন। এটি অনিয়মিত।',
        tr: 'Kibar "Sie" için "Seien Sie" kullanın. Bu düzensizdir.',
        hi: 'विनम्र "Sie" के लिए, "Seien Sie" का उपयोग करें। यह अनियमित है।',
        ar: 'للصيغة المؤدبة "Sie"، استخدم "Seien Sie". هذا شاذ.'
      }
    },
    {
      id: 'imp_003',
      type: 'sentence-builder',
      prompt: {
        german: '___ einen Apfel! (ihr)',
        translations: { en: 'Eat an apple!', bn: 'একটি আপেল খাও!', tr: 'Bir elma yiyin!', hi: 'एक सेब खाओ!', ar: 'كل تفاحة!' }
      },
      correctAnswer: ['Esst'],
      options: ['Esst', 'Essen', 'Isst', 'Ess'],
      explanation: {
        en: 'For "ihr" (you plural), use the normal conjugated form but remove "ihr". (Ihr esst -> Esst!)',
        bn: '"ihr" (তোমরা) এর জন্য, সাধারণ রূপ ব্যবহার করুন কিন্তু "ihr" বাদ দিন। (Ihr esst -> Esst!)',
        tr: '"ihr" için normal çekimlenmiş formu kullanın ancak "ihr"i kaldırın. (Ihr esst -> Esst!)',
        hi: '"ihr" (तुम सब) के लिए, सामान्य संयुग्मित रूप का उपयोग करें लेकिन "ihr" हटा दें। (Ihr esst -> Esst!)',
        ar: 'مع "ihr" (أنتم)، استخدم التصريف العادي لكن احذف "ihr". (Ihr esst -> Esst!)'
      }
    },
    {
      id: 'imp_004',
      type: 'fill-blank',
      prompt: {
        german: '___ du zum Arzt! (gehen)',
        translations: { en: 'Go to the doctor!', bn: 'ডাক্তারের কাছে যাও!', tr: 'Doktora git!', hi: 'डॉक्टर के पास जाओ!', ar: 'اذهب إلى الطبيب!' }
      },
      correctAnswer: ['Geh'],
      explanation: {
        en: 'Du gehst -> Geh! Remove "st" and "du".',
        bn: 'Du gehst -> Geh! "st" এবং "du" সরান।',
        tr: 'Du gehst -> Geh! "st" ve "du"yu kaldır.',
        hi: 'Du gehst -> Geh! "st" और "du" को हटा दें।',
        ar: 'Du gehst -> Geh! احذف "st" و "du".'
      }
    }
  ]
};
