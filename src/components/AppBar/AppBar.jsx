import {
  ContactsOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  MenuOutlined,
} from '@ant-design/icons/lib/icons';
import { Col, Menu, Row } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SiFoodpanda } from 'react-icons/si';

import { authOperations } from 'redux/auth/auth-operations';
import { getIsLoggedIn, getUser } from 'redux/auth/auth-selectors';

const { SubMenu } = Menu;

export default function AppBar() {
  const [currentMenu, setCurrentMenu] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);

  const onLogOut = () => {
    dispatch(authOperations.logOut());
  };

  const handleClick = e => {
    setCurrentMenu(e.key);
  };

  return (
    <Row justify="center">
      <Col span={20}>
        <Row justify="space-between">
          <Col span={12}>
            <Menu
              onClick={handleClick}
              selectedKeys={currentMenu}
              mode="horizontal"
              theme="dark"
              overflowedIndicator={<MenuOutlined />}
            >
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
              onClick={handleClick}
              selectedKeys={currentMenu}
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
                <SubMenu
                  key="SubMenu"
                  title={user.name}
                  icon={
                    <SiFoodpanda
                      style={{ verticalAlign: 'middle' }}
                      size={24}
                    />
                  }
                >
                  <Menu.Item key="userEmail">{user.email}</Menu.Item>
                  <Menu.Item
                    danger
                    icon={<LogoutOutlined />}
                    key="logout"
                    onClick={onLogOut}
                  >
                    Log Out
                  </Menu.Item>
                </SubMenu>
              )}
            </Menu>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
