import { MutationTypes as counterMTypes } from './modules/counter/mutations';
import { MutationTypes as AppMTypes } from './modules/app/mutations';
import { MutationTypes as DeckMTypes } from './modules/decks/mutations';
import { MutationTypes as LocaleMTypes } from './modules/locale/mutations';
import { MutationTypes as DiskSpaceMTypes } from './modules/diskSpaces/mutations';
import { MutationTypes as ChatMTypes } from './modules/chat/mutations'
import { MutationTypes as UserMTypes } from './modules/users/mutations'

const AllMutationTypes = {
  ...counterMTypes,
  ...AppMTypes,
  ...DeckMTypes,
  ...LocaleMTypes,
  ...DiskSpaceMTypes,
  ...ChatMTypes,
  ...UserMTypes
};

export default AllMutationTypes;
