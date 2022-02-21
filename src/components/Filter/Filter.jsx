import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { Col, Input, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeFilter } from 'redux/phonebook/phonebook-actions';
import { getFilter } from 'redux/phonebook/phonebook-selectors';

export default function Filter() {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Row>
      <Col
        style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}
      >
        <span>Find contact by name:</span>
      </Col>
      <Col>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Name"
          onChange={onFilterChange}
        />
      </Col>
    </Row>
  );
}
