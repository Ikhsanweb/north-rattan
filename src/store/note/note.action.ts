import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { NOTE_ACTION_TYPES } from './note.types';

export type NoteData = {
  id: string;
  title: string;
  body: string;
  tags: string[] | null;
  createdAt: Date;
  updatedAt: Date;
};

export type AddingNoteStart = ActionWithPayload<
  NOTE_ACTION_TYPES.ADDING_NOTE_START,
  {
    title: string;
    tags: string[];
    body: string;
    accessToken: string;
    refreshToken: string;
  }
>;

export type AddingNoteSuccess = ActionWithPayload<
  NOTE_ACTION_TYPES.ADDING_NOTE_SUCCESS,
  { accessToken: string; refreshToken: string }
>;
export type AddingNoteFailed = ActionWithPayload<
  NOTE_ACTION_TYPES.ADDING_NOTE_FAILED,
  Error
>;

export type GetNotesStart = ActionWithPayload<
  NOTE_ACTION_TYPES.GET_NOTES_START,
  { accessToken: string; refreshToken: string }
>;

export type GetNotesSuccess = ActionWithPayload<
  NOTE_ACTION_TYPES.GET_NOTES_SUCCESS,
  NoteData[]
>;
export type GetNotesFailed = ActionWithPayload<
  NOTE_ACTION_TYPES.GET_NOTES_FAILED,
  Error
>;

export type UpdateNoteStart = ActionWithPayload<
  NOTE_ACTION_TYPES.UPDATE_NOTE_START,
  {
    id: string;
    title: string;
    tags: string[];
    body: string;
    accessToken: string;
    refreshToken: string;
  }
>;

export type UpdateNoteSuccess = ActionWithPayload<
  NOTE_ACTION_TYPES.UPDATE_NOTE_SUCCESS,
  { accessToken: string; refreshToken: string }
>;
export type UpdateNoteFailed = ActionWithPayload<
  NOTE_ACTION_TYPES.UPDATE_NOTE_FAILED,
  Error
>;

export type DeleteNoteStart = ActionWithPayload<
  NOTE_ACTION_TYPES.DELETE_NOTE_START,
  { id: string; accessToken: string; refreshToken: string }
>;

export type DeleteNoteSuccess = ActionWithPayload<
  NOTE_ACTION_TYPES.DELETE_NOTE_SUCCESS,
  { accessToken: string; refreshToken: string }
>;
export type DeleteNoteFailed = ActionWithPayload<
  NOTE_ACTION_TYPES.DELETE_NOTE_FAILED,
  Error
>;

export type CloseNote = Action<NOTE_ACTION_TYPES.CLOSE_NOTE>;

export const addingNoteStart = withMatcher(
  (
    title: string,
    tags: string[],
    body: string,
    accessToken: string,
    refreshToken: string
  ): AddingNoteStart =>
    createAction(NOTE_ACTION_TYPES.ADDING_NOTE_START, {
      title,
      tags,
      body,
      accessToken,
      refreshToken,
    })
);

export const addingNoteSuccess = withMatcher(
  (accessToken: string, refreshToken: string): AddingNoteSuccess =>
    createAction(NOTE_ACTION_TYPES.ADDING_NOTE_SUCCESS, {
      accessToken,
      refreshToken,
    })
);

export const addingNoteFailed = withMatcher(
  (error: Error): AddingNoteFailed =>
    createAction(NOTE_ACTION_TYPES.ADDING_NOTE_FAILED, error)
);

export const getNotesStart = withMatcher(
  (accessToken: string, refreshToken: string): GetNotesStart =>
    createAction(NOTE_ACTION_TYPES.GET_NOTES_START, {
      accessToken,
      refreshToken,
    })
);

export const getNotesSuccess = withMatcher(
  (notes: NoteData[]): GetNotesSuccess =>
    createAction(NOTE_ACTION_TYPES.GET_NOTES_SUCCESS, notes)
);

export const getNotesFailed = withMatcher(
  (error: Error): GetNotesFailed =>
    createAction(NOTE_ACTION_TYPES.GET_NOTES_FAILED, error)
);

export const updateNoteStart = withMatcher(
  (
    id: string,
    title: string,
    tags: string[],
    body: string,
    accessToken: string,
    refreshToken: string
  ): UpdateNoteStart =>
    createAction(NOTE_ACTION_TYPES.UPDATE_NOTE_START, {
      id,
      title,
      tags,
      body,
      accessToken,
      refreshToken,
    })
);

export const updateNoteSuccess = withMatcher(
  (accessToken: string, refreshToken: string): UpdateNoteSuccess =>
    createAction(NOTE_ACTION_TYPES.UPDATE_NOTE_SUCCESS, {
      accessToken,
      refreshToken,
    })
);

export const updateNoteFailed = withMatcher(
  (error: Error): UpdateNoteFailed =>
    createAction(NOTE_ACTION_TYPES.UPDATE_NOTE_FAILED, error)
);

export const deleteNoteStart = withMatcher(
  (id: string, accessToken: string, refreshToken: string): DeleteNoteStart =>
    createAction(NOTE_ACTION_TYPES.DELETE_NOTE_START, {
      id,
      accessToken,
      refreshToken,
    })
);

export const deleteNoteSuccess = withMatcher(
  (accessToken: string, refreshToken: string): DeleteNoteSuccess =>
    createAction(NOTE_ACTION_TYPES.DELETE_NOTE_SUCCESS, {
      accessToken,
      refreshToken,
    })
);

export const deleteNoteFailed = withMatcher(
  (error: Error): DeleteNoteFailed =>
    createAction(NOTE_ACTION_TYPES.DELETE_NOTE_FAILED, error)
);

export const closeNote = withMatcher(
  (): CloseNote => createAction(NOTE_ACTION_TYPES.CLOSE_NOTE)
);
