import { Question } from './types';

export const part1Questions: Question[] = [
  {
    id: "1",
    text_de: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …",
    text_en: "In Germany, people are allowed to openly speak against the government because ...",
    options: [
      { de: "hier Religionsfreiheit gilt.", en: "freedom of religion applies here." },
      { de: "die Menschen Steuern zahlen.", en: "people pay taxes." },
      { de: "die Menschen das Wahlrecht haben.", en: "people have the right to vote." },
      { de: "hier Meinungsfreiheit gilt.", en: "freedom of speech applies here." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Artikel 5 des Grundgesetzes garantiert die Meinungsfreiheit. Das bedeutet, jeder darf seine Meinung frei äußern – auch Kritik an der Regierung.",
    explanation_en: "Article 5 of the Basic Law guarantees freedom of speech. This means everyone can freely express their opinion – including criticism of the government."
  },
  {
    id: "2",
    text_de: "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …",
    text_en: "In Germany, parents can decide until their child's 14th birthday whether they participate in ...",
    options: [
      { de: "Geschichtsunterricht teilnimmt.", en: "history lessons." },
      { de: "Religionsunterricht teilnimmt.", en: "religious education." },
      { de: "Politikunterricht teilnimmt.", en: "political education." },
      { de: "Sprachunterricht teilnimmt.", en: "language lessons." }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die Religionsfreiheit erlaubt Eltern, über die religiöse Erziehung ihrer Kinder zu entscheiden. Ab 14 Jahren dürfen Kinder selbst entscheiden.",
    explanation_en: "Freedom of religion allows parents to decide about their children's religious education. From age 14, children can decide for themselves."
  },
  {
    id: "3",
    text_de: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
    text_en: "Germany is a constitutional state. What does that mean?",
    options: [
      { de: "Alle Einwohnerinnen/Einwohner und der Staat müssen sich an die Gesetze halten.", en: "All residents and the state must obey the laws." },
      { de: "Der Staat muss sich nicht an die Gesetze halten.", en: "The state does not have to obey the laws." },
      { de: "Nur Deutsche müssen die Gesetze befolgen.", en: "Only Germans must follow the laws." },
      { de: "Die Gerichte machen die Gesetze.", en: "The courts make the laws." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Im Rechtsstaat sind alle an Gesetze gebunden – Bürger und Staat gleichermaßen. Niemand steht über dem Gesetz.",
    explanation_en: "In a constitutional state, everyone is bound by laws – citizens and the state alike. No one is above the law."
  },
  {
    id: "4",
    text_de: "Welches Recht gehört zu den Grundrechten in Deutschland?",
    text_en: "Which right is one of the basic rights in Germany?",
    options: [
      { de: "Waffenbesitz", en: "Gun ownership" },
      { de: "Faustrecht", en: "Law of the fist" },
      { de: "Meinungsfreiheit", en: "Freedom of speech" },
      { de: "Selbstjustiz", en: "Vigilante justice" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Meinungsfreiheit ist in Artikel 5 des Grundgesetzes verankert. Waffenbesitz, Faustrecht und Selbstjustiz sind keine Grundrechte.",
    explanation_en: "Freedom of speech is enshrined in Article 5 of the Basic Law. Gun ownership, law of the fist, and vigilante justice are not basic rights."
  },
  {
    id: "5",
    text_de: "Wahlen in Deutschland sind frei. Was bedeutet das?",
    text_en: "Elections in Germany are free. What does that mean?",
    options: [
      { de: "Man darf Geld annehmen, wenn man dafür eine bestimmte Kandidatin/einen bestimmten Kandidaten wählt.", en: "You may accept money to vote for a specific candidate." },
      { de: "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.", en: "Only people who have never been in prison may vote." },
      { de: "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.", en: "Voters may not be influenced, forced to vote a certain way, or suffer disadvantages from their vote." },
      { de: "Alle wahlberechtigten Personen müssen wählen.", en: "All eligible voters must vote." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Freie Wahlen bedeuten, dass niemand Druck auf Wähler ausüben darf. Jeder entscheidet selbst, ohne Zwang oder Nachteile befürchten zu müssen.",
    explanation_en: "Free elections mean no one may pressure voters. Everyone decides freely without fear of coercion or disadvantages."
  },
  {
    id: "6",
    text_de: "Wie heißt die deutsche Verfassung?",
    text_en: "What is the German constitution called?",
    options: [
      { de: "Volksgesetz", en: "People's Law" },
      { de: "Bundesgesetz", en: "Federal Law" },
      { de: "Deutsches Gesetz", en: "German Law" },
      { de: "Grundgesetz", en: "Basic Law" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die deutsche Verfassung heißt Grundgesetz (GG). Es wurde 1949 verabschiedet und bildet die rechtliche Grundlage der Bundesrepublik.",
    explanation_en: "The German constitution is called the Basic Law (Grundgesetz). It was adopted in 1949 and forms the legal foundation of the Federal Republic."
  },
  {
    id: "7",
    text_de: "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …",
    text_en: "Which right is guaranteed by the German constitution? The right to ...",
    options: [
      { de: "Glaubens- und Gewissensfreiheit", en: "freedom of faith and conscience" },
      { de: "Unterhaltung", en: "entertainment" },
      { de: "Arbeit", en: "work" },
      { de: "Wohnung", en: "housing" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Artikel 4 des Grundgesetzes garantiert die Glaubens- und Gewissensfreiheit. Unterhaltung, Arbeit und Wohnung sind keine Grundrechte.",
    explanation_en: "Article 4 of the Basic Law guarantees freedom of faith and conscience. Entertainment, work, and housing are not basic rights."
  },
  {
    id: "8",
    text_de: "Was steht nicht im Grundgesetz von Deutschland?",
    text_en: "What is NOT in Germany's Basic Law?",
    options: [
      { de: "Die Würde des Menschen ist unantastbar.", en: "Human dignity is inviolable." },
      { de: "Alle sollen gleich viel Geld haben.", en: "Everyone should have the same amount of money." },
      { de: "Jeder Mensch darf seine Meinung sagen.", en: "Everyone may express their opinion." },
      { de: "Alle sind vor dem Gesetz gleich.", en: "Everyone is equal before the law." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Das Grundgesetz garantiert keine Vermögensgleichheit. Es schützt aber Menschenwürde, Meinungsfreiheit und Gleichheit vor dem Gesetz.",
    explanation_en: "The Basic Law does not guarantee equal wealth. However, it protects human dignity, freedom of speech, and equality before the law."
  },
  {
    id: "9",
    text_de: "Welches Grundrecht gilt in Deutschland nur für Ausländerinnen/Ausländer? Das Grundrecht auf …",
    text_en: "Which basic right applies in Germany only to foreigners? The basic right to ...",
    options: [
      { de: "Schutz der Familie", en: "protection of the family" },
      { de: "Menschenwürde", en: "human dignity" },
      { de: "Asyl", en: "asylum" },
      { de: "Meinungsfreiheit", en: "freedom of speech" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Das Asylrecht nach Artikel 16a gilt nur für politisch Verfolgte aus dem Ausland. Deutsche Staatsbürger können kein Asyl in Deutschland beantragen.",
    explanation_en: "The right to asylum under Article 16a applies only to politically persecuted foreigners. German citizens cannot apply for asylum in Germany."
  },
  {
    id: "10",
    text_de: "Was ist mit dem deutschen Grundgesetz vereinbar?",
    text_en: "What is compatible with the German Basic Law?",
    options: [
      { de: "die Prügelstrafe", en: "corporal punishment" },
      { de: "die Folter", en: "torture" },
      { de: "die Todesstrafe", en: "death penalty" },
      { de: "die Geldstrafe", en: "monetary fine" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Nur die Geldstrafe ist erlaubt. Das Grundgesetz verbietet Folter, Todesstrafe und körperliche Bestrafung (Artikel 102, 104).",
    explanation_en: "Only monetary fines are allowed. The Basic Law prohibits torture, death penalty, and corporal punishment (Articles 102, 104)."
  },
  {
    id: "11",
    text_de: "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
    text_en: "What is the constitution of the Federal Republic of Germany called?",
    options: [
      { de: "Grundgesetz", en: "Basic Law" },
      { de: "Bundesverfassung", en: "Federal Constitution" },
      { de: "Gesetzbuch", en: "Law Book" },
      { de: "Verfassungsvertrag", en: "Constitutional Treaty" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Verfassung heißt offiziell Grundgesetz für die Bundesrepublik Deutschland (GG). Es trat am 23. Mai 1949 in Kraft.",
    explanation_en: "The constitution is officially called the Basic Law for the Federal Republic of Germany (GG). It came into force on May 23, 1949."
  },
  {
    id: "12",
    text_de: "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?",
    text_en: "A party in the German Bundestag wants to abolish freedom of the press. Is that possible?",
    options: [
      { de: "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.", en: "Yes, if more than half of the Bundestag members vote for it." },
      { de: "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.", en: "Yes, but two-thirds of Bundestag members must vote for it." },
      { de: "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.", en: "No, because freedom of the press is a basic right. It cannot be abolished." },
      { de: "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.", en: "No, because only the Federal Council can abolish freedom of the press." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Pressefreiheit (Artikel 5 GG) ist durch die Ewigkeitsklausel (Artikel 79) geschützt und kann niemals abgeschafft werden.",
    explanation_en: "Freedom of the press (Article 5) is protected by the eternity clause (Article 79) and can never be abolished."
  },
  {
    id: "13",
    text_de: "Im Parlament steht der Begriff \"Opposition\" für …",
    text_en: "In parliament, the term \"opposition\" stands for ...",
    options: [
      { de: "die regierenden Parteien.", en: "the governing parties." },
      { de: "die Fraktion mit den meisten Abgeordneten.", en: "the faction with the most members." },
      { de: "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.", en: "all parties that reached the 5% threshold in the last election." },
      { de: "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.", en: "all members who do not belong to the governing party/parties." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Opposition sind alle Parteien im Parlament, die nicht an der Regierung beteiligt sind. Sie kontrolliert die Regierung und bietet Alternativen.",
    explanation_en: "The opposition consists of all parties in parliament not in government. They monitor the government and offer alternatives."
  },
  {
    id: "14",
    text_de: "Meinungsfreiheit in Deutschland heißt, dass ich …",
    text_en: "Freedom of speech in Germany means that I ...",
    options: [
      { de: "Passanten auf der Straße beschimpfen darf.", en: "may insult passers-by on the street." },
      { de: "meine Meinung im Internet äußern kann.", en: "can express my opinion on the internet." },
      { de: "Nazi-, Hamas- oder Islamischer Staat-Symbole öffentlich tragen darf.", en: "may publicly wear Nazi, Hamas, or Islamic State symbols." },
      { de: "meine Meinung nur dann äußern darf, solange ich der Regierung nicht widerspreche.", en: "may only express my opinion as long as I don't contradict the government." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Meinungsfreiheit erlaubt das Äußern von Meinungen, auch online. Sie schützt aber keine Beleidigungen oder verfassungsfeindliche Symbole.",
    explanation_en: "Freedom of speech allows expressing opinions, including online. However, it does not protect insults or anti-constitutional symbols."
  },
  {
    id: "15",
    text_de: "Was verbietet das deutsche Grundgesetz?",
    text_en: "What does the German Basic Law prohibit?",
    options: [
      { de: "Militärdienst", en: "Military service" },
      { de: "Zwangsarbeit", en: "Forced labor" },
      { de: "freie Berufswahl", en: "Free choice of profession" },
      { de: "Arbeit im Ausland", en: "Working abroad" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Artikel 12 des Grundgesetzes verbietet Zwangsarbeit. Freie Berufswahl ist dagegen ein Grundrecht.",
    explanation_en: "Article 12 of the Basic Law prohibits forced labor. Free choice of profession, on the other hand, is a basic right."
  },
  {
    id: "16",
    text_de: "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
    text_en: "When is freedom of speech restricted in Germany?",
    options: [
      { de: "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen", en: "when publicly spreading false claims about individuals" },
      { de: "bei Meinungsäußerungen über die Bundesregierung", en: "when expressing opinions about the federal government" },
      { de: "bei Diskussionen über Religionen", en: "when discussing religions" },
      { de: "bei Kritik am Staat", en: "when criticizing the state" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Meinungsfreiheit endet bei Verleumdung und übler Nachrede. Kritik an Regierung, Religion oder Staat ist aber erlaubt.",
    explanation_en: "Freedom of speech ends at defamation and slander. However, criticism of government, religion, or the state is allowed."
  },
  {
    id: "17",
    text_de: "Die deutschen Gesetze verbieten …",
    text_en: "German laws prohibit ...",
    options: [
      { de: "Meinungsfreiheit der Einwohnerinnen und Einwohner.", en: "freedom of speech for residents." },
      { de: "Petitionen der Bürgerinnen und Bürger.", en: "petitions by citizens." },
      { de: "Versammlungsfreiheit der Einwohnerinnen und Einwohner.", en: "freedom of assembly for residents." },
      { de: "Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat.", en: "unequal treatment of citizens by the state." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Artikel 3 des Grundgesetzes verbietet Diskriminierung durch den Staat. Meinungsfreiheit, Petitionsrecht und Versammlungsfreiheit sind geschützt.",
    explanation_en: "Article 3 of the Basic Law prohibits discrimination by the state. Freedom of speech, petition rights, and assembly are protected."
  },
  {
    id: "18",
    text_de: "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
    text_en: "Which basic right is guaranteed in Article 1 of Germany's Basic Law?",
    options: [
      { de: "die Unantastbarkeit der Menschenwürde", en: "the inviolability of human dignity" },
      { de: "das Recht auf Leben", en: "the right to life" },
      { de: "Religionsfreiheit", en: "freedom of religion" },
      { de: "Meinungsfreiheit", en: "freedom of speech" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Artikel 1 beginnt mit: Die Würde des Menschen ist unantastbar. Dies ist das wichtigste Grundrecht und Fundament aller anderen Rechte.",
    explanation_en: "Article 1 begins with: Human dignity is inviolable. This is the most important basic right and foundation of all other rights."
  },
  {
    id: "19",
    text_de: "Was versteht man unter dem Recht der \"Freizügigkeit\" in Deutschland?",
    text_en: "What does the right of \"freedom of movement\" mean in Germany?",
    options: [
      { de: "Man darf sich seinen Wohnort selbst aussuchen.", en: "You may choose your own place of residence." },
      { de: "Man kann seinen Beruf wechseln.", en: "You can change your profession." },
      { de: "Man darf sich für eine andere Religion entscheiden.", en: "You may choose a different religion." },
      { de: "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.", en: "You may move around in public only lightly dressed." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Freizügigkeit (Artikel 11 GG) bedeutet, dass man in ganz Deutschland frei reisen und seinen Wohnort frei wählen kann.",
    explanation_en: "Freedom of movement (Article 11) means you can travel freely throughout Germany and choose your place of residence."
  },
  {
    id: "20",
    text_de: "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann …",
    text_en: "A party in Germany aims to establish a dictatorship. It is then ...",
    options: [
      { de: "tolerant.", en: "tolerant." },
      { de: "rechtsstaatlich orientiert.", en: "oriented toward the rule of law." },
      { de: "gesetzestreu.", en: "law-abiding." },
      { de: "verfassungswidrig.", en: "unconstitutional." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Eine Partei, die die Demokratie abschaffen will, verstößt gegen das Grundgesetz und kann vom Bundesverfassungsgericht verboten werden.",
    explanation_en: "A party that wants to abolish democracy violates the Basic Law and can be banned by the Federal Constitutional Court."
  },
  {
    id: "21",
    text_de: "Welches ist das Wappen der Bundesrepublik Deutschland?",
    text_en: "Which is the coat of arms of the Federal Republic of Germany?",
    options: [
      { de: "Bild 1 (Adler)", en: "Image 1 (Eagle)", image: "/coat-of-arms/germany.png" },
      { de: "Bild 2", en: "Image 2", image: "/coat-of-arms/austria.png" },
      { de: "Bild 3", en: "Image 3", image: "/coat-of-arms/poland.png" },
      { de: "Bild 4", en: "Image 4", image: "/coat-of-arms/eu.png" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false,
    hasImages: true,
    explanation_de: "Der Bundesadler ist das Wappen Deutschlands. Er hat schwarze Federn, einen roten Schnabel und rote Krallen auf goldenem Grund.",
    explanation_en: "The Federal Eagle is Germany's coat of arms. It has black feathers, a red beak, and red claws on a golden background."
  },
  {
    id: "22",
    text_de: "Was für eine Staatsform hat Deutschland?",
    text_en: "What form of government does Germany have?",
    options: [
      { de: "Monarchie", en: "Monarchy" },
      { de: "Diktatur", en: "Dictatorship" },
      { de: "Republik", en: "Republic" },
      { de: "Fürstentum", en: "Principality" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Deutschland ist eine Republik, was bedeutet, dass das Staatsoberhaupt (Bundespräsident) gewählt wird und kein König oder Kaiser ist.",
    explanation_en: "Germany is a republic, meaning the head of state (Federal President) is elected and is not a king or emperor."
  },
  {
    id: "23",
    text_de: "In Deutschland sind die meisten Erwerbstätigen …",
    text_en: "In Germany, most employed people are ...",
    options: [
      { de: "in kleinen Familienunternehmen beschäftigt.", en: "employed in small family businesses." },
      { de: "ehrenamtlich für ein Bundesland tätig.", en: "working voluntarily for a federal state." },
      { de: "selbstständig mit einer eigenen Firma tätig.", en: "self-employed with their own company." },
      { de: "bei einer Firma oder Behörde beschäftigt.", en: "employed by a company or government agency." }
    ],
    correctIndex: 3,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die meisten Menschen in Deutschland sind Arbeitnehmer bei Unternehmen oder im öffentlichen Dienst, nicht selbstständig oder ehrenamtlich.",
    explanation_en: "Most people in Germany are employees at companies or in public service, not self-employed or volunteers."
  },
  {
    id: "24",
    text_de: "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
    text_en: "How many federal states does Germany have?",
    options: [
      { de: "14", en: "14" },
      { de: "15", en: "15" },
      { de: "16", en: "16" },
      { de: "17", en: "17" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Deutschland besteht aus 16 Bundesländern, darunter drei Stadtstaaten (Berlin, Hamburg, Bremen) und 13 Flächenländer.",
    explanation_en: "Germany consists of 16 federal states, including three city-states (Berlin, Hamburg, Bremen) and 13 territorial states."
  },
  {
    id: "25",
    text_de: "Was ist kein Bundesland der Bundesrepublik Deutschland?",
    text_en: "Which is NOT a federal state of Germany?",
    options: [
      { de: "Elsass-Lothringen", en: "Alsace-Lorraine" },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia" },
      { de: "Mecklenburg-Vorpommern", en: "Mecklenburg-Western Pomerania" },
      { de: "Sachsen-Anhalt", en: "Saxony-Anhalt" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Elsass-Lothringen gehört seit 1945 zu Frankreich. Es war früher deutsches Gebiet, ist aber heute kein deutsches Bundesland.",
    explanation_en: "Alsace-Lorraine has belonged to France since 1945. It was formerly German territory but is not a German federal state today."
  },
  {
    id: "26",
    text_de: "Deutschland ist …",
    text_en: "Germany is ...",
    options: [
      { de: "eine kommunistische Republik.", en: "a communist republic." },
      { de: "ein demokratischer und sozialer Bundesstaat.", en: "a democratic and social federal state." },
      { de: "eine kapitalistische und soziale Monarchie.", en: "a capitalist and social monarchy." },
      { de: "ein sozialer und sozialistischer Bundesstaat.", en: "a social and socialist federal state." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Artikel 20 des Grundgesetzes definiert Deutschland als demokratischen und sozialen Bundesstaat mit föderaler Struktur.",
    explanation_en: "Article 20 of the Basic Law defines Germany as a democratic and social federal state with a federal structure."
  },
  {
    id: "27",
    text_de: "Deutschland ist …",
    text_en: "Germany is ...",
    options: [
      { de: "ein sozialistischer Staat.", en: "a socialist state." },
      { de: "ein Bundesstaat.", en: "a federal state." },
      { de: "eine Diktatur.", en: "a dictatorship." },
      { de: "eine Monarchie.", en: "a monarchy." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Deutschland ist ein Bundesstaat (Föderation), bestehend aus 16 Bundesländern mit eigenen Regierungen und Parlamenten.",
    explanation_en: "Germany is a federal state (federation) consisting of 16 states with their own governments and parliaments."
  },
  {
    id: "28",
    text_de: "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
    text_en: "Who elects the members of the Bundestag in Germany?",
    options: [
      { de: "das Militär", en: "the military" },
      { de: "die Wirtschaft", en: "the economy" },
      { de: "das wahlberechtigte Volk", en: "the eligible voters" },
      { de: "die Verwaltung", en: "the administration" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "In einer Demokratie wählt das Volk seine Vertreter. Alle deutschen Staatsbürger ab 18 Jahren dürfen den Bundestag wählen.",
    explanation_en: "In a democracy, the people elect their representatives. All German citizens aged 18 and older may vote for the Bundestag."
  },
  {
    id: "29",
    text_de: "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
    text_en: "Which animal is on Germany's coat of arms?",
    options: [
      { de: "Löwe", en: "Lion" },
      { de: "Adler", en: "Eagle" },
      { de: "Bär", en: "Bear" },
      { de: "Pferd", en: "Horse" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Adler ist das deutsche Wappentier seit dem Mittelalter. Er symbolisiert Stärke und Freiheit.",
    explanation_en: "The eagle has been Germany's heraldic animal since the Middle Ages. It symbolizes strength and freedom."
  },
  {
    id: "30",
    text_de: "Was ist kein Merkmal unserer Demokratie?",
    text_en: "What is NOT a characteristic of our democracy?",
    options: [
      { de: "regelmäßige Wahlen", en: "regular elections" },
      { de: "Pressezensur", en: "press censorship" },
      { de: "Meinungsfreiheit", en: "freedom of speech" },
      { de: "verschiedene Parteien", en: "different parties" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Pressezensur ist verboten in einer Demokratie. Freie Presse, regelmäßige Wahlen und Parteienpluralismus sind demokratische Merkmale.",
    explanation_en: "Press censorship is forbidden in a democracy. Free press, regular elections, and party pluralism are democratic characteristics."
  },
  {
    id: "31",
    text_de: "Die__(Lücke)____(Lücke)__ eines__(Lücke)__ nach demokratischen Grundsätzen__(Lücke)?",
    text_en: "The Bundestag is elected according to democratic principles?",
    options: [
      { de: "geheim", en: "secretly" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Wahlen in Deutschland sind allgemein, unmittelbar, frei, gleich und geheim. Die geheime Wahl schützt vor Beeinflussung.",
    explanation_en: "Elections in Germany are universal, direct, free, equal, and secret. Secret voting protects against influence."
  },
  {
    id: "32",
    text_de: "Welches Recht gehört zu den Grundrechten in Deutschland?",
    text_en: "Which right is one of the basic rights in Germany?",
    options: [
      { de: "Recht auf Glück", en: "Right to happiness" },
      { de: "Versammlungsfreiheit", en: "Freedom of assembly" },
      { de: "Recht auf Urlaub", en: "Right to vacation" },
      { de: "Recht auf Reichtum", en: "Right to wealth" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Artikel 8 des Grundgesetzes garantiert die Versammlungsfreiheit. Rechte auf Glück, Urlaub oder Reichtum sind keine Grundrechte.",
    explanation_en: "Article 8 of the Basic Law guarantees freedom of assembly. Rights to happiness, vacation, or wealth are not basic rights."
  },
  {
    id: "33",
    text_de: "Was ist eine Aufgabe von Wahlhelferinnen und Wahlhelfern in Deutschland?",
    text_en: "What is a task of election helpers in Germany?",
    options: [
      { de: "Sie__(Lücke)__ die Wähler.", en: "They advise voters." },
      { de: "Sie__(Lücke)__ die Stimmen.", en: "They count the votes." },
      { de: "Sie__(Lücke)__ die Kandidaten.", en: "They approve candidates." },
      { de: "Sie__(Lücke)__ die Parteien.", en: "They register parties." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Wahlhelfer zählen nach der Wahl die Stimmen aus und sorgen für einen ordnungsgemäßen Ablauf der Wahl.",
    explanation_en: "Election helpers count votes after the election and ensure the proper conduct of the vote."
  },
  {
    id: "34",
    text_de: "In Deutschland__(Lücke)__ Bundestag__(Lücke)?",
    text_en: "In Germany, what does the Bundestag do?",
    options: [
      { de: "__(Lücke)__ Gesetze__(Lücke)__", en: "makes laws" },
      { de: "__(Lücke)__ die__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Der Bundestag ist das deutsche Parlament und beschließt Gesetze. Er kontrolliert auch die Regierung und wählt den Bundeskanzler.",
    explanation_en: "The Bundestag is the German parliament and passes laws. It also controls the government and elects the Chancellor."
  },
  {
    id: "35",
    text_de: "Welches ist das__(Lücke)__ der Bundesrepublik__(Lücke)?",
    text_en: "What is the legislative body of the Federal Republic?",
    options: [
      { de: "der Bundesrat", en: "the Bundesrat" },
      { de: "der Bundestag", en: "the Bundestag" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Der Bundestag ist das wichtigste Gesetzgebungsorgan. Der Bundesrat vertritt die Länder und wirkt bei manchen Gesetzen mit.",
    explanation_en: "The Bundestag is the main legislative body. The Bundesrat represents the states and participates in some legislation."
  },
  {
    id: "36",
    text_de: "Was ist in Deutschland die \"__(Lücke)__\"?",
    text_en: "What is the 'legislative' in Germany?",
    options: [
      { de: "die__(Lücke)__", en: "the government" },
      { de: "die__(Lücke)__", en: "the courts" },
      { de: "die gesetzgebende Gewalt", en: "the legislative power" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Legislative (gesetzgebende Gewalt) macht die Gesetze. In Deutschland sind das Bundestag und Bundesrat.",
    explanation_en: "The legislature (legislative power) makes laws. In Germany, this is the Bundestag and Bundesrat."
  },
  {
    id: "37",
    text_de: "Was ist die \"__(Lücke)__\" in Deutschland?",
    text_en: "What is the 'executive' in Germany?",
    options: [
      { de: "die__(Lücke)__", en: "the courts" },
      { de: "die ausführende Gewalt", en: "the executive power" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Exekutive (ausführende Gewalt) führt die Gesetze aus. Dazu gehören Bundesregierung, Polizei und Behörden.",
    explanation_en: "The executive (executive power) implements laws. This includes the federal government, police, and authorities."
  },
  {
    id: "38",
    text_de: "Was ist die \"__(Lücke)__\" in Deutschland?",
    text_en: "What is the 'judiciary' in Germany?",
    options: [
      { de: "die rechtsprechende Gewalt", en: "the judicial power" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Judikative (rechtsprechende Gewalt) spricht Recht und urteilt über Gesetzesverstöße. Gerichte sind unabhängig.",
    explanation_en: "The judiciary (judicial power) administers justice and rules on law violations. Courts are independent."
  },
  {
    id: "39",
    text_de: "Welche Aussage ist richtig? In Deutschland__(Lücke)?",
    text_en: "Which statement is correct? In Germany...",
    options: [
      { de: "__(Lücke)__ Gewaltenteilung.", en: "there is separation of powers." },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Gewaltenteilung bedeutet: Legislative, Exekutive und Judikative sind getrennt. Das verhindert Machtmissbrauch.",
    explanation_en: "Separation of powers means: legislative, executive, and judiciary are separate. This prevents abuse of power."
  },
  {
    id: "40",
    text_de: "Was bedeutet \"__(Lücke)__\" in Deutschland?",
    text_en: "What does 'separation of powers' mean in Germany?",
    options: [
      { de: "__(Lücke)__ Staat__(Lücke)__ auf__(Lücke)__ Institutionen__(Lücke)__.", en: "State power is divided among several institutions." },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Gewaltenteilung teilt die Staatsgewalt auf drei unabhängige Institutionen auf, die sich gegenseitig kontrollieren.",
    explanation_en: "Separation of powers divides state authority among three independent institutions that check each other."
  },
  {
    id: "41",
    text_de: "Welche__(Lücke)__ ist in Deutschland__(Lücke)?",
    text_en: "Which institution exists in Germany?",
    options: [
      { de: "das Bundesverfassungsgericht", en: "the Federal Constitutional Court" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Das Bundesverfassungsgericht in Karlsruhe prüft, ob Gesetze mit dem Grundgesetz vereinbar sind. Es schützt die Verfassung.",
    explanation_en: "The Federal Constitutional Court in Karlsruhe checks if laws comply with the Basic Law. It protects the constitution."
  },
  {
    id: "42",
    text_de: "Wer__(Lücke)__ den Bundeskanzler/die__(Lücke)?",
    text_en: "Who elects the Federal Chancellor?",
    options: [
      { de: "der Bundestag", en: "the Bundestag" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Der Bundeskanzler wird vom Bundestag auf Vorschlag des Bundespräsidenten gewählt, nicht direkt vom Volk.",
    explanation_en: "The Chancellor is elected by the Bundestag upon proposal of the Federal President, not directly by the people."
  },
  {
    id: "43",
    text_de: "Wer__(Lücke)__ den Bundespräsidenten/__in?",
    text_en: "Who elects the Federal President?",
    options: [
      { de: "die Bundesversammlung", en: "the Federal Assembly" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Bundesversammlung besteht aus Bundestagsabgeordneten und gleich vielen Vertretern der Landtage. Sie wählt den Bundespräsidenten.",
    explanation_en: "The Federal Assembly consists of Bundestag members and an equal number of state representatives. It elects the Federal President."
  },
  {
    id: "44",
    text_de: "Wer ist das__(Lücke)__ der Bundesrepublik Deutschland?",
    text_en: "Who is the head of state of the Federal Republic of Germany?",
    options: [
      { de: "der Bundespräsident/die Bundespräsidentin", en: "the Federal President" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Der Bundespräsident ist das Staatsoberhaupt Deutschlands. Er repräsentiert das Land, hat aber wenig politische Macht.",
    explanation_en: "The Federal President is Germany's head of state. He represents the country but has little political power."
  },
  {
    id: "45",
    text_de: "Wer ist der__(Lücke)__ der deutschen__(Lücke)?",
    text_en: "Who is the head of the German government?",
    options: [
      { de: "der Bundeskanzler/die Bundeskanzlerin", en: "the Federal Chancellor" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" },
      { de: "__(Lücke)__", en: "__(Lücke)__" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Der Bundeskanzler leitet die Regierung und bestimmt die Richtlinien der Politik (Richtlinienkompetenz).",
    explanation_en: "The Federal Chancellor leads the government and determines policy guidelines (power to set policy direction)."
  }
];
