// import { User } from 'firebase/auth';
import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { USER_ACTION_TYPES } from './user.types';

import {
  setUserToken,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  SignUpStart,
  signUpSuccess,
  SignUpSuccess,
  UserSignInStart,
  UserToken,
} from './user.action';

export const signInAuthUserWithUsername = async (username: string) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  try {
    const response = await fetch(
      `http://localhost:5000/users?username=${username}`,
      requestOptions
    );
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export const signInAuthUserWithId = async (id: string) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  try {
    const response = await fetch(
      `http://localhost:5000/users/${id}`,
      requestOptions
    );
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export function* getUserAuthData(userToken: UserToken, username: string) {
  try {
    const userDataSnapshot = yield* call(signInAuthUserWithUsername, username);

    if (userDataSnapshot) {
      const { data } = userDataSnapshot;
      const { users } = data;
      const { accessToken, refreshToken } = userToken;
      yield* put(signInSuccess(users[0]));
      yield* put(setUserToken(accessToken, refreshToken));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

const signInAuthUserWithUsernameAndPassword = async (
  username: string,
  password: string
) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  try {
    const response = await fetch(
      'http://localhost:5000/authentications',
      requestOptions
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const createAuthUserWithUsernameAndPassword = async (
  username: string,
  password: string,
  fullname: string
) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      username,
      password,
      fullname,
    }),
  };
  try {
    const response = await fetch('http://localhost:5000/users', requestOptions);
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export function* signInWithUser({
  payload: { username, password },
}: UserSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithUsernameAndPassword,
      username,
      password
    );

    if (userCredential) {
      const { data } = userCredential;
      yield* call(getUserAuthData, data, username);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}
export function* signUp({
  payload: { username, password, fullname },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithUsernameAndPassword,
      username,
      password,
      fullname
    );

    if (userCredential) {
      // yield* call(userId);
      yield* put(signUpSuccess(username, password));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signInAfterSignUp({
  payload: { username, password },
}: SignUpSuccess) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithUsernameAndPassword,
      username,
      password
    );

    if (userCredential) {
      const { data } = userCredential;
      yield* call(getUserAuthData, data, username);
      // yield* put(getNotesStart(data.accessToken, data.refreshToken));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onUserSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.USER_SIGN_IN_START, signInWithUser);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield* all([
    call(onUserSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
