import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

import {
  IRootState,
  IRootActions as Actions,
  IRootMutations as Mutations,
  IRootGetters as Getters,
} from '../../interfaces';

export type RootStoreModuleTypes<S = IRootState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
