import PropTypes from 'prop-types';
import s from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={s.item}>
      <p>
        {name}: {number}
      </p>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
