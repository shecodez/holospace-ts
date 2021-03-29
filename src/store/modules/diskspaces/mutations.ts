import { MutationTree } from 'vuex';
import {
  IDiskSpaceState as State,
  IDiskSpaceMutations as Mutations,
  DiskSpace,
} from '../../interfaces';

export enum MutationTypes {
    SET_ACTIVE_DiskSpace = 'SET_ACTIVE_DiskSpace',
    CREATE_DiskSpace = 'CREATE_DiskSpace',
    SET_DECK_DiskSpaces = 'SET_DECK_DiskSpaces',
    EDIT_DiskSpace = 'EDIT_DiskSpace',
    UPDATE_DiskSpace = 'UPDATE_DiskSpace',
    DELETE_DiskSpace = 'DELETE_DiskSpace',
  
    SET_LOADING_DiskSpaces = 'SET_LOADING_DiskSpaces',
    SET_MODAL_DiskSpace_Type = 'SET_MODAL_DiskSpace_Type',
    SET_CREATE_DiskSpace_MODAL = 'SET_CREATE_DiskSpace_MODAL',
    SET_EDIT_DiskSpace_MODAL = 'SET_EDIT_DiskSpace_MODAL',
  }

  export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_ACTIVE_DiskSpace](state, payload) {
      state.activeDiskSpace = payload;
    },
    [MutationTypes.CREATE_DiskSpace](state, payload) {
      state.diskSpaceList.unshift(payload);
    },
    [MutationTypes.SET_DECK_DiskSpaces](state, payload) {
      state.diskSpaceList = payload;
    },
    [MutationTypes.EDIT_DiskSpace](state, payload) {
      const idx = state.diskSpaceList.findIndex((x: DiskSpace) => x.id === payload.id);
      if (idx === -1) return;
  
      state.diskSpaceList[idx] = {
        ...state.diskSpaceList[idx],
        //isEditing: !state.diskSpaceList[idx].isEditing,
      };
    },
    [MutationTypes.UPDATE_DiskSpace](state, payload) {
      state.diskSpaceList = state.diskSpaceList.map((diskSpace: DiskSpace) => {
        if (diskSpace.id === payload.id) {
          return { ...diskSpace, ...payload };
        }
        return diskSpace;
      });
    },
    [MutationTypes.DELETE_DiskSpace](state, payload) {
      const idx = state.diskSpaceList.findIndex((x: DiskSpace) => x.id === payload.id);
      if (idx === -1) return;
  
      state.diskSpaceList.splice(idx, 1);
    },
  
    [MutationTypes.SET_LOADING_DiskSpaces](state, payload) {
      state.isLoading = payload;
    },
    [MutationTypes.SET_MODAL_DiskSpace_Type](state, payload) {
      state.modalDiskSpaceType = payload
    },
    [MutationTypes.SET_CREATE_DiskSpace_MODAL](state, payload) {
      state.showCreateDiskSpaceModal = payload;
    },
    [MutationTypes.SET_EDIT_DiskSpace_MODAL](state, payload) {
      state.showEditDiskSpaceModal = payload.isOpen;
      state.editDiskSpaceId = payload.diskSpaceId;
    },
  };