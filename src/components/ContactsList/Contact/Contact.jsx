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
    <li className={s.item}>
      <p>
        {name}: {number}
      </p>
      <button className={s.button} onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
