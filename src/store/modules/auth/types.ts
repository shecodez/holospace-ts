import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

import {
  IAuthState as State,
  IAuthActions as Actions,
  IAuthMutations as Mutations,
  IAuthGetters as Getters,
} from '@/store/interfaces';

export type AuthStoreModuleTypes<S = State> = Omit<VuexStore<S>, 'commit' | 'dispatch' | 'getters'> & {
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
