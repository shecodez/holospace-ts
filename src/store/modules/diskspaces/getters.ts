import { GetterTree } from 'vuex';

import {
  IRootState,
  IDiskSpaceState as State,
  IDiskSpaceGetters as Getters,
  DiskSpaceType,
} from '@/store/interfaces';

export const getters: GetterTree<State, IRootState> & Getters = {
  totalDiskSpaceCount: (state) => {
    return state.diskSpaceList.length;
  },
  getDiskSpaceById: (state) => (id: string) => {
    return state.diskSpaceList.find((diskSpace) => diskSpace.id === id);
  },
  getDiskSpacesByType: (state) => (type: DiskSpaceType) => {
      return state.diskSpaceList.filter((diskSpace) => diskSpace.type === type)
  },
  getActiveDiskSpaceType: (state) =>{
    return state.activeDiskSpace?.type
  }
};