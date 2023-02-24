import styles from "./backers.module.scss";
import Image from "next/image";
import { BackersData } from "../../constant/BackersData";

const Backers = () => {
  return (
    <section
      className={` ${styles.investorSection} nitro-section game-over-section  align-items-center`}
      id="nitro-investor-section"
    >
      <div className="nitro-container">
        <h2>Backers</h2>
        <div className={styles.investorsGrid}>
          <ul className={styles.invListing}>
            {BackersData.map((partner, index) => (
              <li key={index}>
                <Image
                  src={partner}
                  alt="partners"
                  layout="intrinsic"
                  height={105}
                  width={209}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Backers;
