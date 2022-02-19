import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PrivateRoute({ component: RouteComponent }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <RouteComponent /> : <Navigate to="/" />;
}
