import { ActionTree } from 'vuex';

import {
  IRootState,
  IAuthState as State,
  IAuthActions as Actions,
  RegisterPayload,
  LoginPayload,
} from '../../interfaces';
import { MutationTypes } from './mutations';

import { users } from '../../../data/mock';

export enum ActionTypes {
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  LOGOUT = 'LOGOUT',
}

const AUTH_KEY = 'holospaceJWT';
export const AUTH_TOKEN = 'access_token';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, IRootState> & Actions = {
  async [ActionTypes.REGISTER]({ commit }, payload: RegisterPayload) {
    commit(MutationTypes.SET_AUTHENTICATING, true);

    const user = users[0]; //users.push[payload]
    await sleep(1000);

    commit(MutationTypes.SET_AUTHENTICATING, false);
    commit(MutationTypes.SET_AUTH_User, { ...user, email: 'test@example.com', membershipIds: [], subscriptionIds: [] });
  },
  async [ActionTypes.LOGIN]({ commit }, payload: LoginPayload) {
    commit(MutationTypes.SET_AUTHENTICATING, true);

    const user = users[0]; //.find((user) => user.email === payload.email)
    // if (remember) {
    //   localStorage.setItem(AUTH_KEY, res.user.JWT);
    // }
    await sleep(1000);

    commit(MutationTypes.SET_AUTHENTICATING, false);
    commit(MutationTypes.SET_AUTH_User, { ...user, email: 'test@example.com', membershipIds: [], subscriptionIds: [] });
  },
  async [ActionTypes.LOGOUT]({ commit }) {
    commit(MutationTypes.SET_AUTHENTICATING, true);

    localStorage.removeItem(AUTH_KEY);
    await sleep(1000);

    commit(MutationTypes.SET_AUTHENTICATING, false);
    commit(MutationTypes.SET_AUTH_User, undefined);
  },
};
