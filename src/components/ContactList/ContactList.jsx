import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  // console.log(contacts);

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
