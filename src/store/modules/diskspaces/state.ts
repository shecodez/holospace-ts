export enum DiskSpaceTypes {
  TEXT = 'TEXT',
  VOIP = 'VOIP',
  HOLO = 'HOLO',
}

export type DiskSpace = {
  id: string; // guid
  name: string;
  topic?: string;
  type: DiskSpaceTypes;
  //holoSpaceId: string; // if type = HOLO
  isSSH?: boolean; // default false
  owner: string; // UserId || DeckId
  //subscribers?: User[]; //if isSSH = true
  //lastModBy: string; // UserId
  //createdAt: serverTimestamp;
  //updatedAt: null;
};

export type State = {
  isLoading?: boolean;
  current: DiskSpace | undefined;
  list: DiskSpace[];
};

export const state: State = {
  isLoading: false,
  current: undefined,
  list: [],
};
