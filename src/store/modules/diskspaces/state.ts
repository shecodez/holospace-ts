import { IDiskSpaceState as State } from '@/store/interfaces';

export const state: State = {
  isLoading: false,
  activeDiskSpace: undefined,
  diskSpaceList: [],

  modalDiskSpaceType: undefined,
  showCreateDiskSpaceModal: false,  
  showEditDiskSpaceModal: false,
  editDiskSpaceId:  undefined
};
