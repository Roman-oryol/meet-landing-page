import styles from './Logo.module.css';

const Logo = () => {
  return (
    <img
      className={styles.logo}
      src="image/logo.svg"
      width={118}
      height={28}
      alt="Logo meet"
    />
  );
};

export default Logo;
