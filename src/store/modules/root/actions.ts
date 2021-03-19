import { ActionTree } from 'vuex';

import { IRootState, IRootActions as Actions } from '../../interfaces';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  UPDATE_Version = 'UPDATE_Version',
}

export const actions: ActionTree<IRootState, IRootState> & Actions = {
  [ActionTypes.UPDATE_Version]({ commit }, version: string) {
    commit(MutationTypes.UPDATE_Version, version);
  },
};
