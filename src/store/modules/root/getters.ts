import { GetterTree } from 'vuex';

import { IRootState, IRootGetters as Getters } from '../../interfaces';

export const getters: GetterTree<IRootState, IRootState> & Getters = {
  getVersion: (state): string => {
    return state.version;
  },
};
