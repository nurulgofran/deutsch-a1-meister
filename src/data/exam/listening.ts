import { ListeningQuestion } from './types';

export const listeningQuestions: ListeningQuestion[] = [
  {
    id: 'listen_001',
    section: 'listening',
    type: 'multiple-choice',
    points: 5,
    audioText: 'Guten Tag! Mein Name ist Anna Müller. Ich komme aus Berlin und arbeite als Lehrerin.',
    question: {
      en: 'What is the woman\'s job?',
      bn: 'মহিলার পেশা কী?',
      tr: 'Kadının mesleği nedir?',
      hi: 'महिला का पेशा क्या है?',
      ar: 'ما هي مهنة المرأة؟'
    },
    options: {
      en: ['Doctor', 'Teacher', 'Engineer'],
      bn: ['ডাক্তার', 'শিক্ষক', 'প্রকৌশলী'],
      tr: ['Doktor', 'Öğretmen', 'Mühendis'],
      hi: ['डॉक्टर', 'शिक्षक', 'इंजीनियर'],
      ar: ['طبيبة', 'معلمة', 'مهندسة']
    },
    correctAnswer: 1
  },
  {
    id: 'listen_002',
    section: 'listening',
    type: 'multiple-choice',
    points: 5,
    audioText: 'Der Zug nach München fährt um 14 Uhr 30 ab Gleis 5.',
    question: {
      en: 'What time does the train leave?',
      bn: 'ট্রেন কখন ছাড়বে?',
      tr: 'Tren saat kaçta kalkıyor?',
      hi: 'ट्रेन कितने बजे जाएगी?',
      ar: 'متى يغادر القطار؟'
    },
    options: {
      en: ['2:30 PM', '4:30 PM', '5:30 PM'],
      bn: ['দুপুর ২:৩০', 'বিকাল ৪:৩০', 'বিকাল ৫:৩০'],
      tr: ['14:30', '16:30', '17:30'],
      hi: ['दोपहर 2:30', 'शाम 4:30', 'शाम 5:30'],
      ar: ['2:30 مساءً', '4:30 مساءً', '5:30 مساءً']
    },
    correctAnswer: 0
  },
  {
    id: 'listen_003',
    section: 'listening',
    type: 'true-false',
    points: 5,
    audioText: 'Die Bäckerei ist montags bis freitags von 7 bis 18 Uhr geöffnet. Am Samstag nur bis 14 Uhr.',
    question: {
      en: 'The bakery is open on Saturdays until 6 PM.',
      bn: 'বেকারি শনিবার সন্ধ্যা ৬টা পর্যন্ত খোলা।',
      tr: 'Fırın cumartesi günleri saat 18:00\'e kadar açık.',
      hi: 'बेकरी शनिवार को शाम 6 बजे तक खुली है।',
      ar: 'المخبز مفتوح أيام السبت حتى السادسة مساءً.'
    },
    correctAnswer: false
  },
  {
    id: 'listen_004',
    section: 'listening',
    type: 'multiple-choice',
    points: 5,
    audioText: 'Ich hätte gerne eine Tasse Kaffee und ein Stück Kuchen, bitte.',
    question: {
      en: 'What does the person order?',
      bn: 'ব্যক্তি কী অর্ডার করেছে?',
      tr: 'Kişi ne sipariş ediyor?',
      hi: 'व्यक्ति क्या ऑर्डर कर रहा है?',
      ar: 'ماذا يطلب الشخص؟'
    },
    options: {
      en: ['Tea and bread', 'Coffee and cake', 'Water and salad'],
      bn: ['চা ও রুটি', 'কফি ও কেক', 'পানি ও সালাদ'],
      tr: ['Çay ve ekmek', 'Kahve ve pasta', 'Su ve salata'],
      hi: ['चाय और रोटी', 'कॉफी और केक', 'पानी और सलाद'],
      ar: ['شاي وخبز', 'قهوة وكعك', 'ماء وسلطة']
    },
    correctAnswer: 1
  },
  {
    id: 'listen_005',
    section: 'listening',
    type: 'multiple-choice',
    points: 5,
    audioText: 'Die Wohnung hat drei Zimmer, eine Küche und ein Bad. Die Miete ist 800 Euro im Monat.',
    question: {
      en: 'How much is the monthly rent?',
      bn: 'মাসিক ভাড়া কত?',
      tr: 'Aylık kira ne kadar?',
      hi: 'मासिक किराया कितना है?',
      ar: 'كم الإيجار الشهري؟'
    },
    options: {
      en: ['600 Euro', '800 Euro', '1000 Euro'],
      bn: ['৬০০ ইউরো', '৮০০ ইউরো', '১০০০ ইউরো'],
      tr: ['600 Euro', '800 Euro', '1000 Euro'],
      hi: ['600 यूरो', '800 यूरो', '1000 यूरो'],
      ar: ['600 يورو', '800 يورو', '1000 يورو']
    },
    correctAnswer: 1
  }
];

export default listeningQuestions;
