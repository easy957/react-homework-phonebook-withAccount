import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/phonebook/phonebook-operations';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import Contact from './Contact';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}
