import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {error && <ErrorMessage />}
        <ContactList />
        {loading && <Loader />}
      </div>
    </>
  );
};

export default App;
