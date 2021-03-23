import { ActionContext } from 'vuex';

import { MutationTypes as CounterMTypes } from './modules/counter/mutations';
import { ActionTypes as CounterATypes } from './modules/counter/actions';
import { MutationTypes as RootMTypes } from './modules/root/mutations';
import { ActionTypes as RootATypes } from './modules/root/actions';
import { MutationTypes as AppMTypes } from './modules/app/mutations';
import { ActionTypes as AppATypes } from './modules/app/actions';
import { MutationTypes as DeckMTypes } from './modules/decks/mutations';
import { ActionTypes as DeckATypes } from './modules/decks/actions';

export interface IRootState {
  root: boolean;
  version: string;
}

export interface IMergedState extends IRootState {
  counter: CounterStateTypes;
  app: IAppState;
  decks: IDeckState;
}

export interface IRootMutations<S = IRootState> {
  [RootMTypes.UPDATE_Version](state: S, payload: string): void;
}

// prettier-ignore
type AugmentedActionCtxRoot = Omit<ActionContext<IRootState, IRootState>, 'commit'> & {
  commit<K extends keyof IRootMutations>(
    key: K,
    payload: Parameters<IRootMutations[K]>[1]
  ): ReturnType<IRootMutations[K]>;
};

export interface IRootActions {
  [RootATypes.UPDATE_Version](
    { commit }: AugmentedActionCtxRoot,
    payload: string
  ): void;
}

export interface IRootGetters {
  getVersion(state: IRootState): string;
}

/*********************** COUNTER MODULE TYPES ************************/

export interface CounterStateTypes {
  counter?: number;
  rootDispatch?: boolean;
}

export interface CounterGettersTypes {
  doubledCounter(state: CounterStateTypes): number;
  counterValue(state: CounterStateTypes): number;
}

export type CounterMutationsTypes<S = CounterStateTypes> = {
  [CounterMTypes.SET_COUNTER](state: S, payload: number): void;
  [CounterMTypes.RESET_COUNTER](state: S): void;
};

export type AugmentedActionContextCounter = {
  commit<K extends keyof CounterMutationsTypes>(
    key: K,
    payload: Parameters<CounterMutationsTypes[K]>[1]
  ): ReturnType<CounterMutationsTypes[K]>;
} & Omit<ActionContext<CounterStateTypes, IRootState>, 'commit'>;

export interface CounterActionsTypes {
  [CounterATypes.GET_COUNTER](
    { commit }: AugmentedActionContextCounter,
    payload: number
  ): void;
}

/************************* APP MODULE TYPES **************************/
export enum AlertTypes {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARNING = 'WARNING',
  CUSTOM = 'CUSTOM',
}

export enum AppThemes {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface IAlert {
  type: AlertTypes;
  text: string;
  color?: string; // required if type !== CUSTOM
  icon?: string; // required if type !== CUSTOM
  isDismissible: boolean;
}

export interface IToast extends IAlert {
  position: string;
  timeout: number; // 0 = indefinitely (recommend: 4000 - 10000 ms)
}

export interface IBanner extends IAlert {
  actionBtnText: string;
  onClickAction: string; // () => {}
}

export interface IAppState {
  theme: AppThemes | undefined;
  showNavBar: boolean;
  showFooter: boolean;
  //isPopOutSideDrawer: boolean,
  sideDrawerIsOpen: boolean;
  metaDrawerIsMini: boolean;
  toast?: IToast | undefined;
  banner?: IBanner | undefined;
}

export interface IAppMutations<S = IAppState> {
  [AppMTypes.SET_Theme](state: S, payload: AppThemes): void;

  [AppMTypes.SET_SHOW_Navbar](state: S, payload: boolean): void;
  [AppMTypes.SET_SHOW_Footer](state: S, payload: boolean): void;

  [AppMTypes.SET_SIDE_DRAWER_IsOpen](state: S, payload: boolean): void;
  [AppMTypes.TOGGLE_Side_DRAWER](state: S): void;

  [AppMTypes.SET_META_DRAWER_IsMini](state: S, payload: boolean): void;
  [AppMTypes.TOGGLE_Meta_DRAWER](state: S): void;

  [AppMTypes.SET_Banner](state: S, payload: IBanner): void;
  [AppMTypes.CLEAR_Banner](state: S): void;

  [AppMTypes.SET_Toast](state: S, payload: IToast): void;

  [AppMTypes.CLEAR_Toast](state: S): void;
}
// prettier-ignore
type AugmentedActionCtxApp  = Omit<ActionContext<IAppState, IRootState>, 'commit'> & {
  commit<K extends keyof IAppMutations>(
    key: K,
    payload?: Parameters<IAppMutations[K]>[1]
  ): ReturnType<IAppMutations[K]>;
};

export interface IAppActions {
  [AppATypes.INIT_Theme]({ commit }: AugmentedActionCtxApp): void;
  [AppATypes.SET_Theme](
    { commit }: AugmentedActionCtxApp,
    payload: String
  ): void;
  [AppATypes.TOGGLE_Theme]({ commit }: AugmentedActionCtxApp): void;

  [AppATypes.SET_SHOW_Navbar](
    { commit }: AugmentedActionCtxApp,
    payload: boolean
  ): void;
  [AppATypes.SET_SHOW_Footer](
    { commit }: AugmentedActionCtxApp,
    payload: boolean
  ): void;

  [AppATypes.SET_SIDE_DRAWER_IsOpen](
    { commit }: AugmentedActionCtxApp,
    payload: boolean
  ): void;
  [AppATypes.TOGGLE_Side_DRAWER]({ commit }: AugmentedActionCtxApp): void;

  [AppATypes.SET_META_DRAWER_IsMini](
    { commit }: AugmentedActionCtxApp,
    payload: boolean
  ): void;
  [AppATypes.TOGGLE_Meta_DRAWER]({ commit }: AugmentedActionCtxApp): void;

  [AppATypes.SET_Banner](
    { commit }: AugmentedActionCtxApp,
    payload: IBanner
  ): void;
  [AppATypes.CLEAR_Banner]({ commit }: AugmentedActionCtxApp): void;

  [AppATypes.SET_Toast](
    { commit }: AugmentedActionCtxApp,
    payload: IToast
  ): void;
  [AppATypes.CLEAR_Toast]({ commit }: AugmentedActionCtxApp): void;
}

export interface IAppGetters {
  showBanner(state: IAppState): boolean;
  showToast(state: IAppState): boolean;
  isDarkTheme(state: IAppState): boolean;
}

/************************ DECK MODULE TYPES **************************/
export enum Regions {
  US_EAST = 'US-East',
  JP_ASIA = 'JP-Asia',
}

export type IDeck = {
  id: string; // guid
  name: string;
  avatarUrl?: string;
  createdBy: string; // UserId - guid
  ids: string; // (Init Disk Space) Id - guid
  isEditing?: boolean;
  hq: Regions;
  //members?: User[];
  //lastModBy: string; // UserId
  //createdAt: serverTimestamp;
  //updatedAt: null;
};

export interface IDeckState {
  isLoading: boolean;
  activeDeck: IDeck | undefined;
  deckList: IDeck[];
  showCreateDeckModal: boolean;
  showEditDeckModal: boolean;
  editDeckId: string | undefined;
  showAddOrJoinDeckModal: boolean;
  showJoinDeckModal: boolean;
}

export interface IDeckMutations<S = IDeckState> {
  [DeckMTypes.SET_ACTIVE_Deck](state: S, payload: IDeck): void;
  [DeckMTypes.CREATE_Deck](state: S, payload: IDeck): void;
  [DeckMTypes.SET_AUTH_USER_Decks](state: S, payload: IDeck[]): void;
  [DeckMTypes.EDIT_Deck](
    state: S,
    payload: Partial<IDeck> & { id: string }
  ): void;
  [DeckMTypes.UPDATE_Deck](
    state: S,
    payload: Partial<IDeck> & { id: string }
  ): void;
  [DeckMTypes.DELETE_Deck](
    state: S,
    payload: Partial<IDeck> & { id: string }
  ): void;

  [DeckMTypes.SET_LOADING_Decks](state: S, payload: boolean): void;
  [DeckMTypes.SET_CREATE_Deck_MODAL](state: S, payload: boolean): void;
  [DeckMTypes.SET_EDIT_Deck_MODAL](
    state: S,
    payload: { isOpen: boolean; deckId: string | undefined }
  ): void;
  [DeckMTypes.SET_ADD_OR_JOIN_Deck_MODAL](state: S, payload: boolean): void;
  [DeckMTypes.SET_JOIN_Deck_MODAL](state: S, payload: boolean): void;
}

export interface IDeckGetters {
  totalDeckCount(state: IDeckState): number;
  getDeckById(state: IDeckState): (id: string) => IDeck | undefined;
}

// prettier-ignore
type AugmentedActionCtxDeck = Omit<ActionContext<IDeckState, IRootState>, 'commit'> & {
  commit<K extends keyof IDeckMutations>(
    key: K,
    payload: Parameters<IDeckMutations[K]>[1]
  ): ReturnType<IDeckMutations[K]>;
};

export interface IDeckActions {
  [DeckATypes.GET_AUTH_USER_Decks]({ commit }: AugmentedActionCtxDeck): void;

  [DeckATypes.SET_CREATE_Deck_MODAL]({ commit }: AugmentedActionCtxDeck): void;
  [DeckATypes.SET_EDIT_Deck_MODAL]({ commit }: AugmentedActionCtxDeck): void;
  [DeckATypes.SET_ADD_OR_JOIN_Deck_MODAL]({
    commit,
  }: AugmentedActionCtxDeck): void;
  [DeckATypes.SET_JOIN_Deck_MODAL]({ commit }: AugmentedActionCtxDeck): void;
}

/****************************** END **********************************/

export interface IStoreActions
  extends IRootActions,
    CounterActionsTypes,
    IAppActions,
    IDeckActions {}

export interface IStoreGetters
  extends IRootGetters,
    CounterGettersTypes,
    IAppGetters,
    IDeckGetters {}
