import { ActionTree } from 'vuex';

import { IRootState, ILocaleState as State, ILocaleActions as Actions } from '../../interfaces';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  INIT_Locale = 'INIT_Locale',
  SET_Locale = 'SET_Locale',
}

export const actions: ActionTree<State, IRootState> & Actions = {
  [ActionTypes.INIT_Locale]({ commit }) {
    const cachedLang = localStorage.holospaceLang ? localStorage.holospaceLang : false;
    // get the local the user has set on browser/OS
    //const userPreferedLocale = window.navigator.language.split('-')[0];

    if (cachedLang) commit(MutationTypes.SET_Locale, cachedLang);
    /*else if (userPreferedLocale) {
      if (getters.isSupportedLocale(userPreferedLocale)) {
        commit(MutationTypes.SET_Locale, userPreferedLocale);
      }
    }*/ else commit(MutationTypes.SET_Locale, 'en'); // state.locale.fallbackLocale
  },
  [ActionTypes.SET_Locale]({ commit }, lang: string) {
    commit(MutationTypes.SET_Locale, lang);
  },
};
