import { Question } from './types';

export const part7Questions: Question[] = [
  {
    id: "271",
    text_de: "Seit wann gibt es das Frauenwahlrecht in Deutschland?",
    text_en: "Since when do women have the right to vote in Germany?",
    options: [
      { de: "1918", en: "1918" },
      { de: "1933", en: "1933" },
      { de: "1945", en: "1945" },
      { de: "1949", en: "1949" }
    ],
    correctIndex: 0,
    category: "history",
    isStateSpecific: false,
    explanation_de: "Frauen erhielten 1918 das Wahlrecht. Bei der Wahl zur Nationalversammlung 1919 durften sie erstmals wählen.",
    explanation_en: "Women received voting rights in 1918. They were first able to vote in the 1919 National Assembly election."
  },
  {
    id: "272",
    text_de: "Wenn ein Kind in Deutschland Probleme in der Schule hat und die Eltern mit dem Zeugnis unzufrieden sind, was können die Eltern tun?",
    text_en: "If a child in Germany does badly at school and the parents are not satisfied with the report, what can they do?",
    options: [
      { de: "sie können zur Schule gehen und mit den Lehrern sprechen", en: "go to the school and speak to the teachers" },
      { de: "sie können das Kind bestrafen", en: "punish the child" },
      { de: "sie dürfen nichts tun", en: "they may not do anything" },
      { de: "sie können das Kind aus der Schule nehmen", en: "they can take the child out of school" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Eltern haben das Recht und die Pflicht, sich bei Schulproblemen mit den Lehrern auszutauschen. Schulpflicht besteht weiterhin.",
    explanation_en: "Parents have the right and duty to communicate with teachers about school problems. Compulsory education still applies."
  },
  {
    id: "273",
    text_de: "Was bedeutet in Deutschland der Grundsatz der Gewaltenteilung?",
    text_en: "What does the principle of the separation of powers mean in Germany?",
    options: [
      { de: "Die Staatsgewalt ist auf mehrere Institutionen verteilt", en: "the state power is divided between several institutions" },
      { de: "Mann und Frau sind gleichberechtigt", en: "man and woman are equal" },
      { de: "Bund und Länder teilen sich die Macht", en: "the federal government and states share power" },
      { de: "die Exekutive hat alle Macht", en: "the executive has all the power" }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Gewaltenteilung bedeutet: Legislative, Exekutive und Judikative sind getrennt. Das verhindert Machtmissbrauch.",
    explanation_en: "Separation of powers means: Legislative, Executive, and Judiciary are separate. This prevents abuse of power."
  },
  {
    id: "274",
    text_de: "Was ist keine Aufgabe des Bundespräsidenten?",
    text_en: "What is not a duty of the Federal President?",
    options: [
      { de: "Er vertritt Deutschland im Ausland", en: "representing Germany abroad" },
      { de: "Er führt die Regierung", en: "leading the government" },
      { de: "Er ernennt Richter und Beamte", en: "appointing judges and officials" },
      { de: "Er unterschreibt Gesetze", en: "signing laws" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Regierung führt der Bundeskanzler, nicht der Bundespräsident. Der Bundespräsident hat repräsentative Aufgaben.",
    explanation_en: "The Chancellor leads the government, not the Federal President. The Federal President has representative duties."
  },
  {
    id: "275",
    text_de: "Was machen Gerichte in Deutschland?",
    text_en: "What do courts do in Germany?",
    options: [
      { de: "Sie machen Gesetze.", en: "They make laws." },
      { de: "Sie entscheiden Streitigkeiten.", en: "They resolve disputes." },
      { de: "Sie kontrollieren die Polizei.", en: "They control the police." },
      { de: "Sie erheben Steuern.", en: "They collect taxes." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Gerichte entscheiden Streitigkeiten und sprechen Recht. Sie gehören zur Judikative.",
    explanation_en: "Courts resolve disputes and administer justice. They belong to the judiciary."
  },
  {
    id: "276",
    text_de: "Was ist die Rechtsprechung in Deutschland?",
    text_en: "What is the 'Rechtsprechung' (judiciary) in Germany?",
    options: [
      { de: "die gesetzgebende Gewalt", en: "the legislative power" },
      { de: "die ausführende Gewalt", en: "the executive power" },
      { de: "die rechtsprechende Gewalt", en: "the judicial power" },
      { de: "die Mediengewalt", en: "the media power" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Rechtsprechung ist die richterliche Gewalt (Judikative). Sie ist unabhängig von Legislative und Exekutive.",
    explanation_en: "Rechtsprechung is the judicial power. It is independent of the legislative and executive branches."
  },
  {
    id: "277",
    text_de: "In Deutschland sind Richter...?",
    text_en: "In Germany, judges are...?",
    options: [
      { de: "von der Regierung abhängig", en: "dependent on the government" },
      { de: "unabhängig", en: "independent" },
      { de: "von Parteien abhängig", en: "dependent on parties" },
      { de: "von der Polizei kontrolliert", en: "controlled by the police" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Richter in Deutschland sind unabhängig und nur dem Gesetz unterworfen (Art. 97 GG). Niemand darf ihre Urteile beeinflussen.",
    explanation_en: "Judges in Germany are independent and subject only to the law (Art. 97 Basic Law). No one may influence their rulings."
  },
  {
    id: "278",
    text_de: "Was passiert in Deutschland, wenn jemand keinen Anwalt für das Gericht bezahlen kann?",
    text_en: "What happens in Germany when someone cannot afford a lawyer for court?",
    options: [
      { de: "Der Prozess findet nicht statt", en: "the trial does not take place" },
      { de: "Der Staat bezahlt einen Anwalt", en: "the state pays for a lawyer" },
      { de: "Man muss sich selbst verteidigen", en: "they must defend themselves" },
      { de: "Man verliert automatisch", en: "they automatically lose" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Bei fehlendem Geld kann Prozesskostenhilfe beantragt werden. Der Staat stellt dann einen Anwalt (Pflichtverteidiger).",
    explanation_en: "If funds are lacking, legal aid can be applied for. The state then provides a lawyer (public defender)."
  },
  {
    id: "279",
    text_de: "Was ist ein Beispiel für ehrenamtliche Arbeit?",
    text_en: "What is an example of voluntary work?",
    options: [
      { de: "bei der freiwilligen Feuerwehr arbeiten", en: "working for the volunteer fire department" },
      { de: "bei einem Bäcker arbeiten", en: "working at a bakery" },
      { de: "bei einer Bank arbeiten", en: "working at a bank" },
      { de: "bei einer Autofirma arbeiten", en: "working at a car company" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die freiwillige Feuerwehr ist ein klassisches Beispiel für Ehrenamt – unbezahlte, freiwillige Arbeit für die Gemeinschaft.",
    explanation_en: "The volunteer fire department is a classic example of voluntary work – unpaid, voluntary work for the community."
  },
  {
    id: "280",
    text_de: "Welche Organisation setzt sich in Deutschland für den Schutz von Umwelt und Natur ein?",
    text_en: "Which organization in Germany works for environmental and nature protection?",
    options: [
      { de: "das Rote Kreuz", en: "the Red Cross" },
      { de: "der ADAC", en: "ADAC" },
      { de: "der BUND", en: "BUND (environmental organization)" },
      { de: "die Caritas", en: "Caritas" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der BUND (Bund für Umwelt und Naturschutz Deutschland) ist eine der größten Umweltorganisationen Deutschlands.",
    explanation_en: "BUND (Friends of the Earth Germany) is one of the largest environmental organizations in Germany."
  },
  {
    id: "281",
    text_de: "Welche Sportart hat in Deutschland die meisten Mitglieder in Vereinen?",
    text_en: "Which sport has the most members in clubs in Germany?",
    options: [
      { de: "Tennis", en: "tennis" },
      { de: "Fußball", en: "football/soccer" },
      { de: "Schwimmen", en: "swimming" },
      { de: "Reiten", en: "horse riding" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Fußball hat die meisten Vereinsmitglieder in Deutschland. Der DFB ist der größte Sportverband der Welt.",
    explanation_en: "Football has the most club members in Germany. The DFB is the largest sports federation in the world."
  },
  {
    id: "282",
    text_de: "Was ist bei Nacht und nasser Straße in Deutschland besonders wichtig?",
    text_en: "What is especially important when driving at night and on wet roads in Germany?",
    options: [
      { de: "das Tempolimit ignorieren", en: "ignoring the speed limit" },
      { de: "die Geschwindigkeit reduzieren und den Abstand vergrößern", en: "reducing speed and increasing distance" },
      { de: "ohne Licht fahren", en: "driving without lights" },
      { de: "häufig überholen", en: "overtaking frequently" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Bei schlechter Sicht und nasser Fahrbahn sollte man langsamer fahren und mehr Abstand halten.",
    explanation_en: "In poor visibility and on wet roads, you should drive slower and keep more distance."
  },
  {
    id: "283",
    text_de: "Was gehört nicht zu den Rechten von deutschen Staatsbürgerinnen und Staatsbürgern?",
    text_en: "What is not a right of German citizens?",
    options: [
      { de: "Wahl zum Deutschen Bundestag", en: "voting in federal elections" },
      { de: "Berufsfreiheit", en: "freedom to choose a profession" },
      { de: "Mitgliedschaft in einer Partei", en: "membership in a political party" },
      { de: "automatisch höheres Gehalt", en: "automatically higher salary" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Es gibt kein Recht auf automatisch höheres Gehalt. Wahlrecht, Berufsfreiheit und Parteimitgliedschaft sind Bürgerrechte.",
    explanation_en: "There is no right to automatically higher salary. Voting rights, freedom of profession, and party membership are civil rights."
  },
  {
    id: "284",
    text_de: "Welches Gericht entscheidet in Deutschland über Streitigkeiten bei der Arbeit?",
    text_en: "Which court in Germany decides on disputes about employment?",
    options: [
      { de: "Sozialgericht", en: "social court" },
      { de: "Arbeitsgericht", en: "labor court" },
      { de: "Amtsgericht", en: "local court" },
      { de: "Verwaltungsgericht", en: "administrative court" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Das Arbeitsgericht ist für Streitigkeiten zwischen Arbeitnehmern und Arbeitgebern zuständig.",
    explanation_en: "The labor court is responsible for disputes between employees and employers."
  },
  {
    id: "285",
    text_de: "Wohin können Sie in Deutschland gehen, wenn Sie eine Beschwerde gegen die Verwaltung haben?",
    text_en: "Where can you go in Germany if you want to complain about the administration?",
    options: [
      { de: "zum Arbeitsgericht", en: "to the labor court" },
      { de: "zum Sozialgericht", en: "to the social court" },
      { de: "zum Verwaltungsgericht", en: "to the administrative court" },
      { de: "zum Finanzamt", en: "to the tax office" }
    ],
    correctIndex: 2,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Das Verwaltungsgericht prüft Entscheidungen von Behörden. Bürger können dort gegen behördliche Maßnahmen klagen.",
    explanation_en: "The administrative court reviews decisions by authorities. Citizens can sue against administrative measures there."
  },
  {
    id: "286",
    text_de: "Was tut der deutsche Staat nicht?",
    text_en: "What does the German state not do?",
    options: [
      { de: "Steuern erheben", en: "collect taxes" },
      { de: "Gesetze machen", en: "make laws" },
      { de: "Richter einsetzen", en: "appoint judges" },
      { de: "eine Religion vorschreiben", en: "prescribe a religion" }
    ],
    correctIndex: 3,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "In Deutschland herrscht Religionsfreiheit. Der Staat darf keine Religion vorschreiben (Trennung von Staat und Kirche).",
    explanation_en: "Germany has freedom of religion. The state may not prescribe any religion (separation of church and state)."
  },
  {
    id: "287",
    text_de: "Was ist in Deutschland Voraussetzung für die Einbürgerung?",
    text_en: "What is a prerequisite for naturalization in Germany?",
    options: [
      { de: "Man muss Mitglied einer Partei sein.", en: "You must be a member of a party." },
      { de: "Man muss lange genug in Deutschland gelebt haben.", en: "You must have lived in Germany for a long time." },
      { de: "Man muss ein Haus besitzen.", en: "You must own a house." },
      { de: "Man muss verheiratet sein.", en: "You must be married." }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Für die Einbürgerung muss man in der Regel 8 Jahre rechtmäßig in Deutschland gelebt haben (mit Integrationskurs 7 Jahre).",
    explanation_en: "For naturalization, you generally must have lived legally in Germany for 8 years (7 years with integration course)."
  },
  {
    id: "288",
    text_de: "Was gilt beim Besuch einer staatlichen Schule in Deutschland?",
    text_en: "What applies when attending a state school in Germany?",
    options: [
      { de: "Die Eltern müssen Schulgeld bezahlen.", en: "Parents must pay tuition." },
      { de: "Der Schulbesuch ist kostenlos.", en: "School attendance is free." },
      { de: "Die Schüler müssen Uniform tragen.", en: "Students must wear uniforms." },
      { de: "Es gibt nur Religionsunterricht.", en: "There is only religious instruction." }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Besuch staatlicher Schulen ist in Deutschland kostenlos. Bildung ist ein öffentliches Gut.",
    explanation_en: "Attending state schools in Germany is free. Education is a public good."
  },
  {
    id: "289",
    text_de: "Wer kann in Deutschland einen Antrag auf Einbürgerung stellen?",
    text_en: "Who can apply for naturalization in Germany?",
    options: [
      { de: "alle Touristen", en: "all tourists" },
      { de: "nur EU-Bürger", en: "only EU citizens" },
      { de: "Ausländer, die bestimmte Voraussetzungen erfüllen", en: "foreigners who meet certain requirements" },
      { de: "nur Menschen unter 30 Jahren", en: "only people under 30 years old" }
    ],
    correctIndex: 2,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Ausländer können eingebürgert werden, wenn sie bestimmte Voraussetzungen erfüllen (Aufenthalt, Sprachkenntnisse, Lebensunterhalt etc.).",
    explanation_en: "Foreigners can be naturalized if they meet certain requirements (residence, language skills, livelihood, etc.)."
  },
  {
    id: "290",
    text_de: "Was muss ein Einwanderer in Deutschland tun, um die deutsche Staatsbürgerschaft zu erhalten?",
    text_en: "What must an immigrant in Germany do to obtain German citizenship?",
    options: [
      { de: "Einen Antrag auf Einbürgerung stellen.", en: "Apply for naturalization." },
      { de: "Es passiert automatisch.", en: "It happens automatically." },
      { de: "Einfach warten.", en: "Just wait." },
      { de: "Gar nichts.", en: "Nothing at all." }
    ],
    correctIndex: 0,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Man muss einen formellen Antrag auf Einbürgerung stellen und die Voraussetzungen (Aufenthalt, Sprache, Einbürgerungstest) erfüllen.",
    explanation_en: "You must submit a formal application for naturalization and meet the requirements (residence, language, naturalization test)."
  },
  {
    id: "291",
    text_de: "Was ist die Bundeswehr?",
    text_en: "What is the Bundeswehr?",
    options: [
      { de: "die Polizei in Deutschland", en: "the police in Germany" },
      { de: "die Armee Deutschlands", en: "the army of Germany" },
      { de: "eine private Sicherheitsfirma", en: "a private security company" },
      { de: "der Geheimdienst", en: "the secret service" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Bundeswehr ist die Armee der Bundesrepublik Deutschland. Sie untersteht dem Bundesverteidigungsministerium.",
    explanation_en: "The Bundeswehr is the army of the Federal Republic of Germany. It is under the Federal Ministry of Defense."
  },
  {
    id: "292",
    text_de: "Was ist in Deutschland die Aufgabe der Polizei?",
    text_en: "What is the task of the police in Germany?",
    options: [
      { de: "Gesetze zu machen", en: "to make laws" },
      { de: "die öffentliche Ordnung zu schützen", en: "to protect public order" },
      { de: "Steuern zu erheben", en: "to collect taxes" },
      { de: "Schulen zu kontrollieren", en: "to control schools" }
    ],
    correctIndex: 1,
    category: "politics",
    isStateSpecific: false,
    explanation_de: "Die Polizei schützt die öffentliche Sicherheit und Ordnung, verfolgt Straftaten und hilft in Notfällen.",
    explanation_en: "The police protect public safety and order, prosecute crimes, and help in emergencies."
  },
  {
    id: "293",
    text_de: "Wann kann man in Deutschland einen Krankenwagen rufen?",
    text_en: "When can you call an ambulance in Germany?",
    options: [
      { de: "bei jedem Arztbesuch", en: "for every doctor visit" },
      { de: "bei einem medizinischen Notfall", en: "in a medical emergency" },
      { de: "für Routineuntersuchungen", en: "for routine checkups" },
      { de: "nur nachts", en: "only at night" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Der Krankenwagen ist für medizinische Notfälle gedacht. Die Notrufnummer ist 112.",
    explanation_en: "The ambulance is for medical emergencies. The emergency number is 112."
  },
  {
    id: "294",
    text_de: "Welche Nummer hat der Notruf für Polizei und Feuerwehr in Deutschland?",
    text_en: "What is the emergency number for police and fire department in Germany?",
    options: [
      { de: "999", en: "999" },
      { de: "110 und 112", en: "110 and 112" },
      { de: "911", en: "911" },
      { de: "100", en: "100" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "110 ist die Polizei, 112 ist Feuerwehr und Rettungsdienst. 112 gilt europaweit.",
    explanation_en: "110 is the police, 112 is fire department and emergency services. 112 is valid throughout Europe."
  },
  {
    id: "295",
    text_de: "Was braucht man in Deutschland für einen Reisepass?",
    text_en: "What do you need in Germany for a passport?",
    options: [
      { de: "ein Foto und einen Antrag", en: "a photo and an application" },
      { de: "nur eine Unterschrift", en: "only a signature" },
      { de: "ein ärztliches Attest", en: "a medical certificate" },
      { de: "eine Empfehlung", en: "a recommendation" }
    ],
    correctIndex: 0,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Für einen Reisepass braucht man ein biometrisches Passfoto, einen Antrag und persönliches Erscheinen beim Bürgeramt.",
    explanation_en: "For a passport, you need a biometric photo, an application, and personal appearance at the citizens' office."
  },
  {
    id: "296",
    text_de: "Wie heißt die Steuernummer in Deutschland?",
    text_en: "What is the tax identification number in Germany called?",
    options: [
      { de: "Kontonummer", en: "account number" },
      { de: "Steueridentifikationsnummer", en: "tax identification number" },
      { de: "Sozialversicherungsnummer", en: "social security number" },
      { de: "Personalausweisnummer", en: "ID card number" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die Steueridentifikationsnummer (Steuer-ID) ist eine 11-stellige Nummer, die jeder Bürger dauerhaft erhält.",
    explanation_en: "The tax identification number (Steuer-ID) is an 11-digit number that every citizen receives permanently."
  },
  {
    id: "297",
    text_de: "Was ist bei der Steuererklärung in Deutschland wichtig?",
    text_en: "What is important regarding tax returns in Germany?",
    options: [
      { de: "Sie ist freiwillig.", en: "They are voluntary." },
      { de: "Sie kann für Arbeitnehmer Pflicht sein.", en: "They may be required for employees." },
      { de: "Nur Ausländer müssen sie abgeben.", en: "Only foreigners must file them." },
      { de: "Sie wird automatisch erstellt.", en: "They are done automatically." }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Für viele Arbeitnehmer ist die Steuererklärung Pflicht, besonders bei mehreren Einkommen oder bestimmten Freibeträgen.",
    explanation_en: "For many employees, the tax return is mandatory, especially with multiple incomes or certain allowances."
  },
  {
    id: "298",
    text_de: "Was ist die gesetzliche Krankenversicherung?",
    text_en: "What is statutory health insurance?",
    options: [
      { de: "eine private Versicherung", en: "a private insurance" },
      { de: "eine Pflichtversicherung für viele Arbeitnehmer", en: "mandatory insurance for many employees" },
      { de: "eine freiwillige Versicherung", en: "a voluntary insurance" },
      { de: "eine Versicherung nur für Beamte", en: "insurance only for civil servants" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die gesetzliche Krankenversicherung ist für die meisten Arbeitnehmer Pflicht. Arbeitgeber und Arbeitnehmer teilen sich die Beiträge.",
    explanation_en: "Statutory health insurance is mandatory for most employees. Employers and employees share the contributions."
  },
  {
    id: "299",
    text_de: "Wer hat Anspruch auf Arbeitslosengeld in Deutschland?",
    text_en: "Who is entitled to unemployment benefits in Germany?",
    options: [
      { de: "alle Einwohner", en: "all residents" },
      { de: "wer lang genug in die Arbeitslosenversicherung eingezahlt hat", en: "those who have paid into unemployment insurance long enough" },
      { de: "nur deutsche Staatsbürger", en: "only German citizens" },
      { de: "nur Beamte", en: "only civil servants" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Arbeitslosengeld erhält, wer mindestens 12 Monate in die Arbeitslosenversicherung eingezahlt hat.",
    explanation_en: "Unemployment benefits are received by those who have paid into unemployment insurance for at least 12 months."
  },
  {
    id: "300",
    text_de: "Was ist die Rentenversicherung in Deutschland?",
    text_en: "What is pension insurance in Germany?",
    options: [
      { de: "eine freiwillige Sparanlage", en: "a voluntary savings plan" },
      { de: "eine Versicherung für das Alter", en: "insurance for old age" },
      { de: "eine Krankenversicherung", en: "health insurance" },
      { de: "eine Unfallversicherung", en: "accident insurance" }
    ],
    correctIndex: 1,
    category: "society",
    isStateSpecific: false,
    explanation_de: "Die Rentenversicherung sichert das Einkommen im Alter. Arbeitnehmer und Arbeitgeber zahlen gemeinsam ein.",
    explanation_en: "Pension insurance secures income in old age. Employees and employers pay in together."
  }
];
