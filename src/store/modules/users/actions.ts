import { ActionTree } from 'vuex';

import { IRootState, IUserState as State, IUserActions as Actions } from '@/store/interfaces';
import { MutationTypes } from './mutations';
import { users } from '@/data/mock';

export enum ActionTypes {
  GET_DECK_Members = 'GET_DECK_Members',
  GET_DISKSPACE_Subscribers = 'GET_DISKSPACE_Subscribers',
  GET_ME_Friends = 'GET_ME_Friends',

  //ADD_User = 'ADD_User',
  //DELETE_User = 'DELETE_User',
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, IRootState> & Actions = {
  async [ActionTypes.GET_DECK_Members]({ commit }, deckId) {
    commit(MutationTypes.SET_LOADING_Users, true);

    await sleep(1000);
    //const members = memberships.filter((membership) => memberships.deckId === deckId)

    commit(MutationTypes.SET_LOADING_Users, false);
    commit(MutationTypes.SET_DECK_Members, users);
  },

  async [ActionTypes.GET_DISKSPACE_Subscribers]({ commit }, diskSpaceId) {
    commit(MutationTypes.SET_LOADING_Users, true);

    await sleep(1000);
    //const subscribers = subscriptions.filter((subscription) => subscriptions.diskSpaceId === diskSpaceId)

    commit(MutationTypes.SET_LOADING_Users, false);
    commit(MutationTypes.SET_DISKSPACE_Subscribers, users);
  },

  async [ActionTypes.GET_ME_Friends]({ commit }) {
    commit(MutationTypes.SET_LOADING_Users, true);

    await sleep(1000);

    commit(MutationTypes.SET_LOADING_Users, false);
    commit(MutationTypes.SET_ME_Friends, users);
  },
};
