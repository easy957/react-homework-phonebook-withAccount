import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
const deleteContact = createAction('phonebook/delete');
const changeFilter = createAction('phonebook/changeFilter');

const phonebookActions = { addContact, deleteContact, changeFilter };
export default phonebookActions;
