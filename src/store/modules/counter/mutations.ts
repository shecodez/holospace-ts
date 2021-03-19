import { MutationTree } from 'vuex';
import { CounterMutationsTypes, CounterStateTypes } from './../../interfaces';

export enum MutationTypes {
  SET_COUNTER = 'SET_COUNTER',
  RESET_COUNTER = 'RESET_COUNTER',
}

export const mutations: MutationTree<CounterStateTypes> &
  CounterMutationsTypes = {
  [MutationTypes.SET_COUNTER](state: CounterStateTypes, payload: number) {
    state.counter = payload;
  },
  [MutationTypes.RESET_COUNTER](state: CounterStateTypes) {
    state.counter = 0;
  },
};
