import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations } from 'redux/auth/auth-operations';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function AppBar() {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(authOperations.logOut());
  };

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <Link to={'/'}>Home</Link>
      {!isLoggedIn && (
        <>
          <Link to={'/login'}>Login</Link>
          <Link to={'/registration'}>Registration</Link>
        </>
      )}
      {isLoggedIn && (
        <>
          <Link to={'/contacts'}>Contacts</Link>
          <button onClick={onLogOut}>Log Out</button>
        </>
      )}
    </header>
  );
}
