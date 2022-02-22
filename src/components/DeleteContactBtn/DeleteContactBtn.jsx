import { DeleteOutlined, LoadingOutlined } from '@ant-design/icons/lib/icons';
import { Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/phonebook/phonebook-operations';

export default function DeleteContactBtn({ id }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const onDelete = () => {
    setIsDeleting(
      true,
      dispatch(contactsOperations.deleteContact(id)).then(setIsDeleting(false))
    );
  };

  return (
    <Button disabled={isDeleting} danger type="primary" onClick={onDelete}>
      {isDeleting ? <LoadingOutlined /> : <DeleteOutlined />}
    </Button>
  );
}
