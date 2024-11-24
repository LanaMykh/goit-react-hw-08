import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
