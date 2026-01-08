import { ListeningQuestion } from './types';

export const listeningQuestions: ListeningQuestion[] = [
  {
    id: 'list_001',
    section: 'listening',
    type: 'multiple-choice',
    points: 5,
    audioText: 'Achtung an Gleis 3. Der Zug nach München fährt heute um 10:30 Uhr ab. Bitte einsteigen.',
    question: {
      en: 'When does the train to Munich leave?',
      bn: 'মিউনিখের ট্রেন কখন ছাড়বে?',
      tr: 'Münih treni ne zaman kalkıyor?',
      hi: 'म्यूनिख के लिए ट्रेन कब रवाना होगी?',
      ar: 'متى يغادر القطار إلى ميونيخ؟'
    },
    options: {
      en: ['10:00', '10:30', '11:00'],
      bn: ['১০:০০', '১০:৩০', '১১:০০'],
      tr: ['10:00', '10:30', '11:00'],
      hi: ['10:00', '10:30', '11:00'],
      ar: ['10:00', '10:30', '11:00']
    },
    correctAnswer: 1
  },
  {
    id: 'list_002',
    section: 'listening',
    type: 'multiple-choice',
    points: 5,
    audioText: 'Hallo, ich möchte bitte zwei Brötchen und ein Stück Kuchen. Das macht 4 Euro 50.',
    question: {
      en: 'What does the customer buy?',
      bn: 'গ্রাহক কি কেনে?',
      tr: 'Müşteri ne satın alıyor?',
      hi: 'ग्राहक क्या खरीदता है?',
      ar: 'ماذا يشتري الزبون؟'
    },
    options: {
      en: ['Bread and Coffee', 'Rolls and Cake', 'Cake only'],
      bn: ['রুটি এবং কফি', 'রোলস এবং কেক', 'শুধু কেক'],
      tr: ['Ekmek ve Kahve', 'Sandviç ve Kek', 'Sadece Kek'],
      hi: ['रोटी और कॉफी', 'रोल्स और केक', 'केवल केक'],
      ar: ['خبز وقهوة', 'لفائف وكعك', 'كعك فقط']
    },
    correctAnswer: 1
  },
  {
    id: 'list_003',
    section: 'listening',
    type: 'true-false',
    points: 5,
    audioText: 'Am Wochenende soll es regnen. Es wird kalt, nur 15 Grad. Bleiben Sie lieber zu Hause!',
    question: {
      en: 'The weather will be sunny.',
      bn: 'আবহাওয়া রৌদ্রোজ্জ্বল থাকবে।',
      tr: 'Hava güneşli olacak.',
      hi: 'मौसम धूप वाला रहेगा।',
      ar: 'سيكون الطقس مشمساً.'
    },
    correctAnswer: false
  },
  {
    id: 'list_004',
    section: 'listening',
    type: 'multiple-choice',
    points: 5,
    audioText: 'Entschuldigung, wie komme ich zum Bahnhof? - Gehen Sie geradeaus und dann die zweite Straße links.',
    question: {
      en: 'Where does the man have to go?',
      bn: 'লোকটিকে কোথায় যেতে হবে?',
      tr: 'Adam nereye gitmeli?',
      hi: 'आदमी को कहाँ जाना है?',
      ar: 'إلى أين يجب أن يذهب الرجل؟'
    },
    options: {
      en: ['Left immediately', 'Right', 'Straight then 2nd left'],
      bn: ['অবিলম্বে বামে', 'ডানে', 'সোজা তারপর দ্বিতীয় বামে'],
      tr: ['Hemen sola', 'Sağa', 'Düz sonra 2. sola'],
      hi: ['तुरंत बाएं', 'दाएं', 'सीधा फिर दूसरा बाएं'],
      ar: ['إلى اليسار مباشرة', 'إلى اليمين', 'مستقيم ثم الثاني إلى اليسار']
    },
    correctAnswer: 2
  }
];

export default listeningQuestions;
