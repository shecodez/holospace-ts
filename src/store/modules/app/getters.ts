import { GetterTree } from 'vuex';

import {
  IRootState,
  IAppState as State,
  IAppGetters as Getters,
} from '../../interfaces';

export const getters: GetterTree<State, IRootState> & Getters = {
  showBanner: (state): boolean => {
    return !!state.banner;
  },
  showToast: (state): boolean => {
    return !!state.toast;
  },
};
