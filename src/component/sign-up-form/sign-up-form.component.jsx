import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUpStart } from '../../store/user/user.action';
import Button from '../button/button.component';
import InputForm from '../input-form.component';
import './sign-up-form.styles.scss';

const SignUpForm = () => {
  const defaultFormFields = {
    username: '',
    password: '',
    fullname: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password, fullname } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signUpStart(username, password, fullname));
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
    <div className="sign-up-form">
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Full Name"
          type="text"
          required
          onChange={handleChange}
          name="fullname"
          value={fullname}
        />
        <InputForm
          label="User Name"
          type="text"
          required
          onChange={handleChange}
          name="username"
          value={username}
        />
        <InputForm
          label="Password"
          type="text"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">Sign Up</Button>
      </form>
      <div className="link-to-sign-in">
        <Link to="/auth">Already have an Account? Please Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
