import { Module } from 'vuex';

import { IRootState, IAppState as State } from '../../interfaces';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

// Module
const app: Module<State, IRootState> = {
  state,
  actions,
  mutations,
  getters,
};

export default app;
