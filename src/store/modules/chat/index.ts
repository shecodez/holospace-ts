import { Module } from 'vuex';

import { IRootState, IChatState as State } from '@/store/interfaces';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

// Module
const chat: Module<State, IRootState> = {
  state,
  actions,
  mutations,
  getters,
};

export default chat;