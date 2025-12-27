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
    hasImages: true
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
    state: "Baden-Württemberg"
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
    state: "Baden-Württemberg"
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
    state: "Baden-Württemberg"
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
    state: "Baden-Württemberg"
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
    state: "Baden-Württemberg"
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
    state: "Baden-Württemberg"
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
    state: "Baden-Württemberg"
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
    state: "Baden-Württemberg"
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
    state: "Baden-Württemberg"
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
    hasImages: true
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
    state: "Bayern"
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
    state: "Bayern"
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
    state: "Bayern"
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
    state: "Bayern"
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
    state: "Bayern"
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
    state: "Bayern"
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
    state: "Bayern"
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
    state: "Bayern"
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
    state: "Bayern"
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
    hasImages: true
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
    state: "Berlin"
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
    state: "Berlin"
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
    state: "Berlin"
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
    state: "Berlin"
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
    state: "Berlin"
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
    state: "Berlin"
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
    state: "Berlin"
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
    state: "Berlin"
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
    state: "Berlin"
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
    hasImages: true
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
    state: "Brandenburg"
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
    state: "Brandenburg"
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
    state: "Brandenburg"
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
    state: "Brandenburg"
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
    state: "Brandenburg"
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
    state: "Brandenburg"
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
    state: "Brandenburg"
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
    state: "Brandenburg"
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
    state: "Brandenburg"
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
    hasImages: true
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
    state: "Bremen"
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
    state: "Bremen"
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
    state: "Bremen"
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
    state: "Bremen"
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
    state: "Bremen"
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
    state: "Bremen"
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
    state: "Bremen"
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
    state: "Bremen"
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
    state: "Bremen"
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
    hasImages: true
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
    state: "Hamburg"
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
    state: "Hamburg"
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
    state: "Hamburg"
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
    state: "Hamburg"
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
    state: "Hamburg"
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
    state: "Hamburg"
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
    state: "Hamburg"
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
    state: "Hamburg"
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
    state: "Hamburg"
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
    hasImages: true
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
    state: "Hessen"
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
    state: "Hessen"
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
    state: "Hessen"
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
    state: "Hessen"
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
    state: "Hessen"
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
    state: "Hessen"
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
    state: "Hessen"
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
    state: "Hessen"
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
    state: "Hessen"
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
    hasImages: true
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
    state: "Mecklenburg-Vorpommern"
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
    state: "Mecklenburg-Vorpommern"
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
    state: "Mecklenburg-Vorpommern"
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
    state: "Mecklenburg-Vorpommern"
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
    state: "Mecklenburg-Vorpommern"
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
    state: "Mecklenburg-Vorpommern"
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
    state: "Mecklenburg-Vorpommern"
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
    state: "Mecklenburg-Vorpommern"
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
    state: "Mecklenburg-Vorpommern"
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
    hasImages: true
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
    state: "Niedersachsen"
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
    state: "Niedersachsen"
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
    state: "Niedersachsen"
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
    state: "Niedersachsen"
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
    state: "Niedersachsen"
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
    state: "Niedersachsen"
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
    state: "Niedersachsen"
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
    state: "Niedersachsen"
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
    state: "Niedersachsen"
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
    hasImages: true
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
    state: "Nordrhein-Westfalen"
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
    state: "Nordrhein-Westfalen"
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
    state: "Nordrhein-Westfalen"
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
    state: "Nordrhein-Westfalen"
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
    state: "Nordrhein-Westfalen"
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
    state: "Nordrhein-Westfalen"
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
    state: "Nordrhein-Westfalen"
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
    state: "Nordrhein-Westfalen"
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
    state: "Nordrhein-Westfalen"
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
    hasImages: true
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
    state: "Rheinland-Pfalz"
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
    state: "Rheinland-Pfalz"
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
    state: "Rheinland-Pfalz"
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
    state: "Rheinland-Pfalz"
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
    state: "Rheinland-Pfalz"
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
    state: "Rheinland-Pfalz"
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
    state: "Rheinland-Pfalz"
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
    state: "Rheinland-Pfalz"
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
    state: "Rheinland-Pfalz"
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
    hasImages: true
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
    state: "Saarland"
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
    state: "Saarland"
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
    state: "Saarland"
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
    state: "Saarland"
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
    state: "Saarland"
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
    state: "Saarland"
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
    state: "Saarland"
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
    state: "Saarland"
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
    state: "Saarland"
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
    hasImages: true
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
    state: "Sachsen"
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
    state: "Sachsen"
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
    state: "Sachsen"
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
    state: "Sachsen"
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
    state: "Sachsen"
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
    state: "Sachsen"
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
    state: "Sachsen"
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
    state: "Sachsen"
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
    state: "Sachsen"
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
    hasImages: true
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
    state: "Sachsen-Anhalt"
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
    state: "Sachsen-Anhalt"
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
    state: "Sachsen-Anhalt"
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
    state: "Sachsen-Anhalt"
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
    state: "Sachsen-Anhalt"
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
    state: "Sachsen-Anhalt"
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
    state: "Sachsen-Anhalt"
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
    state: "Sachsen-Anhalt"
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
    state: "Sachsen-Anhalt"
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
    hasImages: true
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
    state: "Schleswig-Holstein"
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
    state: "Schleswig-Holstein"
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
    state: "Schleswig-Holstein"
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
    state: "Schleswig-Holstein"
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
    state: "Schleswig-Holstein"
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
    state: "Schleswig-Holstein"
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
    state: "Schleswig-Holstein"
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
    state: "Schleswig-Holstein"
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
    state: "Schleswig-Holstein"
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
    hasImages: true
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
    state: "Thüringen"
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
    state: "Thüringen"
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
    state: "Thüringen"
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
    state: "Thüringen"
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
    state: "Thüringen"
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
    state: "Thüringen"
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
    state: "Thüringen"
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
    state: "Thüringen"
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
    state: "Thüringen"
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
