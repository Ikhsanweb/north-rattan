import { all, call, fork } from 'typed-redux-saga/macro';
import { noteSagas } from './note/note.saga';
import { userSagas } from './user/user.saga';

export function* rootSaga() {
  yield* all([call(userSagas), fork(noteSagas)]);
}
