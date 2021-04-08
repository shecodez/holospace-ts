import { MutationTree } from 'vuex';
import { IUserState as State, IUserMutations as Mutations } from '../../interfaces';

export enum MutationTypes {
  SET_DECK_Members = 'SET_DECK_Members',
  SET_DISKSPACE_Subscribers = 'SET_DISKSPACE_Subscribers',
  SET_ME_Friends = 'SET_ME_Friends',

  //ADD_User = 'ADD_User',
  //DELETE_User = 'DELETE_User',

  SET_LOADING_Users = 'SET_LOADING_Users',
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DECK_Members](state, payload) {
    state.members = payload;
  },
  [MutationTypes.SET_DISKSPACE_Subscribers](state, payload) {
    state.subscribers = payload;
  },
  [MutationTypes.SET_ME_Friends](state, payload) {
    state.friends = payload;
  },

  [MutationTypes.SET_LOADING_Users](state, payload) {
    state.isLoading = payload;
  },
};
