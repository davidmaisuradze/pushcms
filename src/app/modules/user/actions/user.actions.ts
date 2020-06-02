import { createAction, props } from '@ngrx/store';

export const GetUsersRequest = createAction('[User] Get Users Request');
export const GetUsersSuccess = createAction('[User] Get Users Success', props<{ payload: any }>());
export const GetUsersFailure = createAction('[User] Get Users Failure', props<{ payload: any }>());
