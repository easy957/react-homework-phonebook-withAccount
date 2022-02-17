import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import phonebookActions from 'redux/phonebook/phonebook-actions';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import s from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(phonebookActions.changeFilter(e.target.value));
  };

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
