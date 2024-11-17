import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const filterContacts = contacts.filter(contact => {
    const filteredContacts = contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase().trim());

    return filteredContacts;
  });

  return (
    <ul className={styles.list}>
      {filterContacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
