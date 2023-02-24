import styles from "./specs.module.scss";
const Specs = ({ carStats }) => {
  return (
    <section className={styles.specsWrap}>
      <h4>Specs</h4>
      <div className={styles.barWrap}>
        <ul className={styles.csListing}>
          {carStats.map((stat, index) => (
            <li key={index}>
              <label>
                {stat.label}
                <span className={styles.csCounter}>{stat.score}</span>
              </label>
              <div className={` ${styles.csDiv} ${styles.swDiv} `}>
                <div className={styles.carProgressBar}>
                  <span
                    className={styles.repProgress}
                    style={{ width: `${stat.score * 10}%` }}
                  ></span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Specs;
