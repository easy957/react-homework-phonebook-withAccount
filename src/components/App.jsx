import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts && parsedContacts.length !== 0) {
      return parsedContacts;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filter, setFilter] = useState('');

  const visibleContacts = getVisibleContacts();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    for (const contact of contacts) {
      if (contact.name === name) {
        alert(`${name} is already in contacts`);
        return;
      }
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [contact, ...contacts]);
  }

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  function handleDelete(id) {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  }

  return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilter} value={filter} />
      <ContactsList contacts={visibleContacts} onDelete={handleDelete} />
    </Container>
  );
}
