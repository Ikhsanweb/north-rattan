import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCurrentNotes } from '../../store/note/note.selector';
import WholeNote from '../whole-note/whole-note.component';
import './note.styles.scss';

const Note = () => {
  const { id } = useParams();
  const [notes, setNotes] = useState();
  const selectedNotes = useSelector(selectCurrentNotes);
  useEffect(() => {
    setNotes(selectedNotes);
  }, [selectedNotes]);

  return (
    <div>
      <h3 className="note-title">Note Detail</h3>
      {notes &&
        notes
          .filter((note) => note.id === id)
          .map((item) => <WholeNote key={item.id} note={item} />)}
    </div>
  );
};

export default Note;
