import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Row justify="center">
      <Col span={20}>
        <h1>Home Page</h1>
        <p>
          Welcome. If you don't have an account please proceed to
          <Link to="/registration"> registration</Link> page. Or{' '}
          <Link to="/login">sign in</Link> and proceed to{' '}
          <Link to="/contacts">Phonebook </Link>
          page.
        </p>
      </Col>
    </Row>
  );
}
