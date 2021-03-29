import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

import {
  IDiskSpaceState as State,
  IDiskSpaceMutations as Mutations,
  IDiskSpaceGetters as Getters,
  IDiskSpaceActions as Actions,
} from '@/store/interfaces';

export type DiskSpaceStoreModuleTypes<S = State> = Omit<
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