import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import {
  addingNoteFailed,
  AddingNoteStart,
  AddingNoteSuccess,
  addingNoteSuccess,
  DeleteNoteStart,
  getNotesFailed,
  GetNotesStart,
  getNotesSuccess,
  UpdateNoteStart,
} from './note.action';
import { NOTE_ACTION_TYPES } from './note.types';

const addingNoteToBackend = async (
  title: string,
  tags: string[] | null,
  body: string,
  accessToken: string,
  refreshToken: string
) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Header': 'X-Custom-Header',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      title,
      tags,
      body,
    }),
  };
  try {
    const response = await fetch('http://localhost:5000/notes', requestOptions);
    const message = await response.json();
    if (message.statusCode === 401) {
      const newRequestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Header': 'X-Custom-Header',
        },
        body: JSON.stringify({
          refreshToken,
        }),
      };
      try {
        const newResponse = await fetch(
          'http://localhost:5000/authentications',
          newRequestOptions
        );
        const newAccessToken = await newResponse.json();
        console.log(newAccessToken);
        console.log(newAccessToken.data.accessToken);
        if (newAccessToken.status === 'success') {
          const anotherNewRequestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // 'Access-Control-Allow-Origin': '*',
              // 'Access-Control-Allow-Header': 'X-Custom-Header',
              Authorization: `Bearer ${newAccessToken.data.accessToken}`,
            },
            body: JSON.stringify({
              title,
              tags,
              body,
            }),
          };
          try {
            const response = await fetch(
              'http://localhost:5000/notes',
              anotherNewRequestOptions
            );
            const anotherNewUserNotes = await response.json();
            console.log(anotherNewUserNotes);
            return anotherNewUserNotes;
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    console.log(message);
    return message;
  } catch (error) {
    console.log(error);
  }
};

export const getNotesFromBackend = async (
  accessToken: string,
  refreshToken: string
) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Header': 'X-Custom-Header',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  try {
    const response = await fetch('http://localhost:5000/notes', requestOptions);
    const userNotes = await response.json();
    console.log(userNotes);
    if (userNotes.statusCode === 401) {
      const newRequestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Header': 'X-Custom-Header',
        },
        body: JSON.stringify({
          refreshToken,
        }),
      };
      try {
        const newResponse = await fetch(
          'http://localhost:5000/authentications',
          newRequestOptions
        );
        const newAccessToken = await newResponse.json();
        console.log(newAccessToken);
        console.log(newAccessToken.data.accessToken);
        if (newAccessToken.status === 'success') {
          const anotherNewRequestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // 'Access-Control-Allow-Origin': '*',
              // 'Access-Control-Allow-Header': 'X-Custom-Header',
              Authorization: `Bearer ${newAccessToken.data.accessToken}`,
            },
          };
          try {
            const response = await fetch(
              'http://localhost:5000/notes',
              anotherNewRequestOptions
            );
            const anotherNewUserNotes = await response.json();
            return anotherNewUserNotes;
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    return userNotes;
  } catch (error) {
    console.log(error);
  }
};

export const updateNoteToBackend = async (
  id: string,
  title: string,
  tags: string[],
  body: string,
  accessToken: string,
  refreshToken: string
) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Header': 'X-Custom-Header',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      title,
      tags,
      body,
    }),
  };
  try {
    const response = await fetch(
      `http://localhost:5000/notes/${id}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);

    if (data.statusCode === 401) {
      const newRequestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Header': 'X-Custom-Header',
        },
        body: JSON.stringify({
          refreshToken,
        }),
      };
      try {
        const newResponse = await fetch(
          'http://localhost:5000/authentications',
          newRequestOptions
        );
        const newAccessToken = await newResponse.json();
        console.log(newAccessToken);
        console.log(newAccessToken.data.accessToken);
        if (newAccessToken.status === 'success') {
          const anotherNewRequestOptions = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              // 'Access-Control-Allow-Origin': '*',
              // 'Access-Control-Allow-Header': 'X-Custom-Header',
              Authorization: `Bearer ${newAccessToken.data.accessToken}`,
            },
            body: JSON.stringify({
              title,
              tags,
              body,
            }),
          };
          try {
            const response = await fetch(
              `http://localhost:5000/notes/${id}`,
              anotherNewRequestOptions
            );
            const newData = await response.json();
            console.log(newData);
            return newData;
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNoteFromBackend = async (
  id: string,
  accessToken: string,
  refreshToken: string
) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  try {
    const response = await fetch(
      `http://localhost:5000/notes/${id}`,
      requestOptions
    );
    const userNotes = await response.json();
    console.log(userNotes);

    if (userNotes.statusCode === 401) {
      const newRequestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Header': 'X-Custom-Header',
        },
        body: JSON.stringify({
          refreshToken,
        }),
      };
      try {
        const newResponse = await fetch(
          'http://localhost:5000/authentications',
          newRequestOptions
        );
        const newAccessToken = await newResponse.json();
        console.log(newAccessToken);
        console.log(newAccessToken.data.accessToken);
        if (newAccessToken.status === 'success') {
          const anotherNewRequestOptions = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              // 'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${newAccessToken.data.accessToken}`,
            },
          };
          try {
            const newResponse = await fetch(
              `http://localhost:5000/notes/${id}`,
              anotherNewRequestOptions
            );
            const newUserNotes = await newResponse.json();
            return newUserNotes;
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    return userNotes;
  } catch (error) {
    console.log(error);
  }
};

export function* addingNote({
  payload: { title, tags, body, accessToken, refreshToken },
}: AddingNoteStart) {
  try {
    const noteData = yield* call(
      addingNoteToBackend,
      title,
      tags,
      body,
      accessToken,
      refreshToken
    );

    if (noteData) {
      yield* put(addingNoteSuccess(accessToken, refreshToken));
    }
  } catch (error) {
    yield* put(addingNoteFailed(error as Error));
  }
}

export function* updateNotes({
  payload: { id, title, tags, body, accessToken, refreshToken },
}: UpdateNoteStart) {
  try {
    const noteData = yield* call(
      updateNoteToBackend,
      id,
      title,
      tags,
      body,
      accessToken,
      refreshToken
    );

    if (noteData.status !== 'fail') {
      const { message } = noteData;
      alert(message);
      yield* put(addingNoteSuccess(accessToken, refreshToken));
    }
  } catch (error) {
    yield* put(addingNoteFailed(error as Error));
  }
}

export function* deleteNotes({
  payload: { id, accessToken, refreshToken },
}: DeleteNoteStart) {
  try {
    const noteData = yield* call(
      deleteNoteFromBackend,
      id,
      accessToken,
      refreshToken
    );

    if (noteData.status !== 'fail') {
      const { message } = noteData;
      yield* put(addingNoteSuccess(accessToken, refreshToken));
      alert(message);
    }
  } catch (error) {
    yield* put(addingNoteFailed(error as Error));
  }
}

export function* getNotesAfterAdding({
  payload: { accessToken, refreshToken },
}: AddingNoteSuccess) {
  try {
    const notes = yield* call(getNotesFromBackend, accessToken, refreshToken);

    if (notes) {
      const { data } = notes;
      yield* put(getNotesSuccess(data));
    }
  } catch (error) {
    yield* put(getNotesFailed(error as Error));
  }
}

// export function* getNotesAfterUpdating({
//   payload: { accessToken },
// }: UpdateNoteSuccess) {
//   try {
//     const notes = yield* call(getNotesFromBackend, accessToken);

//     if (notes) {
//       const { data } = notes;
//       yield* put(getNotesSuccess(data));
//     }
//   } catch (error) {
//     yield* put(getNotesFailed(error as Error));
//   }
// }

// export function* getNotesAfterDeleting({
//   payload: { accessToken },
// }: DeleteNoteSuccess) {
//   try {
//     const notes = yield* call(getNotesFromBackend, accessToken);

//     if (notes) {
//       const { data } = notes;
//       yield* put(getNotesSuccess(data));
//     }
//   } catch (error) {
//     yield* put(getNotesFailed(error as Error));
//   }
// }

export function* getNotes({
  payload: { accessToken, refreshToken },
}: GetNotesStart) {
  try {
    const notes = yield* call(getNotesFromBackend, accessToken, refreshToken);

    if (notes.status !== 'fail') {
      const { data } = notes;
      yield* put(getNotesSuccess(data.notes));
    }
  } catch (error) {
    yield* put(getNotesFailed(error as Error));
  }
}

export function* onAddingNoteStart() {
  yield* takeLatest(NOTE_ACTION_TYPES.ADDING_NOTE_START, addingNote);
}

export function* onUpdateNoteStart() {
  yield* takeLatest(NOTE_ACTION_TYPES.UPDATE_NOTE_START, updateNotes);
}

export function* onDeleteNoteStart() {
  yield* takeLatest(NOTE_ACTION_TYPES.DELETE_NOTE_START, deleteNotes);
}

export function* onGetNotesStart() {
  yield* takeLatest(NOTE_ACTION_TYPES.GET_NOTES_START, getNotes);
}

export function* onAddingNoteSuccess() {
  yield* takeLatest(NOTE_ACTION_TYPES.ADDING_NOTE_SUCCESS, getNotesAfterAdding);
}

// export function* onUpdateNoteSuccess() {
//   yield* takeLatest(NOTE_ACTION_TYPES.UPDATE_NOTE_SUCCESS, getNotesAfterAdding);
// }

// export function* onDeleteNoteSuccess() {
//   yield* takeLatest(NOTE_ACTION_TYPES.DELETE_NOTE_SUCCESS, getNotesAfterAdding);
// }

export function* noteSagas() {
  yield* all([
    call(onAddingNoteStart),
    call(onUpdateNoteStart),
    call(onDeleteNoteStart),
    call(onGetNotesStart),
    // call(onUpdateNoteSuccess),
    call(onAddingNoteSuccess),
    // call(onDeleteNoteSuccess),
  ]);
}
