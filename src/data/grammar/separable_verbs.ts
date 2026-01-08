import { GrammarPattern } from '../types';

export const separableVerbsGrammar: GrammarPattern = {
  id: 'grammar_separable_verbs',
  titleKey: 'grammar.separable_verbs.title',
  order: 11,
  isPremium: true,
  exercises: [
    {
      id: 'sep_001',
      type: 'sentence-builder',
      prompt: {
        german: 'Ich ___ jeden Tag um 7 Uhr ___ . (aufstehen)',
        translations: { en: 'I get up every day at 7.', bn: 'আমি প্রতিদিন ৭টায় উঠি।', tr: 'Her gün saat 7\'de kalkarım.', hi: 'मैं हर दिन 7 बजे उठता हूँ।', ar: 'أستيقظ كل يوم في الساعة 7.' }
      },
      correctAnswer: ['stehe auf'],
      options: ['stehe', 'auf', 'aufstehe', 'stehen'],
      explanation: {
        en: 'Separable verb "aufstehen": Conjugated part "stehe" comes 2nd, prefix "auf" goes to the END.',
        bn: 'Separable verb "aufstehen": Conjugated অংশ "stehe" ২য় স্থানে বসে, prefix "auf" শেষে যায়।',
        tr: 'Ayrılabilir fiil "aufstehen": Çekimli kısım "stehe" 2. sıraya gelir, ön ek "auf" SONA gider.',
        hi: 'Separable verb "aufstehen": संयुग्मित भाग "stehe" दूसरे स्थान पर आता है, उपसर्ग "auf" अंत में जाता है।',
        ar: 'الفعل المنفصل "aufstehen": الجزء المصرف "stehe" يأتي ثانياً، والبادئة "auf" تذهب إلى النهاية.'
      }
    },
    {
      id: 'sep_002',
      type: 'fill-blank',
      prompt: {
        german: 'Der Zug ___ um 10 Uhr ___ . (abfahren)',
        translations: { en: 'The train departs at 10.', bn: 'ট্রেনটি ১০টায় ছাড়বে।', tr: 'Tren saat 10\'da kalkıyor.', hi: 'ट्रेन 10 बजे रवाना होती है।', ar: 'يغادر القطار في الساعة 10.' }
      },
      correctAnswer: ['fährt ab'],
      explanation: {
        en: '"abfahren" -> fährt ... ab. NOTE: Vowel change a->ä!',
        bn: '"abfahren" -> fährt ... ab. দ্রষ্টব্য: স্বরবর্ণ পরিবর্তন a->ä!',
        tr: '"abfahren" -> fährt ... ab. NOT: Sesli harf değişimi a->ä!',
        hi: '"abfahren" -> fährt ... ab. ध्यान दें: स्वर परिवर्तन a->ä!',
        ar: '"abfahren" -> fährt ... ab. ملاحظة: تغيير حرف العلة a->ä!'
      }
    },
    {
      id: 'sep_003',
      type: 'sentence-builder',
      prompt: {
        german: 'Wann ___ du ___ ? (anfangen)',
        translations: { en: 'When do you start?', bn: 'তুমি কখন শুরু করবে?', tr: 'Ne zaman başlıyorsun?', hi: 'तुम कब शुरू करते हो?', ar: 'متى تبدأ؟' }
      },
      correctAnswer: ['fängst an'],
      options: ['fängst', 'an', 'fangst', 'anfängst'],
      explanation: {
        en: '"anfangen" -> fängst ... an. (a -> ä)',
        bn: '"anfangen" -> fängst ... an. (a -> ä)',
        tr: '"anfangen" -> fängst ... an. (a -> ä)',
        hi: '"anfangen" -> fängst ... an. (a -> ä)',
        ar: '"anfangen" -> fängst ... an. (a -> ä)'
      }
    },
    {
      id: 'sep_004',
      type: 'fill-blank',
      prompt: {
        german: 'Wir ___ heute ___ . (einkaufen)',
        translations: { en: 'We are shopping today.', bn: 'আমরা আজ কেনাকাটা করছি।', tr: 'Bugün alışveriş yapıyoruz.', hi: 'हम आज खरीदारी कर रहे हैं।', ar: 'نحن نتسوق اليوم.' }
      },
      correctAnswer: ['kaufen ein'],
      explanation: {
        en: '"einkaufen" -> Wir kaufen ... ein.',
        bn: '"einkaufen" -> Wir kaufen ... ein.',
        tr: '"einkaufen" -> Wir kaufen ... ein.',
        hi: '"einkaufen" -> Wir kaufen ... ein.',
        ar: '"einkaufen" -> Wir kaufen ... ein.'
      }
    }
  ]
};
