import { Question } from './types';

export const part3Questions: Question[] = [
  {
    id: "91",
    text_de: "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …",
    text_en: "In Germany, a change of government in a federal state can affect federal politics. Governing becomes ...",
    options: [
      { de: "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.", en: "more difficult if this changes the majority in the Bundestag." },
      { de: "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.", en: "easier if new parties enter the Bundesrat." },
      { de: "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.", en: "more difficult if this changes the majority in the Bundesrat." },
      { de: "leichter, wenn es sich um ein reiches Bundesland handelt.", en: "easier if it is a wealthy federal state." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "92",
    text_de: "Was bedeutet die Abkürzung CSU in Deutschland?",
    text_en: "What does the abbreviation CSU mean in Germany?",
    options: [
      { de: "Christlich Sichere Union", en: "Christian Secure Union" },
      { de: "Christlich Süddeutsche Union", en: "Christian South German Union" },
      { de: "Christlich Sozialer Unternehmerverband", en: "Christian Social Entrepreneurs Association" },
      { de: "Christlich Soziale Union", en: "Christian Social Union" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "93",
    text_de: "Je mehr \"Zweitstimmen\" eine Partei bei einer Bundestagswahl bekommt, desto …",
    text_en: "The more \"second votes\" a party receives in a federal election, the ...",
    options: [
      { de: "weniger Erststimmen kann sie haben.", en: "fewer first votes it can have." },
      { de: "mehr Direktkandidaten der Partei ziehen ins Parlament ein.", en: "more direct candidates of the party enter parliament." },
      { de: "größer ist das Risiko, eine Koalition bilden zu müssen.", en: "greater the risk of having to form a coalition." },
      { de: "mehr Sitze erhält die Partei im Parlament.", en: "more seats the party receives in parliament." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "94",
    text_de: "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?",
    text_en: "At what age can you participate in the German Bundestag election in Germany?",
    options: [
      { de: "16", en: "16" },
      { de: "18", en: "18" },
      { de: "21", en: "21" },
      { de: "23", en: "23" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "95",
    text_de: "Was gilt für die meisten Kinder in Deutschland?",
    text_en: "What applies to most children in Germany?",
    options: [
      { de: "Wahlpflicht", en: "Compulsory voting" },
      { de: "Schulpflicht", en: "Compulsory education" },
      { de: "Schweigepflicht", en: "Duty of confidentiality" },
      { de: "Religionspflicht", en: "Compulsory religion" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "96",
    text_de: "Wie kann jemand, der den Holocaust leugnet, bestraft werden?",
    text_en: "How can someone who denies the Holocaust be punished?",
    options: [
      { de: "Kürzung sozialer Leistungen", en: "Reduction of social benefits" },
      { de: "bis zu 100 Sozialstunden", en: "up to 100 hours of community service" },
      { de: "gar nicht, Holocaustleugnung ist erlaubt", en: "not at all, Holocaust denial is permitted" },
      { de: "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe", en: "with imprisonment up to five years or a fine" }
    ],
    correctIndex: 3,
    category: "history",
    isStateSpecific: false
  },
  {
    id: "97",
    text_de: "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
    text_en: "What do you automatically pay in Germany when you are permanently employed?",
    options: [
      { de: "Sozialversicherung", en: "Social insurance" },
      { de: "Sozialhilfe", en: "Social welfare" },
      { de: "Kindergeld", en: "Child benefit" },
      { de: "Wohngeld", en: "Housing allowance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "98",
    text_de: "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, …",
    text_en: "When members of the German Bundestag change their parliamentary group, ...",
    options: [
      { de: "darf sie nicht mehr an den Sitzungen des Parlaments teilnehmen.", en: "they may no longer participate in parliamentary sessions." },
      { de: "kann die Regierung ihre Mehrheit verlieren.", en: "the government can lose its majority." },
      { de: "muss die Bundespräsidentin/der Bundespräsident zuvor ihr/sein Einverständnis geben.", en: "the Federal President must give prior consent." },
      { de: "darf die Wählerinnen/Wähler dieser Abgeordneten noch einmal wählen.", en: "the voters of these members may vote again." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "99",
    text_de: "Wer bezahlt in Deutschland die Sozialversicherungen?",
    text_en: "Who pays for social insurance in Germany?",
    options: [
      { de: "Arbeitgeberinnen/Arbeitgeber und Arbeitnehmerinnen/Arbeitnehmer", en: "Employers and employees" },
      { de: "nur Arbeitnehmerinnen/Arbeitnehmer", en: "only employees" },
      { de: "alle Staatsangehörigen", en: "all citizens" },
      { de: "nur Arbeitgeberinnen/Arbeitgeber", en: "only employers" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "100",
    text_de: "Was gehört nicht zur gesetzlichen Sozialversicherung?",
    text_en: "What is NOT part of statutory social insurance?",
    options: [
      { de: "die Lebensversicherung", en: "life insurance" },
      { de: "die gesetzliche Rentenversicherung", en: "statutory pension insurance" },
      { de: "die Arbeitslosenversicherung", en: "unemployment insurance" },
      { de: "die Pflegeversicherung", en: "nursing care insurance" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "101",
    text_de: "Gewerkschaften sind Interessenverbände der …",
    text_en: "Trade unions are interest groups for ...",
    options: [
      { de: "Jugendlichen.", en: "young people." },
      { de: "Arbeitnehmerinnen und Arbeitnehmer.", en: "employees." },
      { de: "Rentnerinnen und Rentner.", en: "retirees." },
      { de: "Arbeitgeberinnen und Arbeitgeber.", en: "employers." }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "102",
    text_de: "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …",
    text_en: "With what can you be honored in Germany for special achievements in political, economic, cultural, intellectual, or social fields? With the ...",
    options: [
      { de: "Bundesverdienstkreuz", en: "Federal Cross of Merit" },
      { de: "Bundesadler", en: "Federal Eagle" },
      { de: "Vaterländischen Verdienstorden", en: "Patriotic Order of Merit" },
      { de: "Ehrentitel \"Held der Deutschen Demokratischen Republik\"", en: "Honorary title \"Hero of the German Democratic Republic\"" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "103",
    text_de: "Was wird in Deutschland als \"Ampelkoalition\" bezeichnet? Die Zusammenarbeit …",
    text_en: "What is referred to as a \"traffic light coalition\" in Germany? The cooperation ...",
    options: [
      { de: "der Bundestagsfraktionen von CDU und CSU", en: "of the CDU and CSU parliamentary groups" },
      { de: "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung", en: "of SPD, FDP and Alliance 90/The Greens in a government" },
      { de: "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung", en: "of CSU, The Left and Alliance 90/The Greens in a government" },
      { de: "der Bundestagsfraktionen von CDU und SPD", en: "of the CDU and SPD parliamentary groups" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "104",
    text_de: "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?",
    text_en: "A woman in Germany loses her job. What may NOT be the reason for this dismissal?",
    options: [
      { de: "Die Frau ist lange krank und arbeitsunfähig.", en: "The woman has been ill and unable to work for a long time." },
      { de: "Die Frau kam oft zu spät zur Arbeit.", en: "The woman often came late to work." },
      { de: "Die Frau erledigt private Sachen während der Arbeitszeit.", en: "The woman handles private matters during work hours." },
      { de: "Die Frau bekommt ein Kind und ihr Chef weiß das.", en: "The woman is having a child and her boss knows this." }
    ],
    correctIndex: 3,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "105",
    text_de: "Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern in Deutschland?",
    text_en: "What is a task of election helpers in Germany?",
    options: [
      { de: "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.", en: "They help elderly people vote in the voting booth." },
      { de: "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.", en: "They write the election notifications before the election." },
      { de: "Sie geben Zwischenergebnisse an die Medien weiter.", en: "They pass on interim results to the media." },
      { de: "Sie zählen die Stimmen nach dem Ende der Wahl.", en: "They count the votes after the election ends." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "106",
    text_de: "In Deutschland helfen ehrenamtliche Wahlhelferinnen und Wahlhelfer bei den Wahlen. Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern?",
    text_en: "In Germany, volunteer election helpers assist with elections. What is a task of election helpers?",
    options: [
      { de: "Sie helfen Kindern und alten Menschen beim Wählen.", en: "They help children and elderly people vote." },
      { de: "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.", en: "They write cards and letters with the polling station information." },
      { de: "Sie geben Zwischenergebnisse an Journalisten weiter.", en: "They pass on interim results to journalists." },
      { de: "Sie zählen die Stimmen nach dem Ende der Wahl.", en: "They count the votes after the election ends." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "107",
    text_de: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
    text_en: "For how many years is the Bundestag elected in Germany?",
    options: [
      { de: "2 Jahre", en: "2 years" },
      { de: "4 Jahre", en: "4 years" },
      { de: "6 Jahre", en: "6 years" },
      { de: "8 Jahre", en: "8 years" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "108",
    text_de: "Bei einer Bundestagswahl in Deutschland darf jede/jeder wählen, die/der …",
    text_en: "In a German federal election, anyone may vote who ...",
    options: [
      { de: "in der Bundesrepublik Deutschland wohnt und wählen möchte.", en: "lives in Germany and wants to vote." },
      { de: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.", en: "is a citizen of Germany and is at least 18 years old." },
      { de: "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.", en: "has lived in Germany for at least 3 years." },
      { de: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist.", en: "is a citizen of Germany and is at least 21 years old." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "109",
    text_de: "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?",
    text_en: "How often are there normally federal elections in Germany?",
    options: [
      { de: "alle drei Jahre", en: "every three years" },
      { de: "alle vier Jahre", en: "every four years" },
      { de: "alle fünf Jahre", en: "every five years" },
      { de: "alle sechs Jahre", en: "every six years" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "110",
    text_de: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
    text_en: "For how many years is the Bundestag elected in Germany?",
    options: [
      { de: "2 Jahre", en: "2 years" },
      { de: "3 Jahre", en: "3 years" },
      { de: "4 Jahre", en: "4 years" },
      { de: "5 Jahre", en: "5 years" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "111",
    text_de: "Welche Handlungen mit Bezug auf den Staat Israel sind in Deutschland verboten?",
    text_en: "Which actions related to the State of Israel are prohibited in Germany?",
    options: [
      { de: "die Politik Israels öffentlich kritisieren", en: "publicly criticizing Israel's politics" },
      { de: "das Aufhängen einer israelischen Flagge auf dem Privatgrundstück", en: "hanging an Israeli flag on private property" },
      { de: "eine Diskussion über die Politik Israels", en: "a discussion about Israel's politics" },
      { de: "der öffentliche Aufruf zur Vernichtung Israels", en: "publicly calling for the destruction of Israel" }
    ],
    correctIndex: 3,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "112",
    text_de: "Die Wahlen in Deutschland sind …",
    text_en: "Elections in Germany are ...",
    options: [
      { de: "speziell.", en: "special." },
      { de: "geheim.", en: "secret." },
      { de: "berufsbezogen.", en: "profession-related." },
      { de: "geschlechtsabhängig.", en: "gender-dependent." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "113",
    text_de: "Wahlen in Deutschland gewinnt die Partei, die …",
    text_en: "Elections in Germany are won by the party that ...",
    options: [
      { de: "die meisten Stimmen bekommt.", en: "receives the most votes." },
      { de: "die meisten Männer mehrheitlich gewählt haben.", en: "most men voted for." },
      { de: "die meisten Stimmen bei den Arbeiterinnen/Arbeitern bekommen hat.", en: "received the most votes from workers." },
      { de: "die meisten Erststimmen für ihre Kanzlerkandidatin/ihren Kanzlerkandidaten erhalten hat.", en: "received the most first votes for their chancellor candidate." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "114",
    text_de: "An demokratischen Wahlen in Deutschland teilzunehmen ist …",
    text_en: "Participating in democratic elections in Germany is ...",
    options: [
      { de: "eine Pflicht.", en: "a duty." },
      { de: "ein Recht.", en: "a right." },
      { de: "ein Zwang.", en: "a compulsion." },
      { de: "eine Last.", en: "a burden." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "115",
    text_de: "Was bedeutet \"aktives Wahlrecht\" in Deutschland?",
    text_en: "What does \"active voting right\" mean in Germany?",
    options: [
      { de: "Man kann gewählt werden.", en: "You can be elected." },
      { de: "Man muss wählen gehen.", en: "You must go vote." },
      { de: "Man kann wählen.", en: "You can vote." },
      { de: "Man muss zur Auszählung der Stimmen gehen.", en: "You must go to the vote counting." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "116",
    text_de: "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das …",
    text_en: "If you are allowed to vote in a German federal election, this is called ...",
    options: [
      { de: "aktive Wahlkampagne.", en: "active election campaign." },
      { de: "aktives Wahlverfahren.", en: "active election procedure." },
      { de: "aktiver Wahlkampf.", en: "active electioneering." },
      { de: "aktives Wahlrecht.", en: "active voting right." }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "117",
    text_de: "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?",
    text_en: "What minimum percentage of second votes must parties receive to be elected to the German Bundestag?",
    options: [
      { de: "3%", en: "3%" },
      { de: "4%", en: "4%" },
      { de: "5%", en: "5%" },
      { de: "6%", en: "6%" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "118",
    text_de: "Wer darf bei den rund 40 jüdischen Makkabi-Sportvereinen Mitglied werden?",
    text_en: "Who can become a member of the approximately 40 Jewish Maccabi sports clubs?",
    options: [
      { de: "nur Deutsche", en: "only Germans" },
      { de: "nur Israelis", en: "only Israelis" },
      { de: "nur religiöse Menschen", en: "only religious people" },
      { de: "alle Menschen", en: "all people" }
    ],
    correctIndex: 3,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "119",
    text_de: "Wahlen in Deutschland sind frei. Was bedeutet das?",
    text_en: "Elections in Germany are free. What does that mean?",
    options: [
      { de: "Alle verurteilten Straftäterinnen/Straftäter dürfen nicht wählen.", en: "All convicted criminals may not vote." },
      { de: "Wenn ich wählen gehen möchte, muss meine Arbeitgeberin/mein Arbeitgeber mir frei geben.", en: "If I want to go vote, my employer must give me time off." },
      { de: "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.", en: "Every person can decide without coercion whether and whom to vote for." },
      { de: "Ich kann frei entscheiden, wo ich wählen gehen möchte.", en: "I can freely decide where I want to go vote." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "120",
    text_de: "Das Wahlsystem in Deutschland ist ein …",
    text_en: "The electoral system in Germany is a ...",
    options: [
      { de: "Zensuswahlrecht.", en: "census suffrage." },
      { de: "Dreiklassenwahlrecht.", en: "three-class voting system." },
      { de: "Mehrheits- und Verhältniswahlrecht.", en: "majority and proportional representation system." },
      { de: "allgemeines Männerwahlrecht.", en: "universal male suffrage." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "121",
    text_de: "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …",
    text_en: "A party wants to enter the German Bundestag. However, it must have a minimum share of votes. This is called ...",
    options: [
      { de: "5%-Hürde.", en: "5% threshold." },
      { de: "Zulassungsgrenze.", en: "admission limit." },
      { de: "Basiswert.", en: "base value." },
      { de: "Richtlinie.", en: "guideline." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "122",
    text_de: "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …",
    text_en: "What principle do elections in Germany follow? Elections in Germany are ...",
    options: [
      { de: "frei, gleich, geheim.", en: "free, equal, secret." },
      { de: "offen, sicher, frei.", en: "open, secure, free." },
      { de: "geschlossen, gleich, sicher.", en: "closed, equal, secure." },
      { de: "sicher, offen, freiwillig.", en: "secure, open, voluntary." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "123",
    text_de: "Was ist in Deutschland die \"5%-Hürde\"?",
    text_en: "What is the \"5% threshold\" in Germany?",
    options: [
      { de: "Abstimmungsregelung im Bundestag für kleine Parteien", en: "Voting regulation in the Bundestag for small parties" },
      { de: "Anwesenheitskontrolle im Bundestag für Abstimmungen", en: "Attendance check in the Bundestag for votes" },
      { de: "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen", en: "Minimum share of votes to enter parliament" },
      { de: "Anwesenheitskontrolle im Bundesrat für Abstimmungen", en: "Attendance check in the Bundesrat for votes" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "124",
    text_de: "Die Bundestagswahl in Deutschland ist die Wahl …",
    text_en: "The federal election in Germany is the election of ...",
    options: [
      { de: "der Bundeskanzlerin/des Bundeskanzlers.", en: "the Federal Chancellor." },
      { de: "der Parlamente der Länder.", en: "the state parliaments." },
      { de: "des Parlaments für Deutschland.", en: "the parliament for Germany." },
      { de: "der Bundespräsidentin/des Bundespräsidenten.", en: "the Federal President." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "125",
    text_de: "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, …",
    text_en: "In a democracy, a function of regular elections is to ...",
    options: [
      { de: "die Bürgerinnen und Bürger zu zwingen, ihre Stimme abzugeben.", en: "force citizens to cast their vote." },
      { de: "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.", en: "enable a change of government according to the will of the voter majority." },
      { de: "im Land bestehende Gesetze beizubehalten.", en: "maintain existing laws in the country." },
      { de: "den Armen mehr Macht zu geben.", en: "give more power to the poor." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "126",
    text_de: "Was bekommen wahlberechtigte Bürgerinnen und Bürger in Deutschland vor einer Wahl?",
    text_en: "What do eligible voters in Germany receive before an election?",
    options: [
      { de: "eine Wahlbenachrichtigung von der Gemeinde", en: "an election notification from the municipality" },
      { de: "eine Wahlerlaubnis von der Bundespräsidentin/von dem Bundespräsidenten", en: "a voting permit from the Federal President" },
      { de: "eine Benachrichtigung von der Bundesversammlung", en: "a notification from the Federal Assembly" },
      { de: "eine Benachrichtigung vom Pfarramt", en: "a notification from the parish office" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "127",
    text_de: "Warum gibt es die 5%-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil …",
    text_en: "Why is there a 5% threshold in the electoral law of Germany? It exists because ...",
    options: [
      { de: "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.", en: "the programs of many small parties have many similarities." },
      { de: "die Bürgerinnen und Bürger bei vielen kleinen Parteien die Orientierung verlieren können.", en: "citizens can lose orientation with many small parties." },
      { de: "viele kleine Parteien die Regierungsbildung erschweren.", en: "many small parties make forming a government more difficult." },
      { de: "die kleinen Parteien nicht so viel Geld haben, um die Politikerinnen und Politiker zu bezahlen.", en: "small parties don't have enough money to pay politicians." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "128",
    text_de: "Parlamentsmitglieder, die von den Bürgerinnen und Bürgern gewählt werden, nennt man …",
    text_en: "Members of parliament who are elected by citizens are called ...",
    options: [
      { de: "Abgeordnete.", en: "Members of Parliament." },
      { de: "Kanzlerinnen/Kanzler.", en: "Chancellors." },
      { de: "Botschafterinnen/Botschafter.", en: "Ambassadors." },
      { de: "Ministerpräsidentinnen/Ministerpräsidenten.", en: "Minister-Presidents." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "129",
    text_de: "Vom Volk gewählt wird in Deutschland …",
    text_en: "In Germany, the people elect ...",
    options: [
      { de: "die Bundeskanzlerin/der Bundeskanzler.", en: "the Federal Chancellor." },
      { de: "die Ministerpräsidentin/der Ministerpräsident eines Bundeslandes.", en: "the Minister-President of a federal state." },
      { de: "der Bundestag.", en: "the Bundestag." },
      { de: "die Bundespräsidentin/der Bundespräsident.", en: "the Federal President." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "130",
    text_de: "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?",
    text_en: "Which ballot would be valid in a federal election?",
    options: [
      { de: "Bild 1 (nur eine Stimme markiert)", en: "Image 1 (only one vote marked)", image: "/ballots/ballot-one-vote.png" },
      { de: "Bild 2 (Erststimme und Zweitstimme markiert)", en: "Image 2 (first vote and second vote marked)", image: "/ballots/ballot-valid.png" },
      { de: "Bild 3 (mehrere Kreuze bei Erststimme)", en: "Image 3 (multiple crosses for first vote)", image: "/ballots/ballot-invalid-first.png" },
      { de: "Bild 4 (mehrere Kreuze bei Zweitstimme)", en: "Image 4 (multiple crosses for second vote)", image: "/ballots/ballot-invalid-second.png" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    hasImages: true
  },
  {
    id: "131",
    text_de: "In Deutschland ist eine Bürgermeisterin/ein Bürgermeister …",
    text_en: "In Germany, a mayor is ...",
    options: [
      { de: "die Leiterin/der Leiter einer Schule.", en: "the head of a school." },
      { de: "die Chefin/der Chef einer Bank.", en: "the head of a bank." },
      { de: "das Oberhaupt einer Gemeinde.", en: "the head of a municipality." },
      { de: "die/der Vorsitzende einer Partei.", en: "the chairperson of a party." }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "132",
    text_de: "Was bedeutet \"ehrenamtlich\" in Deutschland?",
    text_en: "What does \"volunteer work\" mean in Germany?",
    options: [
      { de: "Sie arbeiten als Soldatinnen/Soldaten.", en: "They work as soldiers." },
      { de: "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.", en: "They work voluntarily and unpaid in clubs and associations." },
      { de: "Sie arbeiten in der Bundesregierung.", en: "They work in the federal government." },
      { de: "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld.", en: "They work in a hospital and earn money." }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "133",
    text_de: "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?",
    text_en: "What is allowed in federal and state elections in Germany?",
    options: [
      { de: "Der Ehemann wählt für seine Frau mit.", en: "The husband votes for his wife." },
      { de: "Man kann durch Briefwahl seine Stimme abgeben.", en: "You can cast your vote by postal ballot." },
      { de: "Man kann am Wahltag telefonisch seine Stimme abgeben.", en: "You can cast your vote by phone on election day." },
      { de: "Kinder ab dem Alter von 14 Jahren dürfen wählen.", en: "Children aged 14 and over may vote." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false
  },
  {
    id: "134",
    text_de: "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?",
    text_en: "They want to cancel the bus line you always take to work. What can you do to keep the bus line?",
    options: [
      { de: "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.", en: "I participate in a citizens' initiative to keep the bus line or start one myself." },
      { de: "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.", en: "I join a sports club and train for cycling." },
      { de: "Ich wende mich an das Finanzamt, weil ich als Steuerzahlerin/Steuerzahler ein Recht auf die Buslinie habe.", en: "I contact the tax office because as a taxpayer I have a right to the bus line." },
      { de: "Ich schreibe einen Brief an das Forstamt der Gemeinde.", en: "I write a letter to the municipal forestry office." }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false
  },
  {
    id: "135",
    text_de: "Wen vertreten die Gewerkschaften in Deutschland?",
    text_en: "Whom do trade unions represent in Germany?",
    options: [
      { de: "große Unternehmen", en: "large companies" },
      { de: "kleine Unternehmen", en: "small companies" },
      { de: "Selbstständige", en: "self-employed people" },
      { de: "Arbeitnehmerinnen und Arbeitnehmer", en: "employees" }
    ],
    correctIndex: 3,
    category: "society",
    isStateSpecific: false
  }
];
