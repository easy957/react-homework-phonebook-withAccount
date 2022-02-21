import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/phonebook/phonebook-operations';
import { Button, Form, Input, InputNumber } from 'antd';
import { PhoneOutlined, UserAddOutlined } from '@ant-design/icons/lib/icons';
import { useForm } from 'antd/lib/form/Form';
import { getContacts } from 'redux/phonebook/phonebook-selectors';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [form] = useForm();
  const contacts = useSelector(getContacts);

  function handleSubmit({ name, number }) {
    const isNameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      console.log('name in contacts');
      return;
    }
    dispatch(contactsOperations.addContact({ name, number }));
    form.resetFields();
  }

  return (
    <Form
      form={form}
      name="create_contact"
      layout="inline"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your contact name!' }]}
      >
        <Input
          prefix={<UserAddOutlined className="site-form-item-icon" />}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Form.Item>
      <Form.Item
        name="number"
        rules={[
          { required: true, message: 'Please input your contact number!' },
        ]}
      >
        <Input
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create contact
        </Button>
      </Form.Item>
    </Form>
  );
}
