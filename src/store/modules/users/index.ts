import { Module } from 'vuex';

import { IRootState, IUserState as State } from '@/store/interfaces';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

// Module
const user: Module<State, IRootState> = {
  state,
  actions,
  mutations,
  getters,
};

export default user;