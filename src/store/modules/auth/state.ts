import { IAuthState as State } from '@/store/interfaces';

export const state: State = {
  isAuthenticating: false,
  me: undefined,
  error: undefined,
};
