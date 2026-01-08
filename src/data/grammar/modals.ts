import { GrammarPattern } from '../types';

export const modalsGrammar: GrammarPattern = {
  id: 'grammar_modals',
  titleKey: 'grammar.modals.title',
  order: 3,
  isPremium: true,
  exercises: [
    {
      id: 'modal_001',
      type: 'fill-blank',
      prompt: {
        german: 'Ich ___ (können) gut Tennis spielen.',
        translations: { en: 'I can play tennis well.', bn: 'আমি ভালো টেনিস খেলতে পারি।', tr: 'İyi tenis oynayabilirim.', hi: 'मैं अच्छा टेनिस खेल सकता हूँ।', ar: 'أستطيع لعب التنس بشكل جيد.' }
      },
      correctAnswer: ['kann'],
      explanation: {
        en: '"können" (can) changes to "kann" for "ich".',
        bn: '"ich" এর জন্য "können" পরিবর্তিত হয়ে "kann" হয়।',
        tr: '"ich" için "können" fiili "kann" olur.',
        hi: '"ich" के लिए "können" बदलकर "kann" हो जाता है।',
        ar: 'يتحول "können" إلى "kann" مع "ich".'
      }
    },
    {
      id: 'modal_002',
      type: 'sentence-builder',
      prompt: {
        german: 'Du ___ (müssen) Hausaufgaben machen.',
        translations: { en: 'You must do homework.', bn: 'তোমাকে অবশ্যই বাড়ির কাজ করতে হবে।', tr: 'Ödev yapmalısın.', hi: 'तुम्हें होमवर्क करना चाहिए।', ar: 'يجب أن تقوم بواجباتك المدرسية.' }
      },
      correctAnswer: ['musst'],
      options: ['muss', 'musst', 'müssen'],
      explanation: {
        en: '"müssen" (must) becomes "musst" for "du".',
        bn: '"müssen" (অবশ্যই) "du" এর জন্য "musst" হয়।',
        tr: '"müssen" fiili "du" için "musst" olur.',
        hi: '"müssen" (चाहिए) "du" के लिए "musst" बन जाता है।',
        ar: 'يصبح "müssen" (يجب) "musst" مع "du".'
      }
    },
    {
      id: 'modal_003',
      type: 'multiple-choice',
      prompt: {
        german: 'Wir ___ (wollen) ins Kino gehen.',
        translations: { en: 'We want to go to the cinema.', bn: 'আমরা সিনেমায় যেতে চাই।', tr: 'Sinemaya gitmek istiyoruz.', hi: 'हम सिनेमा जाना चाहते हैं।', ar: 'نحن نريد الذهاب إلى السينما.' }
      },
      correctAnswer: ['wollen'],
      options: ['will', 'wollt', 'wollen'],
      explanation: {
        en: 'For "wir" (we), modal verbs keep the infinitive form ("wollen").',
        bn: '"wir" (আমরা) এর জন্য মোডাল ভার্ব মূল রূপে থাকে ("wollen")।',
        tr: '"wir" (biz) için modal fiiller mastar halini korur ("wollen").',
        hi: '"wir" (हम) के लिए, मॉडल क्रियाएँ अपने मूल रूप ("wollen") में रहती हैं।',
        ar: 'مع "wir" (نحن)، تبقى الأفعال الناقصة في المصدر ("wollen").'
      }
    },
    {
      id: 'modal_004',
      type: 'fill-blank',
      prompt: {
        german: 'Er ___ (möchten) einen Kaffee.',
        translations: { en: 'He would like a coffee.', bn: 'সে এক কাপ কফি চায়।', tr: 'O bir kahve istiyor.', hi: 'वह एक कॉफी चाहता है।', ar: 'هو يود الحصول على قهوة.' }
      },
      correctAnswer: ['möchte'],
      explanation: {
        en: '"möchten" becomes "möchte" for "er/sie/es". Note: No "t" ending!',
        bn: '"er/sie/es" এর জন্য "möchten" হয় "möchte"। দ্রষ্টব্য: কোনো "t" সমাপ্তি নেই!',
        tr: '"er/sie/es" için "möchten", "möchte" olur. Not: "t" eki yok!',
        hi: '"er/sie/es" के लिए "möchten", "möchte" बन जाता है। ध्यान दें: कोई "t" अंत नहीं!',
        ar: 'يصبح "möchten" هو "möchte" مع "er/sie/es". ملاحظة: لا ينتهي بـ "t"!'
      }
    },
    {
      id: 'modal_005',
      type: 'sentence-builder',
      prompt: {
        german: 'Ihr ___ (können) Deutsch sprechen.',
        translations: { en: 'You (plural) can speak German.', bn: 'তোমরা জার্মান বলতে পারো।', tr: 'Siz Almanca konuşabilirsiniz.', hi: 'तुम सब जर्मन बोल सकते हो।', ar: 'أنتم تستطيعون التحدث بالألمانية.' }
      },
      correctAnswer: ['könnt'],
      options: ['können', 'kannst', 'könnt'],
      explanation: {
        en: '"können" becomes "könnt" for "ihr".',
        bn: '"ihr" এর জন্য "können" হয় "könnt"।',
        tr: '"ihr" için "können", "könnt" olur.',
        hi: '"ihr" के लिए "können", "könnt" बन जाता है।',
        ar: 'يصبح "können" هو "könnt" مع "ihr".'
      }
    },
    {
      id: 'modal_006',
      type: 'fill-blank',
      prompt: {
        german: 'Du ___ (sollen) zum Arzt gehen.',
        translations: { en: 'You should go to the doctor.', bn: 'তোমার ডাক্তারের কাছে যাওয়া উচিত।', tr: 'Doktora gitmelisin.', hi: 'तुम्हें डॉक्टर के पास जाना चाहिए।', ar: 'يجب أن تذهب إلى الطبيب.' }
      },
      correctAnswer: ['sollst'],
      explanation: {
        en: '"sollen" (should) for "du": du sollst.',
        bn: '"du" এর জন্য "sollen" (উচিত): du sollst।',
        tr: '"du" için "sollen" (meli/malı): du sollst.',
        hi: '"du" के लिए "sollen" (चाहिए): du sollst।',
        ar: '"sollen" (يجب) مع "du": du sollst.'
      }
    },
    {
      id: 'modal_007',
      type: 'fill-blank',
      prompt: {
        german: 'Hier ___ man nicht rauchen. (dürfen)',
        translations: { en: 'One is not allowed to smoke here.', bn: 'এখানে ধুমপান করা নিষেধ।', tr: 'Burada sigara içilmez.', hi: 'यहाँ धूम्रपान करने की अनुमति नहीं है।', ar: 'لا يُسمح بالتدخين هنا.' }
      },
      correctAnswer: ['darf'],
      explanation: {
        en: '"dürfen" (to be allowed) is irregular: man darf (a -> a).',
        bn: '"dürfen" (অনুমতি থাকা) অনিয়মিত: man darf (a -> a)।',
        tr: '"dürfen" (izinli olmak) düzensizdir: man darf (a -> a).',
        hi: '"dürfen" (अनुमति होना) अनियमित है: man darf (a -> a)।',
        ar: '"dürfen" (يسمح) شاذ: man darf (a -> a).'
      }
    }
  ]
};
