import { createStore, createLogger } from 'vuex';
import { useStore as VuexStore } from 'vuex';

import { IMergedState } from './interfaces';
import { RootStoreModuleTypes } from './modules/root/types';
import { CounterStoreModuleTypes } from './modules/counter/types';
import { AppStoreModuleTypes } from './modules/app/types';
import { DeckStoreModuleTypes } from './modules/decks/types';
import { LocaleStoreModuleTypes } from './modules/locale/types';
import { DiskSpaceStoreModuleTypes } from './modules/diskSpaces/types';
import { ChatStoreModuleTypes } from './modules/chat/types';
import { UserStoreModuleTypes } from './modules/users/types';
import { AuthStoreModuleTypes } from './modules/auth/types';

import root from './modules/root';

export type Store = RootStoreModuleTypes<Pick<IMergedState, 'root'>> &
  CounterStoreModuleTypes<Pick<IMergedState, 'counter'>> &
  AppStoreModuleTypes<Pick<IMergedState, 'app'>> &
  DeckStoreModuleTypes<Pick<IMergedState, 'decks'>> &
  LocaleStoreModuleTypes<Pick<IMergedState, 'locale'>> &
  DiskSpaceStoreModuleTypes<Pick<IMergedState, 'diskSpaces'>> &
  ChatStoreModuleTypes<Pick<IMergedState, 'chat'>> &
  UserStoreModuleTypes<Pick<IMergedState, 'users'>> &
  AuthStoreModuleTypes<Pick<IMergedState, 'auth'>>;

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
