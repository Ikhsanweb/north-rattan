import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userSignInStart } from '../../store/user/user.action';
import Button from '../button/button.component';
import InputForm from '../input-form.component';
import './sign-in-form.styles.scss';

const SignInForm = () => {
  const defaultFormFields = {
    username: '',
    password: '',
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(userSignInStart(username, password));
      resetFormFields();
      navigate('/');
    } catch (error) {}
  };

  // const handleSubmitAlternative = async (event) => {
  //   event.preventDefault();
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //   };
  //   try {
  //     const response = await fetch(
  //       'http://localhost:5000/authentications',
  //       requestOptions
  //     );
  //     const user = await response.json();
  //     console.log(user);
  //     resetFormFields();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
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
        <Button type="submit">Sign In</Button>
      </form>
      <div className="link-to-sign-up">
        <Link to="sign-up">Don't have an Account? Please sign up</Link>
      </div>
    </div>
  );
};

export default SignInForm;
