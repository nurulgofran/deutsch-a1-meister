import { GrammarPattern } from '../types';

export const simplePastGrammar: GrammarPattern = {
  id: 'grammar_simple_past',
  titleKey: 'grammar.simple_past.title',
  order: 10,
  isPremium: true,
  exercises: [
    {
      id: 'past_001',
      type: 'fill-blank',
      prompt: {
        german: 'Gestern ___ ich müde. (sein)',
        translations: { en: 'Yesterday I was tired.', bn: 'গতকাল আমি ক্লান্ত ছিলাম।', tr: 'Dün yorgundum.', hi: 'कल मैं थका हुआ था।', ar: 'أمس كنت متعباً.' }
      },
      correctAnswer: ['war'],
      explanation: {
        en: 'Präteritum of "sein" (First person "ich"): ich war.',
        bn: '"sein" এর Präteritum (First person "ich"): ich war।',
        tr: '"sein" fiilinin Präteritum hali (Birinci şahıs "ich"): ich war.',
        hi: '"sein" का Präteritum (प्रथम व्यक्ति "ich"): ich war.',
        ar: 'الماضي البسيط من "sein" (ضمير المتكلم "ich"): ich war.'
      }
    },
    {
      id: 'past_002',
      type: 'fill-blank',
      prompt: {
        german: 'Früher ___ wir kein Auto. (haben)',
        translations: { en: 'We used to have no car.', bn: 'আগে আমাদের কোনো গাড়ি ছিল না।', tr: 'Eskiden arabamız yoktu.', hi: 'पहले हमारे पास कार नहीं थी।', ar: 'في الماضي لم يكن لدينا سيارة.' }
      },
      correctAnswer: ['hatten'],
      explanation: {
        en: 'Präteritum of "haben" (Plural "wir"): wir hatten.',
        bn: '"haben" এর Präteritum (Plural "wir"): wir hatten।',
        tr: '"haben" fiilinin Präteritum hali (Çoğul "wir"): wir hatten.',
        hi: '"haben" का Präteritum (बहुवचन "wir"): wir hatten.',
        ar: 'الماضي البسيط من "haben" (الجمع "wir"): wir hatten.'
      }
    },
    {
      id: 'past_003',
      type: 'sentence-builder',
      prompt: {
        german: 'Wo ___ du gestern? (sein)',
        translations: { en: 'Where were you yesterday?', bn: 'তুমি গতকাল কোথায় ছিলে?', tr: 'Dün neredeydin?', hi: 'तुम कल कहाँ थे?', ar: 'أين كنت أمس؟' }
      },
      correctAnswer: ['warst'],
      options: ['war', 'warst', 'waren'],
      explanation: {
        en: 'Präteritum of "sein" (Second person "du"): du warst.',
        bn: '"sein" এর Präteritum (Second person "du"): du warst।',
        tr: '"sein" fiilinin Präteritum hali (İkinci şahıs "du"): du warst.',
        hi: '"sein" का Präteritum (दूसरा व्यक्ति "du"): du warst.',
        ar: 'الماضي البسيط من "sein" (المخاطب "du"): du warst.'
      }
    },
    {
      id: 'past_004',
      type: 'multiple-choice',
      prompt: {
        german: 'Er ___ viel Stress. (haben)',
        translations: { en: 'He had a lot of stress.', bn: 'তার অনেক চাপ ছিল।', tr: 'Onun çok stresi vardı.', hi: 'उसे बहुत तनाव था।', ar: 'كان لديه الكثير من التوتر.' }
      },
      correctAnswer: ['hatte'],
      options: ['hatte', 'hast', 'hat'],
      explanation: {
        en: 'Präteritum of "haben" (Third person "er/sie/es"): er hatte.',
        bn: '"haben" এর Präteritum (Third person "er/sie/es"): er hatte।',
        tr: '"haben" fiilinin Präteritum hali (Üçüncü şahıs "er/sie/es"): er hatte.',
        hi: '"haben" का Präteritum (तीसरा व्यक्ति "er/sie/es"): er hatte.',
        ar: 'الماضي البسيط من "haben" (الغائب "er/sie/es"): er hatte.'
      }
    }
  ]
};
