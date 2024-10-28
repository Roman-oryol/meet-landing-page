import styles from './Button.module.css';

const Button = ({ children, className, href }) => {
  console.log(styles);
  return (
    <a
      href={href}
      className={`text-preset-5 ${styles.button} ${styles[className]}`}
    >
      {children}
    </a>
  );
};

export default Button;
