import { FC } from "react";
import Image from "next/image";

import tkxel from "../../public/Images/team-members/tkxel.png";
import hotWire from "../../public/Images/team-members/hot-wire.png";
import sl2 from "../../public/Images/team-members/sl2-capital.png";
import tv from "../../public/Images/team-members/terra-virtua.png";
import styles from "./power.module.scss";

const PoweredBy: FC = () => {
  return (
    <section className={styles.empoweredSection}>
      <div className="nitro-container">
        <div className={styles.empoweredIner}>
          <div className={styles.headingWrap}>
            <span className={styles.border}></span>
            <h2>Empowered by</h2>
          </div>
          <div className={styles.empLogos}>
            <div className={styles.dibySection}>
              <div className={styles.inerDiby}>
                <h3>developed & incubated by</h3>
                <div className={styles.dibyLogosContent}>
                  <div className={styles.hotWire}>
                    <div
                      className={` ${styles.dibyLogos} ${styles.hotWireLogo}`}
                    >
                      <Image src={hotWire} alt="Hot Wire" layout="intrinsic" />
                      <p>
                        A new AAA development studio by blending the best of
                        Tkxel and SL2 Capital
                      </p>
                    </div>
                  </div>
                  <div className={` ${styles.hotWire} ${styles.tkCapital}`}>
                    <div className={` ${styles.dibyLogos} ${styles.tkxelLogo}`}>
                      <Image src={tkxel} alt="Hot Wire" layout="intrinsic" />

                      <p>
                        Been building great technology for 15 years. 500M
                        downloads of their games, 700 employees.
                      </p>
                    </div>
                    <div
                      className={` ${styles.dibyLogos} ${styles.sl2CapitalLogo}`}
                    >
                      <Image src={sl2} alt="Hot Wire" layout="intrinsic" />

                      <p>
                        Experience building projects, putting in place
                        leadership teams, office, support team, incentives,
                        relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` ${styles.experienceSection} ${styles.dibySection}`}
            >
              <div className={styles.inerDiby}>
                <h3>
                  marketplace & metaverse
                  <br />
                  experience by
                </h3>
                <div className={styles.dibyLogosContent}>
                  <div className={styles.hotWire}>
                    <div
                      className={`${styles.dibyLogos} ${styles.hotWireLogo}`}
                    >
                      <Image src={tv} alt="Hot Wire" layout="intrinsic" />
                    </div>
                  </div>

                  <div className={`${styles.hotWire} ${styles.tvContent}`}>
                    <div className={styles.tvText}>
                      <p>
                        Top NFT project, 400 on CMC, 2 years ahead in metverse
                        and 3D collectibles, marketplace and relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PoweredBy;
