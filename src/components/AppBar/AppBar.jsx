import {
  ContactsOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from '@ant-design/icons/lib/icons';
import { Col, Menu, Row } from 'antd';
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
    <Row justify="center">
      <Col span={20}>
        <Row justify="space-between">
          <Col span={12}>
            <Menu mode="horizontal" theme="dark">
              <Menu.Item icon={<HomeOutlined />} key="home">
                <Link to={'/'}>Home</Link>
              </Menu.Item>
              {isLoggedIn && (
                <Menu.Item icon={<ContactsOutlined />} key="contacts">
                  <Link to={'/contacts'}>Contacts</Link>
                </Menu.Item>
              )}
            </Menu>
          </Col>
          <Col span={12}>
            <Menu
              mode="horizontal"
              theme="dark"
              style={{ justifyContent: 'flex-end' }}
            >
              {!isLoggedIn && (
                <>
                  <Menu.Item icon={<LoginOutlined />} key="login">
                    <Link to={'/login'}>Login</Link>
                  </Menu.Item>
                  <Menu.Item icon={<UserAddOutlined />} key="registration">
                    <Link to={'/registration'}>Registration</Link>
                  </Menu.Item>
                </>
              )}
              {isLoggedIn && (
                <>
                  <Menu.Item
                    icon={<LogoutOutlined />}
                    key="logout"
                    onClick={onLogOut}
                  >
                    <span>Log Out</span>
                  </Menu.Item>
                </>
              )}
            </Menu>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
