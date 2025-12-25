import { Question } from './types';

export const part6Questions: Question[] = [
  {
    id: "226",
    text_de: "Was ist ein deutsches Mittelgebirge?",
    text_en: "What is a German low mountain range?",
    options: [
      { de: "die Alpen", en: "the Alps" },
      { de: "der Harz", en: "the Harz" },
      { de: "die Pyrenäen", en: "the Pyrenees" },
      { de: "die Karpaten", en: "the Carpathians" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Harz ist ein Mittelgebirge in Deutschland. Die Alpen sind ein Hochgebirge, Pyrenäen und Karpaten liegen nicht in Deutschland.",
    explanation_en: "The Harz is a low mountain range in Germany. The Alps are high mountains; the Pyrenees and Carpathians are not in Germany."
  },
  {
    id: "227",
    text_de: "Welcher Fluss fließt durch Deutschland?",
    text_en: "Which river flows through Germany?",
    options: [
      { de: "die Themse", en: "the Thames" },
      { de: "die Seine", en: "the Seine" },
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Wolga", en: "the Volga" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Rhein ist einer der wichtigsten Flüsse Deutschlands. Er fließt von der Schweiz durch Deutschland bis zur Nordsee.",
    explanation_en: "The Rhine is one of Germany's most important rivers. It flows from Switzerland through Germany to the North Sea."
  },
  {
    id: "228",
    text_de: "Welcher See liegt in Deutschland?",
    text_en: "Which lake is located in Germany?",
    options: [
      { de: "der Bodensee", en: "Lake Constance" },
      { de: "der Genfer See", en: "Lake Geneva" },
      { de: "der Gardasee", en: "Lake Garda" },
      { de: "der Plattensee", en: "Lake Balaton" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Bodensee liegt in Deutschland (sowie in Österreich und der Schweiz). Er ist der drittgrößte See Mitteleuropas.",
    explanation_en: "Lake Constance is in Germany (as well as Austria and Switzerland). It is the third largest lake in Central Europe."
  },
  {
    id: "229",
    text_de: "Welches Gebirge liegt an der Grenze zwischen Deutschland und Österreich?",
    text_en: "Which mountain range lies on the border between Germany and Austria?",
    options: [
      { de: "der Harz", en: "the Harz" },
      { de: "die Alpen", en: "the Alps" },
      { de: "der Schwarzwald", en: "the Black Forest" },
      { de: "das Erzgebirge", en: "the Ore Mountains" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die Alpen bilden die Grenze zwischen Deutschland und Österreich. Die Zugspitze ist Deutschlands höchster Berg.",
    explanation_en: "The Alps form the border between Germany and Austria. The Zugspitze is Germany's highest mountain."
  },
  {
    id: "230",
    text_de: "Was ist der höchste Berg Deutschlands?",
    text_en: "What is the highest mountain in Germany?",
    options: [
      { de: "der Brocken", en: "the Brocken" },
      { de: "die Zugspitze", en: "the Zugspitze" },
      { de: "der Feldberg", en: "the Feldberg" },
      { de: "der Großglockner", en: "the Großglockner" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die Zugspitze (2.962 m) in Bayern ist der höchste Berg Deutschlands. Der Großglockner liegt in Österreich.",
    explanation_en: "The Zugspitze (2,962 m) in Bavaria is Germany's highest mountain. The Großglockner is in Austria."
  },
  {
    id: "231",
    text_de: "Welche Stadt ist keine deutsche Landeshauptstadt?",
    text_en: "Which city is not a German state capital?",
    options: [
      { de: "München", en: "Munich" },
      { de: "Hamburg", en: "Hamburg" },
      { de: "Frankfurt am Main", en: "Frankfurt am Main" },
      { de: "Berlin", en: "Berlin" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Frankfurt am Main ist keine Landeshauptstadt. Die Hauptstadt von Hessen ist Wiesbaden.",
    explanation_en: "Frankfurt am Main is not a state capital. The capital of Hesse is Wiesbaden."
  },
  {
    id: "232",
    text_de: "Welche Stadt ist die Hauptstadt von Bayern?",
    text_en: "Which city is the capital of Bavaria?",
    options: [
      { de: "Nürnberg", en: "Nuremberg" },
      { de: "München", en: "Munich" },
      { de: "Augsburg", en: "Augsburg" },
      { de: "Regensburg", en: "Regensburg" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "München ist die Landeshauptstadt von Bayern und mit etwa 1,5 Millionen Einwohnern die drittgrößte Stadt Deutschlands.",
    explanation_en: "Munich is the state capital of Bavaria and with about 1.5 million inhabitants, Germany's third largest city."
  },
  {
    id: "233",
    text_de: "Welche Stadt hat die meisten Einwohner in Deutschland?",
    text_en: "Which city has the most inhabitants in Germany?",
    options: [
      { de: "München", en: "Munich" },
      { de: "Hamburg", en: "Hamburg" },
      { de: "Berlin", en: "Berlin" },
      { de: "Köln", en: "Cologne" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Berlin ist mit etwa 3,6 Millionen Einwohnern die größte Stadt Deutschlands. Es ist auch die Hauptstadt.",
    explanation_en: "Berlin is Germany's largest city with about 3.6 million inhabitants. It is also the capital."
  },
  {
    id: "234",
    text_de: "Wie viele Einwohner hat Deutschland ungefähr?",
    text_en: "Approximately how many inhabitants does Germany have?",
    options: [
      { de: "55 Millionen", en: "55 million" },
      { de: "70 Millionen", en: "70 million" },
      { de: "84 Millionen", en: "84 million" },
      { de: "100 Millionen", en: "100 million" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Deutschland hat etwa 84 Millionen Einwohner. Es ist das bevölkerungsreichste Land der EU.",
    explanation_en: "Germany has about 84 million inhabitants. It is the most populous country in the EU."
  },
  {
    id: "235",
    text_de: "Welches Bundesland hat die meisten Einwohner?",
    text_en: "Which federal state has the most inhabitants?",
    options: [
      { de: "Bayern", en: "Bavaria" },
      { de: "Baden-Württemberg", en: "Baden-Württemberg" },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia" },
      { de: "Niedersachsen", en: "Lower Saxony" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Nordrhein-Westfalen (NRW) hat etwa 18 Millionen Einwohner und ist damit das bevölkerungsreichste Bundesland.",
    explanation_en: "North Rhine-Westphalia (NRW) has about 18 million inhabitants and is thus the most populous federal state."
  },
  {
    id: "236",
    text_de: "Welches Bundesland ist flächenmäßig das größte?",
    text_en: "Which federal state is the largest in terms of area?",
    options: [
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia" },
      { de: "Bayern", en: "Bavaria" },
      { de: "Baden-Württemberg", en: "Baden-Württemberg" },
      { de: "Niedersachsen", en: "Lower Saxony" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Bayern ist mit etwa 70.500 km² das flächenmäßig größte Bundesland Deutschlands.",
    explanation_en: "Bavaria is the largest federal state in Germany by area with about 70,500 km²."
  },
  {
    id: "237",
    text_de: "Welche deutschen Städte sind auch Bundesländer?",
    text_en: "Which German cities are also federal states?",
    options: [
      { de: "München, Frankfurt und Köln", en: "Munich, Frankfurt and Cologne" },
      { de: "Berlin, Hamburg und Bremen", en: "Berlin, Hamburg and Bremen" },
      { de: "Stuttgart, Düsseldorf und Hannover", en: "Stuttgart, Düsseldorf and Hanover" },
      { de: "Dresden, Leipzig und Nürnberg", en: "Dresden, Leipzig and Nuremberg" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Berlin, Hamburg und Bremen sind Stadtstaaten – sie sind gleichzeitig Stadt und Bundesland.",
    explanation_en: "Berlin, Hamburg, and Bremen are city-states – they are both a city and a federal state."
  },
  {
    id: "238",
    text_de: "Welches ist kein Nachbarland von Deutschland?",
    text_en: "Which is not a neighboring country of Germany?",
    options: [
      { de: "Frankreich", en: "France" },
      { de: "Portugal", en: "Portugal" },
      { de: "Österreich", en: "Austria" },
      { de: "Polen", en: "Poland" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Portugal liegt an der Atlantikküste und hat keine Grenze mit Deutschland. Es liegt neben Spanien.",
    explanation_en: "Portugal is on the Atlantic coast and does not border Germany. It is next to Spain."
  },
  {
    id: "239",
    text_de: "Wie viele Nachbarländer hat Deutschland?",
    text_en: "How many neighboring countries does Germany have?",
    options: [
      { de: "5", en: "5" },
      { de: "7", en: "7" },
      { de: "9", en: "9" },
      { de: "11", en: "11" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Deutschland hat 9 Nachbarländer: Dänemark, Polen, Tschechien, Österreich, Schweiz, Frankreich, Luxemburg, Belgien, Niederlande.",
    explanation_en: "Germany has 9 neighboring countries: Denmark, Poland, Czech Republic, Austria, Switzerland, France, Luxembourg, Belgium, Netherlands."
  },
  {
    id: "240",
    text_de: "Woran erkennt man in Deutschland, dass es Advent ist?",
    text_en: "How do you know that it is Advent in Germany?",
    options: [
      { de: "an den Ostereiern", en: "from the Easter eggs" },
      { de: "an den Adventskränzen", en: "from the Advent wreaths" },
      { de: "an den Karnevalsumzügen", en: "from the carnival parades" },
      { de: "an den Maibäumen", en: "from the maypoles" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Adventskränze mit 4 Kerzen zeigen den Advent an. Jeden Sonntag vor Weihnachten wird eine weitere Kerze angezündet.",
    explanation_en: "Advent wreaths with 4 candles indicate Advent. Each Sunday before Christmas, another candle is lit."
  },
  {
    id: "241",
    text_de: "Welcher Feiertag wird in Deutschland am 25. und 26. Dezember gefeiert?",
    text_en: "Which holiday is celebrated in Germany on December 25 and 26?",
    options: [
      { de: "Ostern", en: "Easter" },
      { de: "Pfingsten", en: "Pentecost" },
      { de: "Weihnachten", en: "Christmas" },
      { de: "Erntedankfest", en: "Thanksgiving" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Weihnachten wird am 25. und 26. Dezember gefeiert. In Deutschland ist auch der 26. Dezember ein gesetzlicher Feiertag.",
    explanation_en: "Christmas is celebrated on December 25 and 26. In Germany, December 26 is also a public holiday."
  },
  {
    id: "242",
    text_de: "Welcher Tag ist in Deutschland ein gesetzlicher Feiertag?",
    text_en: "Which day is a public holiday in Germany?",
    options: [
      { de: "der Valentinstag", en: "Valentine's Day" },
      { de: "der Rosenmontag", en: "Rose Monday" },
      { de: "der 1. Mai", en: "May 1" },
      { de: "der Muttertag", en: "Mother's Day" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der 1. Mai (Tag der Arbeit) ist ein gesetzlicher Feiertag in ganz Deutschland.",
    explanation_en: "May 1 (Labor Day) is a public holiday throughout Germany."
  },
  {
    id: "243",
    text_de: "Wie heißt der nationale Feiertag, der in Deutschland gefeiert wird?",
    text_en: "What is the name of the national holiday celebrated in Germany?",
    options: [
      { de: "Tag der Arbeit", en: "Labor Day" },
      { de: "Tag der Deutschen Einheit", en: "German Unity Day" },
      { de: "Europatag", en: "Europe Day" },
      { de: "Volkstrauertag", en: "National Day of Mourning" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Tag der Deutschen Einheit am 3. Oktober ist der Nationalfeiertag Deutschlands zur Erinnerung an die Wiedervereinigung 1990.",
    explanation_en: "German Unity Day on October 3 is Germany's national holiday commemorating reunification in 1990."
  },
  {
    id: "244",
    text_de: "Wann ist der Tag der Deutschen Einheit?",
    text_en: "When is German Unity Day?",
    options: [
      { de: "am 9. November", en: "on November 9" },
      { de: "am 3. Oktober", en: "on October 3" },
      { de: "am 1. Mai", en: "on May 1" },
      { de: "am 17. Juni", en: "on June 17" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Tag der Deutschen Einheit ist am 3. Oktober, dem Tag der Wiedervereinigung 1990.",
    explanation_en: "German Unity Day is on October 3, the day of reunification in 1990."
  },
  {
    id: "245",
    text_de: "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
    text_en: "Which animal is the heraldic animal of the Federal Republic of Germany?",
    options: [
      { de: "der Löwe", en: "the lion" },
      { de: "der Adler", en: "the eagle" },
      { de: "der Bär", en: "the bear" },
      { de: "der Stier", en: "the bull" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Bundesadler ist das Wappentier Deutschlands. Er war schon Symbol des Heiligen Römischen Reiches.",
    explanation_en: "The Federal Eagle is Germany's heraldic animal. It was already a symbol of the Holy Roman Empire."
  },
  {
    id: "246",
    text_de: "Welche Farben hat die deutsche Flagge?",
    text_en: "What colors does the German flag have?",
    options: [
      { de: "schwarz-rot-gold", en: "black-red-gold" },
      { de: "rot-weiß-blau", en: "red-white-blue" },
      { de: "schwarz-weiß-rot", en: "black-white-red" },
      { de: "grün-weiß-rot", en: "green-white-red" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die deutsche Flagge ist schwarz-rot-gold. Diese Farben entstammen der Freiheitsbewegung des 19. Jahrhunderts.",
    explanation_en: "The German flag is black-red-gold. These colors come from the freedom movement of the 19th century."
  },
  {
    id: "247",
    text_de: "Was ist die deutsche Nationalhymne?",
    text_en: "What is the German national anthem?",
    options: [
      { de: "Freude, schöner Götterfunken", en: "Ode to Joy" },
      { de: "Deutschlandlied", en: "Deutschlandlied" },
      { de: "Die Internationale", en: "The Internationale" },
      { de: "Die Wacht am Rhein", en: "The Watch on the Rhine" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Das Deutschlandlied (3. Strophe: 'Einigkeit und Recht und Freiheit') ist die Nationalhymne Deutschlands.",
    explanation_en: "The Deutschlandlied (3rd verse: 'Unity and Justice and Freedom') is Germany's national anthem."
  },
  {
    id: "248",
    text_de: "Wo arbeitet die Bundesregierung?",
    text_en: "Where does the Federal Government work?",
    options: [
      { de: "in Bonn", en: "in Bonn" },
      { de: "in Berlin", en: "in Berlin" },
      { de: "in München", en: "in Munich" },
      { de: "in Frankfurt", en: "in Frankfurt" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Bundesregierung arbeitet seit 1999 in Berlin. Einige Ministerien haben noch Zweitsitze in Bonn.",
    explanation_en: "The Federal Government has been working in Berlin since 1999. Some ministries still have secondary offices in Bonn."
  },
  {
    id: "249",
    text_de: "Wie heißt das Gebäude, in dem der Bundestag tagt?",
    text_en: "What is the building where the Bundestag meets called?",
    options: [
      { de: "Reichstag", en: "Reichstag" },
      { de: "Bundeskanzleramt", en: "Federal Chancellery" },
      { de: "Schloss Bellevue", en: "Bellevue Palace" },
      { de: "Bundesrat", en: "Bundesrat" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Der Bundestag tagt im Reichstagsgebäude in Berlin. Es ist bekannt für seine gläserne Kuppel.",
    explanation_en: "The Bundestag meets in the Reichstag building in Berlin. It is known for its glass dome."
  },
  {
    id: "250",
    text_de: "Wo wohnt die Bundespräsidentin / der Bundespräsident?",
    text_en: "Where does the Federal President live?",
    options: [
      { de: "im Reichstag", en: "in the Reichstag" },
      { de: "im Bundeskanzleramt", en: "in the Federal Chancellery" },
      { de: "im Schloss Bellevue", en: "in Bellevue Palace" },
      { de: "im Bundesrat", en: "in the Bundesrat" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Der Bundespräsident wohnt und arbeitet im Schloss Bellevue in Berlin. Es ist sein Amtssitz.",
    explanation_en: "The Federal President lives and works in Bellevue Palace in Berlin. It is his official residence."
  },
  {
    id: "251",
    text_de: "An welchem Ort entstand die deutsche Verfassung?",
    text_en: "Where did the German constitution originate?",
    options: [
      { de: "Berlin", en: "Berlin" },
      { de: "Bonn", en: "Bonn" },
      { de: "Weimar", en: "Weimar" },
      { de: "Frankfurt", en: "Frankfurt" }
    ],
    correctIndex: 1,
    category: "history",
    isStateSpecific: false,
    explanation_de: "Das Grundgesetz wurde 1949 in Bonn verabschiedet. Bonn war bis 1999 auch die Hauptstadt der Bundesrepublik.",
    explanation_en: "The Basic Law was adopted in Bonn in 1949. Bonn was also the capital of the Federal Republic until 1999."
  },
  {
    id: "252",
    text_de: "Wer hat das Recht auf Asyl?",
    text_en: "Who has the right of asylum?",
    options: [
      { de: "alle Ausländer", en: "all foreigners" },
      { de: "politisch Verfolgte", en: "politically persecuted people" },
      { de: "alle Touristen", en: "all tourists" },
      { de: "Wirtschaftsflüchtlinge", en: "economic refugees" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Nach Art. 16a GG haben politisch Verfolgte ein Recht auf Asyl. Wirtschaftliche Gründe allein reichen nicht.",
    explanation_en: "According to Art. 16a Basic Law, politically persecuted people have a right to asylum. Economic reasons alone are not sufficient."
  },
  {
    id: "253",
    text_de: "Ab welchem Alter ist man in Deutschland volljährig?",
    text_en: "At what age is one considered an adult in Germany?",
    options: [
      { de: "16 Jahre", en: "16 years" },
      { de: "18 Jahre", en: "18 years" },
      { de: "21 Jahre", en: "21 years" },
      { de: "25 Jahre", en: "25 years" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Mit 18 Jahren wird man in Deutschland volljährig. Man erhält volle Geschäftsfähigkeit und das aktive Wahlrecht.",
    explanation_en: "At 18, one becomes an adult in Germany. You receive full legal capacity and the right to vote."
  },
  {
    id: "254",
    text_de: "Was kann man mit 16 Jahren in Deutschland nicht tun?",
    text_en: "What can you not do in Germany at 16 years old?",
    options: [
      { de: "Bier trinken", en: "drink beer" },
      { de: "mit Erlaubnis der Eltern heiraten", en: "marry with parental consent" },
      { de: "einen Führerschein für ein Auto machen", en: "get a driver's license for a car" },
      { de: "alleine in eine Disco gehen", en: "go to a disco alone" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Den Autoführerschein kann man in Deutschland erst mit 17 (begleitetes Fahren) oder 18 Jahren machen.",
    explanation_en: "You can only get a car driver's license in Germany at 17 (accompanied driving) or 18 years old."
  },
  {
    id: "255",
    text_de: "Was muss man in Deutschland machen, wenn man umzieht?",
    text_en: "What must you do in Germany when you move?",
    options: [
      { de: "eine Party feiern", en: "throw a party" },
      { de: "sich beim Einwohnermeldeamt anmelden", en: "register at the residents' registration office" },
      { de: "die Nachbarn informieren", en: "inform the neighbors" },
      { de: "einen Deutschkurs besuchen", en: "attend a German course" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Nach einem Umzug muss man sich innerhalb von 2 Wochen beim Einwohnermeldeamt anmelden. Das ist Pflicht.",
    explanation_en: "After moving, you must register at the residents' registration office within 2 weeks. This is mandatory."
  },
  {
    id: "256",
    text_de: "Was ist in Deutschland Pflicht?",
    text_en: "What is compulsory in Germany?",
    options: [
      { de: "das Tragen einer Uniform", en: "wearing a uniform" },
      { de: "die Schulpflicht", en: "compulsory education" },
      { de: "der Wehrdienst", en: "military service" },
      { de: "die Wahlpflicht", en: "compulsory voting" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "In Deutschland besteht Schulpflicht. Wehrdienst wurde 2011 ausgesetzt, Wahlpflicht gibt es nicht.",
    explanation_en: "In Germany, education is compulsory. Military service was suspended in 2011; there is no compulsory voting."
  },
  {
    id: "257",
    text_de: "Wie lange dauert die Schulpflicht in Deutschland in den meisten Bundesländern?",
    text_en: "How long is compulsory education in Germany in most federal states?",
    options: [
      { de: "6 Jahre", en: "6 years" },
      { de: "9 Jahre", en: "9 years" },
      { de: "12 Jahre", en: "12 years" },
      { de: "15 Jahre", en: "15 years" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die Vollzeitschulpflicht dauert in den meisten Bundesländern 9 Jahre. Danach folgt oft noch Berufsschulpflicht.",
    explanation_en: "Full-time compulsory education lasts 9 years in most federal states. Vocational school obligation often follows."
  },
  {
    id: "258",
    text_de: "Was braucht man in Deutschland, um ein Auto zu fahren?",
    text_en: "What do you need in Germany to drive a car?",
    options: [
      { de: "einen Reisepass", en: "a passport" },
      { de: "einen Führerschein", en: "a driver's license" },
      { de: "einen Personalausweis", en: "an ID card" },
      { de: "eine Geburtsurkunde", en: "a birth certificate" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Zum Autofahren braucht man in Deutschland einen gültigen Führerschein. Fahren ohne Führerschein ist strafbar.",
    explanation_en: "To drive a car in Germany, you need a valid driver's license. Driving without a license is a criminal offense."
  },
  {
    id: "259",
    text_de: "Was muss man in Deutschland haben, wenn man ein Auto besitzt?",
    text_en: "What must you have in Germany if you own a car?",
    options: [
      { de: "eine Lebensversicherung", en: "life insurance" },
      { de: "eine Kfz-Haftpflichtversicherung", en: "car liability insurance" },
      { de: "eine Hausratversicherung", en: "household contents insurance" },
      { de: "eine Reiseversicherung", en: "travel insurance" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Eine Kfz-Haftpflichtversicherung ist in Deutschland Pflicht für alle Autobesitzer.",
    explanation_en: "Car liability insurance is mandatory in Germany for all car owners."
  },
  {
    id: "260",
    text_de: "Ist die gleichgeschlechtliche Ehe in Deutschland gesetzlich erlaubt?",
    text_en: "Is same-sex marriage legally allowed in Germany?",
    options: [
      { de: "Nein, sie ist verboten.", en: "No, it is forbidden." },
      { de: "Ja, seit 2017.", en: "Yes, since 2017." },
      { de: "Nur in einigen Bundesländern.", en: "Only in some federal states." },
      { de: "Nur für EU-Bürger.", en: "Only for EU citizens." }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Seit Oktober 2017 ist die gleichgeschlechtliche Ehe in Deutschland legal. Vorher gab es nur eingetragene Partnerschaften.",
    explanation_en: "Since October 2017, same-sex marriage has been legal in Germany. Before that, there were only civil partnerships."
  },
  {
    id: "261",
    text_de: "Was bedeutet 'Gleichberechtigung von Mann und Frau' in Deutschland?",
    text_en: "What does 'equality of men and women' mean in Germany?",
    options: [
      { de: "Frauen verdienen weniger als Männer.", en: "Women earn less than men." },
      { de: "Männer und Frauen haben die gleichen Rechte.", en: "Men and women have the same rights." },
      { de: "Frauen dürfen nicht arbeiten.", en: "Women are not allowed to work." },
      { de: "Nur Männer dürfen wählen.", en: "Only men may vote." }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Art. 3 GG garantiert die Gleichberechtigung von Mann und Frau. Beide haben die gleichen Rechte und Pflichten.",
    explanation_en: "Art. 3 Basic Law guarantees equality of men and women. Both have the same rights and obligations."
  },
  {
    id: "262",
    text_de: "Was ist in Deutschland gesetzlich verboten?",
    text_en: "What is legally prohibited in Germany?",
    options: [
      { de: "Kritik an der Regierung", en: "criticism of the government" },
      { de: "Zwangsheirat", en: "forced marriage" },
      { de: "freie Berufswahl", en: "free choice of profession" },
      { de: "Religionsfreiheit", en: "freedom of religion" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Zwangsheirat ist in Deutschland verboten und strafbar. Jeder hat das Recht, frei über eine Heirat zu entscheiden.",
    explanation_en: "Forced marriage is prohibited and punishable in Germany. Everyone has the right to decide freely about marriage."
  },
  {
    id: "263",
    text_de: "Wer darf in Deutschland heiraten?",
    text_en: "Who may marry in Germany?",
    options: [
      { de: "nur Deutsche", en: "only Germans" },
      { de: "alle Erwachsenen mit freiem Willen", en: "all adults with free will" },
      { de: "nur religiöse Menschen", en: "only religious people" },
      { de: "nur Menschen gleichen Alters", en: "only people of the same age" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Alle Erwachsenen dürfen in Deutschland heiraten, wenn sie freiwillig zustimmen. Zwangsheirat ist verboten.",
    explanation_en: "All adults may marry in Germany if they consent voluntarily. Forced marriage is prohibited."
  },
  {
    id: "264",
    text_de: "Wer muss bei einer Eheschließung in Deutschland anwesend sein?",
    text_en: "Who must be present at a wedding in Germany?",
    options: [
      { de: "ein Pfarrer", en: "a priest" },
      { de: "ein Standesbeamter", en: "a registrar" },
      { de: "ein Notar", en: "a notary" },
      { de: "ein Rechtsanwalt", en: "a lawyer" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Eine rechtsgültige Ehe wird vor einem Standesbeamten geschlossen. Die kirchliche Trauung ist optional.",
    explanation_en: "A legally valid marriage is performed before a registrar. Church wedding is optional."
  },
  {
    id: "265",
    text_de: "Welche Erziehungsmethode ist in Deutschland verboten?",
    text_en: "Which parenting method is prohibited in Germany?",
    options: [
      { de: "Lob und Belohnung", en: "praise and reward" },
      { de: "körperliche Bestrafung", en: "physical punishment" },
      { de: "gemeinsames Spielen", en: "playing together" },
      { de: "Vorlesen", en: "reading aloud" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Körperliche Bestrafung von Kindern ist in Deutschland seit 2000 verboten. Kinder haben ein Recht auf gewaltfreie Erziehung.",
    explanation_en: "Physical punishment of children has been prohibited in Germany since 2000. Children have a right to non-violent upbringing."
  },
  {
    id: "266",
    text_de: "In Deutschland gilt Gewalt gegen Kinder als...",
    text_en: "In Germany, violence against children is considered...",
    options: [
      { de: "normale Erziehung", en: "normal upbringing" },
      { de: "Privatsache der Familie", en: "a private family matter" },
      { de: "strafbar", en: "punishable" },
      { de: "erlaubt", en: "allowed" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Gewalt gegen Kinder ist strafbar. Kinder haben ein Recht auf gewaltfreie Erziehung (§ 1631 BGB).",
    explanation_en: "Violence against children is punishable. Children have a right to non-violent upbringing (§ 1631 BGB)."
  },
  {
    id: "267",
    text_de: "Was ist ein Kindergarten?",
    text_en: "What is a Kindergarten?",
    options: [
      { de: "eine Schule für Kinder ab 6 Jahren", en: "a school for children from 6 years old" },
      { de: "eine Einrichtung für Kinder vor der Schule", en: "an institution for children before school" },
      { de: "ein Spielplatz", en: "a playground" },
      { de: "ein Krankenhaus für Kinder", en: "a hospital for children" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Kindergarten ist eine Einrichtung für Kinder vor der Schule (meist 3-6 Jahre). Das Wort stammt aus Deutschland.",
    explanation_en: "Kindergarten is an institution for children before school (usually 3-6 years). The word comes from Germany."
  },
  {
    id: "268",
    text_de: "Was bedeutet 'Mutterschutz' in Deutschland?",
    text_en: "What does 'maternity protection' mean in Germany?",
    options: [
      { de: "Schutz für ältere Frauen", en: "protection for older women" },
      { de: "Schutz für schwangere und stillende Frauen", en: "protection for pregnant women and new mothers" },
      { de: "Schutz für alleinerziehende Väter", en: "protection for single fathers" },
      { de: "Schutz für Großmütter", en: "protection for grandmothers" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Mutterschutz schützt schwangere und stillende Frauen vor Kündigung und gefährlicher Arbeit.",
    explanation_en: "Maternity protection protects pregnant and breastfeeding women from dismissal and dangerous work."
  },
  {
    id: "269",
    text_de: "Was ist 'Elternzeit' in Deutschland?",
    text_en: "What is 'parental leave' in Germany?",
    options: [
      { de: "Urlaub für Großeltern", en: "vacation for grandparents" },
      { de: "eine Auszeit von der Arbeit zur Kinderbetreuung", en: "time off work for childcare" },
      { de: "Urlaub für Lehrer", en: "vacation for teachers" },
      { de: "Ruhestand", en: "retirement" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Elternzeit ist unbezahlte Freistellung von der Arbeit zur Kinderbetreuung. Eltern können bis zu 3 Jahre Elternzeit nehmen.",
    explanation_en: "Parental leave is unpaid leave from work for childcare. Parents can take up to 3 years of parental leave."
  },
  {
    id: "270",
    text_de: "Was ist Kindergeld in Deutschland?",
    text_en: "What is child benefit in Germany?",
    options: [
      { de: "Geld, das Kinder verdienen", en: "money that children earn" },
      { de: "eine staatliche Unterstützung für Familien mit Kindern", en: "state support for families with children" },
      { de: "Taschengeld für Kinder", en: "pocket money for children" },
      { de: "Schulgeld", en: "school fees" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Kindergeld ist eine staatliche Leistung für Familien mit Kindern. Es wird monatlich pro Kind gezahlt.",
    explanation_en: "Child benefit is a state benefit for families with children. It is paid monthly per child."
  }
];
