import { MutationTree } from 'vuex';

import { IRootState, IRootMutations as Mutations } from '../../interfaces';

export enum MutationTypes {
  UPDATE_Version = 'UPDATE_Version',
}

export const mutations: MutationTree<IRootState> & Mutations = {
  [MutationTypes.UPDATE_Version](state, payload) {
    state.version = payload;
  },
};
