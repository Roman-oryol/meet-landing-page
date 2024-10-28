import Number from '../../Number';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <Number num={2} />
      <div className={styles.footerHero}>
        <Container data-aos="zoom-in">
          <div className={styles.heroBody}>
            <h2 className="text-preset-2">Experience more together</h2>
            <p className="text-preset-4">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <Button href="#nowere" className="buttonPurple">
              Download <span className={styles.version}>v1.3</span>
            </Button>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
