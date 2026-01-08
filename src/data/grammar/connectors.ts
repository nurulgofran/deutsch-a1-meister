import { GrammarPattern } from '../types';

export const connectorsGrammar: GrammarPattern = {
  id: 'grammar_connectors',
  titleKey: 'grammar.connectors.title',
  order: 13,
  isPremium: false,
  exercises: [
    {
      id: 'conn_001',
      type: 'sentence-builder',
      prompt: {
        german: 'Ich lerne Deutsch, ___ es ist interessant.',
        translations: { en: 'I learn German, because it is interesting.', bn: 'আমি জার্মান শিখছি, কারণ এটি মজার।', tr: 'Almanca öğreniyorum, çünkü ilginç.', hi: 'मैं जर्मन सीख रहा हूँ, क्योंकि यह दिलचस्प है।', ar: 'أنا أتعلم الألمانية، لأنها مثيرة للاهتمام.' }
      },
      correctAnswer: ['denn'],
      options: ['denn', 'aber', 'oder', 'und'],
      explanation: {
        en: '"denn" (because) connects two main clauses. Position 0. Verb stays at position 2.',
        bn: '"denn" (কারণ) দুটি প্রধান বাক্যকে যুক্ত করে। Position 0। Verb ২য় স্থানে থাকে।',
        tr: '"denn" (çünkü) iki ana cümleyi bağlar. Pozisyon 0. Fiil 2. pozisyonda kalır.',
        hi: '"denn" (क्योंकि) दो मुख्य वाक्यों को जोड़ता है। Position 0। क्रिया दूसरे स्थान पर रहती है।',
        ar: '"denn" (لأن) يربط جملتين رئيسيتين. الموضع 0. يبقى الفعل في الموضع 2.'
      }
    },
    {
      id: 'conn_002',
      type: 'multiple-choice',
      prompt: {
        german: 'Ich trinke Tee ___ Kaffee.',
        translations: { en: 'I drink tea or coffee.', bn: 'আমি চা অথবা কফি পান করি।', tr: 'Çay veya kahve içerim.', hi: 'मैं चाय या कॉफी पीता हूँ।', ar: 'أشرب الشاي أو القهوة.' }
      },
      correctAnswer: ['oder'],
      options: ['und', 'aber', 'oder'],
      explanation: {
        en: '"oder" means "or". It connects alternatives.',
        bn: '"oder" মানে "অথবা"। এটি বিকল্পগুলোকে যুক্ত করে।',
        tr: '"oder", "veya" anlamına gelir. Alternatifleri bağlar.',
        hi: '"oder" का अर्थ है "या"। यह विकल्पों को जोड़ता है।',
        ar: '"oder" تعني "أو". تربط بين البدائل.'
      }
    },
    {
      id: 'conn_003',
      type: 'sentence-builder',
      prompt: {
        german: 'Er ist müde, ___ er geht ins Kino.',
        translations: { en: 'He is tired, but he goes to the cinema.', bn: 'সে ক্লান্ত, কিন্তু সে সিনেমায় যাচ্ছে।', tr: 'Yorgun ama sinemaya gidiyor.', hi: 'वह थका हुआ है, लेकिन वह सिनेमा जा रहा है।', ar: 'هو متعب، لكنه يذهب إلى السينما.' }
      },
      correctAnswer: ['aber'],
      options: ['und', 'denn', 'aber', 'oder'],
      explanation: {
        en: '"aber" (but) expresses a contrast. Position 0.',
        bn: '"aber" (কিন্তু) বৈপরীত্য প্রকাশ করে। Position 0।',
        tr: '"aber" (ama) bir zıtlık ifade eder. Pozisyon 0.',
        hi: '"aber" (लेकिन) एक विरोधाभास व्यक्त करता है। Position 0।',
        ar: '"aber" (لكن) تعبر عن التناقض. الموضع 0.'
      }
    },
    {
      id: 'conn_004',
      type: 'fill-blank',
      prompt: {
        german: 'Wir essen Pizza ___ trinken Cola.',
        translations: { en: 'We eat pizza and drink coke.', bn: 'আমরা পিৎজা খাচ্ছি এবং কোক পান করছি।', tr: 'Pizza yiyoruz ve kola içiyoruz.', hi: 'हम पिज्जा खाते हैं और कोक पीते हैं।', ar: 'نحن نأكل البيتزا ونشرب الكولا.' }
      },
      correctAnswer: ['und'],
      explanation: {
        en: '"und" (and) connects similar ideas or additions.',
        bn: '"und" (এবং) একই ধরণের ধারণা বা সংযোজনকে যুক্ত করে।',
        tr: '"und" (ve) benzer fikirleri veya eklemeleri bağlar.',
        hi: '"und" (aur) समान विचारों या परिवर्धन को जोड़ता है।',
        ar: '"und" (و) تربط الأفكار المتشابهة أو الإضافات.'
      }
    }
  ]
};
