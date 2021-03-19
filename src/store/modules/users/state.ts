export enum OnlineStatus {
  SHOW = 'SHOW',
  AWAY = 'AWAY',
  BRB = 'BRB',
  BUSY = 'BUSY',
  DND = 'DND',
  HIDE = 'HIDE',
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
