import { LockOutlined, MailOutlined } from '@ant-design/icons/lib/icons';
import { Form, Button, Input, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations } from 'redux/auth/auth-operations';

export default function LoginPage() {
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Row justify="center" align="middle" style={{ flex: 1 }}>
      <Col xs={20} sm={12} lg={8}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
          <p>
            Or <Link to="/registration">register now!</Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
}
