import { modalsGrammar } from './modals';
import { accusativeGrammar } from './accusative';
import { articlesGrammar } from './articles';
import { verbsGrammar } from './verbs';
import { sentenceStructureGrammar } from './sentence_structure';
import { verbsMoreGrammar } from './verbs_more';
import { imperativeGrammar } from './imperative';
import { perfectTenseGrammar } from './perfect_tense';

export const grammarPatterns = [
  articlesGrammar,
  verbsGrammar,
  modalsGrammar,
  accusativeGrammar,
  sentenceStructureGrammar,
  verbsMoreGrammar,
  imperativeGrammar,
  perfectTenseGrammar
];

export * from './articles';
export * from './verbs';
export * from './modals';
export * from './accusative';
export * from './sentence_structure';
export * from './verbs_more';
export * from './imperative';
export * from './perfect_tense';
