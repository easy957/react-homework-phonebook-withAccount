import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/phonebook/phonebook-operations';
import s from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <Button danger type="primary" onClick={onDelete}>
        Delete
      </Button>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
