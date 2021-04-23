import { ActionContext } from 'vuex';

import { MutationTypes as CounterMTypes } from './modules/counter/mutations';
import { ActionTypes as CounterATypes } from './modules/counter/actions';
import { MutationTypes as RootMTypes } from './modules/root/mutations';
import { ActionTypes as RootATypes } from './modules/root/actions';
import { MutationTypes as AppMTypes } from './modules/app/mutations';
import { ActionTypes as AppATypes } from './modules/app/actions';
import { MutationTypes as DeckMTypes } from './modules/decks/mutations';
import { ActionTypes as DeckATypes } from './modules/decks/actions';
import { MutationTypes as LocaleMTypes } from './modules/locale/mutations';
import { ActionTypes as LocaleATypes } from './modules/locale/actions';
import { ActionTypes as DiskSpaceATypes } from './modules/diskSpaces/actions';
import { MutationTypes as DiskSpaceMTypes } from './modules/diskSpaces/mutations';
import { ActionTypes as ChatATypes } from './modules/chat/actions';
import { MutationTypes as ChatMTypes } from './modules/chat/mutations';
import { ActionTypes as UserATypes } from './modules/users/actions';
import { MutationTypes as UserMTypes } from './modules/users/mutations';
import { ActionTypes as AuthATypes } from './modules/auth/actions';
import { MutationTypes as AuthMTypes } from './modules/auth/mutations';

export interface IRootState {
  root: boolean;
  version: string;
}

export interface IMergedState extends IRootState {
  counter: CounterStateTypes;
  app: IAppState;
  decks: IDeckState;
  locale: ILocaleState;
  diskSpaces: IDiskSpaceState;
  chat: IChatState;
  users: IUserState;
  auth: IAuthState;
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
  [RootATypes.UPDATE_Version]({ commit }: AugmentedActionCtxRoot, payload: string): void;
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
  [CounterATypes.GET_COUNTER]({ commit }: AugmentedActionContextCounter, payload: number): void;
}

/************************* APP MODULE TYPES **************************/
export enum AlertTypes {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARNING = 'WARNING',
  CUSTOM = 'CUSTOM',
}

export enum AppTheme {
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
  theme: AppTheme | undefined;
  showNavBar: boolean;
  showFooter: boolean;
  useSlideOutDrawer: boolean;
  sideDrawerIsOpen: boolean;
  metaDrawerIsMini: boolean;
  toast?: IToast | undefined;
  banner?: IBanner | undefined;
}

export interface IAppMutations<S = IAppState> {
  [AppMTypes.SET_Theme](state: S, payload: AppTheme): void;

  [AppMTypes.SET_SHOW_Navbar](state: S, payload: boolean): void;
  [AppMTypes.SET_SHOW_Footer](state: S, payload: boolean): void;

  [AppMTypes.SET_Use_SLIDE_OUT_DRAWER](state: S, payload: boolean): void;

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
  [AppATypes.SET_Theme]({ commit }: AugmentedActionCtxApp, payload: String): void;
  [AppATypes.TOGGLE_Theme]({ commit }: AugmentedActionCtxApp): void;

  [AppATypes.SET_SHOW_Navbar]({ commit }: AugmentedActionCtxApp, payload: boolean): void;
  [AppATypes.SET_SHOW_Footer]({ commit }: AugmentedActionCtxApp, payload: boolean): void;

  [AppATypes.SET_Use_SLIDE_OUT_DRAWER]({ commit }: AugmentedActionCtxApp, payload: boolean): void;

  [AppATypes.SET_SIDE_DRAWER_IsOpen]({ commit }: AugmentedActionCtxApp, payload: boolean): void;
  [AppATypes.TOGGLE_Side_DRAWER]({ commit }: AugmentedActionCtxApp): void;

  [AppATypes.SET_META_DRAWER_IsMini]({ commit }: AugmentedActionCtxApp, payload: boolean): void;
  [AppATypes.TOGGLE_Meta_DRAWER]({ commit }: AugmentedActionCtxApp): void;

  [AppATypes.SET_Banner]({ commit }: AugmentedActionCtxApp, payload: IBanner): void;
  [AppATypes.CLEAR_Banner]({ commit }: AugmentedActionCtxApp): void;

  [AppATypes.SET_Toast]({ commit }: AugmentedActionCtxApp, payload: IToast): void;
  [AppATypes.CLEAR_Toast]({ commit }: AugmentedActionCtxApp): void;
}

export interface IAppGetters {
  showBanner(state: IAppState): boolean;
  showToast(state: IAppState): boolean;
  isDarkTheme(state: IAppState): boolean;
}

/************************ AUTH MODULE TYPES **************************/

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  //acceptTsAndCs: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface IAuthUser extends IUser {
  email: string;
  membershipIds: string[];
  memberships?: IDeck[];
  subscriptionIds: string[];
  subscriptions?: DiskSpace[];
  //profile: IProfile
}

export interface IAuthState {
  isAuthenticating: boolean;
  me?: IAuthUser;
  error?: Error;
}

export interface IAuthMutations<S = IAuthState> {
  //[AuthMTypes.SET_AUTH_User](state: S, payload: { payload: RegisterPayload; remember: boolean }): void;
  [AuthMTypes.SET_AUTHENTICATING](state: S, payload: boolean): void;
  [AuthMTypes.SET_AUTH_User](state: S, payload: IAuthUser): void;
}

export interface IAuthGetters {
  isAuthenticated(state: IAuthState): boolean;
}

// prettier-ignore
type AugmentedActionCtxAuth = Omit<ActionContext<IAuthState, IRootState>, 'commit'> & {
  commit<K extends keyof IAuthMutations>(
    key: K,
    payload: Parameters<IAuthMutations[K]>[1]
  ): ReturnType<IAuthMutations[K]>;
};

export interface IAuthActions {
  [AuthATypes.REGISTER]({ commit }: AugmentedActionCtxAuth, payload: RegisterPayload): void;
  [AuthATypes.LOGIN]({ commit }: AugmentedActionCtxAuth, payload: LoginPayload): void;
  [AuthATypes.LOGOUT]({ commit }: AugmentedActionCtxAuth): void;
}

/************************ DECK MODULE TYPES **************************/

export enum Region {
  US_EAST = 'US-East',
  JP_ASIA = 'JP-Asia',
}

export type IDeck = {
  id: string; // guid
  name: string;
  avatarUrl?: string;
  captainId: string; // guid
  //user?: IUser;
  idsId: string; // (Init Disk Space) Id - guid
  ids?: DiskSpace;
  hq: Region;
  //members?: User[];
  //lastModById: string; // guid
  //createdAt: serverTimestamp;
  //updatedAt: null;
};

export type EditDeckPayload = {
  isOpen: boolean;
  deckId: string;
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
  [DeckMTypes.SET_ACTIVE_Deck](state: S, payload: IDeck | undefined): void;
  [DeckMTypes.CREATE_Deck](state: S, payload: IDeck): void;
  [DeckMTypes.SET_AUTH_USER_Decks](state: S, payload: IDeck[]): void;
  [DeckMTypes.EDIT_Deck](state: S, payload: Partial<IDeck> & { id: string }): void;
  [DeckMTypes.UPDATE_Deck](state: S, payload: Partial<IDeck> & { id: string }): void;
  [DeckMTypes.DELETE_Deck](state: S, payload: Partial<IDeck> & { id: string }): void;

  [DeckMTypes.SET_LOADING_Decks](state: S, payload: boolean): void;
  [DeckMTypes.SET_CREATE_Deck_MODAL](state: S, payload: boolean): void;
  [DeckMTypes.SET_EDIT_Deck_MODAL](state: S, payload: EditDeckPayload): void;
  [DeckMTypes.SET_ADD_OR_JOIN_Deck_MODAL](state: S, payload: boolean): void;
  [DeckMTypes.SET_JOIN_Deck_MODAL](state: S, payload: boolean): void;
}

export interface IDeckGetters {
  totalDeckCount(state: IDeckState): number;
  getDeckById(state: IDeckState): (id: string) => IDeck | undefined;
  getActiveDeckCaptainId(state: IDeckState): string | undefined;
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
  [DeckATypes.GET_ACTIVE_Deck]({ commit, state }: AugmentedActionCtxDeck, deckId: String): void;

  [DeckATypes.SET_CREATE_Deck_MODAL]({ commit }: AugmentedActionCtxDeck): void;
  [DeckATypes.SET_EDIT_Deck_MODAL]({ commit }: AugmentedActionCtxDeck, { isOpen, deckId }: EditDeckPayload): void;
  [DeckATypes.SET_ADD_OR_JOIN_Deck_MODAL]({ commit }: AugmentedActionCtxDeck): void;
  [DeckATypes.SET_JOIN_Deck_MODAL]({ commit }: AugmentedActionCtxDeck): void;
}

/********************* DISKSPACE MODULE TYPES ************************/

export enum DiskSpaceType {
  TEXT = 'TEXT',
  VOIP = 'VOIP',
  HOLO = 'HOLO',
}

export type DiskSpace = {
  id: string; // guid
  name: string;
  topic?: string;
  type: DiskSpaceType;
  holoSpaceId?: string; // if type = HOLO
  isSsh: boolean; // default false
  ownerId: string; // UserId | DeckId
  user?: string; // User if ownerId = UserId
  deck?: string; // Deck if ownerId = DeckId
  canDelete: boolean; // cannot delete IDS
  //subscribers?: User[]; //if isSSH = true
  //lastModById: string; // UserId
  //createdAt: serverTimestamp;
  //updatedAt: null;
};

export interface IDiskSpaceState {
  isLoading: boolean;
  activeDiskSpace: DiskSpace | undefined;
  diskSpaceList: DiskSpace[];

  modalDiskSpaceType: DiskSpaceType | undefined;
  showCreateDiskSpaceModal: boolean;
  showEditDiskSpaceModal: boolean;
  editDiskSpaceId: string | undefined;
}

export interface IDiskSpaceMutations<S = IDiskSpaceState> {
  [DiskSpaceMTypes.SET_ACTIVE_DiskSpace](state: S, payload: DiskSpace | undefined): void;
  [DiskSpaceMTypes.CREATE_DiskSpace](state: S, payload: DiskSpace): void;
  [DiskSpaceMTypes.SET_DECK_DiskSpaces](state: S, payload: DiskSpace[]): void;
  [DiskSpaceMTypes.EDIT_DiskSpace](state: S, payload: Partial<DiskSpace> & { id: string }): void;
  [DiskSpaceMTypes.UPDATE_DiskSpace](state: S, payload: Partial<DiskSpace> & { id: string }): void;
  [DiskSpaceMTypes.DELETE_DiskSpace](state: S, payload: Partial<DiskSpace> & { id: string }): void;

  [DiskSpaceMTypes.SET_LOADING_DiskSpaces](state: S, payload: boolean): void;
  [DiskSpaceMTypes.SET_MODAL_DiskSpace_Type](state: S, payload: DiskSpaceType | undefined): void;
  [DiskSpaceMTypes.SET_CREATE_DiskSpace_MODAL](state: S, payload: boolean): void;
  [DiskSpaceMTypes.SET_EDIT_DiskSpace_MODAL](
    state: S,
    payload: { isOpen: boolean; diskSpaceId: string | undefined }
  ): void;
}

export interface IDiskSpaceGetters {
  totalDiskSpaceCount(state: IDiskSpaceState): number;
  getDiskSpaceById(state: IDiskSpaceState): (id: string) => DiskSpace | undefined;
  getDiskSpacesByType(state: IDiskSpaceState): (type: DiskSpaceType) => DiskSpace[] | [];
  getActiveDiskSpaceType(state: IDiskSpaceState): DiskSpaceType | undefined;
}

// prettier-ignore
type AugmentedActionCtxDiskSpace = Omit<ActionContext<IDiskSpaceState, IRootState>, 'commit'> & {
  commit<K extends keyof IDiskSpaceMutations>(
    key: K,
    payload: Parameters<IDiskSpaceMutations[K]>[1]
  ): ReturnType<IDiskSpaceMutations[K]>;
};

export interface IDiskSpaceActions {
  [DiskSpaceATypes.GET_DECK_DiskSpaces]({ commit }: AugmentedActionCtxDiskSpace, deckId: string): void;
  [DiskSpaceATypes.GET_ACTIVE_DiskSpace]({ commit, state }: AugmentedActionCtxDiskSpace, diskSpaceId: string): void;

  [DiskSpaceATypes.SET_CREATE_DiskSpace_MODAL]({ commit }: AugmentedActionCtxDiskSpace): void;
  [DiskSpaceATypes.SET_EDIT_DiskSpace_MODAL]({ commit }: AugmentedActionCtxDiskSpace, diskSpaceId: string): void;
}
/************************ CHAT MODULE TYPES **************************/

export type IChatMessage = {
  id: string; // guid
  text: string;
  isMarkdown?: boolean;
  media?: string; // .mp3 .wav .img .png .jpg .gfb
  hologram?: string; // .holo file
  authorId: string; // [UserId | DiskSpaceId] guid
  author?: {}; //IUser;
  diskSpaceId: string; // guid
  createdAt?: Date;
  updatedAt?: Date;
  //isDeleted: boolean;
  //deletedBy: string; // UserId
};

export interface IChatState {
  isLoading: boolean;
  messageList: IChatMessage[];
  searchTerm?: string;
}

export interface IChatMutations<S = IChatState> {
  [ChatMTypes.SET_Chat_Messages](state: S, payload: IChatMessage[]): void;
  [ChatMTypes.CREATE_Chat_Message](state: S, payload: IChatMessage): void;

  [ChatMTypes.SET_LOADING_Chat_Messages](state: S, payload: boolean): void;
}

export interface IChatGetters {}

type AugmentedActionCtxChat = Omit<ActionContext<IChatState, IRootState>, 'commit'> & {
  commit<K extends keyof IChatMutations>(
    key: K,
    payload: Parameters<IChatMutations[K]>[1]
  ): ReturnType<IChatMutations[K]>;
};

export interface IChatActions {
  [ChatATypes.GET_Chat_Messages]({ commit, state }: AugmentedActionCtxChat, diskSpace: String): void;
  [ChatATypes.CREATE_Chat_Message]({ commit }: AugmentedActionCtxChat, message: IChatMessage): void;
}

/************************ USER MODULE TYPES **************************/

export enum OnStatus {
  SHOW = 'SHOW',
  AWAY = 'AWAY',
  BRB = 'BRB',
  BUSY = 'BUSY',
  DND = 'DND',
  HIDE = 'HIDE',
}

export type IUser = {
  id: string; // guid
  avatarUrl?: string;
  name: string;
  pin: number;
  isOnline: boolean;
  status: OnStatus;
  //createdAt: serverTimestamp;
  //updatedAt: null;
};

export interface IUserState {
  isLoading: boolean;
  members: IUser[]; // req active DeckId
  subscribers: IUser[]; // req active SshDiskSpaceId
  friends: IUser[];
}

export interface IUserMutations<S = IUserState> {
  [UserMTypes.SET_DECK_Members](state: S, payload: IUser[]): void;
  [UserMTypes.SET_DISKSPACE_Subscribers](state: S, payload: IUser[]): void;
  [UserMTypes.SET_ME_Friends](state: S, payload: IUser[]): void;

  [UserMTypes.SET_LOADING_Users](state: S, payload: boolean): void;
}

export interface IUserGetters {
  totalMemberCount(state: IUserState): number;
  membersOnDeck(state: IUserState): IUser[] | [];
  membersOffline(state: IUserState): IUser[] | [];
  // totalSubscribersCount(state: IUserState): number;
  // totalFriendCount(state: IUserState): number;
  // getMemberById(state: IUserState): (id: string) => IUser | undefined;
  // getSubscriberById(state: IUserState): (id: string) => IUser | undefined;
  // getFriendById(state: IUserState): (id: string) => IUser | undefined;
}

// prettier-ignore
type AugmentedActionCtxUser = Omit<ActionContext<IUserState, IRootState>, 'commit'> & {
  commit<K extends keyof IUserMutations>(
    key: K,
    payload: Parameters<IUserMutations[K]>[1]
  ): ReturnType<IUserMutations[K]>;
};

export interface IUserActions {
  [UserATypes.GET_DECK_Members]({ commit }: AugmentedActionCtxUser, deckId: string): void;
  [UserATypes.GET_DISKSPACE_Subscribers]({ commit, state }: AugmentedActionCtxUser, diskSpaceId: String): void;
  [UserATypes.GET_ME_Friends]({ commit }: AugmentedActionCtxUser): void;
}

/************************* ME MODULE TYPES ***************************/
export interface IMe extends IUser {
  avatarJson?: JSON;
}

export interface IProfile extends IMe {
  email: string;
  friends: IUser[];
  subscriptionIds: string[];
  membershipIds: string[];
  colorTheme: string;
  backgroundImageUrl: string;
  isDarkTheme: boolean;
  language: string;
}
/************************* ME MODULE TYPES ***************************/

export enum PasswordStrength {
  VERY_WEAK = 'VERY_WEAK',
  WEAK = 'WEAK',
  MEDIUM = 'MEDIUM',
  STRONG = 'STRONG',
  VERY_STRONG = 'VERY_STRONG',
  OVER_9000 = 'OVER_9000',
}

/*********************** LOCALE MODULE TYPES *************************/

export type ILocaleState = {
  lang: string | undefined;
  fallbackLocale: string;
  supportedLocales: string[];
};

export interface ILocaleMutations<S = ILocaleState> {
  [LocaleMTypes.SET_Locale](state: S, payload: string): void;
}

export interface ILocaleGetters {
  totalSupportedLocalesCount(state: ILocaleState): number;
}

// prettier-ignore
type AugmentedActionCtxLocale = Omit<ActionContext<ILocaleState, IRootState>, 'commit'> & {
  commit<K extends keyof ILocaleMutations>(
    key: K,
    payload: Parameters<ILocaleMutations[K]>[1]
  ): ReturnType<ILocaleMutations[K]>;
};

export interface ILocaleActions {
  [LocaleATypes.INIT_Locale]({ commit }: AugmentedActionCtxLocale): void;
  [LocaleATypes.SET_Locale]({ commit }: AugmentedActionCtxLocale, payload: string): void;
}

/****************************** END **********************************/

export interface IStoreActions
  extends IRootActions,
    CounterActionsTypes,
    IAppActions,
    ILocaleActions,
    IDeckActions,
    IDiskSpaceActions,
    IChatActions,
    IUserActions,
    IAuthActions {}

export interface IStoreGetters
  extends IRootGetters,
    CounterGettersTypes,
    IAppGetters,
    ILocaleGetters,
    IDeckGetters,
    IDiskSpaceGetters,
    IChatGetters,
    IUserGetters,
    IAuthGetters {}
