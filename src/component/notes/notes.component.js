import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getNotesStart } from '../../store/note/note.action';
import { selectCurrentToken } from '../../store/user/user.selector';
import AddNotes from '../add-notes/add-notes.component';
import AllNotes from '../all-notes/all-notes.component';
import EditNotes from '../edit-note/edit-note.component';
import NoteDetail from '../note detail/note-detail.component';

const Notes = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentToken);
  useEffect(() => {
    dispatch(getNotesStart(token.accessToken, token.refreshToken));
  }, [dispatch, token.accessToken, token.refreshToken]);

  return (
    <Routes>
      <Route index element={<AllNotes />} />
      <Route path="edit-notes" element={<EditNotes />} />
      <Route path="add-notes" element={<AddNotes />} />
      <Route path=":id/*" element={<NoteDetail />} />
    </Routes>
  );
};

export default Notes;
