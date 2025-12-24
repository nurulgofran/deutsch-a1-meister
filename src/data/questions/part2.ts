import { Question } from './types';

export const part2Questions: Question[] = [
  {
    id: "46",
    text_de: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?",
    text_en: "The German state has many tasks. Which task belongs to them?",
    options: [
      { de: "Er baut Straßen und Schulen.", en: "It builds roads and schools." },
      { de: "Er verkauft Lebensmittel und Kleidung.", en: "It sells food and clothing." },
      { de: "Er versorgt alle Einwohnerinnen und Einwohner kostenlos mit Zeitungen.", en: "It provides all residents with free newspapers." },
      { de: "Er produziert Autos und Busse.", en: "It produces cars and buses." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "47",
    text_de: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?",
    text_en: "The German state has many tasks. Which task does NOT belong to them?",
    options: [
      { de: "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.", en: "It pays for vacations for all citizens." },
      { de: "Er zahlt Kindergeld.", en: "It pays child benefit." },
      { de: "Er unterstützt Museen.", en: "It supports museums." },
      { de: "Er fördert Sportlerinnen und Sportler.", en: "It supports athletes." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "48",
    text_de: "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?",
    text_en: "Which body is NOT a constitutional organ of Germany?",
    options: [
      { de: "der Bundesrat", en: "the Federal Council" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "the Federal President" },
      { de: "die Bürgerversammlung", en: "the citizens' assembly" },
      { de: "die Regierung", en: "the government" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "49",
    text_de: "Wer bestimmt in Deutschland die Schulpolitik?",
    text_en: "Who determines education policy in Germany?",
    options: [
      { de: "die Lehrer und Lehrerinnen", en: "the teachers" },
      { de: "die Bundesländer", en: "the federal states" },
      { de: "das Familienministerium", en: "the Family Ministry" },
      { de: "die Universitäten", en: "the universities" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "50",
    text_de: "Die Wirtschaftsform in Deutschland nennt man …",
    text_en: "The economic system in Germany is called ...",
    options: [
      { de: "freie Zentralwirtschaft.", en: "free central economy." },
      { de: "soziale Marktwirtschaft.", en: "social market economy." },
      { de: "gelenkte Zentralwirtschaft.", en: "controlled central economy." },
      { de: "Planwirtschaft.", en: "planned economy." }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "51",
    text_de: "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …",
    text_en: "It is NOT part of a democratic constitutional state that ...",
    options: [
      { de: "Menschen sich kritisch über die Regierung äußern können.", en: "people can express criticism of the government." },
      { de: "Bürger friedlich demonstrieren gehen dürfen.", en: "citizens may demonstrate peacefully." },
      { de: "Menschen von einer Privatpolizei ohne Grund verhaftet werden.", en: "people are arrested by a private police force without reason." },
      { de: "jemand ein Verbrechen begeht und deshalb verhaftet wird.", en: "someone commits a crime and is therefore arrested." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "52",
    text_de: "Was bedeutet \"Volkssouveränität\"? Alle Staatsgewalt geht vom ...",
    text_en: "What does \"popular sovereignty\" mean? All state power emanates from the ...",
    options: [
      { de: "Volke aus.", en: "people." },
      { de: "Bundestag aus.", en: "Bundestag." },
      { de: "preußischen König aus.", en: "Prussian king." },
      { de: "Bundesverfassungsgericht aus.", en: "Federal Constitutional Court." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "53",
    text_de: "Was bedeutet \"Rechtsstaat\" in Deutschland?",
    text_en: "What does \"constitutional state\" mean in Germany?",
    options: [
      { de: "Der Staat hat Recht.", en: "The state is right." },
      { de: "Es gibt nur rechte Parteien.", en: "There are only right-wing parties." },
      { de: "Die Bürgerinnen und Bürger entscheiden über Gesetze.", en: "Citizens decide on laws." },
      { de: "Der Staat muss die Gesetze einhalten.", en: "The state must obey the laws." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "54",
    text_de: "Was ist keine staatliche Gewalt in Deutschland?",
    text_en: "What is NOT a state power in Germany?",
    options: [
      { de: "Legislative", en: "Legislative" },
      { de: "Judikative", en: "Judiciary" },
      { de: "Exekutive", en: "Executive" },
      { de: "Direktive", en: "Directive" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "55",
    text_de: "Was zeigt dieses Bild?",
    text_en: "What does this image show?",
    options: [
      { de: "den Bundestagssitz in Berlin", en: "the Bundestag seat in Berlin" },
      { de: "das Bundesverfassungsgericht in Karlsruhe", en: "the Federal Constitutional Court in Karlsruhe" },
      { de: "das Bundesratsgebäude in Berlin", en: "the Federal Council building in Berlin" },
      { de: "das Bundeskanzleramt in Berlin", en: "the Federal Chancellery in Berlin" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "56",
    text_de: "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?",
    text_en: "Which office belongs to local government in Germany?",
    options: [
      { de: "Pfarramt", en: "Parish office" },
      { de: "Ordnungsamt", en: "Public order office" },
      { de: "Finanzamt", en: "Tax office" },
      { de: "Auswärtiges Amt", en: "Foreign Office" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "57",
    text_de: "Wer wird meistens zur Präsidentin/zum Präsidenten des Deutschen Bundestages gewählt?",
    text_en: "Who is usually elected President of the German Bundestag?",
    options: [
      { de: "die/der älteste Abgeordnete im Parlament", en: "the oldest member of parliament" },
      { de: "die Ministerpräsidentin/der Ministerpräsident des größten Bundeslandes", en: "the Minister-President of the largest federal state" },
      { de: "eine ehemalige Bundeskanzlerin/ein ehemaliger Bundeskanzler", en: "a former Federal Chancellor" },
      { de: "eine Abgeordnete/ein Abgeordneter der stärksten Fraktion", en: "a member of the strongest faction" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "58",
    text_de: "Wer ernennt in Deutschland die Ministerinnen/die Minister der Bundesregierung?",
    text_en: "Who appoints the ministers of the federal government in Germany?",
    options: [
      { de: "die Präsidentin/der Präsident des Bundesverfassungsgerichtes", en: "the President of the Federal Constitutional Court" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "the Federal President" },
      { de: "die Bundesratspräsidentin/der Bundesratspräsident", en: "the President of the Federal Council" },
      { de: "die Bundestagspräsidentin/der Bundestagspräsident", en: "the President of the Bundestag" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "59",
    text_de: "Vor wie vielen Jahren gab es erstmals eine jüdische Gemeinde auf dem Gebiet des heutigen Deutschlands?",
    text_en: "How many years ago was there first a Jewish community in the area of today's Germany?",
    options: [
      { de: "vor etwa 300 Jahren", en: "about 300 years ago" },
      { de: "vor etwa 700 Jahren", en: "about 700 years ago" },
      { de: "vor etwa 1150 Jahren", en: "about 1150 years ago" },
      { de: "vor etwa 1700 Jahren", en: "about 1700 years ago" }
    ],
    correctIndex: 3,
    category: "history",
    isStateSpecific: false
  },
  {
    id: "60",
    text_de: "In Deutschland gehören der Bundestag und der Bundesrat zur …",
    text_en: "In Germany, the Bundestag and Bundesrat belong to the ...",
    options: [
      { de: "Exekutive.", en: "Executive." },
      { de: "Legislative.", en: "Legislative." },
      { de: "Direktive.", en: "Directive." },
      { de: "Judikative.", en: "Judiciary." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "61",
    text_de: "Was bedeutet \"Volkssouveränität\"?",
    text_en: "What does \"popular sovereignty\" mean?",
    options: [
      { de: "Die Königin/der König herrscht über das Volk.", en: "The king/queen rules over the people." },
      { de: "Das Bundesverfassungsgericht steht über der Verfassung.", en: "The Federal Constitutional Court stands above the constitution." },
      { de: "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.", en: "Interest groups exercise sovereignty together with the government." },
      { de: "Die Staatsgewalt geht vom Volke aus.", en: "State power emanates from the people." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "62",
    text_de: "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …",
    text_en: "When the parliament of a German federal state is elected, it is called ...",
    options: [
      { de: "Kommunalwahl", en: "Local election" },
      { de: "Landtagswahl", en: "State parliament election" },
      { de: "Europawahl", en: "European election" },
      { de: "Bundestagswahl", en: "Federal election" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "63",
    text_de: "Was gehört in Deutschland nicht zur Exekutive?",
    text_en: "What does NOT belong to the executive in Germany?",
    options: [
      { de: "die Polizei", en: "the police" },
      { de: "die Gerichte", en: "the courts" },
      { de: "das Finanzamt", en: "the tax office" },
      { de: "die Ministerien", en: "the ministries" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "64",
    text_de: "Die Bundesrepublik Deutschland ist heute gegliedert in …",
    text_en: "The Federal Republic of Germany is today divided into ...",
    options: [
      { de: "vier Besatzungszonen.", en: "four occupation zones." },
      { de: "einen Oststaat und einen Weststaat.", en: "an eastern and a western state." },
      { de: "16 Kantone.", en: "16 cantons." },
      { de: "Bund, Länder und Kommunen.", en: "federation, states and municipalities." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "65",
    text_de: "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …",
    text_en: "It is NOT one of the tasks of the German Bundestag to ...",
    options: [
      { de: "Gesetze zu entwerfen.", en: "draft laws." },
      { de: "die Bundesregierung zu kontrollieren.", en: "control the federal government." },
      { de: "die Bundeskanzlerin/den Bundeskanzler zu wählen.", en: "elect the Federal Chancellor." },
      { de: "das Bundeskabinett zu bilden.", en: "form the Federal Cabinet." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "66",
    text_de: "Welche Städte haben die größten jüdischen Gemeinden in Deutschland?",
    text_en: "Which cities have the largest Jewish communities in Germany?",
    options: [
      { de: "Berlin und München", en: "Berlin and Munich" },
      { de: "Hamburg und Essen", en: "Hamburg and Essen" },
      { de: "Nürnberg und Stuttgart", en: "Nuremberg and Stuttgart" },
      { de: "Worms und Speyer", en: "Worms and Speyer" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "67",
    text_de: "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?",
    text_en: "What is primarily a task of the federal states in Germany?",
    options: [
      { de: "Verteidigungspolitik", en: "Defense policy" },
      { de: "Außenpolitik", en: "Foreign policy" },
      { de: "Wirtschaftspolitik", en: "Economic policy" },
      { de: "Schulpolitik", en: "Education policy" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "68",
    text_de: "Warum kontrolliert der Staat in Deutschland das Schulwesen?",
    text_en: "Why does the state control the school system in Germany?",
    options: [
      { de: "weil es in Deutschland nur staatliche Schulen gibt", en: "because there are only public schools in Germany" },
      { de: "weil alle Schülerinnen und Schüler einen Schulabschluss haben müssen", en: "because all students must have a school diploma" },
      { de: "weil es in den Bundesländern verschiedene Schulen gibt", en: "because there are different schools in the federal states" },
      { de: "weil es nach dem Grundgesetz seine Aufgabe ist", en: "because it is its task according to the Basic Law" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "69",
    text_de: "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?",
    text_en: "Germany has a three-tier administrative structure. What is the lowest political level called?",
    options: [
      { de: "Stadträte", en: "City councils" },
      { de: "Landräte", en: "District administrators" },
      { de: "Gemeinden", en: "Municipalities" },
      { de: "Bezirksämter", en: "District offices" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "70",
    text_de: "Was gehört zu den Aufgaben der deutschen Bundespräsidentin/des deutschen Bundespräsidenten?",
    text_en: "What belongs to the tasks of the German Federal President?",
    options: [
      { de: "Sie/Er führt die Regierungsgeschäfte.", en: "He/She conducts government business." },
      { de: "Sie/Er kontrolliert die Regierungspartei.", en: "He/She controls the governing party." },
      { de: "Sie/Er wählt die Ministerinnen/Minister aus.", en: "He/She selects the ministers." },
      { de: "Sie/Er schlägt die Kanzlerin/den Kanzler zur Wahl vor.", en: "He/She proposes the Chancellor for election." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "71",
    text_de: "Wo hält sich die deutsche Bundeskanzlerin/der deutsche Bundeskanzler am häufigsten auf?",
    text_en: "Where does the German Federal Chancellor spend most of their time?",
    options: [
      { de: "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.", en: "in Bonn, because the Federal Chancellery and Bundestag are located there." },
      { de: "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.", en: "at Meseberg Castle, the guest house of the federal government, to receive state guests." },
      { de: "auf Schloss Bellevue, dem Amtssitz der Bundespräsidentin/des Bundespräsidenten, um Staatsgäste zu empfangen.", en: "at Bellevue Palace, the official residence of the Federal President, to receive state guests." },
      { de: "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.", en: "in Berlin, because the Federal Chancellery and Bundestag are located there." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "72",
    text_de: "Wie heißt die jetzige Bundeskanzlerin/der jetzige Bundeskanzler von Deutschland?",
    text_en: "What is the name of the current German Federal Chancellor?",
    options: [
      { de: "Gerhard Schröder", en: "Gerhard Schröder" },
      { de: "Angela Merkel", en: "Angela Merkel" },
      { de: "Ursula von der Leyen", en: "Ursula von der Leyen" },
      { de: "Friedrich Merz", en: "Friedrich Merz" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "73",
    text_de: "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …",
    text_en: "The two largest factions in the German Bundestag are currently called ...",
    options: [
      { de: "CDU/CSU und AfD.", en: "CDU/CSU and AfD." },
      { de: "Die Linke und Bündnis 90/Die Grünen.", en: "The Left and Alliance 90/The Greens." },
      { de: "Bündnis 90/Die Grünen und SPD.", en: "Alliance 90/The Greens and SPD." },
      { de: "Die Linke und CDU/CSU.", en: "The Left and CDU/CSU." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "74",
    text_de: "Wie heißt das Parlament für ganz Deutschland?",
    text_en: "What is the parliament for all of Germany called?",
    options: [
      { de: "Bundesversammlung", en: "Federal Assembly" },
      { de: "Volkskammer", en: "People's Chamber" },
      { de: "Bundestag", en: "Bundestag" },
      { de: "Bundesgerichtshof", en: "Federal Court of Justice" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "75",
    text_de: "Wie heißt Deutschlands heutiges Staatsoberhaupt?",
    text_en: "What is the name of Germany's current head of state?",
    options: [
      { de: "Frank-Walter Steinmeier", en: "Frank-Walter Steinmeier" },
      { de: "Bärbel Bas", en: "Bärbel Bas" },
      { de: "Bodo Ramelow", en: "Bodo Ramelow" },
      { de: "Joachim Gauck", en: "Joachim Gauck" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "76",
    text_de: "Was bedeutet die Abkürzung CDU in Deutschland?",
    text_en: "What does the abbreviation CDU mean in Germany?",
    options: [
      { de: "Christliche Deutsche Union", en: "Christian German Union" },
      { de: "Club Deutscher Unternehmer", en: "Club of German Entrepreneurs" },
      { de: "Christlicher Deutscher Umweltschutz", en: "Christian German Environmental Protection" },
      { de: "Christlich Demokratische Union", en: "Christian Democratic Union" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "77",
    text_de: "Was ist die Bundeswehr?",
    text_en: "What is the Bundeswehr?",
    options: [
      { de: "die deutsche Polizei", en: "the German police" },
      { de: "ein deutscher Hafen", en: "a German port" },
      { de: "eine deutsche Bürgerinitiative", en: "a German citizens' initiative" },
      { de: "die deutsche Armee", en: "the German army" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "78",
    text_de: "Was bedeutet die Abkürzung SPD?",
    text_en: "What does the abbreviation SPD mean?",
    options: [
      { de: "Sozialistische Partei Deutschlands", en: "Socialist Party of Germany" },
      { de: "Sozialpolitische Partei Deutschlands", en: "Social Policy Party of Germany" },
      { de: "Sozialdemokratische Partei Deutschlands", en: "Social Democratic Party of Germany" },
      { de: "Sozialgerechte Partei Deutschlands", en: "Socially Just Party of Germany" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "79",
    text_de: "Was bedeutet die Abkürzung FDP in Deutschland?",
    text_en: "What does the abbreviation FDP mean in Germany?",
    options: [
      { de: "Friedliche Demonstrative Partei", en: "Peaceful Demonstrative Party" },
      { de: "Freie Deutschland Partei", en: "Free Germany Party" },
      { de: "Führende Demokratische Partei", en: "Leading Democratic Party" },
      { de: "Freie Demokratische Partei", en: "Free Democratic Party" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "80",
    text_de: "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?",
    text_en: "Which court in Germany is responsible for interpreting the Basic Law?",
    options: [
      { de: "Oberlandesgericht", en: "Higher Regional Court" },
      { de: "Amtsgericht", en: "District Court" },
      { de: "Bundesverfassungsgericht", en: "Federal Constitutional Court" },
      { de: "Verwaltungsgericht", en: "Administrative Court" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "81",
    text_de: "Wer wählt die Bundeskanzlerin/den Bundeskanzler in Deutschland?",
    text_en: "Who elects the Federal Chancellor in Germany?",
    options: [
      { de: "der Bundesrat", en: "the Federal Council" },
      { de: "die Bundesversammlung", en: "the Federal Assembly" },
      { de: "das Volk", en: "the people" },
      { de: "der Bundestag", en: "the Bundestag" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "82",
    text_de: "Wer leitet das deutsche Bundeskabinett?",
    text_en: "Who leads the German Federal Cabinet?",
    options: [
      { de: "die Bundestagspräsidentin/der Bundestagspräsident", en: "the President of the Bundestag" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "the Federal President" },
      { de: "die Bundesratspräsidentin/der Bundesratspräsident", en: "the President of the Federal Council" },
      { de: "die Bundeskanzlerin/der Bundeskanzler", en: "the Federal Chancellor" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "83",
    text_de: "Wer wählt die deutsche Bundeskanzlerin/den deutschen Bundeskanzler?",
    text_en: "Who elects the German Federal Chancellor?",
    options: [
      { de: "das Volk", en: "the people" },
      { de: "die Bundesversammlung", en: "the Federal Assembly" },
      { de: "der Bundestag", en: "the Bundestag" },
      { de: "die Bundesregierung", en: "the federal government" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "84",
    text_de: "Welche Hauptaufgabe hat die deutsche Bundespräsidentin/der deutsche Bundespräsident?",
    text_en: "What is the main task of the German Federal President?",
    options: [
      { de: "Sie/Er regiert das Land.", en: "He/She governs the country." },
      { de: "Sie/Er entwirft die Gesetze.", en: "He/She drafts the laws." },
      { de: "Sie/Er repräsentiert das Land.", en: "He/She represents the country." },
      { de: "Sie/Er überwacht die Einhaltung der Gesetze.", en: "He/She monitors compliance with the laws." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "85",
    text_de: "Wer bildet den deutschen Bundesrat?",
    text_en: "Who forms the German Federal Council?",
    options: [
      { de: "die Abgeordneten des Bundestages", en: "the members of the Bundestag" },
      { de: "die Ministerinnen und Minister der Bundesregierung", en: "the ministers of the federal government" },
      { de: "die Regierungsvertreter der Bundesländer", en: "the government representatives of the federal states" },
      { de: "die Parteimitglieder", en: "the party members" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "86",
    text_de: "Wer wählt in Deutschland die Bundespräsidentin/den Bundespräsidenten?",
    text_en: "Who elects the Federal President in Germany?",
    options: [
      { de: "die Bundesversammlung", en: "the Federal Assembly" },
      { de: "der Bundesrat", en: "the Federal Council" },
      { de: "das Bundesparlament", en: "the Federal Parliament" },
      { de: "das Bundesverfassungsgericht", en: "the Federal Constitutional Court" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "87",
    text_de: "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?",
    text_en: "Who is the head of state of the Federal Republic of Germany?",
    options: [
      { de: "die Bundeskanzlerin/der Bundeskanzler", en: "the Federal Chancellor" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "the Federal President" },
      { de: "die Bundesratspräsidentin/der Bundesratspräsident", en: "the President of the Federal Council" },
      { de: "die Bundestagspräsidentin/der Bundestagspräsident", en: "the President of the Bundestag" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "88",
    text_de: "Die parlamentarische Opposition im Deutschen Bundestag …",
    text_en: "The parliamentary opposition in the German Bundestag ...",
    options: [
      { de: "kontrolliert die Regierung.", en: "controls the government." },
      { de: "entscheidet, wer Bundesministerin/Bundesminister wird.", en: "decides who becomes Federal Minister." },
      { de: "bestimmt, wer im Bundesrat sitzt.", en: "determines who sits in the Federal Council." },
      { de: "schlägt die Regierungschefinnen/Regierungschefs der Länder vor.", en: "proposes the heads of government of the states." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "89",
    text_de: "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?",
    text_en: "What is the association of party members in parliament called in Germany?",
    options: [
      { de: "Verband", en: "Association" },
      { de: "Ältestenrat", en: "Council of Elders" },
      { de: "Fraktion", en: "Faction" },
      { de: "Opposition", en: "Opposition" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "90",
    text_de: "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …",
    text_en: "The German federal states participate in federal legislation through ...",
    options: [
      { de: "den Bundesrat.", en: "the Federal Council." },
      { de: "die Bundesversammlung.", en: "the Federal Assembly." },
      { de: "den Bundestag.", en: "the Bundestag." },
      { de: "die Bundesregierung.", en: "the federal government." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  }
];
