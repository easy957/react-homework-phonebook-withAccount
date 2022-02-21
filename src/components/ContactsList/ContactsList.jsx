import { List } from 'antd';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import Contact from './Contact';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <List
      bordered
      dataSource={contacts}
      renderItem={({ id, name, number }) => (
        <List.Item>
          <Contact id={id} name={name} number={number} />
        </List.Item>
      )}
    />
  );
}
