import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/phonebook/phonebook-operations';
import { getLoading } from 'redux/phonebook/phonebook-selectors';
import Filter from 'components/Filter';
import { Col, Divider, Row, Spin } from 'antd';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Row justify="center">
      <Col span={20}>
        <h1>PhoneBook</h1>
        <Divider orientation="left">Create contact</Divider>
        <ContactForm />

        <Divider orientation="left">Filter</Divider>
        <Filter />

        <Divider orientation="left">Contacts</Divider>
        <ContactsList />
      </Col>
    </Row>
  );
}
