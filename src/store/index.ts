import { createStore, createLogger } from 'vuex';
import { useStore as VuexStore } from 'vuex';

import { IMergedState } from './interfaces';
import { RootStoreModuleTypes } from './modules/root/types';
import { CounterStoreModuleTypes } from './modules/counter/types';
import { AppStoreModuleTypes } from './modules/app/types';
import { DeckStoreModuleTypes } from './modules/decks/types';

import root from './modules/root';

export type Store = RootStoreModuleTypes<Pick<IMergedState, 'root'>> &
  CounterStoreModuleTypes<Pick<IMergedState, 'counter'>> &
  AppStoreModuleTypes<Pick<IMergedState, 'app'>> &
  DeckStoreModuleTypes<Pick<IMergedState, 'decks'>>;

// Plug in logger when in development environment
const isDebug = process.env.NODE_ENV !== 'production';
const plugins = isDebug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  ...root,
});

/**
 * Returns Whole Store Object
 */
export function useStore(): Store {
  return VuexStore() as Store;
}
