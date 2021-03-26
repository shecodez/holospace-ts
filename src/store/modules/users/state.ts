export enum OnlineStatus {
  SHOW = 'SHOW',
  AWAY = 'AWAY',
  BRB = 'BRB',
  BUSY = 'BUSY',
  DND = 'DND',
  HIDE = 'HIDE',
}

export enum PasswordStrength {
  VERY_WEAK = 'VERY_WEAK',
  WEAK = 'WEAK',
  MEDIUM = 'MEDIUM',
  STRONG = 'STRONG',
  VERY_STRONG = 'VERY_STRONG',
  OVER_9000 = 'OVER_9000',
}

export type User = {
  id: string; // guid
  avatarUrl?: string;
  name: string;
  pin: number;
  isOnline: boolean;
  status: OnlineStatus;
  //subscriptions: Disk[]
  //createdAt: serverTimestamp;
  //updatedAt: null;
};

export type State = {
  isLoading?: boolean;
  members: User[]; // req current DeckId
  subscribers: User[]; // req current SShDiskId
  friends: User[];
};

export const state: State = {
  isLoading: false,
  members: [],
  subscribers: [],
  friends: [],
};
