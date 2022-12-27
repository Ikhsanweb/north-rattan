import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteNoteStart } from '../../store/note/note.action';
import { selectCurrentToken } from '../../store/user/user.selector';
import './whole-note.styles.scss';

const WholeNote = ({ note }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, body, createdAt, updatedAt } = note;
  const newCA = new Date(createdAt);
  const newUA = new Date(updatedAt);
  const token = useSelector(selectCurrentToken);
  const deleteThisNote = () =>
    dispatch(
      deleteNoteStart(id, token.accessToken, token.refreshToken),
      navigate('/notes')
    );
  return (
    <div className="whole-note-container">
      <div className="whole-note-button">
        <Link to="/notes/" className="whole-note-button-item-back">
          &lArr;
        </Link>
        <Link
          to="/notes/edit-notes"
          state={{ id: id, recentTitle: title, recentbody: body }}
          className="whole-note-button-item"
        >
          Edit this note
        </Link>
        <span onClick={deleteThisNote} className="whole-note-button-item">
          Delete this note
        </span>
      </div>
      <div className="whole-note-item">
        <h1>{title}</h1>
        <p>created at: {newCA.toLocaleDateString('en-US')}</p>
        <p>updated at: {newUA.toLocaleDateString('en-US')}</p>
        <p className="whole-note-body">{body}</p>
      </div>
    </div>
  );
};

export default WholeNote;
