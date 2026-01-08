import { WritingQuestion } from './types';

export const writingQuestions: WritingQuestion[] = [
  {
    id: 'write_001',
    section: 'writing',
    type: 'form',
    points: 15,
    prompt: {
      en: 'You want to register for a German course. Fill in the registration form.',
      bn: 'আপনি একটি জার্মান কোর্সে নিবন্ধন করতে চান। নিবন্ধন ফর্ম পূরণ করুন।',
      tr: 'Bir Almanca kursuna kayıt olmak istiyorsunuz. Kayıt formunu doldurun.',
      hi: 'आप एक जर्मन कोर्स के लिए पंजीकरण करना चाहते हैं। पंजीकरण फॉर्म भरें।',
      ar: 'تريد التسجيل في دورة لغة ألمانية. املأ نموذج التسجيل.'
    },
    fields: [
      {
        id: 'name',
        label: { en: 'Name', bn: 'নাম', tr: 'Ad', hi: 'नाम', ar: 'الاسم' },
        placeholder: 'Vorname Nachname'
      },
      {
        id: 'geburtsdatum',
        label: { en: 'Date of Birth', bn: 'জন্ম তারিখ', tr: 'Doğum Tarihi', hi: 'जन्म तिथि', ar: 'تاريخ الميلاد' },
        placeholder: 'TT.MM.JJJJ'
      },
      {
        id: 'adresse',
        label: { en: 'Address', bn: 'ঠিকানা', tr: 'Adres', hi: 'पता', ar: 'العنوان' },
        placeholder: 'Straße, Hausnummer, PLZ, Stadt'
      },
      {
        id: 'telefon',
        label: { en: 'Phone Number', bn: 'ফোন নম্বর', tr: 'Telefon Numarası', hi: 'फोन नंबर', ar: 'رقم الهاتف' },
        placeholder: '+49...'
      },
      {
        id: 'email',
        label: { en: 'Email', bn: 'ইমেইল', tr: 'E-posta', hi: 'ईमेल', ar: 'البريد الإلكتروني' },
        placeholder: 'example@email.de'
      },
      {
        id: 'kurs',
        label: { en: 'Desired Course', bn: 'পছন্দের কোর্স', tr: 'İstenen Kurs', hi: 'इच्छित कोर्स', ar: 'الدورة المطلوبة' },
        placeholder: 'A1 / A2 / B1'
      }
    ]
  },
  {
    id: 'write_002',
    section: 'writing',
    type: 'message',
    points: 10,
    prompt: {
      en: 'You are sick and cannot come to work today. Write a short message to your boss (about 30 words). Include:\n• What is wrong\n• That you cannot come today\n• When you will be back',
      bn: 'আপনি অসুস্থ এবং আজ কাজে যেতে পারবেন না। আপনার বসকে একটি সংক্ষিপ্ত বার্তা লিখুন (প্রায় ৩০ শব্দ)। অন্তর্ভুক্ত করুন:\n• কী সমস্যা\n• আজ আসতে পারবেন না\n• কখন ফিরবেন',
      tr: 'Hasta olduğunuz için bugün işe gidemiyorsunuz. Patronunuza kısa bir mesaj yazın (yaklaşık 30 kelime). Şunları ekleyin:\n• Ne olduğunu\n• Bugün gelemeyeceğinizi\n• Ne zaman döneceğinizi',
      hi: 'आप बीमार हैं और आज काम पर नहीं आ सकते। अपने बॉस को एक छोटा संदेश लिखें (लगभग 30 शब्द)। शामिल करें:\n• क्या समस्या है\n• आज नहीं आ सकते\n• कब वापस आएंगे',
      ar: 'أنت مريض ولا تستطيع الحضور إلى العمل اليوم. اكتب رسالة قصيرة لمديرك (حوالي 30 كلمة). يشمل:\n• ما هي المشكلة\n• لا تستطيع الحضور اليوم\n• متى ستعود'
    },
    expectedKeywords: ['krank', 'Arzt', 'heute', 'nicht', 'kommen', 'morgen', 'Montag', 'Kopfschmerzen', 'Fieber']
  }
];

export default writingQuestions;
