import { Module } from 'vuex';

import { IRootState, IDeckState as State } from '../../interfaces';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

// Module
const deck: Module<State, IRootState> = {
  state,
  actions,
  mutations,
  getters,
};

export default deck;
