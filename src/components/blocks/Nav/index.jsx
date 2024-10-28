import Logo from '../../Logo';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
    </nav>
  );
};

export default Nav;
