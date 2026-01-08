import { GrammarPattern } from '../types';

export const questionWordsGrammar: GrammarPattern = {
  id: 'grammar_question_words',
  titleKey: 'grammar.question_words.title',
  order: 14,
  isPremium: true,
  exercises: [
    {
      id: 'qw_001',
      type: 'multiple-choice',
      prompt: {
        german: '___ ist das? - Das ist Peter.',
        translations: { en: 'Who is that?', bn: 'ওটা কে?', tr: 'Bu kim?', hi: 'वह कौन है?', ar: 'من هذا؟' }
      },
      correctAnswer: ['Wer'],
      options: ['Wer', 'Wen', 'Wem'],
      explanation: {
        en: '"Wer" asks for the subject (Nominative).',
        bn: '"Wer" subject (Nominative) সম্পর্কে জানতে চায়।',
        tr: '"Wer", özne (Nominativ) sorusudur.',
        hi: '"Wer" विषय (Nominative) के लिए पूछता है।',
        ar: '"Wer" يسأل عن الفاعل (حالة الرفع).'
      }
    },
    {
      id: 'qw_002',
      type: 'multiple-choice',
      prompt: {
        german: '___ suchst du? - Ich suche Peter.',
        translations: { en: 'Who are you looking for?', bn: 'তুমি কাকে খুঁজছ?', tr: 'Kimi arıyorsun?', hi: 'तुम किसे ढूंढ रहे हो?', ar: 'عن من تبحث؟' }
      },
      correctAnswer: ['Wen'],
      options: ['Wer', 'Wem', 'Wen'],
      explanation: {
        en: '"Wen" asks for the object (Accusative). "suchen" takes Accusative.',
        bn: '"Wen" object (Accusative) সম্পর্কে জানতে চায়। "suchen" Accusative নেয়।',
        tr: '"Wen", nesne (Akkusativ) sorusudur. "suchen" Akkusativ alır.',
        hi: '"Wen" वस्तु (Accusative) के लिए पूछता है। "suchen" Accusative लेता है।',
        ar: '"Wen" يسأل عن المفعول به (حالة النصب). "suchen" يأخذ حالة النصب.'
      }
    },
    {
      id: 'qw_003',
      type: 'multiple-choice',
      prompt: {
        german: '___ gehört das Buch? - Dem Mann.',
        translations: { en: 'To whom does the book belong?', bn: 'বইটি কার?', tr: 'Kitap kime ait?', hi: 'किताब किसकी है?', ar: 'لمن الكتاب؟' }
      },
      correctAnswer: ['Wem'],
      options: ['Wer', 'Wen', 'Wem'],
      explanation: {
        en: '"Wem" asks for the Dative object. "gehören" takes Dative.',
        bn: '"Wem" Dative object সম্পর্কে জানতে চায়। "gehören" Dative নেয়।',
        tr: '"Wem", Dativ nesne sorusudur. "gehören" Dativ alır.',
        hi: '"Wem" Dative वस्तु के लिए पूछता है। "gehören" Dative लेता है।',
        ar: '"Wem" يسأل عن المفعول به في حالة الجر. "gehören" يأخذ حالة الجر.'
      }
    },
    {
      id: 'qw_004',
      type: 'fill-blank',
      prompt: {
        german: '___ Mantel ist schön? - Dieser.',
        translations: { en: 'Which coat is beautiful?', bn: 'কোন কোটটি সুন্দর?', tr: 'Hangi palto güzel?', hi: 'कौन सा कोट सुंदर है?', ar: 'أي معطف جميل؟' }
      },
      correctAnswer: ['Welcher'],
      explanation: {
        en: '"Welcher" (Nominative Masculine) matches "der Mantel".',
        bn: '"Welcher" (Nominative Masculine) "der Mantel" এর সাথে মিল আছে।',
        tr: '"Welcher" (Nominativ Eril), "der Mantel" ile uyumludur.',
        hi: '"Welcher" (Nominative Masculine) "der Mantel" से मेल खाता है।',
        ar: '"Welcher" (مذكر مرفوع) يطابق "der Mantel".'
      }
    },
    {
      id: 'qw_005',
      type: 'fill-blank',
      prompt: {
        german: '___ Tasche möchtest du?',
        translations: { en: 'Which bag do you want?', bn: 'তুমি কোন ব্যাগটি চাও?', tr: 'Hangi çantayı istiyorsun?', hi: 'तुम्हें कौन सा बैग चाहिए?', ar: 'أي حقيبة تريد؟' }
      },
      correctAnswer: ['Welche'],
      explanation: {
        en: '"Welche" (Accusative Feminine) matches "die Tasche".',
        bn: '"Welche" (Accusative Feminine) "die Tasche" এর সাথে মিল আছে।',
        tr: '"Welche" (Akkusativ Dişil), "die Tasche" ile uyumludur.',
        hi: '"Welche" (Accusative Feminine) "die Tasche" से मेल खाता है।',
        ar: '"Welche" (مؤنث منصوب) يطابق "die Tasche".'
      }
    }
  ]
};
