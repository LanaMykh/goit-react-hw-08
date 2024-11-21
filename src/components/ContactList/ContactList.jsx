import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {Array.isArray(filterContacts) &&
        filterContacts.map(contact => (
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
