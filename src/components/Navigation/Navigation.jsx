import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
