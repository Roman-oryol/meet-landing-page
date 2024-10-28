import Container from '../../ui/Container';
import Button from '../../ui/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.content} data-aos="zoom-in">
        <h1 className="text-preset-1">
          Group Chat
          <br />
          for Everyone
        </h1>
        <p className="text-preset-4">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div className={styles.buttonBlock}>
          <Button className="buttonBlue" href="#nowere">
            Download <span>v1.3</span>
          </Button>
          <Button className="buttonPurple" href="#nowere">
            What is it?
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
