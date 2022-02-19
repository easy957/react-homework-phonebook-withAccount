import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/phonebook/phonebook-operations';
import { getLoading } from 'redux/phonebook/phonebook-selectors';
// import Filter from 'components/Filter';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter /> */}
      <ContactsList />
    </>
  );
}
