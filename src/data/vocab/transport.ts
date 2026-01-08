import { VocabWord } from '../types';

export const transportVocab: VocabWord[] = [
  {
    id: 'trans_001',
    german: 'Bus',
    article: 'der',
    translations: { en: 'bus', bn: 'বাস', tr: 'otobüs', hi: 'बस', ar: 'حافلة' },
    category: 'transport'
  },
  {
    id: 'trans_002',
    german: 'Zug',
    article: 'der',
    plural: 'Züge',
    translations: { en: 'train', bn: 'ট্রেন', tr: 'tren', hi: 'ट्रेन', ar: 'قطار' },
    example: {
      german: 'Der Zug kommt um 10 Uhr.',
      translations: { en: 'The train arrives at 10 o\'clock.', bn: 'ট্রেন ১০টায় আসবে।', tr: 'Tren saat 10\'da geliyor.', hi: 'ट्रेन 10 बजे आएगी।', ar: 'القطار يصل الساعة 10.' }
    },
    category: 'transport'
  },
  {
    id: 'trans_003',
    german: 'U-Bahn',
    article: 'die',
    translations: { en: 'subway/metro', bn: 'মেট্রো', tr: 'metro', hi: 'मेट्रो', ar: 'مترو الأنفاق' },
    category: 'transport'
  },
  {
    id: 'trans_004',
    german: 'Straßenbahn',
    article: 'die',
    translations: { en: 'tram', bn: 'ট্রাম', tr: 'tramvay', hi: 'ट्राम', ar: 'ترام' },
    category: 'transport'
  },
  {
    id: 'trans_005',
    german: 'Auto',
    article: 'das',
    translations: { en: 'car', bn: 'গাড়ি', tr: 'araba', hi: 'कार', ar: 'سيارة' },
    category: 'transport'
  },
  {
    id: 'trans_006',
    german: 'Fahrrad',
    article: 'das',
    translations: { en: 'bicycle', bn: 'সাইকেল', tr: 'bisiklet', hi: 'साइकिल', ar: 'دراجة' },
    category: 'transport'
  },
  {
    id: 'trans_007',
    german: 'Flugzeug',
    article: 'das',
    translations: { en: 'airplane', bn: 'বিমান', tr: 'uçak', hi: 'हवाई जहाज', ar: 'طائرة' },
    category: 'transport'
  },
  {
    id: 'trans_008',
    german: 'Taxi',
    article: 'das',
    translations: { en: 'taxi', bn: 'ট্যাক্সি', tr: 'taksi', hi: 'टैक्सी', ar: 'تاكسي' },
    category: 'transport'
  },
  {
    id: 'trans_009',
    german: 'Haltestelle',
    article: 'die',
    translations: { en: 'stop (bus/tram)', bn: 'স্টপেজ', tr: 'durak', hi: 'स्टॉप', ar: 'محطة' },
    category: 'transport'
  },
  {
    id: 'trans_010',
    german: 'Bahnhof',
    article: 'der',
    translations: { en: 'train station', bn: 'রেলস্টেশন', tr: 'tren istasyonu', hi: 'रेलवे स्टेशन', ar: 'محطة القطار' },
    category: 'transport'
  },
  {
    id: 'trans_011',
    german: 'Flughafen',
    article: 'der',
    translations: { en: 'airport', bn: 'বিমানবন্দর', tr: 'havalimanı', hi: 'हवाई अड्डा', ar: 'مطار' },
    category: 'transport'
  },
  {
    id: 'trans_012',
    german: 'Fahrkarte',
    article: 'die',
    translations: { en: 'ticket', bn: 'টিকিট', tr: 'bilet', hi: 'टिकट', ar: 'تذكرة' },
    category: 'transport'
  },
  {
    id: 'trans_013',
    german: 'fahren',
    translations: { en: 'to drive/go', bn: 'যাওয়া', tr: 'sürmek', hi: 'चलाना', ar: 'يقود' },
    category: 'transport'
  },
  {
    id: 'trans_014',
    german: 'gehen',
    translations: { en: 'to go/walk', bn: 'হাঁটা', tr: 'gitmek', hi: 'जाना', ar: 'يذهب' },
    category: 'transport'
  },
  {
    id: 'trans_015',
    german: 'kommen',
    translations: { en: 'to come', bn: 'আসা', tr: 'gelmek', hi: 'आना', ar: 'يأتي' },
    category: 'transport'
  },
  {
    id: 'trans_016',
    german: 'links',
    translations: { en: 'left', bn: 'বামে', tr: 'sol', hi: 'बाएं', ar: 'يسار' },
    category: 'transport'
  },
  {
    id: 'trans_017',
    german: 'rechts',
    translations: { en: 'right', bn: 'ডানে', tr: 'sağ', hi: 'दाएं', ar: 'يمين' },
    category: 'transport'
  },
  {
    id: 'trans_018',
    german: 'geradeaus',
    translations: { en: 'straight ahead', bn: 'সোজা', tr: 'düz', hi: 'सीधे', ar: 'للأمام' },
    category: 'transport'
  },
  {
    id: 'trans_019',
    german: 'Weg',
    article: 'der',
    translations: { en: 'way/path', bn: 'পথ', tr: 'yol', hi: 'रास्ता', ar: 'الطريق' },
    category: 'transport'
  },
  {
    id: 'trans_020',
    german: 'Karte',
    article: 'die',
    translations: { en: 'map/card', bn: 'মানচিত্র', tr: 'harita', hi: 'नक्शा', ar: 'خريطة' },
    category: 'transport'
  }
];

export default transportVocab;
