import { GrammarPattern } from '../types';

export const demonstrativesGrammar: GrammarPattern = {
  id: 'grammar_demonstratives',
  titleKey: 'grammar.demonstratives.title',
  order: 15,
  isPremium: true,
  exercises: [
    {
      id: 'dem_001',
      type: 'multiple-choice',
      prompt: {
        german: 'Gefällt dir dieser Stuhl? - Ja, ___ ist sehr bequem.',
        translations: { en: 'Do you like this chair? Yes, this one is very comfortable.', bn: 'এই চেয়ারটি কি তোমার পছন্দ? হ্যাঁ, এটি খুব আরামদায়ক।', tr: 'Bu sandalyeyi beğendin mi? Evet, bu çok rahat.', hi: 'क्या तुम्हें यह कुर्सी पसंद है? हाँ, यह बहुत आरामदायक है।', ar: 'هل يعجبك هذا الكرسي؟ نعم، هذا مريح جداً.' }
      },
      correctAnswer: ['dieser'],
      options: ['dieser', 'diese', 'dieses'],
      explanation: {
        en: 'Refers back to "der Stuhl" (Masculine Nominative) -> "dieser".',
        bn: '"der Stuhl" (Masculine Nominative) কে নির্দেশ করছে -> "dieser"।',
        tr: '"der Stuhl" (Nominativ Eril) ismine atıfta bulunur -> "dieser".',
        hi: '"der Stuhl" (Nominative Masculine) को संदर्भित करता है -> "dieser"।',
        ar: 'يشير إلى "der Stuhl" (مذكر مرفوع) -> "dieser".'
      }
    },
    {
      id: 'dem_002',
      type: 'fill-blank',
      prompt: {
        german: 'Ich kaufe ___ (this) Auto.',
        translations: { en: 'I buy this car.', bn: 'আমি এই গাড়িটি কিনছি।', tr: 'Bu arabayı alıyorum.', hi: 'मैं यह कार खरीद रहा हूँ।', ar: 'سأشتري هذه السيارة.' }
      },
      correctAnswer: ['dieses'],
      explanation: {
        en: '"das Auto" (Neuter Accusative) -> "dieses".',
        bn: '"das Auto" (Neuter Accusative) -> "dieses"।',
        tr: '"das Auto" (Nötr Akkusativ) -> "dieses".',
        hi: '"das Auto" (Neuter Accusative) -> "dieses"।',
        ar: '"das Auto" (محايد منصوب) -> "dieses".'
      }
    },
    {
      id: 'dem_003',
      type: 'sentence-builder',
      prompt: {
        german: 'Wie findest du ___ (this) Lampe?',
        translations: { en: 'How do you find this lamp?', bn: 'তোমার এই বাতিটি কেমন লাগছে?', tr: 'Bu lambayı nasıl buluyorsun?', hi: 'तुम्हें यह लैंप कैसा लगा?', ar: 'ما رأيك في هذا المصباح؟' }
      },
      correctAnswer: ['diese'],
      options: ['dieser', 'diese', 'dieses'],
      explanation: {
        en: '"die Lampe" (Feminine Accusative) -> "diese".',
        bn: '"die Lampe" (Feminine Accusative) -> "diese"।',
        tr: '"die Lampe" (Dişil Akkusativ) -> "diese".',
        hi: '"die Lampe" (Feminine Accusative) -> "diese"।',
        ar: '"die Lampe" (مؤنث منصوب) -> "diese".'
      }
    },
    {
      id: 'dem_004',
      type: 'fill-blank',
      prompt: {
        german: '___ (These) Schuhe sind teuer.',
        translations: { en: 'These shoes are expensive.', bn: 'এই জুতাগুলো দামি।', tr: 'Bu ayakkabılar pahalı.', hi: 'ये जूते महंगे हैं।', ar: 'هذه الأحذية غالية.' }
      },
      correctAnswer: ['Diese'],
      explanation: {
        en: '"die Schuhe" (Plural Nominative) -> "Diese".',
        bn: '"die Schuhe" (Plural Nominative) -> "Diese"।',
        tr: '"die Schuhe" (Çoğul Nominativ) -> "Diese".',
        hi: '"die Schuhe" (Plural Nominative) -> "Diese"।',
        ar: '"die Schuhe" (جمع مرفوع) -> "Diese".'
      }
    }
  ]
};
