import { WritingQuestion } from './types';

export const writingQuestions: WritingQuestion[] = [
  // PART 1: Form Filling
  {
    id: 'write_001',
    section: 'writing',
    type: 'form',
    points: 5,
    prompt: {
      en: 'You want to register for a language course. Your friend Thomas Müller (born 1985 in Munich) wants to join too. Fill in his details.',
      bn: 'আপনি একটি ভাষা কোর্সের জন্য নিবন্ধন করতে চান। আপনার বন্ধু থমাস মুলার (জন্ম ১৯৮৫, মিউনিখ) ও যোগ দিতে চান। তার তথ্য পূরণ করুন।',
      tr: 'Bir dil kursuna kaydolmak istiyorsunuz. Arkadaşınız Thomas Müller (1985 Münih doğumlu) de katılmak istiyor. Bilgilerini doldurun.',
      hi: 'आप एक भाषा पाठ्यक्रम के लिए पंजीकरण करना चाहते हैं। आपका दोस्त थॉमस मूलर (1985 म्यूनिख में पैदा हुआ) भी शामिल होना चाहता है। उसका विवरण भरें।',
      ar: 'تريد التسجيل في دورة لغة. صديقك توماس مولر (مواليد 1985 في ميونيخ) يريد الانضمام أيضًا. املأ بياناته.'
    },
    fields: [
      {
        id: 'name',
        label: { en: 'Name', bn: 'নাম', tr: 'İsim', hi: 'नाम', ar: 'الاسم' },
        expectedValue: 'Müller'
      },
      {
        id: 'vorname',
        label: { en: 'First Name', bn: 'প্রথম নাম', tr: 'Ad', hi: 'पहला नाम', ar: 'الاسم الأول' },
        expectedValue: 'Thomas'
      },
      {
        id: 'geburtsort',
        label: { en: 'Place of Birth', bn: 'জন্মস্থান', tr: 'Doğum Yeri', hi: 'जन्म स्थान', ar: 'مكان الميلاد' },
        expectedValue: 'München'
      }
    ]
  },
  {
    id: 'write_002',
    section: 'writing',
    type: 'form',
    points: 5,
    prompt: {
      en: 'You are booking a hotel room for your wife, Sarah Klein.',
      bn: 'আপনি আপনার স্ত্রী সারাহ ক্লেইনের জন্য একটি হোটেল রুম বুক করছেন।',
      tr: 'Eşiniz Sarah Klein için bir otel odası ayırtıyorsunuz.',
      hi: 'आप अपनी पत्नी सारा क्लेन के लिए एक होटल का कमरा बुक कर रहे हैं।',
      ar: 'أنت تحجز غرفة فندقية لزوجتك سارة كلاين.'
    },
    fields: [
      {
        id: 'familienname',
        label: { en: 'Surname', bn: 'বংশনাম', tr: 'Soyadı', hi: 'उपनाम', ar: 'اسم العائلة' },
        expectedValue: 'Klein'
      },
      {
        id: 'anzahl_personen',
        label: { en: 'Number of Persons', bn: 'ব্যক্তির সংখ্যা', tr: 'Kişi Sayısı', hi: 'व्यक्तियों की संख्या', ar: 'عدد الأشخاص' },
        expectedValue: '2'
      }
    ]
  },

  // PART 2: Short Message
  {
    id: 'write_003',
    section: 'writing',
    type: 'message',
    points: 10,
    prompt: {
      en: 'Write a short email to your friend Lisa. Invite her to your birthday party on Saturday at 20:00. (approx. 30 words)',
      bn: 'আপনার বন্ধু লিসাকে একটি ছোট ইমেল লিখুন। শনিবার রাত ৮টায় আপনার জন্মদিনের পার্টিতে তাকে আমন্ত্রণ জানান। (প্রায় ৩০ শব্দ)',
      tr: 'Arkadaşınız Lisa\'ya kısa bir e-posta yazın. Onu cumartesi günü saat 20:00\'deki doğum günü partinize davet edin. (yaklaşık 30 kelime)',
      hi: 'अपनी सहेली लिसा को एक छोटा ईमेल लिखें। उसे शनिवार को 20:00 बजे अपनी जन्मदिन की पार्टी में आमंत्रित करें। (लगभग 30 शब्द)',
      ar: 'اكتب بريدًا إلكترونيًا قصيرًا لصديقتك ليزا. ادعها إلى حفلة عيد ميلادك يوم السبت الساعة 20:00. (حوالي 30 كلمة)'
    },
    expectedKeywords: ['Hallo Lisa', 'Geburtstag', 'Party', 'Samstag', '20 Uhr', 'kommen', 'Grüße']
  },
  {
    id: 'write_004',
    section: 'writing',
    type: 'message',
    points: 10,
    prompt: {
      en: 'You cannot come to the German course tomorrow. Write a message to your teacher, Frau Weber. Say why (sick) and when you will come again.',
      bn: 'আপনি আগামীকাল জার্মান কোর্সে আসতে পারবেন না। আপনার শিক্ষক ফ্রাউ ওয়েবারকে একটি বার্তা লিখুন। বলুন কেন (অসুস্থ) এবং কখন আপনি আবার আসবেন।',
      tr: 'Yarın Almanca kursuna gelemezsiniz. Öğretmeniniz Bayan Weber\'e bir mesaj yazın. Nedenini (hasta) ve ne zaman tekrar geleceğinizi söyleyin.',
      hi: 'आप कल जर्मन कोर्स में नहीं आ सकते। अपनी शिक्षिका, फ्राउ वेबर को एक संदेश लिखें। बताएं कि क्यों (बीमार) और आप फिर कब आएंगे।',
      ar: 'لا يمكنك الحضور إلى دورة اللغة الألمانية غدًا. اكتب رسالة إلى معلمتك السيدة ويبر. قل السبب (مريض) ومتى ستأتي مرة أخرى.'
    },
    expectedKeywords: ['Liebe Frau Weber', 'morgen', 'nicht kommen', 'krank', 'nächste Woche', 'Viele Grüße']
  }
];

export default writingQuestions;
