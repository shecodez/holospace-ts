import { MutationTree } from 'vuex';
import { IAuthState as State, IAuthMutations as Mutations } from '../../interfaces';

export enum MutationTypes {
  SET_AUTH_User = 'SET_AUTH_User',
  SET_AUTHENTICATING = 'SET_AUTHENTICATING',
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_AUTH_User](state, payload) {
    state.me = payload;
  },
  [MutationTypes.SET_AUTHENTICATING](state, payload) {
    state.isAuthenticating = payload;
  },
};
