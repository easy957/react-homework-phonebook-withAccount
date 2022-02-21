import { Button, Spin } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/phonebook/phonebook-operations';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const onDelete = () => {
    setIsDeleting(
      true,
      dispatch(contactsOperations.deleteContact(id)).then(setIsDeleting(false))
    );
  };

  return (
    <>
      <p>
        {name} - <b>{number}</b>
      </p>

      <Button disabled={isDeleting} danger type="primary" onClick={onDelete}>
        {isDeleting ? <Spin /> : 'Delete'}
      </Button>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
