import { GetterTree } from 'vuex';

import { 
    IRootState, 
    IUserState as State, 
    IUserGetters as Getters 
} from '@/store/interfaces';

export const getters: GetterTree<State, IRootState> & Getters = {
  totalMemberCount: (state) => {
    return state.members.length;
  },
  membersOnDeck: (state) => {
    return state.members.filter((x) => x.isOnline && x.status !== 'HIDE');
  },
  membersOffline: (state) => {
    return state.members.filter((x) => !x.isOnline || x.status === 'HIDE');
  },
};
