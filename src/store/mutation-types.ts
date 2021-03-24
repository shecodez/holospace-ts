import { MutationTypes as counterMTypes } from './modules/counter/mutations';
import { MutationTypes as AppMTypes } from './modules/app/mutations';
import { MutationTypes as DeckMTypes } from './modules/decks/mutations';
import { MutationTypes as LocaleMTypes } from './modules/locale/mutations';

const AllMutationTypes = {
  ...counterMTypes,
  ...AppMTypes,
  ...DeckMTypes,
  ...LocaleMTypes
};

export default AllMutationTypes;
