import { GetterTree } from 'vuex';

import {
  IRootState,
  IChatState as State,
  IChatGetters as Getters,
} from '@/store/interfaces';

export const getters: GetterTree<State, IRootState> & Getters = {
  totalChatMessageCount: (state) => {
    return state.messageList.length;
  },
};