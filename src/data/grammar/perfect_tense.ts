import { GrammarPattern } from '../types';

export const perfectTenseGrammar: GrammarPattern = {
  id: 'grammar_perfect_tense',
  titleKey: 'grammar.perfect_tense.title',
  order: 8,
  isPremium: true,
  exercises: [
    {
      id: 'perf_001',
      type: 'sentence-builder',
      prompt: {
        german: 'Ich ___ Fußball ___ .',
        translations: { en: 'I played football.', bn: 'আমি ফুটবল খেলেছি।', tr: 'Futbol oynadım.', hi: 'मैंने फुटबॉल खेला।', ar: 'لعبت كرة القدم.' }
      },
      correctAnswer: ['habe gespielt'],
      options: ['habe', 'gespielt', 'bin', 'spiele'],
      explanation: {
        en: 'Perfect tense = haben/sein + Partizip II (ge-spiel-t). "Spielen" takes "haben".',
        bn: 'Perfect tense = haben/sein + Partizip II (ge-spiel-t)। "Spielen" এর সাথে "haben" বসে।',
        tr: 'Perfect tense = haben/sein + Partizip II (ge-spiel-t). "Spielen" "haben" alır.',
        hi: 'Perfect tense = haben/sein + Partizip II (ge-spiel-t)। "Spielen" के साथ "haben" आता है।',
        ar: 'الماضي التام = haben/sein + اسم المفعول (ge-spiel-t). "Spielen" يأخذ "haben".'
      }
    },
    {
      id: 'perf_002',
      type: 'fill-blank',
      prompt: {
        german: 'Er ist nach Hause ___ . (gehen)',
        translations: { en: 'He went home.', bn: 'সে বাড়ি গেছে।', tr: 'O eve gitti.', hi: 'वह घर गया।', ar: 'ذهب إلى المنزل.' }
      },
      correctAnswer: ['gegangen'],
      explanation: {
        en: '"Gehen" involves movement, so it uses "sein". Partizip II is "gegangen".',
        bn: '"Gehen" গতি বোঝায়, তাই এটি "sein" ব্যবহার করে। Partizip II হলো "gegangen"।',
        tr: '"Gehen" hareket içerir, bu yüzden "sein" kullanır. Partizip II "gegangen"dir.',
        hi: '"Gehen" में गति शामिल है, इसलिए यह "sein" का उपयोग करता है। Partizip II "gegangen" है।',
        ar: '"Gehen" يتضمن حركة، لذلك يستخدم "sein". اسم المفعول هو "gegangen".'
      }
    },
    {
      id: 'perf_003',
      type: 'multiple-choice',
      prompt: {
        german: 'Wir haben Deutsch ___ .',
        translations: { en: 'We learned German.', bn: 'আমরা জার্মান শিখেছি।', tr: 'Almanca öğrendik.', hi: 'हमने जर्मन सीखा।', ar: 'تعلمنا الألمانية.' }
      },
      correctAnswer: ['gelernt'],
      options: ['lernten', 'gelernt', 'lernen'],
      explanation: {
        en: 'Regular verbs (lernen) form Partizip II with ge- + stem + -t (ge-lern-t).',
        bn: 'নিয়মিত ক্রিয়া (lernen) ge- + stem + -t (ge-lern-t) দিয়ে Partizip II গঠন করে।',
        tr: 'Düzenli fiiller (lernen) ge- + kök + -t (ge-lern-t) ile Partizip II oluşturur.',
        hi: 'नियमित क्रियाएं (lernen) ge- + stem + -t (ge-lern-t) के साथ Partizip II बनाती हैं।',
        ar: 'الأفعال المنتظمة (lernen) تشكل اسم المفعول بـ ge- + الجذر + -t (ge-lern-t).'
      }
    },
    {
      id: 'perf_004',
      type: 'fill-blank',
      prompt: {
        german: '___ du schon gegessen?',
        translations: { en: 'Have you eaten already?', bn: 'তুমি কি ইতিমধ্যে খেয়েছ?', tr: 'Zaten yedin mi?', hi: 'क्या तुमने पहले ही खा लिया?', ar: 'هل أكلت بالفعل؟' }
      },
      correctAnswer: ['Hast'],
      explanation: {
        en: '"Essen" uses "haben" as auxiliary verb. -> Hast du...',
        bn: '"Essen" সাহায্যকারী ক্রিয়া হিসেবে "haben" ব্যবহার করে। -> Hast du...',
        tr: '"Essen" yardımcı fiil olarak "haben" kullanır. -> Hast du...',
        hi: '"Essen" सहायक क्रिया के रूप में "haben" का उपयोग करता है। -> Hast du...',
        ar: '"Essen" يستخدم "haben" كفعل مساعد. -> Hast du...'
      }
    }
  ]
};
