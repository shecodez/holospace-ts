import { ActionTree } from 'vuex';

import {
  IRootState,
  IAppState as State,
  IAppActions as Actions,
  IBanner,
  IToast,
} from '../../interfaces';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  TOGGLE_IsDarkTheme = 'TOGGLE_IsDarkTheme',

  SET_SHOW_Navbar = 'SET_SHOW_Navbar',
  SET_SHOW_Footer = 'SET_SHOW_Footer',

  SET_SIDE_DRAWER_IsOpen = 'SET_SIDE_DRAWER_IsOpen',
  TOGGLE_Side_DRAWER = 'TOGGLE_Side_DRAWER',
  SET_META_DRAWER_IsMini = 'SET_META_DRAWER_IsMini',
  TOGGLE_Meta_DRAWER = 'TOGGLE_Meta_DRAWER',

  SET_Toast = 'SET_Toast',
  CLEAR_Toast = 'CLEAR_Toast',

  SET_Banner = 'SET_Banner',
  CLEAR_Banner = 'CLEAR_Banner',
}

export const actions: ActionTree<State, IRootState> & Actions = {
  [ActionTypes.TOGGLE_IsDarkTheme]({ commit }) {
    commit(MutationTypes.TOGGLE_IsDarkTheme);
  },

  [ActionTypes.SET_SHOW_Navbar]({ commit }, showNavbar) {
    commit(MutationTypes.SET_SHOW_Navbar, showNavbar);
  },
  [ActionTypes.SET_SHOW_Footer]({ commit }, showFooter) {
    commit(MutationTypes.SET_SHOW_Footer, showFooter);
  },

  [ActionTypes.SET_SIDE_DRAWER_IsOpen]({ commit }, isOpen: boolean) {
    commit(MutationTypes.SET_SIDE_DRAWER_IsOpen, isOpen);
  },
  [ActionTypes.TOGGLE_Side_DRAWER]({ commit }) {
    commit(MutationTypes.TOGGLE_Side_DRAWER);
  },

  [ActionTypes.SET_META_DRAWER_IsMini]({ commit }, isOpen: boolean) {
    commit(MutationTypes.SET_META_DRAWER_IsMini, isOpen);
  },
  [ActionTypes.TOGGLE_Meta_DRAWER]({ commit }) {
    commit(MutationTypes.TOGGLE_Meta_DRAWER);
  },

  [ActionTypes.SET_Banner]({ commit }, banner: IBanner) {
    commit(MutationTypes.SET_Banner, banner);
  },
  [ActionTypes.CLEAR_Banner]({ commit }) {
    commit(MutationTypes.CLEAR_Banner);
  },

  [ActionTypes.SET_Toast]({ commit }, toast: IToast) {
    commit(MutationTypes.SET_Toast, toast);
  },
  [ActionTypes.CLEAR_Toast]({ commit }) {
    commit(MutationTypes.CLEAR_Toast);
  },
};
