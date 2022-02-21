import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import { authOperations } from 'redux/auth/auth-operations';
import { getUserRefreshing } from 'redux/auth/auth-selectors';

import AppBar from './AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import ContactsPage from 'pages/PhoneBookPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';

const { Header, Content, Footer } = Layout;

export function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getUserRefreshing);

  useEffect(() => dispatch(authOperations.refreshUser()), [dispatch]);

  return (
    <>
      {!isRefreshingUser && (
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ padding: 0 }}>
            <AppBar />
          </Header>
          <Content style={{ display: 'flex', flexFlow: 'column' }}>
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
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      )}
    </>
  );
}
