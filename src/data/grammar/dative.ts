import { GrammarPattern } from '../types';

export const dativeGrammar: GrammarPattern = {
  id: 'grammar_dative',
  titleKey: 'grammar.dative.title',
  order: 12, // After Prepositions
  isPremium: true,
  exercises: [
    {
      id: 'dat_001',
      type: 'fill-blank',
      prompt: {
        german: 'Ich gebe ___ (der) Mann ein Buch.',
        translations: { en: 'I give the man a book.', bn: 'আমি লোকটিকে একটি বই দিই।', tr: 'Adama bir kitap veriyorum.', hi: 'मैं आदमी को एक किताब देता हूँ।', ar: 'أعطي الرجل كتابًا.' }
      },
      correctAnswer: ['dem'],
      explanation: {
        en: 'Dative masculine: "der" changes to "dem". (Wem gebe ich das Buch? Dem Mann.)',
        bn: 'Dative masculine: "der" পরিবর্তিত হয়ে "dem" হয়। (কাকে বই দিচ্ছি? লোকটিকে।)',
        tr: 'Dativ eril: "der", "dem" olur. (Kitabı kime veriyorum? Adama.)',
        hi: 'Dative masculine: "der" बदलकर "dem" हो जाता है। (मैं किताब किसे दे रहा हूँ? आदमी को।)',
        ar: 'المذكر في حالة الجر: يتحول "der" إلى "dem". (لمن أعطي الكتاب؟ للرجل.)'
      }
    },
    {
      id: 'dat_002',
      type: 'fill-blank',
      prompt: {
        german: 'Wir helfen ___ (die) Frau.',
        translations: { en: 'We help the woman.', bn: 'আমরা মহিলাটিকে সাহায্য করি।', tr: 'Kadına yardım ediyoruz.', hi: 'हम महिला की मदद करते हैं।', ar: 'نحن نساعد المرأة.' }
      },
      correctAnswer: ['der'],
      explanation: {
        en: 'Dative feminine: "die" changes to "der". ("Helfen" always takes Dative.)',
        bn: 'Dative feminine: "die" পরিবর্তিত হয়ে "der" হয়। ("Helfen" সর্বদা Dative নেয়।)',
        tr: 'Dativ dişil: "die", "der" olur. ("Helfen" her zaman Dativ alır.)',
        hi: 'Dative feminine: "die" बदलकर "der" हो जाता है। ("Helfen" हमेशा Dative लेता है।)',
        ar: 'المؤنث في حالة الجر: يتحول "die" إلى "der". ("Helfen" يأخذ دائمًا حالة الجر.)'
      }
    },
    {
      id: 'dat_003',
      type: 'fill-blank',
      prompt: {
        german: 'Das Kind antwortet ___ (das) Mädchen nicht.',
        translations: { en: 'The child does not answer the girl.', bn: 'বাচ্চাটি মেয়েটিকে উত্তর দিচ্ছে না।', tr: 'Çocuk kıza cevap vermiyor.', hi: 'बच्चा लड़की को उत्तर नहीं देता।', ar: 'الطفل لا يجيب الفتاة.' }
      },
      correctAnswer: ['dem'],
      explanation: {
        en: 'Dative neuter: "das" changes to "dem". (Same as masculine).',
        bn: 'Dative neuter: "das" পরিবর্তিত হয়ে "dem" হয়। (masculine এর মতোই)।',
        tr: 'Dativ nötr: "das", "dem" olur. (Eril ile aynı).',
        hi: 'Dative neuter: "das" बदलकर "dem" हो जाता है। (masculine के समान)।',
        ar: 'المحايد في حالة الجر: يتحول "das" إلى "dem". (مثل المذكر).'
      }
    },
    {
      id: 'dat_004',
      type: 'sentence-builder',
      prompt: {
        german: 'Wie geht es ___ (du)?',
        translations: { en: 'How are you?', bn: 'তুমি কেমন আছ?', tr: 'Nasılsın?', hi: 'तुम कैसे हो?', ar: 'كيف حالك؟' }
      },
      correctAnswer: ['dir'],
      options: ['du', 'dich', 'dir', 'deiner'],
      explanation: {
        en: '"Wie geht es..." always takes Dative. Pronoun "du" becomes "dir".',
        bn: '"Wie geht es..." সর্বদা Dative নেয়। সর্বনাম "du" হয়ে যায় "dir"।',
        tr: '"Wie geht es..." her zaman Dativ alır. Zamir "du", "dir" olur.',
        hi: '"Wie geht es..." हमेशा Dative लेता है। सर्वनाम "du" बदलकर "dir" हो जाता है।',
        ar: '"Wie geht es..." يأخذ دائمًا حالة الجر. يتحول الضمير "du" إلى "dir".'
      }
    },
    {
      id: 'dat_005',
      type: 'multiple-choice',
      prompt: {
        german: 'Das Buch gehört ___ (ich).',
        translations: { en: 'The book belongs to me.', bn: 'বইটি আমার।', tr: 'Kitap bana ait.', hi: 'यह किताब मेरी है।', ar: 'الكتاب يخصني.' }
      },
      correctAnswer: ['mir'],
      options: ['mich', 'mir', 'ich'],
      explanation: {
        en: '"Gehören" (to belong) takes Dative. "ich" -> "mir".',
        bn: '"Gehören" (মালিকানাধীন হওয়া) Dative নেয়। "ich" -> "mir"।',
        tr: '"Gehören" (ait olmak) Dativ alır. "ich" -> "mir".',
        hi: '"Gehören" (संबंधित होना) Dative लेता है। "ich" -> "mir".',
        ar: '"Gehören" (ينتمي) يأخذ حالة الجر. "ich" -> "mir".'
      }
    },
    {
      id: 'dat_006',
      type: 'fill-blank',
      prompt: {
        german: 'Ich gratuliere ___ (ihr, polite) zum Geburtstag.',
        translations: { en: 'I congratulate you (polite) on your birthday.', bn: 'আমি আপনাকে জন্মদিনে অভিনন্দন জানাই।', tr: 'Doğum gününüzü kutlarım.', hi: 'मैं आपको जन्मदिन की बधाई देता हूँ।', ar: 'أهنئك بعيد ميلادك.' }
      },
      correctAnswer: ['Ihnen'],
      explanation: {
        en: 'Formal "Sie" in Dative becomes "Ihnen" (capital I).',
        bn: 'Formal "Sie" Dative-এ "Ihnen" (বড় হাতের I) হয়।',
        tr: 'Resmi "Sie", Dativ\'de "Ihnen" olur (büyük I ile).',
        hi: 'औपचारिक "Sie" Dative में "Ihnen" बन जाता है (बड़ा I)।',
        ar: 'الصيغة الرسمية "Sie" في حالة الجر تصبح "Ihnen" (حرف كبير I).'
      }
    },
    {
      id: 'dat_007',
      type: 'multiple-choice',
      prompt: {
        german: 'Gefällt das Auto ___ (ihr, she)?',
        translations: { en: 'Does she like the car?', bn: 'সে কি গাড়িটি পছন্দ করে?', tr: 'Arabayı beğendi mi?', hi: 'क्या उसे गाड़ी पसंद है?', ar: 'هل تعجبها السيارة؟' }
      },
      correctAnswer: ['ihr'],
      options: ['sie', 'ihr', 'ihnen'],
      explanation: {
        en: '"Gefallen" takes Dative. "sie" (she) -> "ihr".',
        bn: '"Gefallen" Dative নেয়। "sie" (সে - স্ত্রী) -> "ihr"।',
        tr: '"Gefallen" Dativ alır. "sie" (o - dişil) -> "ihr".',
        hi: '"Gefallen" Dative लेता है। "sie" (वह - स्त्री) -> "ihr".',
        ar: '"Gefallen" يأخذ حالة الجر. "sie" (هي) -> "ihr".'
      }
    },
    {
      id: 'dat_008',
      type: 'sentence-builder',
      prompt: {
        german: 'Die Kinder spielen mit ___ (die) Freunden.',
        translations: { en: 'The children play with the friends.', bn: 'বাচ্চারা বন্ধুদের সাথে খেলছে।', tr: 'Çocuklar arkadaşlarla oynuyor.', hi: 'बच्चे दोस्तों के साथ खेल रहे हैं।', ar: 'الأطفال يلعبون مع الأصدقاء.' }
      },
      correctAnswer: ['den'],
      options: ['den', 'der', 'die', 'dem'],
      explanation: {
        en: 'Dative Plural: "die" changes to "den" (and noun adds -n if possible).',
        bn: 'Dative Plural: "die" পরিবর্তিত হয়ে "den" হয় (এবং বিশেষ্যের শেষে -n যুক্ত হয় যদি সম্ভব হয়)।',
        tr: 'Dativ Çoğul: "die", "den" olur (ve mümkünse isme -n eklenir).',
        hi: 'Dative Plural: "die" बदलकर "den" हो जाता है (और संज्ञा में -n जुड़ता है यदि संभव हो)।',
        ar: 'الجمع في حالة الجر: يتحول "die" إلى "den" (ويضاف -n للاسم إذا أمكن).'
      }
    }
  ]
};
