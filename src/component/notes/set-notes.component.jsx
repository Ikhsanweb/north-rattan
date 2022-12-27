import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updateNoteStart } from '../../store/note/note.action';
import { selectCurrentToken } from '../../store/user/user.selector';
import InputForm from '../input-form.component';

const SetNotes = () => {
  const location = useLocation();
  const { id, recentTitle, recentbody } = location.state;

  const defaultFormFields = {
    title: recentTitle,
    tags: ['general'],
    body: recentbody,
  };
  const defaultFormFieldsTwo = {
    title: '',
    tags: ['general'],
    body: '',
  };

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const token = useSelector(selectCurrentToken);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, tags, body } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFieldsTwo);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(
        updateNoteStart(
          id,
          title,
          tags,
          body,
          token.accessToken,
          token.refreshToken
        )
      );
      resetFormFields();
      // navigate('/notes');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
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
        {console.log(id)}
        <button type="submit">add notes</button>
      </form>
    </div>
  );
};

export default SetNotes;
