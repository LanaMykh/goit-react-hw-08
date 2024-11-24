import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
