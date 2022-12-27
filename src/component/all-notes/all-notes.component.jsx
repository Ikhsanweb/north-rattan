import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCurrentNotes,
  selectIsLoading,
} from '../../store/note/note.selector';
import NoteCard from '../note-card/note-card.component';
import Spinner from '../spinner/spinner.component';

import './all-notes.styles.scss';

const AllNotes = () => {
  const selectedNotes = useSelector(selectCurrentNotes);
  const isloading = useSelector(selectIsLoading);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (selectedNotes) {
      setNotes(selectedNotes);
    }
  }, [selectedNotes]);

  return (
    <div className="all-notes-container">
      <div className="all-notes-title">
        <h2>All Notes List</h2>
      </div>
      <div className="all-notes-add">
        <Link to="add-notes">Add new notes?</Link>
      </div>
      <div className="all-notes-list">
        {isloading ? (
          <Spinner />
        ) : (
          notes &&
          typeof notes.map === 'function' &&
          notes.map((note) => <NoteCard key={note.id} note={note} />)
        )}
      </div>
    </div>
  );
};

export default AllNotes;

// {/* {notes &&
//   notes.notes.map((note) => <NoteCard key={note.id} note={note} />)} */}
