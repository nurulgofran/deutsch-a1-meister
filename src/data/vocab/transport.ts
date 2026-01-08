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
  },
  {
    id: 'trans_101',
    german: 'Reise',
    article: 'die',
    plural: 'Reisen',
    translations: { en: 'trip/journey', bn: 'ভ্রমণ', tr: 'seyahat', hi: 'यात्रा', ar: 'رحلة' },
    category: 'transport'
  },
  {
    id: 'trans_102',
    german: 'Gepäck',
    article: 'das',
    translations: { en: 'luggage', bn: 'মালপত্র', tr: 'bagaj', hi: 'सामान', ar: 'أمتعة' },
    category: 'transport'
  },
  {
    id: 'trans_103',
    german: 'Koffer',
    article: 'der',
    plural: 'Koffer',
    translations: { en: 'suitcase', bn: 'স্যুটকেস', tr: 'bavul', hi: 'सूटकेस', ar: 'حقيبة سفر' },
    category: 'transport'
  },
  {
    id: 'trans_104',
    german: 'Pass',
    article: 'der',
    plural: 'Pässe',
    translations: { en: 'passport', bn: 'পাসপোর্ট', tr: 'pasaport', hi: 'पासपोर्ट', ar: 'جواز سفر' },
    category: 'transport'
  },
  {
    id: 'trans_105',
    german: 'Hotel',
    article: 'das',
    plural: 'Hotels',
    translations: { en: 'hotel', bn: 'হোটেল', tr: 'otel', hi: 'होटल', ar: 'فندق' },
    category: 'transport'
  },
  {
    id: 'trans_106',
    german: 'buchen',
    translations: { en: 'to book', bn: 'বুক করা', tr: 'rezervasyon yapmak', hi: 'बुक करना', ar: 'يحجز' },
    category: 'transport'
  },
  {
    id: 'trans_107',
    german: 'Stadt',
    article: 'die',
    plural: 'Städte',
    translations: { en: 'city', bn: 'শহর', tr: 'şehir', hi: 'शहर', ar: 'مدينة' },
    category: 'transport'
  },
  {
    id: 'trans_108',
    german: 'Land',
    article: 'das',
    plural: 'Länder',
    translations: { en: 'country', bn: 'দেশ', tr: 'ülke', hi: 'देश', ar: 'بلد' },
    category: 'transport'
  },
  {
    id: 'trans_109',
    german: 'Meer',
    article: 'das',
    plural: 'Meere',
    translations: { en: 'sea', bn: 'সাগর', tr: 'deniz', hi: 'समुद्र', ar: 'بحر' },
    category: 'transport'
  },
  {
    id: 'trans_110',
    german: 'Strand',
    article: 'der',
    plural: 'Strände',
    translations: { en: 'beach', bn: 'সমুদ্র সৈকত', tr: 'plaj', hi: 'समुद्र तट', ar: 'شاطئ' },
    category: 'transport'
  },
  {
    id: 'trans_111',
    german: 'Berg',
    article: 'der',
    plural: 'Berge',
    translations: { en: 'mountain', bn: 'পাহাড়', tr: 'dağ', hi: 'पहाड़', ar: 'جبل' },
    category: 'transport'
  },
  {
    id: 'trans_112',
    german: 'weit',
    translations: { en: 'far', bn: 'দূরে', tr: 'uzak', hi: 'दूर', ar: 'بعيد' },
    category: 'transport'
  },
  {
    id: 'trans_113',
    german: 'nah',
    translations: { en: 'near', bn: 'কাছে', tr: 'yakın', hi: 'पास', ar: 'قريب' },
    category: 'transport'
  },
  {
    id: 'trans_114',
    german: 'hier',
    translations: { en: 'here', bn: 'এখানে', tr: 'burada', hi: 'यहाँ', ar: 'هنا' },
    category: 'transport'
  },
  {
    id: 'trans_115',
    german: 'da',
    translations: { en: 'there', bn: 'সেখানে', tr: 'orada', hi: 'वहाँ', ar: 'هناك' },
    category: 'transport'
  },
  {
    id: 'trans_116',
    german: 'oben',
    translations: { en: 'up/above', bn: 'উপরে', tr: 'yukarıda', hi: 'ऊपर', ar: 'فوق' },
    category: 'transport'
  },
  {
    id: 'trans_117',
    german: 'unten',
    translations: { en: 'down/below', bn: 'নিচে', tr: 'aşağıda', hi: 'नीचे', ar: 'تحت' },
    category: 'transport'
  },
  {
    id: 'trans_118',
    german: 'vorne',
    translations: { en: 'in front', bn: 'সামনে', tr: 'önde', hi: 'सामने', ar: 'أمام' },
    category: 'transport'
  },
  {
    id: 'trans_119',
    german: 'hinten',
    translations: { en: 'behind', bn: 'পিছনে', tr: 'arkada', hi: 'पीछे', ar: 'خلف' },
    category: 'transport'
  },
  {
    id: 'trans_120',
    german: 'abfahren',
    translations: { en: 'to depart', bn: 'রওনা হওয়া', tr: 'hareket etmek', hi: 'रवाना होना', ar: 'يغادر' },
    category: 'transport'
  },
  {
    id: 'trans_121',
    german: 'ankommen',
    translations: { en: 'to arrive', bn: 'পৌঁছানো', tr: 'varmak', hi: 'पहुंचना', ar: 'يصل' },
    category: 'transport'
  },
  {
    id: 'trans_122',
    german: 'umsteigen',
    translations: { en: 'to transfer/change', bn: 'পরিবর্তন করা', tr: 'aktarma yapmak', hi: 'बदलना (वाहन)', ar: 'يبدل' },
    category: 'transport'
  }
];

export default transportVocab;
