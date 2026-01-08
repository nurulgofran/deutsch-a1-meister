import { GrammarPattern } from '../types';

export const verbsMoreGrammar: GrammarPattern = {
  id: 'grammar_verbs_more',
  titleKey: 'grammar.verbs_more.title',
  order: 6,
  isPremium: false,
  exercises: [
    {
      id: 'vm_001',
      type: 'multiple-choice',
      prompt: {
        german: 'Ich ___ müde.',
        translations: { en: 'I am tired.', bn: 'আমি ক্লান্ত।', tr: 'Ben yorgunum.', hi: 'मैं थक गया हूँ।', ar: 'أنا متعب.' }
      },
      correctAnswer: ['bin'],
      options: ['bin', 'bist', 'ist'],
      explanation: {
        en: '"sein" (to be) is irregular: ich bin.',
        bn: '"sein" (হওয়া) অনিয়মিত: ich bin।',
        tr: '"sein" (olmak) düzensizdir: ich bin.',
        hi: '"sein" (होना) अनियमित है: ich bin।',
        ar: '"sein" (يكون) فعل شاذ: ich bin.'
      }
    },
    {
      id: 'vm_002',
      type: 'multiple-choice',
      prompt: {
        german: 'Du ___ Hunger.',
        translations: { en: 'You are hungry (have hunger).', bn: 'তোমার ক্ষুধা পেয়েছে।', tr: 'Senin açlığın var (Açsın).', hi: 'तुम्हें भूख लगी है।', ar: 'أنت جائع.' }
      },
      correctAnswer: ['hast'],
      options: ['habe', 'hast', 'hat'],
      explanation: {
        en: '"haben" (to have) is irregular: du hast (no "b").',
        bn: '"haben" (থাকা) অনিয়মিত: du hast ("b" নেই)।',
        tr: '"haben" (sahip olmak) düzensizdir: du hast ("b" yok).',
        hi: '"haben" (होना/पास होना) अनियमित है: du hast ("b" नहीं)।',
        ar: '"haben" (يملك) فعل شاذ: du hast (بدون "b").'
      }
    },
    {
      id: 'vm_003',
      type: 'fill-blank',
      prompt: {
        german: 'Er ___ (fahren) nach Hause.',
        translations: { en: 'He drives home.', bn: 'সে বাড়ি যাচ্ছে (গাড়ি চালিয়ে)।', tr: 'O eve gidiyor (araçla).', hi: 'वह घर जा रहा है (गाड़ी से)।', ar: 'هو يقود إلى المنزل.' }
      },
      correctAnswer: ['fährt'],
      explanation: {
        en: 'Irregular vowel change a -> ä: er fährt.',
        bn: 'অনিয়মিত স্বরবর্ণ পরিবর্তন a -> ä: er fährt।',
        tr: 'Düzensiz sesli harf değişimi a -> ä: er fährt.',
        hi: 'अनियमित स्वर परिवर्तन a -> ä: er fährt।',
        ar: 'تغيير حرف العلة الشاذ a -> ä: er fährt.'
      }
    },
    {
      id: 'vm_004',
      type: 'fill-blank',
      prompt: {
        german: '___ du Deutsch? (sprechen)',
        translations: { en: 'Do you speak German?', bn: 'তুমি কি জার্মান বলো?', tr: 'Almanca konuşuyor musun?', hi: 'क्या तुम जर्मन बोलते हो?', ar: 'هل تتحدث الألمانية؟' }
      },
      correctAnswer: ['Sprichst'],
      explanation: {
        en: 'Irregular vowel change e -> i: du sprichst.',
        bn: 'অনিয়মিত স্বরবর্ণ পরিবর্তন e -> i: du sprichst।',
        tr: 'Düzensiz sesli harf değişimi e -> i: du sprichst.',
        hi: 'अनियमित स्वर परिवर्तन e -> i: du sprichst।',
        ar: 'تغيير حرف العلة الشاذ e -> i: du sprichst.'
      }
    },
    {
      id: 'vm_005',
      type: 'sentence-builder',
      prompt: {
        german: 'Ihr ___ nett.',
        translations: { en: 'You (plural) are nice.', bn: 'তোমরা ভালো।', tr: 'Siz iyisiniz.', hi: 'तुम सब अच्छे हो।', ar: 'أنتم لطفاء.' }
      },
      correctAnswer: ['seid'],
      options: ['sind', 'seid', 'bist'],
      explanation: {
        en: '"sein" for "ihr" is "seid".',
        bn: '"ihr" এর জন্য "sein" হলো "seid"।',
        tr: '"ihr" için "sein" "seid"dir.',
        hi: '"ihr" के लिए "sein" "seid" है।',
        ar: '"sein" مع "ihr" هو "seid".'
      }
    }
  ]
};
