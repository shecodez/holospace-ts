import { IDeckState as State } from '../../interfaces';

export const state: State = {
  isLoading: false,
  activeDeck: undefined,
  deckList: [],
  
  showCreateDeckModal: false,
  showEditDeckModal: false,
  showAddOrJoinDeckModal: false,
  showJoinDeckModal: false,
  editDeckId: undefined,
};
