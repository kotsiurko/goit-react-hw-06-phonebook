import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <h1>Phonebook App</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Your contact list is empty</p>
      )}
    </Container>
  );
};
