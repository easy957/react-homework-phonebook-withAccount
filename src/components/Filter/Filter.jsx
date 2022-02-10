import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ filter, onFilterChange }) {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          name="filter"
          value={filter}
          onChange={onFilterChange}
          type="text"
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
