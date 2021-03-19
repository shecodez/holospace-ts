import { IDeckState as State } from '../../interfaces';

export const state: State = {
  isLoading: false,
  activeDeck: undefined,
  deckList: [],
  showCreateDeckModal: false,
  showEditDeckModal: false,
  editModalDeckId: undefined,
};
