import { MutationTree } from 'vuex';

import {
  IAppState as State,
  IAppMutations as Mutations,
} from '../../interfaces';

export enum MutationTypes {
  SET_Theme = 'SET_Theme',

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

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_Theme](state, payload) {
    state.theme = payload;
    localStorage.holospaceTheme = payload;
  },

  [MutationTypes.SET_SHOW_Navbar](state, payload) {
    state.showNavBar = payload;
  },
  [MutationTypes.SET_SHOW_Footer](state, payload) {
    state.showFooter = payload;
  },

  [MutationTypes.SET_Use_SLIDE_OUT_DRAWER](state, payload) {
    state.useSlideOutDrawer = payload
  },

  [MutationTypes.SET_SIDE_DRAWER_IsOpen](state, payload) {
    state.sideDrawerIsOpen = payload;
  },
  [MutationTypes.TOGGLE_Side_DRAWER](state) {
    state.sideDrawerIsOpen = !state.sideDrawerIsOpen;
  },

  [MutationTypes.SET_META_DRAWER_IsMini](state, payload) {
    state.metaDrawerIsMini = payload;
  },
  [MutationTypes.TOGGLE_Meta_DRAWER](state) {
    state.metaDrawerIsMini = !state.metaDrawerIsMini;
  },

  [MutationTypes.SET_Banner](state, payload) {
    state.banner = payload;
  },
  [MutationTypes.CLEAR_Banner](state) {
    state.banner = undefined;
  },

  [MutationTypes.SET_Toast](state, payload) {
    state.toast = payload;
  },

  [MutationTypes.CLEAR_Toast](state) {
    state.toast = undefined;
  },
};
