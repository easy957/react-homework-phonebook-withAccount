import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRoute({
  component: RouteComponent,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <RouteComponent />;
}
