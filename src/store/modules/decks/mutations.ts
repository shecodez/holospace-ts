import { MutationTree } from 'vuex';
import {
  IDeckState as State,
  IDeckMutations as Mutations,
  IDeck,
} from '../../interfaces';

export enum MutationTypes {
  SET_ACTIVE_Deck = 'SET_ACTIVE_Deck',
  CREATE_Deck = 'CREATE_Deck',
  SET_AUTH_USER_Decks = 'SET_AUTH_USER_Decks',
  EDIT_Deck = 'EDIT_Deck',
  UPDATE_Deck = 'UPDATE_Deck',
  DELETE_Deck = 'DELETE_Deck',

  SET_LOADING_Decks = 'SET_LOADING_Decks',
  SET_CREATE_Deck_MODAL = 'SET_CREATE_Deck_MODAL',
  SET_EDIT_Deck_MODAL = 'SET_EDIT_Deck_MODAL',
  SET_ADD_OR_JOIN_Deck_MODAL = 'SET_ADD_OR_JOIN_Deck_MODAL',
  SET_JOIN_Deck_MODAL = 'SET_JOIN_Deck_MODAL',
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ACTIVE_Deck](state, payload) {
    state.activeDeck = payload;
  },
  [MutationTypes.CREATE_Deck](state, payload) {
    state.deckList.unshift(payload);
  },
  [MutationTypes.SET_AUTH_USER_Decks](state, payload) {
    state.deckList = payload;
  },
  [MutationTypes.EDIT_Deck](state, payload) {
    const idx = state.deckList.findIndex((x: IDeck) => x.id === payload.id);
    if (idx === -1) return;

    state.deckList[idx] = {
      ...state.deckList[idx],
      isEditing: !state.deckList[idx].isEditing,
    };
  },
  [MutationTypes.UPDATE_Deck](state, payload) {
    state.deckList = state.deckList.map((deck: IDeck) => {
      if (deck.id === payload.id) {
        return { ...deck, ...payload };
      }
      return deck;
    });
  },
  [MutationTypes.DELETE_Deck](state, payload) {
    const idx = state.deckList.findIndex((x: IDeck) => x.id === payload.id);
    if (idx === -1) return;

    state.deckList.splice(idx, 1);
  },

  [MutationTypes.SET_LOADING_Decks](state, payload) {
    state.isLoading = payload;
  },
  [MutationTypes.SET_CREATE_Deck_MODAL](state, payload) {
    state.showCreateDeckModal = payload;
  },
  [MutationTypes.SET_EDIT_Deck_MODAL](state, payload) {
    state.showEditDeckModal = payload.isOpen;
    state.editDeckId = payload.deckId;
  },
  [MutationTypes.SET_ADD_OR_JOIN_Deck_MODAL](state, payload) {
    state.showAddOrJoinDeckModal = payload;
  },
  [MutationTypes.SET_JOIN_Deck_MODAL](state, payload) {
    state.showJoinDeckModal = payload;
  },
};
