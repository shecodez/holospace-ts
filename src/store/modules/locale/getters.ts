import { GetterTree } from 'vuex';

import {
  IRootState,
  ILocaleState as State,
  ILocaleGetters as Getters,
} from '../../interfaces';

export const getters: GetterTree<State, IRootState> & Getters = {
  totalSupportedLocalesCount: (state) => {
    return state.supportedLocales.length;
  },
  // isSupportedLocale: (state, locale) => {
  //   return state.supportedLocales.includes(locale)
  // }
};