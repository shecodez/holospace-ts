import { ActionTree } from 'vuex';

import {
  IRootState,
  IAppState as State,
  IAppActions as Actions,
  IBanner,
  IToast,
  AppTheme,
} from '../../interfaces';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  INIT_Theme = 'INIT_Theme',
  SET_Theme = 'SET_Theme',
  TOGGLE_Theme = 'TOGGLE_Theme',

  SET_SHOW_Navbar = 'SET_SHOW_Navbar',
  SET_SHOW_Footer = 'SET_SHOW_Footer',

  SET_Use_SLIDE_OUT_DRAWER = 'SET_Use_SLIDE_OUT_DRAWER',

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
  [ActionTypes.INIT_Theme]({ commit }) {
    const cachedTheme = localStorage.holospaceTheme ? localStorage.holospaceTheme : false;
    //  `true` if the user has set theme to `dark` on browser/OS
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;

    if (cachedTheme) commit(MutationTypes.SET_Theme, cachedTheme);
    else if (userPrefersDark) commit(MutationTypes.SET_Theme, AppTheme.DARK);
    else commit(MutationTypes.SET_Theme, AppTheme.LIGHT);
  },
  [ActionTypes.SET_Theme]({ commit }, theme: AppTheme) {
    commit(MutationTypes.SET_Theme, theme);
  },
  [ActionTypes.TOGGLE_Theme]({ commit }) {
    switch (localStorage.holospaceTheme) {
      case AppTheme.LIGHT:
        commit(MutationTypes.SET_Theme, AppTheme.DARK);
        break;

      default:
        commit(MutationTypes.SET_Theme, AppTheme.LIGHT);
        break;
    }
  },

  [ActionTypes.SET_SHOW_Navbar]({ commit }, showNavbar) {
    commit(MutationTypes.SET_SHOW_Navbar, showNavbar);
  },
  [ActionTypes.SET_SHOW_Footer]({ commit }, showFooter) {
    commit(MutationTypes.SET_SHOW_Footer, showFooter);
  },

  [ActionTypes.SET_Use_SLIDE_OUT_DRAWER]({ commit }, useSlideOut) {
    commit(MutationTypes.SET_Use_SLIDE_OUT_DRAWER, useSlideOut);
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
