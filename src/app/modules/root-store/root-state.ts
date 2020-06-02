import * as AuthState from '../auth/reducers/auth.reducer';
import * as UserState from '../user/reducers/user.reducer';

export interface RootState {
  auth: AuthState.State;
  users: UserState.State;
}
