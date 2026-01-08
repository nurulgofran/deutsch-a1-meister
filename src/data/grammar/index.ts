import { GrammarPattern } from '../types';
import { articlesGrammar } from './articles';
import { verbsGrammar } from './verbs';
import { verbsMoreGrammar } from './verbs_more';
import { modalsGrammar } from './modals';
import { sentenceStructureGrammar } from './sentence_structure';
import { accusativeGrammar } from './accusative';
import { imperativeGrammar } from './imperative';
import { possessiveGrammar } from './possessive';
import { prepositionsGrammar } from './prepositions';
import { perfectTenseGrammar } from './perfect_tense';
import { separableVerbsGrammar } from './separable_verbs';
import { dativeGrammar } from './dative';
import { connectorsGrammar } from './connectors';
import { questionWordsGrammar } from './question_words';
import { demonstrativesGrammar } from './demonstratives';
import { simplePastGrammar } from './simple_past';
import { timeGrammar } from './time_grammar';

export const grammarPatterns: GrammarPattern[] = [
  articlesGrammar,
  verbsGrammar,
  modalsGrammar,
  sentenceStructureGrammar,
  verbsMoreGrammar,
  imperativeGrammar,
  perfectTenseGrammar,
  prepositionsGrammar,
  accusativeGrammar,
  possessiveGrammar,
  separableVerbsGrammar,
  dativeGrammar,
  connectorsGrammar,
  questionWordsGrammar,
  demonstrativesGrammar,
  simplePastGrammar,
  timeGrammar
];

export * from './articles';
export * from './verbs';
export * from './modals';
export * from './accusative';
export * from './sentence_structure';
export * from './verbs_more';
export * from './imperative';
export * from './perfect_tense';
export * from './prepositions';
export * from './possessive';
export * from './separable_verbs';
