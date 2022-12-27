import { Route, Routes } from 'react-router-dom';
import Note from '../note/note.component';

const NoteDetail = () => {
  // const { id } = useParams();
  // const notes = useSelector(selectCurrentNotes);

  return (
    <Routes>
      <Route index element={<Note />}></Route>
    </Routes>
    // <div>
    //   <h3>Note Detail</h3>
    //   {notes &&
    //     notes
    //       .filter((note) => note.id === id)
    //       .map((item) => <WholeNote key={item.id} note={item} />)}

    // </div>
  );
};

export default NoteDetail;
