import { HiUser, HiPhone } from 'react-icons/hi';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <div className={styles.box}>
      <div className={styles.info}>
        <p className={styles.text}>
          <HiUser />
          {name}
        </p>
        <p className={styles.text}>
          <HiPhone />
          {number}
        </p>
      </div>
      <button type="button" onClick={() => onDeleteContact()}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
