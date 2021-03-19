import { ActionTree } from 'vuex';

import { MutationTypes } from './mutations';
import {
  CounterActionsTypes,
  CounterStateTypes,
  IRootState,
} from '../../interfaces';

export enum ActionTypes {
  GET_COUNTER = 'GET_COUNTER',
}

export const actions: ActionTree<CounterStateTypes, IRootState> &
  CounterActionsTypes = {
  [ActionTypes.GET_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.SET_COUNTER, payload);
  },
};
