import { useDispatch, useSelector } from 'react-redux';
import phonebookActions from 'redux/phonebook/phonebook-actions';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import Contact from './Contact';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDelete = id => dispatch(phonebookActions.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        );
      })}
    </ul>
  );
}
