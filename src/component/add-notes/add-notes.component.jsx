import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addingNoteStart } from '../../store/note/note.action';
import { selectCurrentToken } from '../../store/user/user.selector';
import Button from '../button/button.component';
import InputForm from '../input-form.component';

import './add-notes.styles.scss';

const AddNotes = () => {
  const defaultFormFields = {
    title: '',
    tags: ['general'],
    body: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectCurrentToken);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, tags, body } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(
        addingNoteStart(
          title,
          tags,
          body,
          token.accessToken,
          token.refreshToken
        )
      );
      resetFormFields();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="add-note-container">
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Title"
          type="text"
          required
          onChange={handleChange}
          name="title"
          value={title}
        />
        <InputForm
          label="Tags"
          type="text"
          required
          onChange={handleChange}
          name="tags"
          value={tags}
        />
        <InputForm
          label="Body"
          type="text"
          required
          onChange={handleChange}
          name="body"
          value={body}
        />
        <Button type="submit">Add new note</Button>
      </form>
    </div>
  );
};

export default AddNotes;
