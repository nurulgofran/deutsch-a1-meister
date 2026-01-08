import { ReadingQuestion } from './types';

export const readingQuestions: ReadingQuestion[] = [
  {
    id: 'read_001',
    section: 'reading',
    type: 'multiple-choice',
    points: 5,
    text: 'Öffnungszeiten:\nMontag - Freitag: 9:00 - 18:00 Uhr\nSamstag: 10:00 - 14:00 Uhr\nSonntag: geschlossen',
    question: {
      en: 'When is the store open on Saturday?',
      bn: 'শনিবার দোকান কখন খোলা?',
      tr: 'Mağaza cumartesi günü ne zaman açık?',
      hi: 'शनिवार को दुकान कब खुली है?',
      ar: 'متى يفتح المتجر يوم السبت؟'
    },
    options: {
      en: ['9:00 - 18:00', '10:00 - 14:00', 'Closed'],
      bn: ['৯:০০ - ১৮:০০', '১০:০০ - ১৪:০০', 'বন্ধ'],
      tr: ['9:00 - 18:00', '10:00 - 14:00', 'Kapalı'],
      hi: ['9:00 - 18:00', '10:00 - 14:00', 'बंद'],
      ar: ['9:00 - 18:00', '10:00 - 14:00', 'مغلق']
    },
    correctAnswer: 1
  },
  {
    id: 'read_002',
    section: 'reading',
    type: 'true-false',
    points: 5,
    text: 'Liebe Maria,\n\nich lade dich herzlich zu meiner Geburtstagsparty am Samstag, den 15. März ein. Die Party beginnt um 19 Uhr bei mir zu Hause. Kannst du bitte bis Mittwoch antworten?\n\nLiebe Grüße,\nSarah',
    question: {
      en: 'The party is on Sunday.',
      bn: 'পার্টি রবিবার।',
      tr: 'Parti pazar günü.',
      hi: 'पार्टी रविवार को है।',
      ar: 'الحفلة يوم الأحد.'
    },
    correctAnswer: false
  },
  {
    id: 'read_003',
    section: 'reading',
    type: 'multiple-choice',
    points: 5,
    text: 'Stellenanzeige:\nWir suchen eine Verkäuferin für unser Bekleidungsgeschäft.\nArbeitszeit: 20 Stunden pro Woche\nVoraussetzungen: Erfahrung im Verkauf, gute Deutschkenntnisse\nBewerbung an: jobs@mode-berlin.de',
    question: {
      en: 'What kind of job is this?',
      bn: 'এটি কোন ধরনের চাকরি?',
      tr: 'Bu ne tür bir iş?',
      hi: 'यह किस तरह की नौकरी है?',
      ar: 'ما نوع هذه الوظيفة؟'
    },
    options: {
      en: ['Full-time office job', 'Part-time sales job', 'Teaching position'],
      bn: ['পূর্ণকালীন অফিস চাকরি', 'পার্ট-টাইম বিক্রয় চাকরি', 'শিক্ষকতার পদ'],
      tr: ['Tam zamanlı ofis işi', 'Yarı zamanlı satış işi', 'Öğretmenlik pozisyonu'],
      hi: ['पूर्णकालिक ऑफिस नौकरी', 'अंशकालिक बिक्री नौकरी', 'शिक्षण पद'],
      ar: ['وظيفة مكتبية بدوام كامل', 'وظيفة مبيعات بدوام جزئي', 'وظيفة تعليمية']
    },
    correctAnswer: 1
  },
  {
    id: 'read_004',
    section: 'reading',
    type: 'true-false',
    points: 5,
    text: 'Achtung!\nDer Aufzug ist vom 5. bis 10. April wegen Reparatur außer Betrieb.\nBitte benutzen Sie die Treppe.\nWir bitten um Ihr Verständnis.\nIhre Hausverwaltung',
    question: {
      en: 'The elevator is not working for 5 days.',
      bn: 'লিফট ৫ দিনের জন্য কাজ করছে না।',
      tr: 'Asansör 5 gün boyunca çalışmıyor.',
      hi: 'लिफ्ट 5 दिनों के लिए काम नहीं कर रही है।',
      ar: 'المصعد لا يعمل لمدة 5 أيام.'
    },
    correctAnswer: false // It's 6 days (5th to 10th)
  },
  {
    id: 'read_005',
    section: 'reading',
    type: 'multiple-choice',
    points: 5,
    text: 'Restaurant "Zum Goldenen Löwen"\nMittagsmenü (12:00 - 15:00):\nSuppe des Tages + Hauptgericht + Getränk = 9,90 €\nKinderportionen: halber Preis\nReservierung: 030-123456',
    question: {
      en: 'How much does the children\'s lunch menu cost?',
      bn: 'বাচ্চাদের দুপুরের মেনুর দাম কত?',
      tr: 'Çocuk öğle yemeği menüsü ne kadar?',
      hi: 'बच्चों के लंच मेनू की कीमत कितनी है?',
      ar: 'كم تكلفة قائمة غداء الأطفال؟'
    },
    options: {
      en: ['€4.95', '€9.90', '€14.85'],
      bn: ['€৪.৯৫', '€৯.৯০', '€১৪.৮৫'],
      tr: ['4,95 €', '9,90 €', '14,85 €'],
      hi: ['€4.95', '€9.90', '€14.85'],
      ar: ['4.95 يورو', '9.90 يورو', '14.85 يورو']
    },
    correctAnswer: 0
  }
];

export default readingQuestions;
