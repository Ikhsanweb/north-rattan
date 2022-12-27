import { combineReducers } from 'redux';
import { noteReducer } from './note/note.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  note: noteReducer,
});
