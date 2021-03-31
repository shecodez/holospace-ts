import { MutationTree } from 'vuex';
import { IChatState as State, IChatMutations as Mutations } from '../../interfaces';

export enum MutationTypes {
  SET_Chat_Messages = 'SET_Chat_Messages',
  CREATE_Chat_Message = 'CREATE_Chat_Message',
  SET_LOADING_Chat_Messages = 'SET_LOADING_Messages',
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_Chat_Messages](state, payload) {
    state.messageList = payload;
  },
  [MutationTypes.CREATE_Chat_Message](state, payload) {
    state.messageList.unshift(payload);
  },
  //   [MutationTypes.EDIT_Chat_Message](state, payload) {
  //     const idx = state.messageList.findIndex((x: IMessage) => x.id === payload.id);
  //     if (idx === -1) return;

  //     state.messageList[idx] = {
  //       ...state.messageList[idx],
  //       //isEditing: !state.messageList[idx].isEditing,
  //     };
  //   },

  [MutationTypes.SET_LOADING_Chat_Messages](state, payload) {
    state.isLoading = payload;
  },
};
