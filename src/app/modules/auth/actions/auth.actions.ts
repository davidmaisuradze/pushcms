import { createAction, props } from '@ngrx/store';

export const LoginUserRequest = createAction(
  '[Auth] Login User Request',
  props<{ payload: { email; password } }>()
);

export const LoginUserSuccess = createAction(
  '[Auth] Login User Success',
  props<{ payload: any }>()
);
export const LoginUserFailure = createAction(
  '[Auth] Login User Failure',
  props<{ payload: any }>()
);

export const LogoutUserRequest = createAction('[Auth] Logout User Request');
