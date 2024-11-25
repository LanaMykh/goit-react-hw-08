import styles from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { Toaster } from 'react-hot-toast';

const AppBar = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Toaster position="top-right" />
    </header>
  );
};

export default AppBar;
