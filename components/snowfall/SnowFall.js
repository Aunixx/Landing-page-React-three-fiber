import Snowfall from "react-snowfall";
import styles from "./snowFall.module.scss";

const SnowFall = () => {
  return (
    <section className={styles.SnowFallWrapper}>
      <Snowfall
        snowflakeCount={40}
        setSpeed={0.2}
        color="white"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "99",
        }}
      />
    </section>
  );
};

export default SnowFall;
