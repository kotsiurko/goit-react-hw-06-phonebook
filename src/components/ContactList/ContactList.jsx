import { List, ListItem, Title, ParagraphText } from './ContactList.styled';
import { Button } from '../App.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/slice';
import { selectFilter } from 'redux/filter/selectors';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <Title>Contact List</Title>
      <List>
        {visibleContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <div style={{ textAlign: 'left' }}>
              <p>
                <ParagraphText>Contact name:</ParagraphText> {name}
              </p>
              <p>
                <ParagraphText>Tel. number:</ParagraphText> {number}
              </p>
            </div>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
