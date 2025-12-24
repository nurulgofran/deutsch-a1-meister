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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
  },
  {
    id: "21",
    text_de: "Welches ist das Wappen der Bundesrepublik Deutschland?",
    text_en: "Which is the coat of arms of the Federal Republic of Germany?",
    options: [
      { de: "Bild 1 (Adler)", en: "Image 1 (Eagle)" },
      { de: "Bild 2", en: "Image 2" },
      { de: "Bild 3", en: "Image 3" },
      { de: "Bild 4", en: "Image 4" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
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
    isStateSpecific: false
  },
  {
    id: "31",
    text_de: "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …",
    text_en: "The cooperation of parties to form a government is called in Germany ...",
    options: [
      { de: "Einheit.", en: "Unity." },
      { de: "Koalition.", en: "Coalition." },
      { de: "Ministerium.", en: "Ministry." },
      { de: "Fraktion.", en: "Faction." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "32",
    text_de: "Was ist keine staatliche Gewalt in Deutschland?",
    text_en: "What is NOT a state power in Germany?",
    options: [
      { de: "Gesetzgebung", en: "Legislation" },
      { de: "Regierung", en: "Government" },
      { de: "Presse", en: "Press" },
      { de: "Rechtsprechung", en: "Judiciary" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "33",
    text_de: "Welche Aussage ist richtig? In Deutschland …",
    text_en: "Which statement is correct? In Germany ...",
    options: [
      { de: "sind Staat und Religionsgemeinschaften voneinander getrennt.", en: "state and religious communities are separated." },
      { de: "bilden die Religionsgemeinschaften den Staat.", en: "religious communities form the state." },
      { de: "ist der Staat abhängig von den Religionsgemeinschaften.", en: "the state is dependent on religious communities." },
      { de: "bilden Staat und Religionsgemeinschaften eine Einheit.", en: "state and religious communities form a unity." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "34",
    text_de: "Was ist Deutschland nicht?",
    text_en: "What is Germany NOT?",
    options: [
      { de: "eine Demokratie", en: "a democracy" },
      { de: "ein Rechtsstaat", en: "a constitutional state" },
      { de: "eine Monarchie", en: "a monarchy" },
      { de: "ein Sozialstaat", en: "a welfare state" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "35",
    text_de: "Womit finanziert der deutsche Staat die Sozialversicherung?",
    text_en: "How does the German state finance social insurance?",
    options: [
      { de: "Kirchensteuer", en: "Church tax" },
      { de: "Sozialabgaben", en: "Social contributions" },
      { de: "Spendengeldern", en: "Donations" },
      { de: "Vereinsbeiträgen", en: "Club fees" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "36",
    text_de: "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
    text_en: "Which measure creates social security in Germany?",
    options: [
      { de: "die Krankenversicherung", en: "health insurance" },
      { de: "die Autoversicherung", en: "car insurance" },
      { de: "die Gebäudeversicherung", en: "building insurance" },
      { de: "die Haftpflichtversicherung", en: "liability insurance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "37",
    text_de: "Wie werden die Regierungschefinnen/Regierungschefs der meisten Bundesländer in Deutschland genannt?",
    text_en: "What are the heads of government of most German federal states called?",
    options: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister" },
      { de: "Senatorin/Senator", en: "Senator" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "38",
    text_de: "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …",
    text_en: "The Federal Republic of Germany is a democratic and social ...",
    options: [
      { de: "Staatenverbund.", en: "Confederation of states." },
      { de: "Bundesstaat.", en: "Federal state." },
      { de: "Staatenbund.", en: "League of states." },
      { de: "Zentralstaat.", en: "Central state." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "39",
    text_de: "Was hat jedes deutsche Bundesland?",
    text_en: "What does every German federal state have?",
    options: [
      { de: "eine eigene Außenministerin/einen eigenen Außenminister", en: "its own foreign minister" },
      { de: "eine eigene Währung", en: "its own currency" },
      { de: "eine eigene Armee", en: "its own army" },
      { de: "eine eigene Regierung", en: "its own government" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "40",
    text_de: "Mit welchen Worten beginnt die deutsche Nationalhymne?",
    text_en: "With which words does the German national anthem begin?",
    options: [
      { de: "Völker, hört die Signale …", en: "Peoples, hear the signals ..." },
      { de: "Einigkeit und Recht und Freiheit …", en: "Unity and justice and freedom ..." },
      { de: "Freude schöner Götterfunken …", en: "Joy, beautiful spark of the gods ..." },
      { de: "Deutschland einig Vaterland …", en: "Germany, united fatherland ..." }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "41",
    text_de: "Warum gibt es in einer Demokratie mehr als eine Partei?",
    text_en: "Why are there more than one party in a democracy?",
    options: [
      { de: "weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden", en: "because this represents the different opinions of citizens" },
      { de: "damit Bestechung in der Politik begrenzt wird", en: "to limit bribery in politics" },
      { de: "um politische Demonstrationen zu verhindern", en: "to prevent political demonstrations" },
      { de: "um wirtschaftlichen Wettbewerb anzuregen", en: "to encourage economic competition" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "42",
    text_de: "Wer beschließt in Deutschland ein neues Gesetz?",
    text_en: "Who passes a new law in Germany?",
    options: [
      { de: "die Regierung", en: "the government" },
      { de: "das Parlament", en: "the parliament" },
      { de: "die Gerichte", en: "the courts" },
      { de: "die Polizei", en: "the police" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "43",
    text_de: "Wann kann in Deutschland eine Partei verboten werden?",
    text_en: "When can a party be banned in Germany?",
    options: [
      { de: "wenn ihr Wahlkampf zu teuer ist", en: "when its election campaign is too expensive" },
      { de: "wenn sie gegen die Verfassung kämpft", en: "when it fights against the constitution" },
      { de: "wenn sie Kritik am Staatsoberhaupt äußert", en: "when it criticizes the head of state" },
      { de: "wenn ihr Programm eine neue Richtung vorschlägt", en: "when its program suggests a new direction" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "44",
    text_de: "Wen kann man als Bürgerin/Bürger in Deutschland nicht direkt wählen?",
    text_en: "Who cannot citizens in Germany directly elect?",
    options: [
      { de: "Abgeordnete des EU-Parlaments", en: "Members of the EU Parliament" },
      { de: "Die Bundespräsidentin/den Bundespräsidenten", en: "The Federal President" },
      { de: "Landtagsabgeordnete", en: "State parliament members" },
      { de: "Bundestagsabgeordnete", en: "Bundestag members" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "45",
    text_de: "Zu welcher Versicherung gehört die Pflegeversicherung?",
    text_en: "To which type of insurance does long-term care insurance belong?",
    options: [
      { de: "Sozialversicherung", en: "Social insurance" },
      { de: "Unfallversicherung", en: "Accident insurance" },
      { de: "Hausratsversicherung", en: "Household insurance" },
      { de: "Haftpflicht- und Feuerversicherung", en: "Liability and fire insurance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
  }
];
