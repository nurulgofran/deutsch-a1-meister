import { GrammarPattern } from '../types';

export const sentenceStructureGrammar: GrammarPattern = {
  id: 'grammar_sentence_structure',
  titleKey: 'grammar.sentence_structure.title',
  order: 5,
  isPremium: false,
  exercises: [
    {
      id: 'sent_001',
      type: 'sentence-builder',
      prompt: {
        german: '___ ___ du?',
        translations: { en: 'Where do you live?', bn: 'তুমি কোথায় থাকো?', tr: 'Nerede oturuyorsun?', hi: 'तुम कहाँ रहते हो?', ar: 'أين تسكن؟' }
      },
      correctAnswer: ['Wo wohnst'],
      options: ['Wo', 'wohnst', 'wohnt', 'Was'],
      explanation: {
        en: 'W-Questions start with the question word (Wo), then the verb (wohnst), then the subject (du).',
        bn: 'W-প্রশ্ন প্রশ্নবোধক শব্দ (Wo) দিয়ে শুরু হয়, তারপর verb (wohnst), তারপর subject (du)।',
        tr: 'W-Soruları soru kelimesiyle (Wo) başlar, sonra fiil (wohnst), sonra özne (du) gelir.',
        hi: 'W-प्रश्न प्रश्न शब्द (Wo) से शुरू होते हैं, फिर क्रिया (wohnst), फिर विषय (du)।',
        ar: 'تبدأ الأسئلة بـ W بكلمة الاستفهام (Wo)، ثم الفعل (wohnst)، ثم الفاعل (du).'
      }
    },
    {
      id: 'sent_002',
      type: 'sentence-builder',
      prompt: {
        german: '___ du ___ Berlin?',
        translations: { en: 'Do you live in Berlin?', bn: 'তুমি কি বার্লিনে থাকো?', tr: 'Berlin\'de mi oturuyorsun?', hi: 'क्या तुम बर्लिन में रहते हो?', ar: 'هل تسكن في برلين؟' }
      },
      correctAnswer: ['Wohnst in'],
      options: ['Wohnst', 'in', 'Wo', 'aus'],
      explanation: {
        en: 'Yes/No questions start with the Verb (Wohnst) followed by the Subject (du).',
        bn: 'হ্যাঁ/না প্রশ্ন Verb (Wohnst) দিয়ে শুরু হয়, তারপর Subject (du) আসে।',
        tr: 'Evet/Hayır soruları Fiil (Wohnst) ile başlar, ardından Özne (du) gelir.',
        hi: 'हाँ/नहीं प्रश्न क्रिया (Wohnst) से शुरू होते हैं, उसके बाद विषय (du) आता है।',
        ar: 'تبدأ أسئلة نعم/لا بالفعل (Wohnst) يليه الفاعل (du).'
      }
    },
    {
      id: 'sent_003',
      type: 'multiple-choice',
      prompt: {
        german: 'Er ___ aus Deutschland.',
        translations: { en: 'He comes from Germany.', bn: 'সে জার্মানি থেকে এসেছে।', tr: 'O Almanya\'dan geliyor.', hi: 'वह जर्मनी से आता है।', ar: 'هو يأتي من ألمانيا.' }
      },
      correctAnswer: ['kommt'],
      options: ['Kommt', 'kommt', 'Kommen'],
      explanation: {
        en: 'In a statement, the verb comes second (Position 2).',
        bn: 'বিবৃতিমূলক বাক্যে, verb দ্বিতীয় স্থানে বসে (Position 2)।',
        tr: 'Bir ifadede fiil ikinci sırada gelir (Pozisyon 2).',
        hi: 'एक कथन में, क्रिया दूसरे स्थान पर आती है (Position 2)।',
        ar: 'في الجملة الخبرية، يأتي الفعل في المرتبة الثانية.'
      }
    },
    {
      id: 'sent_004',
      type: 'sentence-builder',
      prompt: {
        german: 'Heute ___ ich ___ .',
        translations: { en: 'Today I go to the cinema.', bn: 'আজ আমি সিনেমায় যাচ্ছি।', tr: 'Bugün sinemaya gidiyorum.', hi: 'आज मैं सिनेमा जा रहा हूँ।', ar: 'اليوم أنا ذاهب إلى السينما.' }
      },
      correctAnswer: ['gehe ins Kino'],
      options: ['gehe', 'ins', 'Kino', 'Ich'],
      explanation: {
        en: 'If you start with time (Heute), the verb (gehe) MUST still be second. Subject (ich) moves to third.',
        bn: 'যদি সময় (Heute) দিয়ে শুরু করেন, verb (gehe) অবশ্যই দ্বিতীয় স্থানে থাকবে। Subject (ich) তৃতীয় স্থানে যাবে।',
        tr: 'Zamanla (Heute) başlarsanız, fiil (gehe) hala ikinci sırada OLMALIDIR. Özne (ich) üçüncü sıraya geçer.',
        hi: 'यदि आप समय (Heute) से शुरू करते हैं, तो क्रिया (gehe) अभी भी दूसरे स्थान पर होनी चाहिए। विषय (ich) तीसरे स्थान पर जाता है।',
        ar: 'إذا بدأت بالوقت (Heute)، يجب أن يكون الفعل (gehe) في المرتبة الثانية. ينتقل الفاعل (ich) إلى المرتبة الثالثة.'
      }
    },
     {
      id: 'sent_005',
      type: 'fill-blank',
      prompt: {
        german: 'Was ___ du? (essen)',
        translations: { en: 'What are you eating?', bn: 'তুমি কি খাচ্ছ?', tr: 'Ne yiyorsun?', hi: 'तुम क्या खा रहे हो?', ar: 'ماذا تأكل؟' }
      },
      correctAnswer: ['isst'],
      explanation: {
        en: 'Question word (Was) + Verb (isst) + Subject (du).',
        bn: 'প্রশ্নবোধক শব্দ (Was) + Verb (isst) + Subject (du)।',
        tr: 'Soru kelimesi (Was) + Fiil (isst) + Özne (du).',
        hi: 'प्रश्न शब्द (Was) + क्रिया (isst) + विषय (du)।',
        ar: 'كلمة الاستفهام (Was) + الفعل (isst) + الفاعل (du).'
      }
    }
  ]
};
