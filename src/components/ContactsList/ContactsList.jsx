import { Table, Typography } from 'antd';
import DeleteContactBtn from 'components/DeleteContactBtn/DeleteContactBtn';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const tableData = contacts.map(contact => ({
    ...contact,
    key: contact.id,
  }));
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Number',
      dataIndex: 'number',
      render: number => <Typography.Text copyable>{number}</Typography.Text>,
    },
    {
      render: contact => <DeleteContactBtn id={contact.id} />,
      width: '62px',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      size="small"
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: [5, 10, 20, 50],
        position: ['bottomCenter', 'topCenter'],
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
      }}
    />
    // <List
    //   bordered
    //   dataSource={contacts}
    //   renderItem={({ id, name, number }) => (
    //     <List.Item style={{ display: 'block' }} key={id}>
    //       <Contact id={id} name={name} number={number} />
    //     </List.Item>
    //   )}
    // />
  );
}
