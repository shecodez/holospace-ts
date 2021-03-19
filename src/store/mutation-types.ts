import { MutationTypes as counterMTypes } from './modules/counter/mutations';
import { MutationTypes as appMTypes } from './modules/app/mutations';
import { MutationTypes as deckMTypes } from './modules/decks/mutations';

const AllMutationTypes = {
  ...counterMTypes,
  ...appMTypes,
  ...deckMTypes,
};

export default AllMutationTypes;
