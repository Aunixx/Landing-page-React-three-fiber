import styles from "./competition.module.scss";

const index = () => {
  return (
    <section className={styles.competeWrap}>
      <div className={`nitro-container`}>
        <div className={styles.content}>
          <h3>Alpha Competition</h3>
          <p>
            You? yes you. We’re looking for you to test out the Alpha version of
            our Arcade. What are you waiting for? Fill out the form, test the
            Arcade and get a headstart to our Arcade beta launch!
          </p>
          <div className={styles.link}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfIuhPyChEjBV3q1YwOypX-kvcnYpouq4THaEofjVNJWUb4Xg/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Fill form here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
