import { GetterTree } from 'vuex';

import { IRootState, IAuthState as State, IAuthGetters as Getters } from '@/store/interfaces';

export const getters: GetterTree<State, IRootState> & Getters = {
  isAuthenticated: (state): boolean => {
    return !!state.me;
  },
};
