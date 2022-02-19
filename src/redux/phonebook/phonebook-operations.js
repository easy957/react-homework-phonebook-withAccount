import axios from 'axios';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    const { statusText } = await axios.delete(`/contacts/${contactId}`);

    if (statusText === 'OK') dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
