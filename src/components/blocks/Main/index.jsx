import Number from '../../Number';
import Container from '../../ui/Container';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Container>
        <Number num={1} />
        <div data-aos="fade-up" className={styles.collage}>
          <img src="image/desktop/image-woman-in-videocall.jpg" alt="" />
          <img src="image/desktop/image-women-videochatting.jpg" alt="" />
          <img src="image/desktop/image-men-in-meeting.jpg" alt="" />
          <img src="image/desktop/image-man-texting.jpg" alt="" />
        </div>
        <div data-aos="fade-up" className={styles.textContent}>
          <h2>
            <span className={`text-preset-3 ${styles.subTitle}`}>
              Built for modern use
            </span>
            <span className={`text-preset-2 ${styles.title}`}>
              Smarter meetings, all in one place
            </span>
          </h2>
          <p className={`${styles.description} text-preset-4`}>
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Main;
