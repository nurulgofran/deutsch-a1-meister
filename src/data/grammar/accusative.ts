import { GrammarPattern } from '../types';

export const accusativeGrammar: GrammarPattern = {
  id: 'grammar_accusative',
  titleKey: 'grammar.accusative.title',
  order: 4,
  isPremium: true,
  exercises: [
    {
      id: 'acc_001',
      type: 'multiple-choice',
      prompt: {
        german: 'Ich habe ___ (der) Ball.',
        translations: { en: 'I have the ball.', bn: 'আমার কাছে বলটি আছে।', tr: 'Top bende.', hi: 'मेरे पास गेंद है।', ar: 'لدي الكرة.' }
      },
      correctAnswer: ['den'],
      options: ['der', 'die', 'den'],
      explanation: {
        en: 'Masculine "der" changes to "den" in the Accusative case (direct object).',
        bn: 'Accusative case (সরাসরি বস্তু) এ পুংলিঙ্গ "der" পরিবর্তিত হয়ে "den" হয়।',
        tr: 'Akkusativ (belirtme) durumunda eril "der", "den" olur.',
        hi: 'Accusative case (प्रत्यक्ष कर्म) में पुल्लिंग "der" बदलकर "den" हो जाता है।',
        ar: 'يتغير المذكر "der" إلى "den" في حالة النصب (المفعول به).'
      }
    },
    {
      id: 'acc_002',
      type: 'multiple-choice',
      prompt: {
        german: 'Wir essen ___ (ein) Apfel.',
        translations: { en: 'We are eating an apple.', bn: 'আমরা একটি আপেল খাচ্ছি।', tr: 'Bir elma yiyoruz.', hi: 'हम एक सेब खा रहे हैं।', ar: 'نحن نأكل تفاحة.' }
      },
      correctAnswer: ['einen'],
      options: ['ein', 'eine', 'einen'],
      explanation: {
        en: 'Masculine "ein" (Apfel is der Apfel) changes to "einen" in Accusative.',
        bn: 'Accusative এ পুংলিঙ্গ "ein" (Apfel হলো der Apfel) পরিবর্তিত হয়ে "einen" হয়।',
        tr: 'Akkusativ durumunda eril "ein" (Apfel, der Apfel\'dır) "einen" olur.',
        hi: 'Accusative में पुल्लिंग "ein" (Apfel, der Apfel है) "einen" बन जाता है।',
        ar: 'يتغير المذكر "ein" (التفاحة هي der Apfel) إلى "einen" في حالة النصب.'
      }
    },
    {
      id: 'acc_003',
      type: 'multiple-choice',
      prompt: {
        german: 'Sie trinkt ___ (das) Wasser.',
        translations: { en: 'She is drinking the water.', bn: 'সে পানি পান করছে।', tr: 'O suyu içiyor.', hi: 'वह पानी पी रही है।', ar: 'هي تشرب الماء.' }
      },
      correctAnswer: ['das'],
      options: ['der', 'die', 'das'],
      explanation: {
        en: 'Neuter "das" DOES NOT change in Accusative.',
        bn: 'Accusative এ ক্লীবলিঙ্গ "das" পরিবর্তিত হয় না।',
        tr: 'Akkusativ durumunda nötr "das" DEĞİŞMEZ.',
        hi: 'Accusative में नपुंसक लिंग "das" नहीं बदलता है।',
        ar: 'المحايد "das" لا يتغير في حالة النصب.'
      }
    },
    {
      id: 'acc_004',
      type: 'multiple-choice',
      prompt: {
        german: 'Ich suche ___ (die) Tasche.',
        translations: { en: 'I am looking for the bag.', bn: 'আমি ব্যাগটি খুঁজছি।', tr: 'Çantayı arıyorum.', hi: 'मैं बैग ढूंढ रहा हूँ।', ar: 'أبحث عن الحقيبة.' }
      },
      correctAnswer: ['die'],
      options: ['der', 'die', 'den'],
      explanation: {
        en: 'Feminine "die" DOES NOT change in Accusative.',
        bn: 'Accusative এ স্ত্রীলিঙ্গ "die" পরিবর্তিত হয় না।',
        tr: 'Akkusativ durumunda dişil "die" DEĞİŞMEZ.',
        hi: 'Accusative में स्त्रीलिंग "die" नहीं बदलती है।',
        ar: 'المؤنث "die" لا يتغير في حالة النصب.'
      }
    },
    {
      id: 'acc_005',
      type: 'sentence-builder',
      prompt: {
        german: 'Er kauft ___ (ein) Computer.',
        translations: { en: 'He is buying a computer.', bn: 'সে একটি কম্পিউটার কিনছে।', tr: 'Bir bilgisayar satın alıyor.', hi: 'वह एक कंप्यूटर खरीद रहा है।', ar: 'هو يشتري جهاز كمبيوتر.' }
      },
      correctAnswer: ['einen'],
      options: ['ein', 'einen', 'eine'],
      explanation: {
        en: '"Computer" is masculine (der/ein). Need accusative -> einen.',
        bn: '"Computer" পুংলিঙ্গ (der/ein)। Accusative প্রয়োজন -> einen।',
        tr: '"Computer" erildir (der/ein). Akkusativ gerekli -> einen.',
        hi: '"Computer" पुल्लिंग है (der/ein)। Accusative की आवश्यकता है -> einen।',
        ar: '"Computer" مذكر (der/ein). نحتاج النصب -> einen.'
      }
    }
  ]
};
