import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
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
