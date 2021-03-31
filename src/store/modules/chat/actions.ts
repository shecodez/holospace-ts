import { ActionTree } from 'vuex';

import {
  IRootState,
  IChatState as State,
  IChatActions as Actions,
} from '@/store/interfaces';
import { MutationTypes } from './mutations';

import { messages } from '@/data/mock';

export enum ActionTypes {
  GET_Chat_Messages = 'GET_Chat_Messages',
  CREATE_Chat_Message = 'CREATE_Chat_Message'
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, IRootState> & Actions = {
  async [ActionTypes.GET_Chat_Messages]({ commit }, diskSpaceId) {
    commit(MutationTypes.SET_LOADING_Chat_Messages, true);

    await sleep(1000);
    const _messages = messages.filter((message) => message.diskSpaceId === diskSpaceId)

    commit(MutationTypes.SET_LOADING_Chat_Messages, false);
    commit(MutationTypes.SET_Chat_Messages, _messages);
  },
  [ActionTypes.CREATE_Chat_Message]({ commit }, message) {
    commit(MutationTypes.CREATE_Chat_Message, message);
  },
};