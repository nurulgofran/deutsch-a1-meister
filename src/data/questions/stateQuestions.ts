import { Question } from './types';

// State-specific questions for all Bundesländer (10 questions each)
// Questions 301-310 per state covering: coat of arms, districts, famous for, capital, minister-president, neighbors, parliament, cities, river, mountain/geography

// Baden-Württemberg
const badenWuerttembergQuestions: Question[] = [
  {
    id: "301",
    text_de: "Welches Wappen gehört zum Bundesland Baden-Württemberg?",
    text_en: "Which coat of arms belongs to the federal state of Baden-Württemberg?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/baden-wuerttemberg.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/bayern.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    hasImages: true,
    explanation_de: "Das Wappen von Baden-Württemberg zeigt drei schwarze Löwen auf goldenem Grund, umrahmt von Hirsch und Greif.",
    explanation_en: "Baden-Württemberg's coat of arms shows three black lions on a golden background, framed by a stag and a griffin."
  },
  {
    id: "302",
    text_de: "Welches ist ein Landkreis in Baden-Württemberg?",
    text_en: "Which is a district in Baden-Württemberg?",
    options: [
      { de: "Rhein-Neckar-Kreis", en: "Rhein-Neckar-Kreis" },
      { de: "Altötting", en: "Altötting" },
      { de: "Emsland", en: "Emsland" },
      { de: "Prignitz", en: "Prignitz" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    explanation_de: "Der Rhein-Neckar-Kreis liegt in der Metropolregion Rhein-Neckar. Altötting ist in Bayern, Emsland in Niedersachsen, Prignitz in Brandenburg.",
    explanation_en: "Rhein-Neckar-Kreis is in the Rhine-Neckar metropolitan region. Altötting is in Bavaria, Emsland in Lower Saxony, Prignitz in Brandenburg."
  },
  {
    id: "303",
    text_de: "Wofür ist Baden-Württemberg bekannt?",
    text_en: "What is Baden-Württemberg famous for?",
    options: [
      { de: "Automobilindustrie und Schwarzwald", en: "Car industry and Black Forest" },
      { de: "Schiffbau", en: "Shipbuilding" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Fischerei", en: "Fishing" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    explanation_de: "Baden-Württemberg ist Heimat von Mercedes-Benz und Porsche. Der Schwarzwald ist ein beliebtes Urlaubsziel mit Kuckucksuhren und Schwarzwälder Kirschtorte.",
    explanation_en: "Baden-Württemberg is home to Mercedes-Benz and Porsche. The Black Forest is a popular tourist destination known for cuckoo clocks and Black Forest cake."
  },
  {
    id: "304",
    text_de: "Welches Bundesland hat die Landeshauptstadt Stuttgart?",
    text_en: "Which federal state has Stuttgart as its capital?",
    options: [
      { de: "Baden-Württemberg", en: "Baden-Württemberg" },
      { de: "Bayern", en: "Bavaria" },
      { de: "Hessen", en: "Hesse" },
      { de: "Sachsen", en: "Saxony" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    explanation_de: "Stuttgart ist die Landeshauptstadt von Baden-Württemberg. München gehört zu Bayern, Wiesbaden zu Hessen, Dresden zu Sachsen.",
    explanation_en: "Stuttgart is the capital of Baden-Württemberg. Munich belongs to Bavaria, Wiesbaden to Hesse, Dresden to Saxony."
  },
  {
    id: "305",
    text_de: "Wie heißt der/die Ministerpräsident/in von Baden-Württemberg?",
    text_en: "What is the name of the Minister-President of Baden-Württemberg?",
    options: [
      { de: "Winfried Kretschmann", en: "Winfried Kretschmann" },
      { de: "Markus Söder", en: "Markus Söder" },
      { de: "Boris Rhein", en: "Boris Rhein" },
      { de: "Malu Dreyer", en: "Malu Dreyer" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    explanation_de: "Winfried Kretschmann (Bündnis 90/Die Grünen) ist seit 2011 Ministerpräsident von Baden-Württemberg.",
    explanation_en: "Winfried Kretschmann (Alliance 90/The Greens) has been Minister-President of Baden-Württemberg since 2011."
  },
  {
    id: "306",
    text_de: "Welches Bundesland grenzt an Baden-Württemberg?",
    text_en: "Which federal state borders Baden-Württemberg?",
    options: [
      { de: "Bayern", en: "Bavaria" },
      { de: "Brandenburg", en: "Brandenburg" },
      { de: "Sachsen", en: "Saxony" },
      { de: "Niedersachsen", en: "Lower Saxony" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    explanation_de: "Baden-Württemberg grenzt an Bayern im Osten. Brandenburg, Sachsen und Niedersachsen liegen im Norden/Osten Deutschlands.",
    explanation_en: "Baden-Württemberg borders Bavaria to the east. Brandenburg, Saxony, and Lower Saxony are in the north/east of Germany."
  },
  {
    id: "307",
    text_de: "Wie heißt das Landesparlament von Baden-Württemberg?",
    text_en: "What is the name of the state parliament of Baden-Württemberg?",
    options: [
      { de: "Landtag", en: "Landtag" },
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    explanation_de: "Das Landesparlament heißt Landtag. Bürgerschaft gibt es nur in Hamburg und Bremen. Das Abgeordnetenhaus ist in Berlin.",
    explanation_en: "The state parliament is called Landtag. Bürgerschaft exists only in Hamburg and Bremen. The House of Representatives is in Berlin."
  },
  {
    id: "308",
    text_de: "Welche Stadt liegt nicht in Baden-Württemberg?",
    text_en: "Which city is not in Baden-Württemberg?",
    options: [
      { de: "Karlsruhe", en: "Karlsruhe" },
      { de: "Heidelberg", en: "Heidelberg" },
      { de: "Mannheim", en: "Mannheim" },
      { de: "Frankfurt am Main", en: "Frankfurt am Main" }
    ],
    correctIndex: 3,
    category: "society",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    explanation_de: "Frankfurt am Main liegt in Hessen, nicht in Baden-Württemberg. Karlsruhe, Heidelberg und Mannheim sind Städte in Baden-Württemberg.",
    explanation_en: "Frankfurt am Main is in Hesse, not Baden-Württemberg. Karlsruhe, Heidelberg, and Mannheim are cities in Baden-Württemberg."
  },
  {
    id: "309",
    text_de: "Welcher Fluss fließt durch Baden-Württemberg?",
    text_en: "Which river flows through Baden-Württemberg?",
    options: [
      { de: "der Neckar", en: "the Neckar" },
      { de: "die Elbe", en: "the Elbe" },
      { de: "die Weser", en: "the Weser" },
      { de: "die Spree", en: "the Spree" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    explanation_de: "Der Neckar fließt durch Stuttgart und Heidelberg. Die Elbe fließt durch Hamburg, die Weser durch Bremen, die Spree durch Berlin.",
    explanation_en: "The Neckar flows through Stuttgart and Heidelberg. The Elbe flows through Hamburg, the Weser through Bremen, the Spree through Berlin."
  },
  {
    id: "310",
    text_de: "Welches Gebirge liegt in Baden-Württemberg?",
    text_en: "Which mountain range is in Baden-Württemberg?",
    options: [
      { de: "der Schwarzwald", en: "the Black Forest" },
      { de: "der Harz", en: "the Harz" },
      { de: "der Thüringer Wald", en: "the Thuringian Forest" },
      { de: "das Erzgebirge", en: "the Ore Mountains" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Baden-Württemberg",
    explanation_de: "Der Schwarzwald ist das größte und höchste Mittelgebirge in Baden-Württemberg. Der Harz liegt in Niedersachsen/Sachsen-Anhalt.",
    explanation_en: "The Black Forest is the largest and highest low mountain range in Baden-Württemberg. The Harz is in Lower Saxony/Saxony-Anhalt."
  }
];

// Bayern (Bavaria)
const bayernQuestions: Question[] = [
  {
    id: "311",
    text_de: "Welches Wappen gehört zum Bundesland Bayern?",
    text_en: "Which coat of arms belongs to the federal state of Bavaria?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/bayern.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Bayern",
    hasImages: true,
    explanation_de: "Das bayerische Wappen zeigt weiß-blaue Rauten (die 'Bayerischen Rauten') und symbolisiert die Tradition des Freistaats.",
    explanation_en: "The Bavarian coat of arms shows white-blue lozenges ('Bavarian Lozenges') symbolizing the Free State's tradition."
  },
  {
    id: "312",
    text_de: "Welches ist ein Landkreis in Bayern?",
    text_en: "Which is a district in Bavaria?",
    options: [
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Altötting", en: "Altötting" },
      { de: "Rhein-Erft-Kreis", en: "Rhein-Erft-Kreis" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Bayern",
    explanation_de: "Altötting ist ein Landkreis in Oberbayern, bekannt für den Wallfahrtsort. Enzkreis liegt in Baden-Württemberg, die anderen in Nordrhein-Westfalen.",
    explanation_en: "Altötting is a district in Upper Bavaria, known for its pilgrimage site. Enzkreis is in Baden-Württemberg, the others in North Rhine-Westphalia."
  },
  {
    id: "313",
    text_de: "Wofür ist Bayern bekannt?",
    text_en: "What is Bavaria famous for?",
    options: [
      { de: "Automobilindustrie und Oktoberfest", en: "Car industry and Oktoberfest" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Fischindustrie", en: "Fish industry" },
      { de: "Stahlindustrie", en: "Steel industry" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Bayern",
    explanation_de: "Bayern ist Heimat von BMW und Audi. Das Oktoberfest in München ist das größte Volksfest der Welt.",
    explanation_en: "Bavaria is home to BMW and Audi. Oktoberfest in Munich is the world's largest folk festival."
  },
  {
    id: "314",
    text_de: "Welches Bundesland hat die Landeshauptstadt München?",
    text_en: "Which federal state has Munich as its capital?",
    options: [
      { de: "Baden-Württemberg", en: "Baden-Württemberg" },
      { de: "Bayern", en: "Bavaria" },
      { de: "Hessen", en: "Hesse" },
      { de: "Sachsen", en: "Saxony" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Bayern",
    explanation_de: "München ist die Landeshauptstadt von Bayern und mit 1,5 Millionen Einwohnern die drittgrößte Stadt Deutschlands.",
    explanation_en: "Munich is the capital of Bavaria and with 1.5 million inhabitants Germany's third-largest city."
  },
  {
    id: "315",
    text_de: "Wie heißt der/die Ministerpräsident/in von Bayern?",
    text_en: "What is the name of the Minister-President of Bavaria?",
    options: [
      { de: "Winfried Kretschmann", en: "Winfried Kretschmann" },
      { de: "Markus Söder", en: "Markus Söder" },
      { de: "Armin Laschet", en: "Armin Laschet" },
      { de: "Olaf Scholz", en: "Olaf Scholz" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Bayern",
    explanation_de: "Markus Söder (CSU) ist seit 2018 Ministerpräsident von Bayern. Die CSU ist nur in Bayern politisch aktiv.",
    explanation_en: "Markus Söder (CSU) has been Minister-President of Bavaria since 2018. The CSU is politically active only in Bavaria."
  },
  {
    id: "316",
    text_de: "Welche Nachbarländer hat Bayern?",
    text_en: "Which neighboring countries does Bavaria have?",
    options: [
      { de: "Frankreich und Belgien", en: "France and Belgium" },
      { de: "Österreich und Tschechien", en: "Austria and Czech Republic" },
      { de: "Polen und Dänemark", en: "Poland and Denmark" },
      { de: "Niederlande und Luxemburg", en: "Netherlands and Luxembourg" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Bayern",
    explanation_de: "Bayern grenzt im Süden/Osten an Österreich und Tschechien. Es ist das einzige deutsche Bundesland mit direkter Alpengrenze.",
    explanation_en: "Bavaria borders Austria and Czech Republic to the south/east. It is the only German state with a direct Alpine border."
  },
  {
    id: "317",
    text_de: "Wie heißt das Landesparlament von Bayern?",
    text_en: "What is the name of the state parliament of Bavaria?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Bayern",
    explanation_de: "Das bayerische Landesparlament heißt Landtag und sitzt im Maximilianeum in München.",
    explanation_en: "The Bavarian state parliament is called Landtag and is located in the Maximilianeum in Munich."
  },
  {
    id: "318",
    text_de: "Welche Stadt liegt nicht in Bayern?",
    text_en: "Which city is not in Bavaria?",
    options: [
      { de: "München", en: "Munich" },
      { de: "Nürnberg", en: "Nuremberg" },
      { de: "Augsburg", en: "Augsburg" },
      { de: "Stuttgart", en: "Stuttgart" }
    ],
    correctIndex: 3,
    category: "society",
    isStateSpecific: true,
    state: "Bayern",
    explanation_de: "Stuttgart ist die Hauptstadt von Baden-Württemberg. München, Nürnberg und Augsburg sind bayerische Städte.",
    explanation_en: "Stuttgart is the capital of Baden-Württemberg. Munich, Nuremberg, and Augsburg are Bavarian cities."
  },
  {
    id: "319",
    text_de: "Welcher Fluss fließt durch Bayern?",
    text_en: "Which river flows through Bavaria?",
    options: [
      { de: "die Elbe", en: "the Elbe" },
      { de: "die Donau", en: "the Danube" },
      { de: "die Spree", en: "the Spree" },
      { de: "die Weser", en: "the Weser" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Bayern",
    explanation_de: "Die Donau fließt durch Bayern (z.B. Regensburg, Passau). Sie ist der zweitlängste Fluss Europas.",
    explanation_en: "The Danube flows through Bavaria (e.g., Regensburg, Passau). It is Europe's second-longest river."
  },
  {
    id: "320",
    text_de: "Welches Gebirge liegt in Bayern?",
    text_en: "Which mountain range is in Bavaria?",
    options: [
      { de: "der Harz", en: "the Harz" },
      { de: "das Erzgebirge", en: "the Ore Mountains" },
      { de: "die Alpen", en: "the Alps" },
      { de: "der Taunus", en: "the Taunus" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Bayern",
    explanation_de: "Die Alpen liegen im Süden Bayerns mit der Zugspitze (2.962 m), dem höchsten Berg Deutschlands.",
    explanation_en: "The Alps are in southern Bavaria with the Zugspitze (2,962 m), Germany's highest mountain."
  }
];

// Berlin
const berlinQuestions: Question[] = [
  {
    id: "321",
    text_de: "Welches Wappen gehört zum Bundesland Berlin?",
    text_en: "Which coat of arms belongs to the federal state of Berlin?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/berlin.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/bayern.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Berlin",
    hasImages: true,
    explanation_de: "Das Berliner Wappen zeigt einen schwarzen Bären auf weißem Grund - den berühmten 'Berliner Bären'.",
    explanation_en: "Berlin's coat of arms shows a black bear on a white background - the famous 'Berlin Bear'."
  },
  {
    id: "322",
    text_de: "Welches ist ein Bezirk von Berlin?",
    text_en: "Which is a district of Berlin?",
    options: [
      { de: "Altona", en: "Altona" },
      { de: "Kreuzberg", en: "Kreuzberg" },
      { de: "Köpenick ist kein Bezirk", en: "Köpenick is not a district" },
      { de: "Reinickendorf", en: "Reinickendorf" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Berlin",
    explanation_de: "Kreuzberg ist ein Bezirk in Berlin, bekannt für seine multikulturelle Atmosphäre. Altona gehört zu Hamburg.",
    explanation_en: "Kreuzberg is a district in Berlin, known for its multicultural atmosphere. Altona belongs to Hamburg."
  },
  {
    id: "323",
    text_de: "Wofür ist Berlin bekannt?",
    text_en: "What is Berlin famous for?",
    options: [
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Kultur, Geschichte und Regierungssitz", en: "Culture, history and seat of government" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Schiffbau", en: "Shipbuilding" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Berlin",
    explanation_de: "Berlin ist Regierungssitz und kulturelles Zentrum mit Museen, Theater und bewegter Geschichte (Mauer, Kalter Krieg).",
    explanation_en: "Berlin is the seat of government and cultural center with museums, theaters, and eventful history (Wall, Cold War)."
  },
  {
    id: "324",
    text_de: "Was ist die Hauptstadt von Deutschland?",
    text_en: "What is the capital of Germany?",
    options: [
      { de: "München", en: "Munich" },
      { de: "Berlin", en: "Berlin" },
      { de: "Hamburg", en: "Hamburg" },
      { de: "Bonn", en: "Bonn" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Berlin",
    explanation_de: "Berlin ist seit 1990 (Wiedervereinigung) die Hauptstadt Deutschlands. Bonn war früher Hauptstadt der BRD.",
    explanation_en: "Berlin has been Germany's capital since 1990 (reunification). Bonn was formerly the capital of West Germany."
  },
  {
    id: "325",
    text_de: "Wie heißt der/die Regierende Bürgermeister/in von Berlin?",
    text_en: "What is the name of the Governing Mayor of Berlin?",
    options: [
      { de: "Franziska Giffey", en: "Franziska Giffey" },
      { de: "Kai Wegner", en: "Kai Wegner" },
      { de: "Klaus Wowereit", en: "Klaus Wowereit" },
      { de: "Michael Müller", en: "Michael Müller" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Berlin",
    explanation_de: "Kai Wegner (CDU) ist seit 2023 Regierender Bürgermeister von Berlin. Berlin ist ein Stadtstaat.",
    explanation_en: "Kai Wegner (CDU) has been Governing Mayor of Berlin since 2023. Berlin is a city-state."
  },
  {
    id: "326",
    text_de: "Welches Bundesland umgibt Berlin vollständig?",
    text_en: "Which federal state completely surrounds Berlin?",
    options: [
      { de: "Sachsen", en: "Saxony" },
      { de: "Mecklenburg-Vorpommern", en: "Mecklenburg-Western Pomerania" },
      { de: "Brandenburg", en: "Brandenburg" },
      { de: "Sachsen-Anhalt", en: "Saxony-Anhalt" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Berlin",
    explanation_de: "Brandenburg umschließt Berlin vollständig. Berlin liegt als 'Insel' mitten in Brandenburg.",
    explanation_en: "Brandenburg completely surrounds Berlin. Berlin lies as an 'island' in the middle of Brandenburg."
  },
  {
    id: "327",
    text_de: "Wie heißt das Landesparlament von Berlin?",
    text_en: "What is the name of the state parliament of Berlin?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Berlin",
    explanation_de: "Berlins Landesparlament heißt Abgeordnetenhaus. Dies ist einzigartig in Deutschland.",
    explanation_en: "Berlin's state parliament is called Abgeordnetenhaus (House of Representatives). This is unique in Germany."
  },
  {
    id: "328",
    text_de: "Welcher Stadtteil gehört nicht zu Berlin?",
    text_en: "Which district does not belong to Berlin?",
    options: [
      { de: "Spandau", en: "Spandau" },
      { de: "Charlottenburg", en: "Charlottenburg" },
      { de: "Potsdam", en: "Potsdam" },
      { de: "Mitte", en: "Mitte" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Berlin",
    explanation_de: "Potsdam ist eine eigene Stadt in Brandenburg (Landeshauptstadt), nicht Teil von Berlin.",
    explanation_en: "Potsdam is a separate city in Brandenburg (state capital), not part of Berlin."
  },
  {
    id: "329",
    text_de: "Welcher Fluss fließt durch Berlin?",
    text_en: "Which river flows through Berlin?",
    options: [
      { de: "die Elbe", en: "the Elbe" },
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Spree", en: "the Spree" },
      { de: "die Weser", en: "the Weser" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Berlin",
    explanation_de: "Die Spree fließt durch Berlin und mündet in die Havel. Der Reichstag und die Museumsinsel liegen an der Spree.",
    explanation_en: "The Spree flows through Berlin and empties into the Havel. The Reichstag and Museum Island are on the Spree."
  },
  {
    id: "330",
    text_de: "Was ist ein bekanntes Wahrzeichen von Berlin?",
    text_en: "What is a famous landmark of Berlin?",
    options: [
      { de: "das Brandenburger Tor", en: "the Brandenburg Gate" },
      { de: "der Kölner Dom", en: "Cologne Cathedral" },
      { de: "das Schloss Neuschwanstein", en: "Neuschwanstein Castle" },
      { de: "die Frauenkirche", en: "the Frauenkirche" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Berlin",
    explanation_de: "Das Brandenburger Tor ist das bekannteste Wahrzeichen Berlins, Symbol für die deutsche Einheit.",
    explanation_en: "The Brandenburg Gate is Berlin's most famous landmark, a symbol of German unity."
  }
];

// Brandenburg
const brandenburgQuestions: Question[] = [
  {
    id: "331",
    text_de: "Welches Wappen gehört zum Bundesland Brandenburg?",
    text_en: "Which coat of arms belongs to the federal state of Brandenburg?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/brandenburg.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Brandenburg",
    hasImages: true,
    explanation_de: "Das Brandenburger Wappen zeigt einen roten Adler auf weißem Grund (Brandenburger Adler).",
    explanation_en: "Brandenburg's coat of arms shows a red eagle on a white background (Brandenburg Eagle)."
  },
  {
    id: "332",
    text_de: "Welches ist ein Landkreis in Brandenburg?",
    text_en: "Which is a district in Brandenburg?",
    options: [
      { de: "Potsdam-Mittelmark", en: "Potsdam-Mittelmark" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Brandenburg",
    explanation_de: "Potsdam-Mittelmark ist der flächengrößte Landkreis Brandenburgs, südwestlich von Berlin.",
    explanation_en: "Potsdam-Mittelmark is Brandenburg's largest district by area, southwest of Berlin."
  },
  {
    id: "333",
    text_de: "Wofür ist Brandenburg bekannt?",
    text_en: "What is Brandenburg famous for?",
    options: [
      { de: "Seen und Wälder", en: "Lakes and forests" },
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Schiffbau", en: "Shipbuilding" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Brandenburg",
    explanation_de: "Brandenburg hat über 3.000 Seen und ist eines der waldreichsten Bundesländer Deutschlands.",
    explanation_en: "Brandenburg has over 3,000 lakes and is one of Germany's most forested federal states."
  },
  {
    id: "334",
    text_de: "Welches Bundesland hat die Landeshauptstadt Potsdam?",
    text_en: "Which federal state has Potsdam as its capital?",
    options: [
      { de: "Sachsen", en: "Saxony" },
      { de: "Berlin", en: "Berlin" },
      { de: "Brandenburg", en: "Brandenburg" },
      { de: "Mecklenburg-Vorpommern", en: "Mecklenburg-Western Pomerania" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Brandenburg",
    explanation_de: "Potsdam ist die Landeshauptstadt von Brandenburg, bekannt für Schloss Sanssouci und die Potsdamer Konferenz 1945.",
    explanation_en: "Potsdam is Brandenburg's capital, known for Sanssouci Palace and the 1945 Potsdam Conference."
  },
  {
    id: "335",
    text_de: "Wie heißt der/die Ministerpräsident/in von Brandenburg?",
    text_en: "What is the name of the Minister-President of Brandenburg?",
    options: [
      { de: "Dietmar Woidke", en: "Dietmar Woidke" },
      { de: "Markus Söder", en: "Markus Söder" },
      { de: "Bodo Ramelow", en: "Bodo Ramelow" },
      { de: "Michael Kretschmer", en: "Michael Kretschmer" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Brandenburg",
    explanation_de: "Dietmar Woidke (SPD) ist seit 2013 Ministerpräsident von Brandenburg.",
    explanation_en: "Dietmar Woidke (SPD) has been Minister-President of Brandenburg since 2013."
  },
  {
    id: "336",
    text_de: "Welches Nachbarland hat Brandenburg?",
    text_en: "Which neighboring country does Brandenburg have?",
    options: [
      { de: "Frankreich", en: "France" },
      { de: "Polen", en: "Poland" },
      { de: "Österreich", en: "Austria" },
      { de: "Dänemark", en: "Denmark" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Brandenburg",
    explanation_de: "Brandenburg grenzt im Osten an Polen (Oder-Neiße-Grenze). Diese Grenze wurde 1945 festgelegt.",
    explanation_en: "Brandenburg borders Poland to the east (Oder-Neisse line). This border was established in 1945."
  },
  {
    id: "337",
    text_de: "Wie heißt das Landesparlament von Brandenburg?",
    text_en: "What is the name of the state parliament of Brandenburg?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Brandenburg",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt in Potsdam.",
    explanation_en: "The state parliament is called Landtag and is located in Potsdam."
  },
  {
    id: "338",
    text_de: "Welche Stadt liegt nicht in Brandenburg?",
    text_en: "Which city is not in Brandenburg?",
    options: [
      { de: "Potsdam", en: "Potsdam" },
      { de: "Cottbus", en: "Cottbus" },
      { de: "Berlin", en: "Berlin" },
      { de: "Frankfurt (Oder)", en: "Frankfurt (Oder)" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Brandenburg",
    explanation_de: "Berlin ist ein eigenes Bundesland (Stadtstaat), nicht Teil von Brandenburg - obwohl es von Brandenburg umgeben ist.",
    explanation_en: "Berlin is a separate federal state (city-state), not part of Brandenburg - although it is surrounded by Brandenburg."
  },
  {
    id: "339",
    text_de: "Welcher Fluss fließt durch Brandenburg?",
    text_en: "Which river flows through Brandenburg?",
    options: [
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Havel", en: "the Havel" },
      { de: "die Weser", en: "the Weser" },
      { de: "der Neckar", en: "the Neckar" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Brandenburg",
    explanation_de: "Die Havel fließt durch Brandenburg und verbindet Potsdam mit Berlin. Sie mündet in die Elbe.",
    explanation_en: "The Havel flows through Brandenburg and connects Potsdam with Berlin. It empties into the Elbe."
  },
  {
    id: "340",
    text_de: "Was ist ein bekanntes Bauwerk in Brandenburg?",
    text_en: "What is a famous building in Brandenburg?",
    options: [
      { de: "Schloss Sanssouci", en: "Sanssouci Palace" },
      { de: "Kölner Dom", en: "Cologne Cathedral" },
      { de: "Neuschwanstein", en: "Neuschwanstein" },
      { de: "Brandenburger Tor", en: "Brandenburg Gate" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Brandenburg",
    explanation_de: "Schloss Sanssouci in Potsdam war die Sommerresidenz von Friedrich dem Großen. Es gehört zum UNESCO-Welterbe.",
    explanation_en: "Sanssouci Palace in Potsdam was Frederick the Great's summer residence. It is a UNESCO World Heritage Site."
  }
];

// Bremen
const bremenQuestions: Question[] = [
  {
    id: "341",
    text_de: "Welches Wappen gehört zum Bundesland Bremen?",
    text_en: "Which coat of arms belongs to the federal state of Bremen?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/bremen.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/berlin.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/bayern.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Bremen",
    hasImages: true,
    explanation_de: "Das Bremer Wappen zeigt einen silbernen Schlüssel auf rotem Grund - den 'Bremer Schlüssel'.",
    explanation_en: "Bremen's coat of arms shows a silver key on a red background - the 'Bremen Key'."
  },
  {
    id: "342",
    text_de: "Aus welchen Städten besteht das Bundesland Bremen?",
    text_en: "Which cities make up the federal state of Bremen?",
    options: [
      { de: "Bremen und Hamburg", en: "Bremen and Hamburg" },
      { de: "Bremen und Bremerhaven", en: "Bremen and Bremerhaven" },
      { de: "Bremen und Oldenburg", en: "Bremen and Oldenburg" },
      { de: "Bremen und Wilhelmshaven", en: "Bremen and Wilhelmshaven" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Bremen",
    explanation_de: "Bremen ist ein 'Zwei-Städte-Staat' bestehend aus Bremen und der Hafenstadt Bremerhaven (60 km entfernt).",
    explanation_en: "Bremen is a 'two-city state' consisting of Bremen and the port city Bremerhaven (60 km away)."
  },
  {
    id: "343",
    text_de: "Wofür ist Bremen bekannt?",
    text_en: "What is Bremen famous for?",
    options: [
      { de: "Hafen und Schifffahrt", en: "Port and shipping" },
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Weinanbau", en: "Winemaking" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Bremen",
    explanation_de: "Bremen hat eine lange Seefahrtstradition. Bremerhaven hat einen der größten Containerhäfen Europas.",
    explanation_en: "Bremen has a long seafaring tradition. Bremerhaven has one of the largest container ports in Europe."
  },
  {
    id: "344",
    text_de: "Welches Bundesland ist ein Stadtstaat mit dem Namen Bremen?",
    text_en: "Which federal state is a city-state named Bremen?",
    options: [
      { de: "Niedersachsen", en: "Lower Saxony" },
      { de: "Bremen", en: "Bremen" },
      { de: "Hamburg", en: "Hamburg" },
      { de: "Berlin", en: "Berlin" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Bremen",
    explanation_de: "Bremen ist neben Hamburg und Berlin einer von drei Stadtstaaten in Deutschland.",
    explanation_en: "Bremen is one of three city-states in Germany, along with Hamburg and Berlin."
  },
  {
    id: "345",
    text_de: "Wie heißt der/die Bürgermeister/in von Bremen?",
    text_en: "What is the name of the Mayor of Bremen?",
    options: [
      { de: "Andreas Bovenschulte", en: "Andreas Bovenschulte" },
      { de: "Peter Tschentscher", en: "Peter Tschentscher" },
      { de: "Kai Wegner", en: "Kai Wegner" },
      { de: "Stephan Weil", en: "Stephan Weil" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Bremen",
    explanation_de: "Andreas Bovenschulte (SPD) ist seit 2019 Bürgermeister und Präsident des Senats von Bremen.",
    explanation_en: "Andreas Bovenschulte (SPD) has been Mayor and President of the Senate of Bremen since 2019."
  },
  {
    id: "346",
    text_de: "Welches Bundesland umgibt Bremen?",
    text_en: "Which federal state surrounds Bremen?",
    options: [
      { de: "Schleswig-Holstein", en: "Schleswig-Holstein" },
      { de: "Niedersachsen", en: "Lower Saxony" },
      { de: "Hamburg", en: "Hamburg" },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Bremen",
    explanation_de: "Das Bundesland Bremen ist vollständig von Niedersachsen umgeben.",
    explanation_en: "The federal state of Bremen is completely surrounded by Lower Saxony."
  },
  {
    id: "347",
    text_de: "Wie heißt das Landesparlament von Bremen?",
    text_en: "What is the name of the state parliament of Bremen?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Bremen",
    explanation_de: "Das Landesparlament von Bremen heißt Bürgerschaft - genau wie in Hamburg.",
    explanation_en: "Bremen's state parliament is called Bürgerschaft - the same as in Hamburg."
  },
  {
    id: "348",
    text_de: "Welches bekannte Märchen ist mit Bremen verbunden?",
    text_en: "Which famous fairy tale is connected to Bremen?",
    options: [
      { de: "Rotkäppchen", en: "Little Red Riding Hood" },
      { de: "Die Bremer Stadtmusikanten", en: "The Bremen Town Musicians" },
      { de: "Hänsel und Gretel", en: "Hansel and Gretel" },
      { de: "Schneewittchen", en: "Snow White" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Bremen",
    explanation_de: "Die Bremer Stadtmusikanten (Esel, Hund, Katze, Hahn) sind ein Märchen der Brüder Grimm. Eine bronze Statue steht am Rathaus.",
    explanation_en: "The Bremen Town Musicians (donkey, dog, cat, rooster) is a Brothers Grimm fairy tale. A bronze statue stands at the town hall."
  },
  {
    id: "349",
    text_de: "Welcher Fluss fließt durch Bremen?",
    text_en: "Which river flows through Bremen?",
    options: [
      { de: "die Elbe", en: "the Elbe" },
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Weser", en: "the Weser" },
      { de: "die Donau", en: "the Danube" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Bremen",
    explanation_de: "Die Weser fließt durch Bremen und mündet bei Bremerhaven in die Nordsee.",
    explanation_en: "The Weser flows through Bremen and empties into the North Sea near Bremerhaven."
  },
  {
    id: "350",
    text_de: "Was ist das kleinste Bundesland nach Fläche?",
    text_en: "What is the smallest federal state by area?",
    options: [
      { de: "Berlin", en: "Berlin" },
      { de: "Bremen", en: "Bremen" },
      { de: "Hamburg", en: "Hamburg" },
      { de: "Saarland", en: "Saarland" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Bremen",
    explanation_de: "Bremen ist mit 419 km² das kleinste deutsche Bundesland nach Fläche.",
    explanation_en: "Bremen is Germany's smallest federal state by area at 419 km²."
  }
];

// Hamburg
const hamburgQuestions: Question[] = [
  {
    id: "351",
    text_de: "Welches Wappen gehört zum Bundesland Hamburg?",
    text_en: "Which coat of arms belongs to the federal state of Hamburg?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/berlin.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/bayern.png" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Hamburg",
    hasImages: true,
    explanation_de: "Das Hamburger Wappen zeigt eine weiße Burg auf rotem Grund - Symbol für die alte Befestigungsanlage.",
    explanation_en: "Hamburg's coat of arms shows a white castle on a red background - a symbol of the old fortification."
  },
  {
    id: "352",
    text_de: "Welches ist ein Bezirk von Hamburg?",
    text_en: "Which is a district of Hamburg?",
    options: [
      { de: "Altona", en: "Altona" },
      { de: "Kreuzberg", en: "Kreuzberg" },
      { de: "Prenzlauer Berg", en: "Prenzlauer Berg" },
      { de: "Schöneberg", en: "Schöneberg" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Hamburg",
    explanation_de: "Altona ist ein Bezirk in Hamburg. Kreuzberg, Prenzlauer Berg und Schöneberg sind Berliner Stadtteile.",
    explanation_en: "Altona is a district of Hamburg. Kreuzberg, Prenzlauer Berg, and Schöneberg are Berlin districts."
  },
  {
    id: "353",
    text_de: "Wofür ist Hamburg bekannt?",
    text_en: "What is Hamburg famous for?",
    options: [
      { de: "Hafen und Handel", en: "Port and trade" },
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Weinanbau", en: "Winemaking" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Hamburg",
    explanation_de: "Hamburg hat den größten Seehafen Deutschlands und ist ein wichtiges Handelszentrum seit dem Mittelalter.",
    explanation_en: "Hamburg has Germany's largest seaport and has been an important trading center since the Middle Ages."
  },
  {
    id: "354",
    text_de: "Welches Bundesland ist ein Stadtstaat mit dem Namen Hamburg?",
    text_en: "Which federal state is a city-state named Hamburg?",
    options: [
      { de: "Niedersachsen", en: "Lower Saxony" },
      { de: "Bremen", en: "Bremen" },
      { de: "Hamburg", en: "Hamburg" },
      { de: "Schleswig-Holstein", en: "Schleswig-Holstein" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Hamburg",
    explanation_de: "Hamburg ist ein Stadtstaat und gleichzeitig Stadt und Bundesland. Es ist die zweitgrößte Stadt Deutschlands.",
    explanation_en: "Hamburg is a city-state, being both a city and a federal state. It is Germany's second-largest city."
  },
  {
    id: "355",
    text_de: "Wie heißt der/die Erste Bürgermeister/in von Hamburg?",
    text_en: "What is the name of the First Mayor of Hamburg?",
    options: [
      { de: "Andreas Bovenschulte", en: "Andreas Bovenschulte" },
      { de: "Peter Tschentscher", en: "Peter Tschentscher" },
      { de: "Kai Wegner", en: "Kai Wegner" },
      { de: "Stephan Weil", en: "Stephan Weil" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Hamburg",
    explanation_de: "Peter Tschentscher (SPD) ist seit 2018 Erster Bürgermeister von Hamburg.",
    explanation_en: "Peter Tschentscher (SPD) has been First Mayor of Hamburg since 2018."
  },
  {
    id: "356",
    text_de: "Welche Bundesländer grenzen an Hamburg?",
    text_en: "Which federal states border Hamburg?",
    options: [
      { de: "Schleswig-Holstein und Niedersachsen", en: "Schleswig-Holstein and Lower Saxony" },
      { de: "Niedersachsen und Bremen", en: "Lower Saxony and Bremen" },
      { de: "Mecklenburg-Vorpommern und Brandenburg", en: "Mecklenburg-Western Pomerania and Brandenburg" },
      { de: "Nordrhein-Westfalen und Hessen", en: "North Rhine-Westphalia and Hesse" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Hamburg",
    explanation_de: "Hamburg grenzt an Schleswig-Holstein im Norden und Niedersachsen im Süden.",
    explanation_en: "Hamburg borders Schleswig-Holstein to the north and Lower Saxony to the south."
  },
  {
    id: "357",
    text_de: "Wie heißt das Landesparlament von Hamburg?",
    text_en: "What is the name of the state parliament of Hamburg?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Hamburg",
    explanation_de: "Hamburgs Landesparlament heißt Bürgerschaft - wie in Bremen. Die anderen Flächenländer haben einen Landtag.",
    explanation_en: "Hamburg's state parliament is called Bürgerschaft - as in Bremen. Other territorial states have a Landtag."
  },
  {
    id: "358",
    text_de: "Was ist ein bekanntes Wahrzeichen von Hamburg?",
    text_en: "What is a famous landmark of Hamburg?",
    options: [
      { de: "Brandenburger Tor", en: "Brandenburg Gate" },
      { de: "Elbphilharmonie", en: "Elbphilharmonie" },
      { de: "Kölner Dom", en: "Cologne Cathedral" },
      { de: "Frauenkirche", en: "Frauenkirche" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Hamburg",
    explanation_de: "Die Elbphilharmonie ist ein 2017 eröffnetes Konzerthaus auf einem alten Speicher. Es ist Hamburgs neues Wahrzeichen.",
    explanation_en: "The Elbphilharmonie is a concert hall opened in 2017 on an old warehouse. It is Hamburg's new landmark."
  },
  {
    id: "359",
    text_de: "Welcher Fluss fließt durch Hamburg?",
    text_en: "Which river flows through Hamburg?",
    options: [
      { de: "die Elbe", en: "the Elbe" },
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Weser", en: "the Weser" },
      { de: "die Donau", en: "the Danube" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Hamburg",
    explanation_de: "Die Elbe fließt durch Hamburg und mündet etwa 100 km nordwestlich in die Nordsee.",
    explanation_en: "The Elbe flows through Hamburg and empties into the North Sea about 100 km to the northwest."
  },
  {
    id: "360",
    text_de: "Was ist die Speicherstadt in Hamburg?",
    text_en: "What is the Speicherstadt in Hamburg?",
    options: [
      { de: "ein Stadtteil mit Lagerhäusern", en: "a district with warehouses" },
      { de: "ein Bahnhof", en: "a train station" },
      { de: "ein Flughafen", en: "an airport" },
      { de: "ein Stadion", en: "a stadium" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Hamburg",
    explanation_de: "Die Speicherstadt ist das größte zusammenhängende Lagerhausviertel der Welt und UNESCO-Welterbe.",
    explanation_en: "The Speicherstadt is the world's largest contiguous warehouse district and a UNESCO World Heritage Site."
  }
];

// Hessen
const hessenQuestions: Question[] = [
  {
    id: "361",
    text_de: "Welches Wappen gehört zum Bundesland Hessen?",
    text_en: "Which coat of arms belongs to the federal state of Hesse?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/hessen.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/bayern.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Hessen",
    hasImages: true,
    explanation_de: "Das hessische Wappen zeigt einen rot-weiß gestreiften Löwen auf blauem Grund.",
    explanation_en: "Hesse's coat of arms shows a red and white striped lion on a blue background."
  },
  {
    id: "362",
    text_de: "Welches ist ein Landkreis in Hessen?",
    text_en: "Which is a district in Hesse?",
    options: [
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Wetteraukreis", en: "Wetteraukreis" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Hessen",
    explanation_de: "Der Wetteraukreis liegt nördlich von Frankfurt. Die anderen Kreise gehören zu Baden-Württemberg, NRW und Bayern.",
    explanation_en: "Wetteraukreis is north of Frankfurt. The other districts belong to Baden-Württemberg, NRW, and Bavaria."
  },
  {
    id: "363",
    text_de: "Wofür ist Hessen bekannt?",
    text_en: "What is Hesse famous for?",
    options: [
      { de: "Finanzwesen und Apfelwein", en: "Finance and apple wine" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Schiffbau", en: "Shipbuilding" },
      { de: "Weinanbau an der Mosel", en: "Winemaking at the Moselle" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Hessen",
    explanation_de: "Frankfurt ist Deutschlands Finanzmetropole mit EZB und Börse. Apfelwein ('Ebbelwoi') ist typisch hessisch.",
    explanation_en: "Frankfurt is Germany's financial center with ECB and stock exchange. Apple wine ('Ebbelwoi') is typically Hessian."
  },
  {
    id: "364",
    text_de: "Welches Bundesland hat die Landeshauptstadt Wiesbaden?",
    text_en: "Which federal state has Wiesbaden as its capital?",
    options: [
      { de: "Rheinland-Pfalz", en: "Rhineland-Palatinate" },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia" },
      { de: "Hessen", en: "Hesse" },
      { de: "Baden-Württemberg", en: "Baden-Württemberg" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Hessen",
    explanation_de: "Wiesbaden ist die Landeshauptstadt von Hessen, nicht Frankfurt. Frankfurt ist aber die größte Stadt des Landes.",
    explanation_en: "Wiesbaden is the capital of Hesse, not Frankfurt. However, Frankfurt is the state's largest city."
  },
  {
    id: "365",
    text_de: "Wie heißt der/die Ministerpräsident/in von Hessen?",
    text_en: "What is the name of the Minister-President of Hesse?",
    options: [
      { de: "Boris Rhein", en: "Boris Rhein" },
      { de: "Markus Söder", en: "Markus Söder" },
      { de: "Winfried Kretschmann", en: "Winfried Kretschmann" },
      { de: "Armin Laschet", en: "Armin Laschet" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Hessen",
    explanation_de: "Boris Rhein (CDU) ist seit 2022 Ministerpräsident von Hessen.",
    explanation_en: "Boris Rhein (CDU) has been Minister-President of Hesse since 2022."
  },
  {
    id: "366",
    text_de: "Welche große Stadt liegt in Hessen?",
    text_en: "Which major city is located in Hesse?",
    options: [
      { de: "München", en: "Munich" },
      { de: "Frankfurt am Main", en: "Frankfurt am Main" },
      { de: "Stuttgart", en: "Stuttgart" },
      { de: "Köln", en: "Cologne" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Hessen",
    explanation_de: "Frankfurt am Main liegt in Hessen und ist Deutschlands wichtigstes Finanzzentrum.",
    explanation_en: "Frankfurt am Main is in Hesse and is Germany's most important financial center."
  },
  {
    id: "367",
    text_de: "Wie heißt das Landesparlament von Hessen?",
    text_en: "What is the name of the state parliament of Hesse?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Hessen",
    explanation_de: "Das hessische Landesparlament heißt Landtag und sitzt in Wiesbaden.",
    explanation_en: "Hesse's state parliament is called Landtag and is located in Wiesbaden."
  },
  {
    id: "368",
    text_de: "Welche Stadt liegt nicht in Hessen?",
    text_en: "Which city is not in Hesse?",
    options: [
      { de: "Frankfurt", en: "Frankfurt" },
      { de: "Kassel", en: "Kassel" },
      { de: "Mainz", en: "Mainz" },
      { de: "Wiesbaden", en: "Wiesbaden" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Hessen",
    explanation_de: "Mainz ist die Landeshauptstadt von Rheinland-Pfalz, nicht Hessen. Wiesbaden liegt gegenüber am Rhein.",
    explanation_en: "Mainz is the capital of Rhineland-Palatinate, not Hesse. Wiesbaden is located opposite across the Rhine."
  },
  {
    id: "369",
    text_de: "Welcher Fluss fließt durch Hessen?",
    text_en: "Which river flows through Hesse?",
    options: [
      { de: "die Elbe", en: "the Elbe" },
      { de: "der Main", en: "the Main" },
      { de: "die Weser", en: "the Weser" },
      { de: "die Donau", en: "the Danube" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Hessen",
    explanation_de: "Der Main fließt durch Frankfurt und mündet bei Mainz in den Rhein.",
    explanation_en: "The Main flows through Frankfurt and empties into the Rhine near Mainz."
  },
  {
    id: "370",
    text_de: "Welches Gebirge liegt in Hessen?",
    text_en: "Which mountain range is in Hesse?",
    options: [
      { de: "die Alpen", en: "the Alps" },
      { de: "der Schwarzwald", en: "the Black Forest" },
      { de: "der Taunus", en: "the Taunus" },
      { de: "das Erzgebirge", en: "the Ore Mountains" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Hessen",
    explanation_de: "Der Taunus ist ein Mittelgebirge nördlich von Frankfurt, bekannt für Wandern und Kurorte wie Bad Homburg.",
    explanation_en: "The Taunus is a low mountain range north of Frankfurt, known for hiking and spa towns like Bad Homburg."
  }
];

// Mecklenburg-Vorpommern
const mecklenburgVorpommernQuestions: Question[] = [
  {
    id: "371",
    text_de: "Welches Wappen gehört zum Bundesland Mecklenburg-Vorpommern?",
    text_en: "Which coat of arms belongs to the federal state of Mecklenburg-Western Pomerania?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/mecklenburg-vorpommern.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    hasImages: true,
    explanation_de: "Das Wappen zeigt einen Stierkopf (Mecklenburg) und einen Greifen (Vorpommern).",
    explanation_en: "The coat of arms shows a bull's head (Mecklenburg) and a griffin (Western Pomerania)."
  },
  {
    id: "372",
    text_de: "Welches ist ein Landkreis in Mecklenburg-Vorpommern?",
    text_en: "Which is a district in Mecklenburg-Western Pomerania?",
    options: [
      { de: "Vorpommern-Rügen", en: "Vorpommern-Rügen" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    explanation_de: "Vorpommern-Rügen umfasst die Insel Rügen und Teile Vorpommerns. Es ist einer von sechs Landkreisen.",
    explanation_en: "Vorpommern-Rügen includes the island of Rügen and parts of Western Pomerania. It is one of six districts."
  },
  {
    id: "373",
    text_de: "Wofür ist Mecklenburg-Vorpommern bekannt?",
    text_en: "What is Mecklenburg-Western Pomerania famous for?",
    options: [
      { de: "Ostseeküste und Seen", en: "Baltic coast and lakes" },
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Finanzwesen", en: "Finance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    explanation_de: "Mecklenburg-Vorpommern ist ein beliebtes Urlaubsziel mit Ostseebädern wie Warnemünde und der Mecklenburgischen Seenplatte.",
    explanation_en: "Mecklenburg-Western Pomerania is a popular vacation destination with Baltic resorts like Warnemünde and the Mecklenburg Lake District."
  },
  {
    id: "374",
    text_de: "Welches Bundesland hat die Landeshauptstadt Schwerin?",
    text_en: "Which federal state has Schwerin as its capital?",
    options: [
      { de: "Brandenburg", en: "Brandenburg" },
      { de: "Mecklenburg-Vorpommern", en: "Mecklenburg-Western Pomerania" },
      { de: "Sachsen-Anhalt", en: "Saxony-Anhalt" },
      { de: "Niedersachsen", en: "Lower Saxony" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    explanation_de: "Schwerin ist die Landeshauptstadt, obwohl Rostock die größte Stadt des Bundeslandes ist.",
    explanation_en: "Schwerin is the capital, although Rostock is the largest city in the state."
  },
  {
    id: "375",
    text_de: "Wie heißt die/der Ministerpräsidentin/Ministerpräsident von Mecklenburg-Vorpommern?",
    text_en: "What is the name of the Minister-President of Mecklenburg-Western Pomerania?",
    options: [
      { de: "Manuela Schwesig", en: "Manuela Schwesig" },
      { de: "Dietmar Woidke", en: "Dietmar Woidke" },
      { de: "Reiner Haseloff", en: "Reiner Haseloff" },
      { de: "Michael Kretschmer", en: "Michael Kretschmer" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    explanation_de: "Manuela Schwesig (SPD) ist seit 2017 Ministerpräsidentin von Mecklenburg-Vorpommern.",
    explanation_en: "Manuela Schwesig (SPD) has been Minister-President of Mecklenburg-Western Pomerania since 2017."
  },
  {
    id: "376",
    text_de: "An welches Meer grenzt Mecklenburg-Vorpommern?",
    text_en: "Which sea borders Mecklenburg-Western Pomerania?",
    options: [
      { de: "die Nordsee", en: "the North Sea" },
      { de: "die Ostsee", en: "the Baltic Sea" },
      { de: "das Mittelmeer", en: "the Mediterranean Sea" },
      { de: "der Atlantik", en: "the Atlantic Ocean" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    explanation_de: "Mecklenburg-Vorpommern grenzt an die Ostsee. Die Nordsee liegt an der Westküste Deutschlands.",
    explanation_en: "Mecklenburg-Western Pomerania borders the Baltic Sea. The North Sea is on the west coast of Germany."
  },
  {
    id: "377",
    text_de: "Wie heißt das Landesparlament von Mecklenburg-Vorpommern?",
    text_en: "What is the name of the state parliament of Mecklenburg-Western Pomerania?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt im Schweriner Schloss.",
    explanation_en: "The state parliament is called Landtag and is located in Schwerin Castle."
  },
  {
    id: "378",
    text_de: "Welche Insel gehört zu Mecklenburg-Vorpommern?",
    text_en: "Which island belongs to Mecklenburg-Western Pomerania?",
    options: [
      { de: "Sylt", en: "Sylt" },
      { de: "Rügen", en: "Rügen" },
      { de: "Helgoland", en: "Helgoland" },
      { de: "Fehmarn", en: "Fehmarn" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    explanation_de: "Rügen ist Deutschlands größte Insel. Sylt und Fehmarn gehören zu Schleswig-Holstein, Helgoland ebenfalls.",
    explanation_en: "Rügen is Germany's largest island. Sylt and Fehmarn belong to Schleswig-Holstein, as does Helgoland."
  },
  {
    id: "379",
    text_de: "Welche Stadt liegt nicht in Mecklenburg-Vorpommern?",
    text_en: "Which city is not in Mecklenburg-Western Pomerania?",
    options: [
      { de: "Rostock", en: "Rostock" },
      { de: "Schwerin", en: "Schwerin" },
      { de: "Lübeck", en: "Lübeck" },
      { de: "Stralsund", en: "Stralsund" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    explanation_de: "Lübeck liegt in Schleswig-Holstein. Rostock, Schwerin und Stralsund sind in Mecklenburg-Vorpommern.",
    explanation_en: "Lübeck is in Schleswig-Holstein. Rostock, Schwerin, and Stralsund are in Mecklenburg-Western Pomerania."
  },
  {
    id: "380",
    text_de: "Welches Nachbarland hat Mecklenburg-Vorpommern?",
    text_en: "Which neighboring country does Mecklenburg-Western Pomerania have?",
    options: [
      { de: "Dänemark", en: "Denmark" },
      { de: "Polen", en: "Poland" },
      { de: "Frankreich", en: "France" },
      { de: "Österreich", en: "Austria" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Mecklenburg-Vorpommern",
    explanation_de: "Mecklenburg-Vorpommern grenzt im Osten an Polen. Die Grenze verläuft entlang der Oder.",
    explanation_en: "Mecklenburg-Western Pomerania borders Poland to the east. The border runs along the Oder."
  }
];

// Niedersachsen
const niedersachsenQuestions: Question[] = [
  {
    id: "381",
    text_de: "Welches Wappen gehört zum Bundesland Niedersachsen?",
    text_en: "Which coat of arms belongs to the federal state of Lower Saxony?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/niedersachsen.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Niedersachsen",
    hasImages: true,
    explanation_de: "Das nidersächsische Wappen zeigt ein weißes Sachsenross auf rotem Grund.",
    explanation_en: "Lower Saxony's coat of arms shows a white Saxon steed on a red background."
  },
  {
    id: "382",
    text_de: "Welches ist ein Landkreis in Niedersachsen?",
    text_en: "Which is a district in Lower Saxony?",
    options: [
      { de: "Osnabrück", en: "Osnabrück" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Niedersachsen",
    explanation_de: "Osnabrück ist eine kreisfreie Stadt und ein Landkreis in Niedersachsen, bekannt für den Westfälischen Frieden.",
    explanation_en: "Osnabrück is both a city and a district in Lower Saxony, known for the Peace of Westphalia."
  },
  {
    id: "383",
    text_de: "Wofür ist Niedersachsen bekannt?",
    text_en: "What is Lower Saxony famous for?",
    options: [
      { de: "Landwirtschaft und Automobilindustrie", en: "Agriculture and car industry" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Finanzwesen", en: "Finance" },
      { de: "Weinanbau", en: "Winemaking" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Niedersachsen",
    explanation_de: "Niedersachsen ist Agrarland Nr. 1 in Deutschland. VW hat in Wolfsburg seinen Hauptsitz.",
    explanation_en: "Lower Saxony is Germany's #1 agricultural state. VW has its headquarters in Wolfsburg."
  },
  {
    id: "384",
    text_de: "Welches Bundesland hat die Landeshauptstadt Hannover?",
    text_en: "Which federal state has Hanover as its capital?",
    options: [
      { de: "Bremen", en: "Bremen" },
      { de: "Schleswig-Holstein", en: "Schleswig-Holstein" },
      { de: "Niedersachsen", en: "Lower Saxony" },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Niedersachsen",
    explanation_de: "Hannover ist die Landeshauptstadt von Niedersachsen und bekannt für die Hannover Messe.",
    explanation_en: "Hanover is the capital of Lower Saxony and is known for the Hannover Messe trade fair."
  },
  {
    id: "385",
    text_de: "Wie heißt der/die Ministerpräsident/in von Niedersachsen?",
    text_en: "What is the name of the Minister-President of Lower Saxony?",
    options: [
      { de: "Stephan Weil", en: "Stephan Weil" },
      { de: "Andreas Bovenschulte", en: "Andreas Bovenschulte" },
      { de: "Peter Tschentscher", en: "Peter Tschentscher" },
      { de: "Daniel Günther", en: "Daniel Günther" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Niedersachsen",
    explanation_de: "Stephan Weil (SPD) ist seit 2013 Ministerpräsident von Niedersachsen.",
    explanation_en: "Stephan Weil (SPD) has been Minister-President of Lower Saxony since 2013."
  },
  {
    id: "386",
    text_de: "An welches Meer grenzt Niedersachsen?",
    text_en: "Which sea borders Lower Saxony?",
    options: [
      { de: "die Ostsee", en: "the Baltic Sea" },
      { de: "die Nordsee", en: "the North Sea" },
      { de: "das Mittelmeer", en: "the Mediterranean Sea" },
      { de: "der Atlantik", en: "the Atlantic Ocean" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Niedersachsen",
    explanation_de: "Niedersachsen grenzt an die Nordsee mit den Ostfriesischen Inseln und dem Wattenmeer.",
    explanation_en: "Lower Saxony borders the North Sea with the East Frisian Islands and Wadden Sea."
  },
  {
    id: "387",
    text_de: "Wie heißt das Landesparlament von Niedersachsen?",
    text_en: "What is the name of the state parliament of Lower Saxony?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Niedersachsen",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt im Leineschloss in Hannover.",
    explanation_en: "The state parliament is called Landtag and is located in Leineschloss in Hanover."
  },
  {
    id: "388",
    text_de: "Welche Stadt liegt nicht in Niedersachsen?",
    text_en: "Which city is not in Lower Saxony?",
    options: [
      { de: "Hannover", en: "Hanover" },
      { de: "Braunschweig", en: "Braunschweig" },
      { de: "Bremen", en: "Bremen" },
      { de: "Osnabrück", en: "Osnabrück" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Niedersachsen",
    explanation_de: "Bremen ist ein eigener Stadtstaat. Hannover, Braunschweig und Osnabrück liegen in Niedersachsen.",
    explanation_en: "Bremen is a separate city-state. Hanover, Braunschweig, and Osnabrück are in Lower Saxony."
  },
  {
    id: "389",
    text_de: "Welcher Fluss fließt durch Niedersachsen?",
    text_en: "Which river flows through Lower Saxony?",
    options: [
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Weser", en: "the Weser" },
      { de: "die Donau", en: "the Danube" },
      { de: "der Main", en: "the Main" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Niedersachsen",
    explanation_de: "Die Weser fließt durch Niedersachsen und mündet bei Bremerhaven in die Nordsee.",
    explanation_en: "The Weser flows through Lower Saxony and empties into the North Sea near Bremerhaven."
  },
  {
    id: "390",
    text_de: "Welches ist das flächenmäßig zweitgrößte Bundesland?",
    text_en: "Which is the second largest federal state by area?",
    options: [
      { de: "Bayern", en: "Bavaria" },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia" },
      { de: "Niedersachsen", en: "Lower Saxony" },
      { de: "Baden-Württemberg", en: "Baden-Württemberg" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Niedersachsen",
    explanation_de: "Niedersachsen ist mit ca. 47.600 km² das zweitgrößte Bundesland nach Bayern.",
    explanation_en: "Lower Saxony is the second largest federal state at about 47,600 km², after Bavaria."
  }
];

// Nordrhein-Westfalen
const nordrheinWestfalenQuestions: Question[] = [
  {
    id: "391",
    text_de: "Welches Wappen gehört zum Bundesland Nordrhein-Westfalen?",
    text_en: "Which coat of arms belongs to the federal state of North Rhine-Westphalia?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/nordrhein-westfalen.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    hasImages: true,
    explanation_de: "Das NRW-Wappen zeigt den Rhein (grüner Balken), Westfalen (weißes Ross) und Lippe (rote Rose).",
    explanation_en: "NRW's coat of arms shows the Rhine (green stripe), Westphalia (white steed), and Lippe (red rose)."
  },
  {
    id: "392",
    text_de: "Welches ist ein Landkreis in Nordrhein-Westfalen?",
    text_en: "Which is a district in North Rhine-Westphalia?",
    options: [
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" },
      { de: "Potsdam-Mittelmark", en: "Potsdam-Mittelmark" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    explanation_de: "Der Rhein-Sieg-Kreis liegt südlich von Bonn. Enzkreis (BW), Altötting (BY), Potsdam-Mittelmark (BB).",
    explanation_en: "Rhein-Sieg-Kreis is south of Bonn. Enzkreis (BW), Altötting (BY), Potsdam-Mittelmark (BB)."
  },
  {
    id: "393",
    text_de: "Wofür ist Nordrhein-Westfalen bekannt?",
    text_en: "What is North Rhine-Westphalia famous for?",
    options: [
      { de: "Industrie und Kultur", en: "Industry and culture" },
      { de: "Weinanbau", en: "Winemaking" },
      { de: "Ostseeküste", en: "Baltic coast" },
      { de: "Alpen", en: "Alps" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    explanation_de: "NRW ist ein Industriezentrum (Ruhrgebiet) mit reicher Kultur. Köln hat den berühmten Dom und Karneval.",
    explanation_en: "NRW is an industrial center (Ruhr area) with rich culture. Cologne has the famous cathedral and carnival."
  },
  {
    id: "394",
    text_de: "Welches Bundesland hat die Landeshauptstadt Düsseldorf?",
    text_en: "Which federal state has Düsseldorf as its capital?",
    options: [
      { de: "Hessen", en: "Hesse" },
      { de: "Rheinland-Pfalz", en: "Rhineland-Palatinate" },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia" },
      { de: "Niedersachsen", en: "Lower Saxony" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    explanation_de: "Düsseldorf ist die Landeshauptstadt von NRW, obwohl Köln die größte Stadt ist.",
    explanation_en: "Düsseldorf is NRW's capital, although Cologne is the largest city."
  },
  {
    id: "395",
    text_de: "Wie heißt der/die Ministerpräsident/in von Nordrhein-Westfalen?",
    text_en: "What is the name of the Minister-President of North Rhine-Westphalia?",
    options: [
      { de: "Hendrik Wüst", en: "Hendrik Wüst" },
      { de: "Armin Laschet", en: "Armin Laschet" },
      { de: "Markus Söder", en: "Markus Söder" },
      { de: "Boris Rhein", en: "Boris Rhein" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    explanation_de: "Hendrik Wüst (CDU) ist seit 2021 Ministerpräsident von Nordrhein-Westfalen.",
    explanation_en: "Hendrik Wüst (CDU) has been Minister-President of North Rhine-Westphalia since 2021."
  },
  {
    id: "396",
    text_de: "Welche Nachbarländer hat Nordrhein-Westfalen?",
    text_en: "Which neighboring countries does North Rhine-Westphalia have?",
    options: [
      { de: "Frankreich und Schweiz", en: "France and Switzerland" },
      { de: "Belgien und Niederlande", en: "Belgium and Netherlands" },
      { de: "Polen und Tschechien", en: "Poland and Czech Republic" },
      { de: "Österreich und Schweiz", en: "Austria and Switzerland" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    explanation_de: "NRW grenzt im Westen an Belgien und die Niederlande. Es ist das einzige Bundesland mit zwei Nachbarländern.",
    explanation_en: "NRW borders Belgium and the Netherlands to the west. It is the only state with two neighboring countries."
  },
  {
    id: "397",
    text_de: "Wie heißt das Landesparlament von Nordrhein-Westfalen?",
    text_en: "What is the name of the state parliament of North Rhine-Westphalia?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt in Düsseldorf.",
    explanation_en: "The state parliament is called Landtag and is located in Düsseldorf."
  },
  {
    id: "398",
    text_de: "Welche Stadt liegt nicht in Nordrhein-Westfalen?",
    text_en: "Which city is not in North Rhine-Westphalia?",
    options: [
      { de: "Köln", en: "Cologne" },
      { de: "Dortmund", en: "Dortmund" },
      { de: "Frankfurt", en: "Frankfurt" },
      { de: "Düsseldorf", en: "Düsseldorf" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    explanation_de: "Frankfurt liegt in Hessen. Köln, Dortmund und Düsseldorf sind Städte in NRW.",
    explanation_en: "Frankfurt is in Hesse. Cologne, Dortmund, and Düsseldorf are cities in NRW."
  },
  {
    id: "399",
    text_de: "Welcher Fluss fließt durch Nordrhein-Westfalen?",
    text_en: "Which river flows through North Rhine-Westphalia?",
    options: [
      { de: "die Elbe", en: "the Elbe" },
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Donau", en: "the Danube" },
      { de: "die Oder", en: "the Oder" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    explanation_de: "Der Rhein fließt durch NRW (Köln, Düsseldorf, Bonn). Er ist Deutschlands längster Fluss.",
    explanation_en: "The Rhine flows through NRW (Cologne, Düsseldorf, Bonn). It is Germany's longest river."
  },
  {
    id: "400",
    text_de: "Welches ist das bevölkerungsreichste Bundesland?",
    text_en: "Which is the most populous federal state?",
    options: [
      { de: "Bayern", en: "Bavaria" },
      { de: "Baden-Württemberg", en: "Baden-Württemberg" },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia" },
      { de: "Niedersachsen", en: "Lower Saxony" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Nordrhein-Westfalen",
    explanation_de: "NRW hat ca. 18 Millionen Einwohner - mehr als jedes andere Bundesland.",
    explanation_en: "NRW has about 18 million inhabitants - more than any other federal state."
  }
];

// Rheinland-Pfalz
const rheinlandPfalzQuestions: Question[] = [
  {
    id: "401",
    text_de: "Welches Wappen gehört zum Bundesland Rheinland-Pfalz?",
    text_en: "Which coat of arms belongs to the federal state of Rhineland-Palatinate?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/rheinland-pfalz.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    hasImages: true,
    explanation_de: "Das Wappen zeigt das Trierer Kreuz, den Mainzer Rad und den Pfälzer Löwen.",
    explanation_en: "The coat of arms shows the Trier cross, the Mainz wheel, and the Palatinate lion."
  },
  {
    id: "402",
    text_de: "Welches ist ein Landkreis in Rheinland-Pfalz?",
    text_en: "Which is a district in Rhineland-Palatinate?",
    options: [
      { de: "Ahrweiler", en: "Ahrweiler" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    explanation_de: "Der Landkreis Ahrweiler liegt an der Ahr und ist bekannt für seinen Rotwein.",
    explanation_en: "Ahrweiler district is on the Ahr river and is known for its red wine."
  },
  {
    id: "403",
    text_de: "Wofür ist Rheinland-Pfalz bekannt?",
    text_en: "What is Rhineland-Palatinate famous for?",
    options: [
      { de: "Weinanbau", en: "Winemaking" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Finanzwesen", en: "Finance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    explanation_de: "Rheinland-Pfalz ist das größte Weinanbaugebiet Deutschlands (Mosel, Rheinhessen, Pfalz).",
    explanation_en: "Rhineland-Palatinate is Germany's largest wine-growing region (Moselle, Rheinhessen, Palatinate)."
  },
  {
    id: "404",
    text_de: "Welches Bundesland hat die Landeshauptstadt Mainz?",
    text_en: "Which federal state has Mainz as its capital?",
    options: [
      { de: "Hessen", en: "Hesse" },
      { de: "Rheinland-Pfalz", en: "Rhineland-Palatinate" },
      { de: "Saarland", en: "Saarland" },
      { de: "Baden-Württemberg", en: "Baden-Württemberg" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    explanation_de: "Mainz ist die Landeshauptstadt von Rheinland-Pfalz und bekannt für das ZDF und die Mainzer Fastnacht.",
    explanation_en: "Mainz is the capital of Rhineland-Palatinate and is known for ZDF and Mainz Carnival."
  },
  {
    id: "405",
    text_de: "Wie heißt der/die Ministerpräsident/in von Rheinland-Pfalz?",
    text_en: "What is the name of the Minister-President of Rhineland-Palatinate?",
    options: [
      { de: "Malu Dreyer", en: "Malu Dreyer" },
      { de: "Alexander Schweitzer", en: "Alexander Schweitzer" },
      { de: "Tobias Hans", en: "Tobias Hans" },
      { de: "Winfried Kretschmann", en: "Winfried Kretschmann" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    explanation_de: "Alexander Schweitzer (SPD) ist seit 2024 Ministerpräsident von Rheinland-Pfalz.",
    explanation_en: "Alexander Schweitzer (SPD) has been Minister-President of Rhineland-Palatinate since 2024."
  },
  {
    id: "406",
    text_de: "Welche Nachbarländer hat Rheinland-Pfalz?",
    text_en: "Which neighboring countries does Rhineland-Palatinate have?",
    options: [
      { de: "Frankreich, Belgien, Luxemburg", en: "France, Belgium, Luxembourg" },
      { de: "Schweiz und Österreich", en: "Switzerland and Austria" },
      { de: "Polen und Tschechien", en: "Poland and Czech Republic" },
      { de: "Dänemark", en: "Denmark" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    explanation_de: "Rheinland-Pfalz grenzt an Frankreich, Belgien und Luxemburg - insgesamt drei Länder.",
    explanation_en: "Rhineland-Palatinate borders France, Belgium, and Luxembourg - three countries in total."
  },
  {
    id: "407",
    text_de: "Wie heißt das Landesparlament von Rheinland-Pfalz?",
    text_en: "What is the name of the state parliament of Rhineland-Palatinate?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt in Mainz.",
    explanation_en: "The state parliament is called Landtag and is located in Mainz."
  },
  {
    id: "408",
    text_de: "Welche Stadt liegt nicht in Rheinland-Pfalz?",
    text_en: "Which city is not in Rhineland-Palatinate?",
    options: [
      { de: "Mainz", en: "Mainz" },
      { de: "Koblenz", en: "Koblenz" },
      { de: "Saarbrücken", en: "Saarbrücken" },
      { de: "Trier", en: "Trier" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    explanation_de: "Saarbrücken ist die Hauptstadt des Saarlands. Mainz, Koblenz und Trier liegen in Rheinland-Pfalz.",
    explanation_en: "Saarbrücken is the capital of Saarland. Mainz, Koblenz, and Trier are in Rhineland-Palatinate."
  },
  {
    id: "409",
    text_de: "Welcher Fluss fließt durch Rheinland-Pfalz?",
    text_en: "Which river flows through Rhineland-Palatinate?",
    options: [
      { de: "die Elbe", en: "the Elbe" },
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Donau", en: "the Danube" },
      { de: "die Oder", en: "the Oder" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    explanation_de: "Der Rhein bildet die östliche Grenze von Rheinland-Pfalz zu Hessen und Baden-Württemberg.",
    explanation_en: "The Rhine forms the eastern border of Rhineland-Palatinate to Hesse and Baden-Württemberg."
  },
  {
    id: "410",
    text_de: "Welches Gebirge liegt in Rheinland-Pfalz?",
    text_en: "Which mountain range is in Rhineland-Palatinate?",
    options: [
      { de: "die Alpen", en: "the Alps" },
      { de: "der Schwarzwald", en: "the Black Forest" },
      { de: "die Eifel", en: "the Eifel" },
      { de: "das Erzgebirge", en: "the Ore Mountains" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Rheinland-Pfalz",
    explanation_de: "Die Eifel ist ein Mittelgebirge mit Vulkanseen (Maare). Auch der Hunsrück und Westerwald liegen in Rheinland-Pfalz.",
    explanation_en: "The Eifel is a low mountain range with volcanic lakes (Maare). The Hunsrück and Westerwald are also in Rhineland-Palatinate."
  }
];

// Saarland
const saarlandQuestions: Question[] = [
  {
    id: "411",
    text_de: "Welches Wappen gehört zum Bundesland Saarland?",
    text_en: "Which coat of arms belongs to the federal state of Saarland?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/saarland.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Saarland",
    hasImages: true,
    explanation_de: "Das Saarland-Wappen zeigt Symbole der historischen Territorien: Saarlouis, Merzig, Pfalz und Nassau.",
    explanation_en: "Saarland's coat of arms shows symbols of historical territories: Saarlouis, Merzig, Palatinate, and Nassau."
  },
  {
    id: "412",
    text_de: "Welches ist ein Landkreis im Saarland?",
    text_en: "Which is a district in Saarland?",
    options: [
      { de: "Saarpfalz-Kreis", en: "Saarpfalz-Kreis" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Saarland",
    explanation_de: "Der Saarpfalz-Kreis liegt im Südosten des Saarlands und grenzt an Rheinland-Pfalz.",
    explanation_en: "Saarpfalz-Kreis is in the southeast of Saarland and borders Rhineland-Palatinate."
  },
  {
    id: "413",
    text_de: "Wofür ist das Saarland bekannt?",
    text_en: "What is Saarland famous for?",
    options: [
      { de: "Stahl- und Kohleindustrie", en: "Steel and coal industry" },
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Finanzwesen", en: "Finance" },
      { de: "Ostseeküste", en: "Baltic coast" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Saarland",
    explanation_de: "Das Saarland war früher ein Zentrum der Kohle- und Stahlindustrie. Heute wandelt es sich zur Dienstleistungsregion.",
    explanation_en: "Saarland was formerly a center of coal and steel. Today it is transforming into a service region."
  },
  {
    id: "414",
    text_de: "Welches Bundesland hat die Landeshauptstadt Saarbrücken?",
    text_en: "Which federal state has Saarbrücken as its capital?",
    options: [
      { de: "Rheinland-Pfalz", en: "Rhineland-Palatinate" },
      { de: "Saarland", en: "Saarland" },
      { de: "Hessen", en: "Hesse" },
      { de: "Baden-Württemberg", en: "Baden-Württemberg" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Saarland",
    explanation_de: "Saarbrücken ist die Landeshauptstadt des Saarlands und die größte Stadt des Bundeslandes.",
    explanation_en: "Saarbrücken is the capital of Saarland and the largest city in the state."
  },
  {
    id: "415",
    text_de: "Wie heißt die/der Ministerpräsidentin/Ministerpräsident des Saarlands?",
    text_en: "What is the name of the Minister-President of Saarland?",
    options: [
      { de: "Anke Rehlinger", en: "Anke Rehlinger" },
      { de: "Tobias Hans", en: "Tobias Hans" },
      { de: "Malu Dreyer", en: "Malu Dreyer" },
      { de: "Alexander Schweitzer", en: "Alexander Schweitzer" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Saarland",
    explanation_de: "Anke Rehlinger (SPD) ist seit 2022 Ministerpräsidentin des Saarlands.",
    explanation_en: "Anke Rehlinger (SPD) has been Minister-President of Saarland since 2022."
  },
  {
    id: "416",
    text_de: "Welches Nachbarland hat das Saarland?",
    text_en: "Which neighboring country does Saarland have?",
    options: [
      { de: "Belgien", en: "Belgium" },
      { de: "Frankreich", en: "France" },
      { de: "Schweiz", en: "Switzerland" },
      { de: "Österreich", en: "Austria" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Saarland",
    explanation_de: "Das Saarland grenzt an Frankreich (und Luxemburg). Die französische Kultur hat das Land stark geprägt.",
    explanation_en: "Saarland borders France (and Luxembourg). French culture has strongly influenced the state."
  },
  {
    id: "417",
    text_de: "Wie heißt das Landesparlament des Saarlands?",
    text_en: "What is the name of the state parliament of Saarland?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Saarland",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt in Saarbrücken.",
    explanation_en: "The state parliament is called Landtag and is located in Saarbrücken."
  },
  {
    id: "418",
    text_de: "Welche Stadt liegt nicht im Saarland?",
    text_en: "Which city is not in Saarland?",
    options: [
      { de: "Saarbrücken", en: "Saarbrücken" },
      { de: "Saarlouis", en: "Saarlouis" },
      { de: "Trier", en: "Trier" },
      { de: "Neunkirchen", en: "Neunkirchen" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Saarland",
    explanation_de: "Trier liegt in Rheinland-Pfalz. Saarbrücken, Saarlouis und Neunkirchen sind saarländische Städte.",
    explanation_en: "Trier is in Rhineland-Palatinate. Saarbrücken, Saarlouis, and Neunkirchen are Saarland cities."
  },
  {
    id: "419",
    text_de: "Welcher Fluss fließt durch das Saarland?",
    text_en: "Which river flows through Saarland?",
    options: [
      { de: "die Elbe", en: "the Elbe" },
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Saar", en: "the Saar" },
      { de: "die Donau", en: "the Danube" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Saarland",
    explanation_de: "Die Saar fließt durch das Saarland und mündet in die Mosel. Sie gab dem Bundesland seinen Namen.",
    explanation_en: "The Saar flows through Saarland and empties into the Moselle. It gave the state its name."
  },
  {
    id: "420",
    text_de: "Das Saarland ist nach welchem Bundesland das kleinste Flächenland?",
    text_en: "After which federal state is Saarland the smallest territorial state?",
    options: [
      { de: "Berlin", en: "Berlin" },
      { de: "Hamburg", en: "Hamburg" },
      { de: "Bremen", en: "Bremen" },
      { de: "Es ist das kleinste Flächenland", en: "It is the smallest territorial state" }
    ],
    correctIndex: 3,
    category: "society",
    isStateSpecific: true,
    state: "Saarland",
    explanation_de: "Mit ca. 2.570 km² ist das Saarland das kleinste Flächenland (die Stadtstaaten sind kleiner, aber keine Flächenländer).",
    explanation_en: "At about 2,570 km², Saarland is the smallest territorial state (city-states are smaller but not territorial states)."
  }
];

// Sachsen
const sachsenQuestions: Question[] = [
  {
    id: "421",
    text_de: "Welches Wappen gehört zum Bundesland Sachsen?",
    text_en: "Which coat of arms belongs to the federal state of Saxony?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/sachsen.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen",
    hasImages: true,
    explanation_de: "Das sächsische Wappen zeigt den schwarz-goldenen Balkenschild mit dem grünen Rautenkranz.",
    explanation_en: "Saxony's coat of arms shows the black-gold bar shield with the green wreath of rue."
  },
  {
    id: "422",
    text_de: "Welches ist ein Landkreis in Sachsen?",
    text_en: "Which is a district in Saxony?",
    options: [
      { de: "Erzgebirgskreis", en: "Erzgebirgskreis" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen",
    explanation_de: "Der Erzgebirgskreis liegt an der tschechischen Grenze und ist nach dem Erzgebirge benannt.",
    explanation_en: "Erzgebirgskreis is on the Czech border and is named after the Ore Mountains."
  },
  {
    id: "423",
    text_de: "Wofür ist Sachsen bekannt?",
    text_en: "What is Saxony famous for?",
    options: [
      { de: "Kultur, Industrie und Porzellan", en: "Culture, industry and porcelain" },
      { de: "Ostseeküste", en: "Baltic coast" },
      { de: "Weinanbau", en: "Winemaking" },
      { de: "Finanzwesen", en: "Finance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen",
    explanation_de: "Sachsen ist bekannt für Meißner Porzellan, die Semperoper in Dresden und die Messe Leipzig.",
    explanation_en: "Saxony is known for Meissen porcelain, the Semperoper in Dresden, and the Leipzig Trade Fair."
  },
  {
    id: "424",
    text_de: "Welches Bundesland hat die Landeshauptstadt Dresden?",
    text_en: "Which federal state has Dresden as its capital?",
    options: [
      { de: "Sachsen-Anhalt", en: "Saxony-Anhalt" },
      { de: "Thüringen", en: "Thuringia" },
      { de: "Sachsen", en: "Saxony" },
      { de: "Brandenburg", en: "Brandenburg" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen",
    explanation_de: "Dresden ist die Landeshauptstadt von Sachsen, bekannt als 'Elbflorenz' wegen seiner Barockarchitektur.",
    explanation_en: "Dresden is the capital of Saxony, known as 'Florence on the Elbe' for its Baroque architecture."
  },
  {
    id: "425",
    text_de: "Wie heißt der/die Ministerpräsident/in von Sachsen?",
    text_en: "What is the name of the Minister-President of Saxony?",
    options: [
      { de: "Michael Kretschmer", en: "Michael Kretschmer" },
      { de: "Bodo Ramelow", en: "Bodo Ramelow" },
      { de: "Reiner Haseloff", en: "Reiner Haseloff" },
      { de: "Dietmar Woidke", en: "Dietmar Woidke" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen",
    explanation_de: "Michael Kretschmer (CDU) ist seit 2017 Ministerpräsident von Sachsen.",
    explanation_en: "Michael Kretschmer (CDU) has been Minister-President of Saxony since 2017."
  },
  {
    id: "426",
    text_de: "Welche Nachbarländer hat Sachsen?",
    text_en: "Which neighboring countries does Saxony have?",
    options: [
      { de: "Frankreich und Belgien", en: "France and Belgium" },
      { de: "Polen und Tschechien", en: "Poland and Czech Republic" },
      { de: "Österreich und Schweiz", en: "Austria and Switzerland" },
      { de: "Dänemark", en: "Denmark" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen",
    explanation_de: "Sachsen grenzt im Osten an Polen und im Süden an Tschechien.",
    explanation_en: "Saxony borders Poland to the east and the Czech Republic to the south."
  },
  {
    id: "427",
    text_de: "Wie heißt das Landesparlament von Sachsen?",
    text_en: "What is the name of the state parliament of Saxony?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt in Dresden.",
    explanation_en: "The state parliament is called Landtag and is located in Dresden."
  },
  {
    id: "428",
    text_de: "Welche Stadt liegt nicht in Sachsen?",
    text_en: "Which city is not in Saxony?",
    options: [
      { de: "Dresden", en: "Dresden" },
      { de: "Leipzig", en: "Leipzig" },
      { de: "Erfurt", en: "Erfurt" },
      { de: "Chemnitz", en: "Chemnitz" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen",
    explanation_de: "Erfurt ist die Landeshauptstadt von Thüringen. Dresden, Leipzig und Chemnitz liegen in Sachsen.",
    explanation_en: "Erfurt is the capital of Thuringia. Dresden, Leipzig, and Chemnitz are in Saxony."
  },
  {
    id: "429",
    text_de: "Welcher Fluss fließt durch Sachsen?",
    text_en: "Which river flows through Saxony?",
    options: [
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Elbe", en: "the Elbe" },
      { de: "die Weser", en: "the Weser" },
      { de: "die Donau", en: "the Danube" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen",
    explanation_de: "Die Elbe fließt durch Sachsen (Dresden) und mündet bei Hamburg in die Nordsee.",
    explanation_en: "The Elbe flows through Saxony (Dresden) and empties into the North Sea near Hamburg."
  },
  {
    id: "430",
    text_de: "Welches Gebirge liegt in Sachsen?",
    text_en: "Which mountain range is in Saxony?",
    options: [
      { de: "die Alpen", en: "the Alps" },
      { de: "der Schwarzwald", en: "the Black Forest" },
      { de: "das Erzgebirge", en: "the Ore Mountains" },
      { de: "der Taunus", en: "the Taunus" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen",
    explanation_de: "Das Erzgebirge liegt an der Grenze zu Tschechien und ist UNESCO-Welterbe (Bergbaugebiet).",
    explanation_en: "The Ore Mountains are on the Czech border and are a UNESCO World Heritage Site (mining region)."
  }
];

// Sachsen-Anhalt
const sachsenAnhaltQuestions: Question[] = [
  {
    id: "431",
    text_de: "Welches Wappen gehört zum Bundesland Sachsen-Anhalt?",
    text_en: "Which coat of arms belongs to the federal state of Saxony-Anhalt?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/sachsen-anhalt.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    hasImages: true,
    explanation_de: "Das Wappen zeigt den sächsischen Säulenbalken und den Anhaltischen Bär.",
    explanation_en: "The coat of arms shows the Saxon bar and the Anhalter bear."
  },
  {
    id: "432",
    text_de: "Welches ist ein Landkreis in Sachsen-Anhalt?",
    text_en: "Which is a district in Saxony-Anhalt?",
    options: [
      { de: "Harz", en: "Harz" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    explanation_de: "Der Landkreis Harz umfasst Teile des Harzes und Städte wie Wernigerode und Quedlinburg.",
    explanation_en: "The Harz district includes parts of the Harz Mountains and cities like Wernigerode and Quedlinburg."
  },
  {
    id: "433",
    text_de: "Wofür ist Sachsen-Anhalt bekannt?",
    text_en: "What is Saxony-Anhalt famous for?",
    options: [
      { de: "Geschichte und Romanik", en: "History and Romanesque architecture" },
      { de: "Ostseeküste", en: "Baltic coast" },
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Finanzwesen", en: "Finance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    explanation_de: "Sachsen-Anhalt hat die größte Dichte an romanischen Bauwerken ('Straße der Romanik').",
    explanation_en: "Saxony-Anhalt has the highest density of Romanesque buildings ('Romanesque Road')."
  },
  {
    id: "434",
    text_de: "Welches Bundesland hat die Landeshauptstadt Magdeburg?",
    text_en: "Which federal state has Magdeburg as its capital?",
    options: [
      { de: "Sachsen", en: "Saxony" },
      { de: "Thüringen", en: "Thuringia" },
      { de: "Sachsen-Anhalt", en: "Saxony-Anhalt" },
      { de: "Brandenburg", en: "Brandenburg" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    explanation_de: "Magdeburg ist die Landeshauptstadt von Sachsen-Anhalt. Halle ist die größte Stadt.",
    explanation_en: "Magdeburg is the capital of Saxony-Anhalt. Halle is the largest city."
  },
  {
    id: "435",
    text_de: "Wie heißt der/die Ministerpräsident/in von Sachsen-Anhalt?",
    text_en: "What is the name of the Minister-President of Saxony-Anhalt?",
    options: [
      { de: "Reiner Haseloff", en: "Reiner Haseloff" },
      { de: "Michael Kretschmer", en: "Michael Kretschmer" },
      { de: "Bodo Ramelow", en: "Bodo Ramelow" },
      { de: "Dietmar Woidke", en: "Dietmar Woidke" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    explanation_de: "Reiner Haseloff (CDU) ist seit 2011 Ministerpräsident von Sachsen-Anhalt.",
    explanation_en: "Reiner Haseloff (CDU) has been Minister-President of Saxony-Anhalt since 2011."
  },
  {
    id: "436",
    text_de: "Welche historische Person wurde in Sachsen-Anhalt geboren?",
    text_en: "Which historical person was born in Saxony-Anhalt?",
    options: [
      { de: "Johann Wolfgang von Goethe", en: "Johann Wolfgang von Goethe" },
      { de: "Martin Luther", en: "Martin Luther" },
      { de: "Ludwig van Beethoven", en: "Ludwig van Beethoven" },
      { de: "Albert Einstein", en: "Albert Einstein" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    explanation_de: "Martin Luther wurde 1483 in Eisleben (Sachsen-Anhalt) geboren und starb dort auch 1546.",
    explanation_en: "Martin Luther was born in Eisleben (Saxony-Anhalt) in 1483 and also died there in 1546."
  },
  {
    id: "437",
    text_de: "Wie heißt das Landesparlament von Sachsen-Anhalt?",
    text_en: "What is the name of the state parliament of Saxony-Anhalt?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt in Magdeburg.",
    explanation_en: "The state parliament is called Landtag and is located in Magdeburg."
  },
  {
    id: "438",
    text_de: "Welche Stadt liegt nicht in Sachsen-Anhalt?",
    text_en: "Which city is not in Saxony-Anhalt?",
    options: [
      { de: "Magdeburg", en: "Magdeburg" },
      { de: "Halle", en: "Halle" },
      { de: "Leipzig", en: "Leipzig" },
      { de: "Dessau", en: "Dessau" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    explanation_de: "Leipzig liegt in Sachsen. Magdeburg, Halle und Dessau sind Städte in Sachsen-Anhalt.",
    explanation_en: "Leipzig is in Saxony. Magdeburg, Halle, and Dessau are cities in Saxony-Anhalt."
  },
  {
    id: "439",
    text_de: "Welcher Fluss fließt durch Sachsen-Anhalt?",
    text_en: "Which river flows through Saxony-Anhalt?",
    options: [
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Elbe", en: "the Elbe" },
      { de: "die Donau", en: "the Danube" },
      { de: "die Weser", en: "the Weser" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    explanation_de: "Die Elbe fließt durch Sachsen-Anhalt (Magdeburg, Dessau, Wittenberg).",
    explanation_en: "The Elbe flows through Saxony-Anhalt (Magdeburg, Dessau, Wittenberg)."
  },
  {
    id: "440",
    text_de: "Welches Gebirge liegt in Sachsen-Anhalt?",
    text_en: "Which mountain range is in Saxony-Anhalt?",
    options: [
      { de: "die Alpen", en: "the Alps" },
      { de: "der Harz", en: "the Harz" },
      { de: "der Schwarzwald", en: "the Black Forest" },
      { de: "das Erzgebirge", en: "the Ore Mountains" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Sachsen-Anhalt",
    explanation_de: "Der Harz liegt teilweise in Sachsen-Anhalt. Der Brocken (1.141 m) ist der höchste Berg.",
    explanation_en: "The Harz is partly in Saxony-Anhalt. The Brocken (1,141 m) is the highest peak."
  }
];

// Schleswig-Holstein
const schleswigHolsteinQuestions: Question[] = [
  {
    id: "441",
    text_de: "Welches Wappen gehört zum Bundesland Schleswig-Holstein?",
    text_en: "Which coat of arms belongs to the federal state of Schleswig-Holstein?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/schleswig-holstein.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    hasImages: true,
    explanation_de: "Das Wappen zeigt zwei Löwen (Schleswig und Holstein) und ein Nesselblatt (Holstein).",
    explanation_en: "The coat of arms shows two lions (Schleswig and Holstein) and a nettle leaf (Holstein)."
  },
  {
    id: "442",
    text_de: "Welches ist ein Kreis in Schleswig-Holstein?",
    text_en: "Which is a district in Schleswig-Holstein?",
    options: [
      { de: "Nordfriesland", en: "Nordfriesland" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    explanation_de: "Nordfriesland liegt an der Nordseeküste und umfasst die Nordfriesischen Inseln (z.B. Sylt).",
    explanation_en: "Nordfriesland is on the North Sea coast and includes the North Frisian Islands (e.g., Sylt)."
  },
  {
    id: "443",
    text_de: "Wofür ist Schleswig-Holstein bekannt?",
    text_en: "What is Schleswig-Holstein famous for?",
    options: [
      { de: "Küsten und Landwirtschaft", en: "Coasts and agriculture" },
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Kohleindustrie", en: "Coal industry" },
      { de: "Finanzwesen", en: "Finance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    explanation_de: "Schleswig-Holstein hat zwei Küsten (Nordsee und Ostsee) und ist stark landwirtschaftlich geprägt.",
    explanation_en: "Schleswig-Holstein has two coasts (North Sea and Baltic Sea) and is heavily agricultural."
  },
  {
    id: "444",
    text_de: "Welches Bundesland hat die Landeshauptstadt Kiel?",
    text_en: "Which federal state has Kiel as its capital?",
    options: [
      { de: "Mecklenburg-Vorpommern", en: "Mecklenburg-Western Pomerania" },
      { de: "Niedersachsen", en: "Lower Saxony" },
      { de: "Schleswig-Holstein", en: "Schleswig-Holstein" },
      { de: "Hamburg", en: "Hamburg" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    explanation_de: "Kiel ist die Landeshauptstadt von Schleswig-Holstein, bekannt für die Kieler Woche (Segelregatta).",
    explanation_en: "Kiel is the capital of Schleswig-Holstein, known for Kiel Week (sailing regatta)."
  },
  {
    id: "445",
    text_de: "Wie heißt der/die Ministerpräsident/in von Schleswig-Holstein?",
    text_en: "What is the name of the Minister-President of Schleswig-Holstein?",
    options: [
      { de: "Daniel Günther", en: "Daniel Günther" },
      { de: "Peter Tschentscher", en: "Peter Tschentscher" },
      { de: "Stephan Weil", en: "Stephan Weil" },
      { de: "Manuela Schwesig", en: "Manuela Schwesig" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    explanation_de: "Daniel Günther (CDU) ist seit 2017 Ministerpräsident von Schleswig-Holstein.",
    explanation_en: "Daniel Günther (CDU) has been Minister-President of Schleswig-Holstein since 2017."
  },
  {
    id: "446",
    text_de: "An welche Meere grenzt Schleswig-Holstein?",
    text_en: "Which seas border Schleswig-Holstein?",
    options: [
      { de: "Nordsee und Ostsee", en: "North Sea and Baltic Sea" },
      { de: "nur die Nordsee", en: "only the North Sea" },
      { de: "nur die Ostsee", en: "only the Baltic Sea" },
      { de: "Mittelmeer", en: "Mediterranean Sea" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    explanation_de: "Schleswig-Holstein ist das einzige deutsche Bundesland, das an zwei Meere grenzt: Nordsee und Ostsee.",
    explanation_en: "Schleswig-Holstein is the only German state that borders two seas: the North Sea and the Baltic Sea."
  },
  {
    id: "447",
    text_de: "Wie heißt das Landesparlament von Schleswig-Holstein?",
    text_en: "What is the name of the state parliament of Schleswig-Holstein?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt in Kiel.",
    explanation_en: "The state parliament is called Landtag and is located in Kiel."
  },
  {
    id: "448",
    text_de: "Welche Insel gehört zu Schleswig-Holstein?",
    text_en: "Which island belongs to Schleswig-Holstein?",
    options: [
      { de: "Rügen", en: "Rügen" },
      { de: "Sylt", en: "Sylt" },
      { de: "Usedom", en: "Usedom" },
      { de: "Helgoland", en: "Helgoland" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    explanation_de: "Sylt ist eine nordfriesische Insel in Schleswig-Holstein. Rügen und Usedom liegen in Mecklenburg-Vorpommern.",
    explanation_en: "Sylt is a North Frisian island in Schleswig-Holstein. Rügen and Usedom are in Mecklenburg-Western Pomerania."
  },
  {
    id: "449",
    text_de: "Welche Stadt liegt nicht in Schleswig-Holstein?",
    text_en: "Which city is not in Schleswig-Holstein?",
    options: [
      { de: "Kiel", en: "Kiel" },
      { de: "Lübeck", en: "Lübeck" },
      { de: "Rostock", en: "Rostock" },
      { de: "Flensburg", en: "Flensburg" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    explanation_de: "Rostock liegt in Mecklenburg-Vorpommern. Kiel, Lübeck und Flensburg sind in Schleswig-Holstein.",
    explanation_en: "Rostock is in Mecklenburg-Western Pomerania. Kiel, Lübeck, and Flensburg are in Schleswig-Holstein."
  },
  {
    id: "450",
    text_de: "Welches Nachbarland hat Schleswig-Holstein?",
    text_en: "Which neighboring country does Schleswig-Holstein have?",
    options: [
      { de: "Polen", en: "Poland" },
      { de: "Dänemark", en: "Denmark" },
      { de: "Niederlande", en: "Netherlands" },
      { de: "Frankreich", en: "France" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Schleswig-Holstein",
    explanation_de: "Schleswig-Holstein grenzt im Norden an Dänemark. Es ist das nördlichste deutsche Bundesland.",
    explanation_en: "Schleswig-Holstein borders Denmark to the north. It is Germany's northernmost federal state."
  }
];

// Thüringen
const thueringenQuestions: Question[] = [
  {
    id: "451",
    text_de: "Welches Wappen gehört zum Bundesland Thüringen?",
    text_en: "Which coat of arms belongs to the federal state of Thuringia?",
    options: [
      { de: "Wappen 1", en: "Coat of arms 1", image: "/images/wappen/hamburg.png" },
      { de: "Wappen 2", en: "Coat of arms 2", image: "/images/wappen/thueringen.png" },
      { de: "Wappen 3", en: "Coat of arms 3", image: "/images/wappen/bremen.png" },
      { de: "Wappen 4", en: "Coat of arms 4", image: "/images/wappen/berlin.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Thüringen",
    hasImages: true,
    explanation_de: "Das Thüringer Wappen zeigt einen rot-weiß gestreiften Löwen mit goldener Krone auf blauem Grund.",
    explanation_en: "Thuringia's coat of arms shows a red and white striped lion with a golden crown on a blue background."
  },
  {
    id: "452",
    text_de: "Welches ist ein Landkreis in Thüringen?",
    text_en: "Which is a district in Thuringia?",
    options: [
      { de: "Wartburgkreis", en: "Wartburgkreis" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg-Kreis" },
      { de: "Enzkreis", en: "Enzkreis" },
      { de: "Altötting", en: "Altötting" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: true,
    state: "Thüringen",
    explanation_de: "Der Wartburgkreis ist nach der berühmten Wartburg benannt, wo Martin Luther die Bibel übersetzte.",
    explanation_en: "Wartburgkreis is named after the famous Wartburg, where Martin Luther translated the Bible."
  },
  {
    id: "453",
    text_de: "Wofür ist Thüringen bekannt?",
    text_en: "What is Thuringia famous for?",
    options: [
      { de: "Kultur, Geschichte und Wald", en: "Culture, history and forest" },
      { de: "Ostseeküste", en: "Baltic coast" },
      { de: "Automobilindustrie", en: "Car industry" },
      { de: "Finanzwesen", en: "Finance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: true,
    state: "Thüringen",
    explanation_de: "Thüringen ist das 'grüne Herz Deutschlands' mit dem Thüringer Wald und Kulturstätten wie Weimar.",
    explanation_en: "Thuringia is the 'green heart of Germany' with the Thuringian Forest and cultural sites like Weimar."
  },
  {
    id: "454",
    text_de: "Welches Bundesland hat die Landeshauptstadt Erfurt?",
    text_en: "Which federal state has Erfurt as its capital?",
    options: [
      { de: "Sachsen", en: "Saxony" },
      { de: "Thüringen", en: "Thuringia" },
      { de: "Sachsen-Anhalt", en: "Saxony-Anhalt" },
      { de: "Hessen", en: "Hesse" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Thüringen",
    explanation_de: "Erfurt ist die Landeshauptstadt von Thüringen und die größte Stadt des Bundeslandes.",
    explanation_en: "Erfurt is the capital of Thuringia and the state's largest city."
  },
  {
    id: "455",
    text_de: "Wie heißt der/die Ministerpräsident/in von Thüringen?",
    text_en: "What is the name of the Minister-President of Thuringia?",
    options: [
      { de: "Bodo Ramelow", en: "Bodo Ramelow" },
      { de: "Michael Kretschmer", en: "Michael Kretschmer" },
      { de: "Reiner Haseloff", en: "Reiner Haseloff" },
      { de: "Mario Voigt", en: "Mario Voigt" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: true,
    state: "Thüringen",
    explanation_de: "Mario Voigt (CDU) ist seit 2024 Ministerpräsident von Thüringen.",
    explanation_en: "Mario Voigt (CDU) has been Minister-President of Thuringia since 2024."
  },
  {
    id: "456",
    text_de: "Welche historische Person lebte in Thüringen?",
    text_en: "Which historical person lived in Thuringia?",
    options: [
      { de: "Ludwig van Beethoven", en: "Ludwig van Beethoven" },
      { de: "Johann Wolfgang von Goethe", en: "Johann Wolfgang von Goethe" },
      { de: "Albert Einstein", en: "Albert Einstein" },
      { de: "Otto von Bismarck", en: "Otto von Bismarck" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Thüringen",
    explanation_de: "Goethe lebte lange in Weimar (Thüringen) und schrieb dort seine wichtigsten Werke.",
    explanation_en: "Goethe lived for a long time in Weimar (Thuringia) and wrote his most important works there."
  },
  {
    id: "457",
    text_de: "Wie heißt das Landesparlament von Thüringen?",
    text_en: "What is the name of the state parliament of Thuringia?",
    options: [
      { de: "Bürgerschaft", en: "Bürgerschaft" },
      { de: "Landtag", en: "Landtag" },
      { de: "Abgeordnetenhaus", en: "House of Representatives" },
      { de: "Senat", en: "Senate" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: true,
    state: "Thüringen",
    explanation_de: "Das Landesparlament heißt Landtag und sitzt in Erfurt.",
    explanation_en: "The state parliament is called Landtag and is located in Erfurt."
  },
  {
    id: "458",
    text_de: "Welche Stadt liegt nicht in Thüringen?",
    text_en: "Which city is not in Thuringia?",
    options: [
      { de: "Erfurt", en: "Erfurt" },
      { de: "Weimar", en: "Weimar" },
      { de: "Kassel", en: "Kassel" },
      { de: "Jena", en: "Jena" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: true,
    state: "Thüringen",
    explanation_de: "Kassel liegt in Hessen. Erfurt, Weimar und Jena sind Städte in Thüringen.",
    explanation_en: "Kassel is in Hesse. Erfurt, Weimar, and Jena are cities in Thuringia."
  },
  {
    id: "459",
    text_de: "Welcher Fluss fließt durch Thüringen?",
    text_en: "Which river flows through Thuringia?",
    options: [
      { de: "der Rhein", en: "the Rhine" },
      { de: "die Saale", en: "the Saale" },
      { de: "die Weser", en: "the Weser" },
      { de: "die Donau", en: "the Danube" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Thüringen",
    explanation_de: "Die Saale fließt durch Thüringen (Jena, Saalfeld) und mündet in die Elbe.",
    explanation_en: "The Saale flows through Thuringia (Jena, Saalfeld) and empties into the Elbe."
  },
  {
    id: "460",
    text_de: "Welches Gebirge liegt in Thüringen?",
    text_en: "Which mountain range is in Thuringia?",
    options: [
      { de: "die Alpen", en: "the Alps" },
      { de: "der Thüringer Wald", en: "the Thuringian Forest" },
      { de: "der Schwarzwald", en: "the Black Forest" },
      { de: "das Erzgebirge", en: "the Ore Mountains" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: true,
    state: "Thüringen",
    explanation_de: "Der Thüringer Wald ist ein Mittelgebirge mit dem Rennsteig, Deutschlands ältestem Wanderweg.",
    explanation_en: "The Thuringian Forest is a low mountain range with the Rennsteig, Germany's oldest hiking trail."
  }
];

// Export all additional state questions
export const additionalStateQuestions: Question[] = [
  ...badenWuerttembergQuestions,
  ...bayernQuestions,
  ...berlinQuestions,
  ...brandenburgQuestions,
  ...bremenQuestions,
  ...hamburgQuestions,
  ...hessenQuestions,
  ...mecklenburgVorpommernQuestions,
  ...niedersachsenQuestions,
  ...nordrheinWestfalenQuestions,
  ...rheinlandPfalzQuestions,
  ...saarlandQuestions,
  ...sachsenQuestions,
  ...sachsenAnhaltQuestions,
  ...schleswigHolsteinQuestions,
  ...thueringenQuestions
];
