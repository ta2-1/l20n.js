import 'babel-polyfill';
import '../../intl/polyfill';

export { default as FTLASTSerializer } from '../../ftl/ast/serializer';
export { default as FTLASTParser } from '../../ftl/ast/parser';
export { default as FTLEntriesParser } from '../../ftl/entries/parser';
export { createEntriesFromAST } from '../../ftl/entries/transformer';

export { getPluralForms } from '../../intl/plurals.js';
export { fetchResource } from './io';
