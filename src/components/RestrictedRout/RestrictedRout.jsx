import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ component, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
