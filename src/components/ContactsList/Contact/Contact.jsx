import PropTypes from 'prop-types';
import s from './Contact.module.css';

export default function Contact({ name, number, onDelete }) {
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
