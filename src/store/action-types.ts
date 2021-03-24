import { ActionTypes as RootATypes } from './modules/root/actions';
import { ActionTypes as counterATypes } from './modules/counter/actions';
import { ActionTypes as AppATypes } from './modules/app/actions';
import { ActionTypes as DeckATypes } from './modules/decks/actions';
import { ActionTypes as LocaleATypes } from './modules/locale/actions';

const AllActionTypes = {
  ...RootATypes,
  ...counterATypes,
  ...AppATypes,
  ...DeckATypes,
  ...LocaleATypes,
};

export default AllActionTypes;
