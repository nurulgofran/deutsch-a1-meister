import { VocabWord } from '../types';

export const familyVocab: VocabWord[] = [
  {
    id: 'fam_001',
    german: 'Familie',
    article: 'die',
    translations: { en: 'family', bn: 'পরিবার', tr: 'aile', hi: 'परिवार', ar: 'العائلة' },
    category: 'family'
  },
  {
    id: 'fam_002',
    german: 'Mutter',
    article: 'die',
    plural: 'Mütter',
    translations: { en: 'mother', bn: 'মা', tr: 'anne', hi: 'माँ', ar: 'الأم' },
    category: 'family'
  },
  {
    id: 'fam_003',
    german: 'Vater',
    article: 'der',
    plural: 'Väter',
    translations: { en: 'father', bn: 'বাবা', tr: 'baba', hi: 'पिता', ar: 'الأب' },
    category: 'family'
  },
  {
    id: 'fam_004',
    german: 'Eltern',
    translations: { en: 'parents', bn: 'বাবা-মা', tr: 'anne-baba', hi: 'माता-पिता', ar: 'الوالدين' },
    category: 'family'
  },
  {
    id: 'fam_005',
    german: 'Kind',
    article: 'das',
    plural: 'Kinder',
    translations: { en: 'child', bn: 'সন্তান', tr: 'çocuk', hi: 'बच्चा', ar: 'طفل' },
    category: 'family'
  },
  {
    id: 'fam_006',
    german: 'Sohn',
    article: 'der',
    plural: 'Söhne',
    translations: { en: 'son', bn: 'ছেলে', tr: 'oğul', hi: 'बेटा', ar: 'ابن' },
    category: 'family'
  },
  {
    id: 'fam_007',
    german: 'Tochter',
    article: 'die',
    plural: 'Töchter',
    translations: { en: 'daughter', bn: 'মেয়ে', tr: 'kız', hi: 'बेटी', ar: 'ابنة' },
    category: 'family'
  },
  {
    id: 'fam_008',
    german: 'Bruder',
    article: 'der',
    plural: 'Brüder',
    translations: { en: 'brother', bn: 'ভাই', tr: 'erkek kardeş', hi: 'भाई', ar: 'أخ' },
    category: 'family'
  },
  {
    id: 'fam_009',
    german: 'Schwester',
    article: 'die',
    plural: 'Schwestern',
    translations: { en: 'sister', bn: 'বোন', tr: 'kız kardeş', hi: 'बहन', ar: 'أخت' },
    category: 'family'
  },
  {
    id: 'fam_010',
    german: 'Großmutter',
    article: 'die',
    translations: { en: 'grandmother', bn: 'দাদি/নানি', tr: 'büyükanne', hi: 'दादी/नानी', ar: 'الجدة' },
    category: 'family'
  },
  {
    id: 'fam_011',
    german: 'Großvater',
    article: 'der',
    translations: { en: 'grandfather', bn: 'দাদা/নানা', tr: 'büyükbaba', hi: 'दादा/नाना', ar: 'الجد' },
    category: 'family'
  },
  {
    id: 'fam_012',
    german: 'Großeltern',
    translations: { en: 'grandparents', bn: 'দাদা-দাদি/নানা-নানি', tr: 'büyükanne ve büyükbaba', hi: 'दादा-दादी', ar: 'الأجداد' },
    category: 'family'
  },
  {
    id: 'fam_013',
    german: 'Ehemann',
    article: 'der',
    translations: { en: 'husband', bn: 'স্বামী', tr: 'koca', hi: 'पति', ar: 'الزوج' },
    category: 'family'
  },
  {
    id: 'fam_014',
    german: 'Ehefrau',
    article: 'die',
    translations: { en: 'wife', bn: 'স্ত্রী', tr: 'eş (kadın)', hi: 'पत्नी', ar: 'الزوجة' },
    category: 'family'
  },
  {
    id: 'fam_015',
    german: 'verheiratet',
    translations: { en: 'married', bn: 'বিবাহিত', tr: 'evli', hi: 'विवाहित', ar: 'متزوج' },
    example: {
      german: 'Ich bin verheiratet.',
      translations: { en: 'I am married.', bn: 'আমি বিবাহিত।', tr: 'Ben evliyim.', hi: 'मैं शादीशुदा हूं।', ar: 'أنا متزوج.' }
    },
    category: 'family'
  },
  {
    id: 'fam_016',
    german: 'ledig',
    translations: { en: 'single', bn: 'অবিবাহিত', tr: 'bekar', hi: 'अविवाहित', ar: 'أعزب' },
    category: 'family'
  },
  {
    id: 'fam_017',
    german: 'geschieden',
    translations: { en: 'divorced', bn: 'তালাকপ্রাপ্ত', tr: 'boşanmış', hi: 'तलाकशुदा', ar: 'مطلق' },
    category: 'family'
  },
  {
    id: 'fam_018',
    german: 'Onkel',
    article: 'der',
    translations: { en: 'uncle', bn: 'চাচা/মামা', tr: 'amca/dayı', hi: 'चाचा/मामा', ar: 'العم/الخال' },
    category: 'family'
  },
  {
    id: 'fam_019',
    german: 'Tante',
    article: 'die',
    translations: { en: 'aunt', bn: 'চাচি/মামি', tr: 'teyze/hala', hi: 'चाची/मामी', ar: 'العمة/الخالة' },
    category: 'family'
  },
  {
    id: 'fam_020',
    german: 'Cousin',
    article: 'der',
    translations: { en: 'cousin (male)', bn: 'চাচাতো/মামাতো ভাই', tr: 'kuzen (erkek)', hi: 'चचेरा/ममेरा भाई', ar: 'ابن العم' },
    category: 'family'
  }
];

export default familyVocab;
