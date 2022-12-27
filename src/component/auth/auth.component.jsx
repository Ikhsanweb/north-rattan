import { Route, Routes } from 'react-router-dom';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import './auth.styles.scss';

const Auth = () => {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default Auth;
