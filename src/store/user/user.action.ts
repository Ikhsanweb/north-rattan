import { USER_ACTION_TYPES } from './user.types';
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
// import {
//   AdditionalInformation,
//   UserData,
// } from '../../utils/firebase/firebase.utils';
// import { User } from 'firebase/auth';

export type UserId = {
  id: string;
};

export type UserToken = {
  accessToken: string;
  refreshToken: string;
};

export type UserData = {
  id: string;
  username: string;
  fullname: string;
};

export type UserSetToken = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_TOKEN,
  { accessToken: string; refreshToken: string }
>;

export type UserSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.USER_SIGN_IN_START,
  { username: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;
export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { username: string; password: string; fullname: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { username: string; password: string }
>;
export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const setUserToken = withMatcher(
  (accessToken: string, refreshToken: string): UserSetToken =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_TOKEN, {
      accessToken,
      refreshToken,
    })
);

export const userSignInStart = withMatcher(
  (username: string, password: string): UserSignInStart =>
    createAction(USER_ACTION_TYPES.USER_SIGN_IN_START, { username, password })
);

export const signInSuccess = withMatcher(
  (user: UserData): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
  (username: string, password: string, fullname: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      username,
      password,
      fullname,
    })
);

export const signUpSuccess = withMatcher(
  (username: string, password: string): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { username, password })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);
export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);
export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
