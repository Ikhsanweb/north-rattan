import { AnyAction } from 'redux';
// import { UserData } from '../../utils/firebase/firebase.utils';
import {
  setUserToken,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  UserData,
  UserToken,
  // signUpFailed,
} from './user.action';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly currentUserToken: UserToken | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  currentUserToken: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (setUserToken.match(action)) {
    return {
      ...state,
      currentUserToken: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      currentUserToken: null,
    };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
