import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <nav>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
