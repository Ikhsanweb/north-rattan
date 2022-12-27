import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { closeNote } from '../../store/note/note.action';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import './navbar.styles.scss';

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOutUser = () =>
    dispatch(closeNote(), signOutStart(), navigate('/'));
  return (
    <Fragment>
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <h1 className="logo">N</h1>
        </Link>
        <div className="nav-links">
          {currentUser ? (
            <span onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
