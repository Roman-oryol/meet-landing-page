import styles from './Number.module.css';

const Number = ({num}) => {
  return (
    <div className={`${styles.number}`}>
      <span className="--text-preset-5">0{num}</span>
    </div>
  );
};

export default Number;
