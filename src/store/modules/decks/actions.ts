import { ActionTree } from 'vuex';

import {
  IRootState,
  IDeckState as State,
  IDeckActions as Actions,
} from '../../interfaces';
import { MutationTypes } from './mutations';

import { decks } from '../../../data/mock';

export enum ActionTypes {
  GET_AUTH_USER_Decks = 'GET_AUTH_USER_Decks',
  GET_ACTIVE_Deck = 'GET_ACTIVE_Deck',

  SET_CREATE_Deck_MODAL = 'SET_CREATE_Deck_MODAL',
  SET_EDIT_Deck_MODAL = 'SET_EDIT_Deck_MODAL',
  SET_ADD_OR_JOIN_Deck_MODAL = 'SET_ADD_OR_JOIN_Deck_MODAL',
  SET_JOIN_Deck_MODAL = 'SET_JOIN_Deck_MODAL',
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, IRootState> & Actions = {
  async [ActionTypes.GET_AUTH_USER_Decks]({ commit }) {
    commit(MutationTypes.SET_LOADING_Decks, true);

    await sleep(1000);

    commit(MutationTypes.SET_LOADING_Decks, false);
    commit(MutationTypes.SET_AUTH_USER_Decks, decks);
  },

  async [ActionTypes.GET_ACTIVE_Deck]({ commit, state }, deckId) {
    if (state.deckList.length) {
      const deck = state.deckList.find((deck) => deck.id === deckId)
      commit(MutationTypes.SET_ACTIVE_Deck, deck)
    } else  {
      // Fetch active deck from db
      const deck = decks.find((deck) => deck.id === deckId)
      await sleep(1000);
      commit(MutationTypes.SET_ACTIVE_Deck, deck);
    }
  },

  [ActionTypes.SET_CREATE_Deck_MODAL]({ commit }) {
    commit(MutationTypes.SET_CREATE_Deck_MODAL, true);
  },

  [ActionTypes.SET_EDIT_Deck_MODAL]({ commit }) {
    commit(MutationTypes.SET_EDIT_Deck_MODAL, { isOpen: true, deckId: '1' });
  },

  [ActionTypes.SET_ADD_OR_JOIN_Deck_MODAL]({ commit }) {
    commit(MutationTypes.SET_ADD_OR_JOIN_Deck_MODAL, true);
  },

  [ActionTypes.SET_JOIN_Deck_MODAL]({ commit }) {
    commit(MutationTypes.SET_JOIN_Deck_MODAL, true);
  },
};
