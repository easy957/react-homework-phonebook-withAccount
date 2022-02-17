import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

export function App() {
  return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}
