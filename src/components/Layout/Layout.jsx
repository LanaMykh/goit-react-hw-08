import styles from './Layout.module.css';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <div className={styles.box}>{children}</div>
    </div>
  );
};

export default Layout;
