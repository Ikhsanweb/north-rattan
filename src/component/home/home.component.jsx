import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import './home.styles.scss';

const Home = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());

  return (
    <div className="home-container">
      <div className="home-section-one">
        <h1>Welcome to Notes App</h1>
      </div>
      <div className="home-section-one">
        {currentUser ? <h1>Hi, {currentUser.fullname}</h1> : <h1>Hi, Guest</h1>}
      </div>
      <div className="home-section-one">
        {currentUser ? (
          <div className="home-category">
            <Link to="/notes">Go to Notes App</Link>
          </div>
        ) : null}

        <div className="home-category">
          {currentUser ? (
            <p className="sign-out-text" onClick={signOutUser}>
              Sign Out
            </p>
          ) : (
            <Link to="/auth">Please Sign In to use this app</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
