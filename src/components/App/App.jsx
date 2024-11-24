import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { selectUserIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';

import Layout from '../Layout/Layout';
import RestrictedRoute from '../RestrictedRout/RestrictedRout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import HomePage from '../../pages/HomePage/HomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
// import { selectError, selectLoading } from '../../redux/selectors';
// import Loader from '../Loader/Loader';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';
// import { fetchContacts } from '../../redux/contactsOps';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserIsRefreshing);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Refreshing...</div>;
  }

  return (
    <>
      <div>
        <Layout>
          <Routes>
            {/* <h1>Phonebook</h1> */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            {/* <ContactForm />
          <SearchBox />
          {error && <ErrorMessage />}
          <ContactList />
          {loading && <Loader />} */}
          </Routes>
        </Layout>
      </div>
    </>
  );
};

export default App;
