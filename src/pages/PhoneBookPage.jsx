import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/phonebook/phonebook-operations';
import Filter from 'components/Filter';
import { Col, Divider, Row } from 'antd';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <Row justify="center">
        <Col span={20}>
          <h1>PhoneBook</h1>
          <Divider orientation="left">Create contact</Divider>
          <ContactForm />

          <Divider orientation="left">Filter</Divider>
          <Filter />

          <Divider orientation="left">Contacts</Divider>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={20}>
          <ContactsList />
        </Col>
      </Row>
    </>
  );
}
