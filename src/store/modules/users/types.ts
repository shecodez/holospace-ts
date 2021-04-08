import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

import {
  IUserState as State,
  IUserActions as Actions,
  IUserMutations as Mutations,
  IUserGetters as Getters,
} from '../../interfaces';

export type UserStoreModuleTypes<S = State> = Omit<
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
