import { VocabWord } from '../types';

export const personalVocab: VocabWord[] = [
  {
    id: 'pers_001',
    german: 'Name',
    article: 'der',
    translations: { en: 'name', bn: 'নাম', tr: 'isim', hi: 'नाम', ar: 'اسم' },
    example: {
      german: 'Mein Name ist Anna.',
      translations: { en: 'My name is Anna.', bn: 'আমার নাম আনা।', tr: 'Benim adım Anna.', hi: 'मेरा नाम अन्ना है।', ar: 'اسمي آنا.' }
    },
    category: 'personal'
  },
  {
    id: 'pers_002',
    german: 'Vorname',
    article: 'der',
    translations: { en: 'first name', bn: 'প্রথম নাম', tr: 'ad', hi: 'पहला नाम', ar: 'الاسم الأول' },
    category: 'personal'
  },
  {
    id: 'pers_003',
    german: 'Nachname',
    article: 'der',
    translations: { en: 'last name', bn: 'পদবি', tr: 'soyad', hi: 'उपनाम', ar: 'اسم العائلة' },
    category: 'personal'
  },
  {
    id: 'pers_004',
    german: 'Alter',
    article: 'das',
    translations: { en: 'age', bn: 'বয়স', tr: 'yaş', hi: 'उम्र', ar: 'العمر' },
    example: {
      german: 'Ich bin 25 Jahre alt.',
      translations: { en: 'I am 25 years old.', bn: 'আমার বয়স ২৫ বছর।', tr: '25 yaşındayım.', hi: 'मेरी उम्र 25 साल है।', ar: 'عمري 25 سنة.' }
    },
    category: 'personal'
  },
  {
    id: 'pers_005',
    german: 'Geburtstag',
    article: 'der',
    translations: { en: 'birthday', bn: 'জন্মদিন', tr: 'doğum günü', hi: 'जन्मदिन', ar: 'عيد الميلاد' },
    category: 'personal'
  },
  {
    id: 'pers_006',
    german: 'Adresse',
    article: 'die',
    translations: { en: 'address', bn: 'ঠিকানা', tr: 'adres', hi: 'पता', ar: 'العنوان' },
    category: 'personal'
  },
  {
    id: 'pers_007',
    german: 'Straße',
    article: 'die',
    translations: { en: 'street', bn: 'রাস্তা', tr: 'sokak', hi: 'गली', ar: 'الشارع' },
    category: 'personal'
  },
  {
    id: 'pers_008',
    german: 'Stadt',
    article: 'die',
    translations: { en: 'city', bn: 'শহর', tr: 'şehir', hi: 'शहर', ar: 'المدينة' },
    category: 'personal'
  },
  {
    id: 'pers_009',
    german: 'Land',
    article: 'das',
    translations: { en: 'country', bn: 'দেশ', tr: 'ülke', hi: 'देश', ar: 'البلد' },
    category: 'personal'
  },
  {
    id: 'pers_010',
    german: 'Telefonnummer',
    article: 'die',
    translations: { en: 'phone number', bn: 'ফোন নম্বর', tr: 'telefon numarası', hi: 'फोन नंबर', ar: 'رقم الهاتف' },
    category: 'personal'
  },
  {
    id: 'pers_011',
    german: 'E-Mail',
    article: 'die',
    translations: { en: 'email', bn: 'ইমেইল', tr: 'e-posta', hi: 'ईमेल', ar: 'البريد الإلكتروني' },
    category: 'personal'
  },
  {
    id: 'pers_012',
    german: 'Beruf',
    article: 'der',
    translations: { en: 'profession', bn: 'পেশা', tr: 'meslek', hi: 'पेशा', ar: 'المهنة' },
    example: {
      german: 'Was ist Ihr Beruf?',
      translations: { en: 'What is your profession?', bn: 'আপনার পেশা কী?', tr: 'Mesleğiniz nedir?', hi: 'आपका पेशा क्या है?', ar: 'ما هي مهنتك؟' }
    },
    category: 'personal'
  },
  {
    id: 'pers_013',
    german: 'Nationalität',
    article: 'die',
    translations: { en: 'nationality', bn: 'জাতীয়তা', tr: 'milliyet', hi: 'राष्ट्रीयता', ar: 'الجنسية' },
    category: 'personal'
  },
  {
    id: 'pers_014',
    german: 'Sprache',
    article: 'die',
    translations: { en: 'language', bn: 'ভাষা', tr: 'dil', hi: 'भाषा', ar: 'اللغة' },
    category: 'personal'
  },
  {
    id: 'pers_015',
    german: 'Deutsch',
    translations: { en: 'German', bn: 'জার্মান', tr: 'Almanca', hi: 'जर्मन', ar: 'الألمانية' },
    category: 'personal'
  },
  {
    id: 'pers_016',
    german: 'ich',
    translations: { en: 'I', bn: 'আমি', tr: 'ben', hi: 'मैं', ar: 'أنا' },
    category: 'personal'
  },
  {
    id: 'pers_017',
    german: 'du',
    translations: { en: 'you (informal)', bn: 'তুমি', tr: 'sen', hi: 'तुम', ar: 'أنت' },
    category: 'personal'
  },
  {
    id: 'pers_018',
    german: 'Sie',
    translations: { en: 'you (formal)', bn: 'আপনি', tr: 'siz', hi: 'आप', ar: 'أنت (رسمي)' },
    category: 'personal'
  },
  {
    id: 'pers_019',
    german: 'Woher kommen Sie?',
    translations: { en: 'Where are you from?', bn: 'আপনি কোথা থেকে এসেছেন?', tr: 'Nereden geliyorsunuz?', hi: 'आप कहाँ से हैं?', ar: 'من أين أنت؟' },
    category: 'personal'
  },
  {
    id: 'pers_020',
    german: 'Ich komme aus...',
    translations: { en: 'I come from...', bn: 'আমি ... থেকে এসেছি', tr: '... dan geliyorum', hi: 'मैं ... से हूं', ar: 'أنا من...' },
    category: 'personal'
  }
];

export default personalVocab;
