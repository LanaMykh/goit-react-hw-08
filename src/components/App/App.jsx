import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import contactsData from '../../contacts.json';
import { nanoid } from 'nanoid/non-secure';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('saveContacts');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? contactsData;
    return parsedContacts;
  });

  useEffect(() => {
    localStorage.setItem('saveContacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const addContact = newContact => {
    setContacts([...contacts, { id: nanoid(), ...newContact }]);
  };

  const deleteContact = contactId => {
    const updateContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updateContacts);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox valueFilter={filter} handleChange={handleChange} />
        <ContactList contacts={filterContacts} onDelete={deleteContact} />
      </div>
    </>
  );
};

export default App;
