import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

import {
  IAppState as State,
  IAppActions as Actions,
  IAppMutations as Mutations,
  IAppGetters as Getters,
} from '../../interfaces';

export type AppStoreModuleTypes<S = State> = Omit<
  VuexStore<S>,
  'commit' | 'dispatch' | 'getters'
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
