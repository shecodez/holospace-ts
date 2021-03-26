import { MutationTree } from 'vuex';

import { ILocaleState as State, ILocaleMutations as Mutations } from '../../interfaces';
import { i18n, setI18nLang } from '@/i18n';

export enum MutationTypes {
  SET_Locale = 'SET_Locale',
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_Locale](state, payload) {
    state.lang = payload;
    localStorage.holospaceLang = payload;
    setI18nLang(i18n, payload)
  },
};
