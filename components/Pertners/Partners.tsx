import styles from "./partners.module.scss";
import Image from "next/image";
import { PartnersData } from "../../constant/PartnersData";
import { FC } from "react";
const Partners: FC = () => {
  return (
    <section
      className={` ${styles.investorSection} nitro-section game-over-section  align-items-center`}
      id="nitro-investor-section"
    >
      {/* <div className="nitro-container">
        <h2>Partners</h2>
        <div className={styles.investorsGrid}>
          <ul className={styles.invListing}>
            {PartnersData.map((partner, index) => (
              <li key={index}>
                <Image src={partner} alt="partners" layout="intrinsic" />
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <div className={styles.slideOption}>
        <div className="nitro-container">
          <h2>Partners</h2>
          <div id={styles.infinite} className={styles.highwaySlider}>
            <div className={styles.highwayBarrier}>
              <ul className={styles.highwayLane}>
                {PartnersData.map((partner, index) => (
                  <li className={styles.highwayCar} key={index}>
                    <Image
                      src={partner}
                      alt="partners"
                      layout="intrinsic"
                      height={62.2}
                      width={154.29}
                    />
                  </li>
                ))}
                {PartnersData.map((partner, index) => (
                  <li className={styles.highwayCar} key={index}>
                    <Image
                      src={partner}
                      alt="partners"
                      layout="intrinsic"
                      height={62.2}
                      width={154.29}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
