import { GrammarPattern } from '../types';

export const timeGrammar: GrammarPattern = {
  id: 'grammar_time',
  titleKey: 'grammar.time_grammar.title',
  order: 16,
  isPremium: true,
  exercises: [
    {
      id: 'time_gram_001',
      type: 'sentence-builder',
      prompt: {
        german: 'Es ist ___ ___ drei.',
        translations: { en: 'It is a quarter past three.', bn: 'এখন তিনটা বেজে পনেরো মিনিট।', tr: 'Saat üçü çeyrek geçiyor.', hi: 'सवा तीन बजे हैं।', ar: 'إنها الثالثة والربع.' }
      },
      correctAnswer: ['Viertel nach'],
      options: ['Viertel', 'nach', 'vor', 'halb'],
      explanation: {
        en: '3:15 -> "Viertel nach drei".',
        bn: '3:15 -> "Viertel nach drei".',
        tr: '3:15 -> "Viertel nach drei".',
        hi: '3:15 -> "Viertel nach drei".',
        ar: '3:15 -> "Viertel nach drei".'
      }
    },
    {
      id: 'time_gram_002',
      type: 'sentence-builder',
      prompt: {
        german: 'Es ist ___ ___ vier.',
        translations: { en: 'It is half past three.', bn: 'এখন সাড়ে তিনটা।', tr: 'Saat üç buçuk.', hi: 'साढ़े तीन बजे हैं।', ar: 'إنها الثالثة والنصف.' }
      },
      correctAnswer: ['halb vier'],
      options: ['halb', 'vier', 'drei', 'nach'],
      explanation: {
        en: '3:30 -> "halb vier" (half OF THE NEXT hour!).',
        bn: '3:30 -> "halb vier" (পরবর্তী ঘন্টার অর্ধেক!)।',
        tr: '3:30 -> "halb vier" (BİR SONRAKİ saatin yarısı!).',
        hi: '3:30 -> "halb vier" (अगले घंटे का आधा!)।',
        ar: '3:30 -> "halb vier" (نصف الساعة القادمة!).'
      }
    },
    {
      id: 'time_gram_003',
      type: 'fill-blank',
      prompt: {
        german: 'Der Termin ist ___ (on) Montag.',
        translations: { en: 'The appointment is on Monday.', bn: 'অ্যাপয়েন্টমেন্টটি সোমবার।', tr: 'Randevu Pazartesi günü.', hi: 'अपॉइंटमेंट सोमवार को है।', ar: 'الموعد يوم الاثنين.' }
      },
      correctAnswer: ['am'],
      explanation: {
        en: 'Days of the week use "am" (an dem).',
        bn: 'সপ্তাহের দিনগুলো "am" (an dem) ব্যবহার করে।',
        tr: 'Haftanın günleri "am" (an dem) kullanır.',
        hi: 'सप्ताह के दिन "am" (an dem) का उपयोग करते हैं।',
        ar: 'أيام الأسبوع تستخدم "am" (an dem).'
      }
    },
    {
      id: 'time_gram_004',
      type: 'fill-blank',
      prompt: {
        german: 'Ich habe am ___ (first) Mai Geburtstag.',
        translations: { en: 'My birthday is on the first of May.', bn: 'আমার জন্মদিন মে মাসের প্রথম তারিখে।', tr: 'Doğum günüm 1 Mayıs\'ta.', hi: 'मेरा जन्मदिन 1 मई को है।', ar: 'عيد ميلادي في الأول من مايو.' }
      },
      correctAnswer: ['ersten'],
      explanation: {
        en: 'Date with "am": ordinal number ends in "-ten" (errsten).',
        bn: '"am" দিয়ে তারিখ: ক্রমবাচক সংখ্যা "-ten" দিয়ে শেষ হয় (ersten)।',
        tr: '"am" ile tarih: sıra sayısı "-ten" ile biter (ersten).',
        hi: '"am" के साथ तारीख: क्रमसूचक संख्या "-ten" (ersten) पर समाप्त होती है।',
        ar: 'التاريخ مع "am": ينتهي الرقم الترتيبي بـ "-ten" (ersten).'
      }
    }
  ]
};
