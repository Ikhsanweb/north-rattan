import { createSelector } from 'reselect';
import { RootState } from '../store';
import { NoteData } from './note.action';

import { NoteState } from './note.reducer';

export type NoteMap = {
  [key: string]: NoteData[];
};

export const selectNoteReducer = (state: RootState): NoteState => state.note;

export const selectCurrentNotes = createSelector(
  [selectNoteReducer],
  (note) => note.currentNotes
);

export const selectIsLoading = createSelector(
  [selectNoteReducer],
  (note) => note.isLoading
);

// export const selectNotesMap = createSelector(
//   [selectCurrentNotes],
//   (notes): NoteMap =>
//     notes.reduce((acc, note) => {
//       const {  } = notes;
//       acc[title.toLowerCase()] = note;
//       return acc;
//     }, {} as NoteMap)
// );
