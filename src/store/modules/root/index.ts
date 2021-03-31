import { Module, ModuleTree } from 'vuex';

import { IMergedState, IRootState } from '../../interfaces';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

import counter from '../counter';
import app from '../app';
import decks from '../decks';
import locale from '../locale';
import diskSpaces from '../diskSpaces'
import chat from '../chat'

// Modules
const modules: ModuleTree<IMergedState> = {
  counter,
  app,
  decks,
  locale,
  diskSpaces,
  chat
};

// Root Module
const root: Module<IRootState, IRootState> = {
  state,
  actions,
  mutations,
  getters,
  modules,
};

export default root;
