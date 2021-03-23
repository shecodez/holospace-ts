import { GetterTree } from 'vuex';

import {
  IRootState,
  IAppState as State,
  IAppGetters as Getters,
  AppThemes,
} from '../../interfaces';

export const getters: GetterTree<State, IRootState> & Getters = {
  showBanner: (state): boolean => {
    return !!state.banner;
  },
  showToast: (state): boolean => {
    return !!state.toast;
  },
  isDarkTheme: (state): boolean => {
    return state.theme === AppThemes.DARK ? true : false;
  },
};
