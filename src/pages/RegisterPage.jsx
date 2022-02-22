import { Button, Col, Form, Input, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations } from 'redux/auth/auth-operations';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }) => {
    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ flex: 1 }}>
        <Col xs={20} sm={12} lg={8}>
          <h1 style={{ textAlign: 'center' }}>Registation</h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                xs: { span: 24 },
                sm: { span: 8, offset: 8 },
              }}
            >
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
            <p style={{ textAlign: 'center' }}>
              Already have an account? <Link to="/login">Sign in!</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </>
  );
}
