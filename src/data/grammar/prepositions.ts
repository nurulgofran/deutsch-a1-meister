import { GrammarPattern } from '../types';

export const prepositionsGrammar: GrammarPattern = {
  id: 'grammar_prepositions',
  titleKey: 'grammar.prepositions.title',
  order: 9,
  isPremium: true,
  exercises: [
    {
      id: 'prep_001',
      type: 'fill-blank',
      prompt: {
        german: 'Ich gehe ___ (in) die Schule.',
        translations: { en: 'I am going to school.', bn: 'আমি স্কুলে যাচ্ছি।', tr: 'Okula gidiyorum.', hi: 'मैं स्कूल जा रहा हूँ।', ar: 'أنا ذاهب إلى المدرسة.' }
      },
      correctAnswer: ['in'],
      explanation: {
        en: 'Movement to a place: "in" + Accusative (die Schule).',
        bn: 'কোনো জায়গার দিকে গতি: "in" + Accusative (die Schule)।',
        tr: 'Bir yere hareket: "in" + Akkusativ (die Schule).',
        hi: 'किसी स्थान की ओर गति: "in" + Accusative (die Schule)।',
        ar: 'الحركة إلى مكان: "in" + النصب (die Schule).'
      }
    },
    {
      id: 'prep_002',
      type: 'multiple-choice',
      prompt: {
        german: 'Der Film beginnt ___ (at) 20:00 Uhr.',
        translations: { en: 'The film starts at 20:00.', bn: 'সিনেমাটি রাত ৮টায় শুরু হবে।', tr: 'Film saat 20:00\'de başlıyor.', hi: 'फिल्म 20:00 बजे शुरू होती है।', ar: 'يبدأ الفيلم في الساعة 20:00.' }
      },
      correctAnswer: ['um'],
      options: ['am', 'im', 'um'],
      explanation: {
        en: 'For specific times (clock), use "um".',
        bn: 'নির্দিষ্ট সময়ের (ঘড়ি) জন্য "um" ব্যবহার করুন।',
        tr: 'Belirli saatler için "um" kullanın.',
        hi: 'विशिष्ट समय (घड़ी) के लिए, "um" का उपयोग करें।',
        ar: 'للأوقات المحددة (الساعة)، استخدم "um".'
      }
    },
    {
      id: 'prep_003',
      type: 'multiple-choice',
      prompt: {
        german: 'Ich komme ___ (from) Deutschland.',
        translations: { en: 'I come from Germany.', bn: 'আমি জার্মানি থেকে এসেছি।', tr: 'Almanya\'dan geliyorum.', hi: 'मैं जर्मनी से हूँ।', ar: 'أنا من ألمانيا.' }
      },
      correctAnswer: ['aus'],
      options: ['aus', 'von', 'bei'],
      explanation: {
        en: 'Origin (countries/cities): use "aus".',
        bn: 'উৎস (দেশ/শহর): "aus" ব্যবহার করুন।',
        tr: 'Köken (ülkeler/şehirler): "aus" kullanın.',
        hi: 'मूल (देश/शहर): "aus" का उपयोग करें।',
        ar: 'الأصل (البلدان/المدن): استخدم "aus".'
      }
    },
    {
      id: 'prep_004',
      type: 'fill-blank',
      prompt: {
        german: 'Wir fahren ___ (with) dem Bus.',
        translations: { en: 'We go by bus.', bn: 'আমরা বাসে যাচ্ছি।', tr: 'Otobüsle gidiyoruz.', hi: 'हम बस से जाते हैं।', ar: 'نحن نذهب بالحافلة.' }
      },
      correctAnswer: ['mit'],
      explanation: {
        en: '"mit" always takes the Dative case (dem Bus).',
        bn: '"mit" সর্বদা Dative case (dem Bus) গ্রহণ করে।',
        tr: '"mit" her zaman Dativ durumunu alır (dem Bus).',
        hi: '"mit" हमेशा Dative case (dem Bus) लेता है।',
        ar: 'يأتي "mit" دائمًا مع حالة الجر (dem Bus).'
      }
    },
    {
      id: 'prep_005',
      type: 'sentence-builder',
      prompt: {
        german: 'Das Buch ist ___ (for) dich.',
        translations: { en: 'The book is for you.', bn: 'বইটি তোমার জন্য।', tr: 'Kitap senin için.', hi: 'किताब तुम्हारे लिए है।', ar: 'الكتاب لك.' }
      },
      correctAnswer: ['für'],
      options: ['für', 'vor', 'mit'],
      explanation: {
        en: '"für" always takes the Accusative case (dich).',
        bn: '"für" সর্বদা Accusative case (dich) গ্রহণ করে।',
        tr: '"für" her zaman Akkusativ durumunu alır (dich).',
        hi: '"für" हमेशा Accusative case (dich) लेता है।',
        ar: 'يأتي "für" دائمًا مع حالة النصب (dich).'
      }
    }
  ]
};
