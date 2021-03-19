import { ActionTypes as rootATypes } from './modules/root/actions';
import { ActionTypes as counterATypes } from './modules/counter/actions';
import { ActionTypes as appATypes } from './modules/app/actions';
import { ActionTypes as deckATypes } from './modules/decks/actions';

const AllActionTypes = {
  ...rootATypes,
  ...counterATypes,
  ...appATypes,
  ...deckATypes,
};

export default AllActionTypes;
