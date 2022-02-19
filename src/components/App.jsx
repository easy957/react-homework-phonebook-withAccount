import ContactsPage from 'pages/PhoneBookPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import Container from './Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { getUserRefreshing } from 'redux/auth/auth-selectors';
import HomePage from 'pages/HomePage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getUserRefreshing);

  useEffect(() => dispatch(authOperations.refreshUser()), [dispatch]);

  return (
    <>
      {!isRefreshingUser && (
        <Container>
          <AppBar />
          <Routes>
            <Route path="/" element={<PublicRoute component={HomePage} />} />

            <Route
              path="/registration"
              element={
                <PublicRoute
                  redirectTo={'/contacts'}
                  restricted
                  component={RegisterPage}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  redirectTo={'/contacts'}
                  restricted
                  component={LoginPage}
                />
              }
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={ContactsPage} />}
            />
          </Routes>
        </Container>
      )}
    </>
  );
}
