import { AnyAction } from 'redux';
import {
  addingNoteFailed,
  addingNoteStart,
  addingNoteSuccess,
  closeNote,
  deleteNoteFailed,
  deleteNoteStart,
  deleteNoteSuccess,
  getNotesFailed,
  getNotesStart,
  getNotesSuccess,
  NoteData,
  updateNoteFailed,
  updateNoteStart,
  updateNoteSuccess,
} from './note.action';

export type NoteState = {
  readonly currentNotes: NoteData[] | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const NOTES_INITIAL_STATE: NoteState = {
  currentNotes: null,
  isLoading: false,
  error: null,
};

export const noteReducer = (
  state = NOTES_INITIAL_STATE,
  action: AnyAction
): NoteState => {
  if (getNotesStart.match(action)) {
    return {
      ...state,
      currentNotes: null,
      isLoading: true,
    };
  }

  if (getNotesSuccess.match(action)) {
    return {
      ...state,
      currentNotes: action.payload,
      isLoading: false,
    };
  }

  if (addingNoteStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (addingNoteSuccess.match(action)) {
    return {
      ...state,
      isLoading: true,
      currentNotes: null,
    };
  }

  if (updateNoteStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (updateNoteSuccess.match(action)) {
    return {
      ...state,
      isLoading: true,
      currentNotes: null,
    };
  }

  if (deleteNoteStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (deleteNoteSuccess.match(action)) {
    return {
      ...state,
      isLoading: true,
      currentNotes: null,
    };
  }

  if (closeNote.match(action)) {
    return {
      ...state,
      currentNotes: null,
    };
  }

  if (
    addingNoteFailed.match(action) ||
    getNotesFailed.match(action) ||
    updateNoteFailed.match(action) ||
    deleteNoteFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  }

  return state;
};
