import { Link } from 'react-router-dom';
import './note-card.styles.scss';

const NoteCard = ({ note }) => {
  const { title, createdAt, updatedAt, body, id } = note;
  const newCA = new Date(createdAt);
  const newUA = new Date(updatedAt);
  return (
    <div className="note-card-container">
      <h2 className="note-card-title">
        {title.substring(0, 55)} {title.length > 55 ? <span>....</span> : null}
      </h2>
      <span className="note-card-date">
        created at: {newCA.toLocaleDateString('en-US')}
      </span>
      <span className="note-card-date">
        updated at: {newUA.toLocaleDateString('en-US')}
      </span>
      <p className="note-card-body">
        {body.substring(0, 120)}
        {body.length > 120 ? <span>....</span> : null}
      </p>
      <br />
      <Link to={id} className="see-details">
        See details
      </Link>
    </div>
  );
};

export default NoteCard;
