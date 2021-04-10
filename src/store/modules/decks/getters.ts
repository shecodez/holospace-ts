import { GetterTree } from 'vuex';

import {
  IRootState,
  IDeckState as State,
  IDeckGetters as Getters,
} from '../../interfaces';

export const getters: GetterTree<State, IRootState> & Getters = {
  totalDeckCount: (state) => {
    return state.deckList.length;
  },
  getDeckById: (state) => (id: string) => {
    return state.deckList.find((deck) => deck.id === id);
  },
  getActiveDeckCaptainId: (state) => {
    return state.activeDeck?.captainId;
  },
};
