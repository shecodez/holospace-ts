import { ActionTree } from 'vuex';

import {
  IRootState,
  IDiskSpaceState as State,
  IDiskSpaceActions as Actions,
} from '@/store/interfaces';
import { MutationTypes } from './mutations';

import { diskSpaces } from '@/data/mock';

export enum ActionTypes {
  GET_DECK_DiskSpaces = 'GET_DECK_DiskSpaces',
  GET_ACTIVE_DiskSpace = 'GET_ACTIVE_DiskSpace',

  SET_CREATE_DiskSpace_MODAL = 'SET_CREATE_DiskSpace_MODAL',
  SET_EDIT_DiskSpace_MODAL = 'SET_EDIT_DiskSpace_MODAL',
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, IRootState> & Actions = {
  async [ActionTypes.GET_DECK_DiskSpaces]({ commit }, deckId) {
    commit(MutationTypes.SET_LOADING_DiskSpaces, true);

    await sleep(1000);
    const _diskSpaces = diskSpaces.filter((diskSpace) => diskSpace.ownerId === deckId)

    commit(MutationTypes.SET_LOADING_DiskSpaces, false);
    commit(MutationTypes.SET_DECK_DiskSpaces, _diskSpaces);
  },

  async [ActionTypes.GET_ACTIVE_DiskSpace]({ commit, state }, diskSpaceId) {
    if (state.diskSpaceList.length) {
      const diskSpace = state.diskSpaceList.find((diskSpace) => diskSpace.id === diskSpaceId)
      commit(MutationTypes.SET_ACTIVE_DiskSpace, diskSpace)
    } else  {
      // Fetch active diskSpace from db
      const diskSpace = diskSpaces.find((diskSpace) => diskSpace.id === diskSpaceId)
      await sleep(1000);
      commit(MutationTypes.SET_ACTIVE_DiskSpace, diskSpace);
    }
  },

  [ActionTypes.SET_CREATE_DiskSpace_MODAL]({ commit }) {
    commit(MutationTypes.SET_CREATE_DiskSpace_MODAL, true);
  },

  [ActionTypes.SET_EDIT_DiskSpace_MODAL]({ commit }, diskSpaceId) {
    commit(MutationTypes.SET_EDIT_DiskSpace_MODAL, { isOpen: true, diskSpaceId });
  },
};