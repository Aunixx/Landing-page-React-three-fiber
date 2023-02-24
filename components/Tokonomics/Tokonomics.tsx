import { FC } from "react";
import { tokonomicsCards, vestingList } from "../../constant/tokonomicData";
import Image from "next/image";
import Diamond from "../../public/Images/red-diamond.svg";
import PieChart from "../../public/Images/token-pie-chart.svg";
import Chart from "./chart/chart";

import styles from "./tokonomics.module.scss";

const Tokonomics: FC = () => {
  return (
    <>
      <section className={styles.tokenBanner}>
        <div className={styles.tokenWrapper}>
          <div className={` ${styles.nitroContainer} nitro-container `}>
            <div className={styles.nitroTokenSection}>
              <div className={styles.ntrWrapper}>
                <div className={styles.releaseSoonCard}>
                  <div className={` ${styles.ntrTitle} ${styles.borderTorch}`}>
                    Releasing Soon
                  </div>
                  <div
                    className={` ${styles.ntrIntroWrapper} ${styles.borderTorch}`}
                  >
                    <div>
                      <span>Token by Nitro League</span>
                      <div className={styles.tokenHeading}>
                        <h1>NITRO</h1>
                        <span>
                          <Image
                            src={Diamond}
                            alt="diamond"
                            layout="intrinsic"
                          />
                        </span>
                      </div>
                      <p>
                        Nitro leagues token - NITRO is a fixed supply ERC20. It
                        powers your progress though Nitro League, unlocking a
                        whole host of access and benefits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tokenomicsSection}>
        <div className={` ${styles.nitroContainer} nitro-container `}>
          <div className={styles.tokenomicsInerSection}>
            <div className="heading-style-1">
              <span className="title-borderLine h2"></span>
              <h2>Nitro Tokenomics</h2>
            </div>
            <div className={styles.cardsGrid}>
              {tokonomicsCards.map((cards, index) => (
                <div key={index} className={styles.tokenomicCard}>
                  <h4 className={styles.tokenomicValue}>{cards.value}</h4>
                  <span className={styles.tokenomicTitle}>{cards.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tokenAllocatorSection}>
        <div className="nitro-container">
          <div className={styles.allocationInerDiv}>
            <div className="gameOverview-title">
              <span className="title-borderLine"></span>
              <h2 className={styles.allocation}>Token Allocation</h2>
            </div>
            <div className={styles.tokenPieChart}>
              <Image src={PieChart} alt="Token allocator" layout="intrinsic" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.vestingScheduleSection}>
        <div className="nitro-container">
          <div className={styles.allocationInerDiv}>
            <div className="gameOverview-title">
              <span className="title-borderLine"></span>
              <h2 className={styles.allocation}>Vesting Schedule</h2>
            </div>
            <div className={styles.vestingListWrapper}>
              <ul className={styles.vestingList}>
                {vestingList.map((vesting, index) => (
                  <li key={index} className={styles.vestingListItem}>
                    <div className={styles.vestingListTitle}>
                      {vesting.title}
                    </div>
                    <div className={styles.vestingListDesc}>{vesting.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <section className={styles.vestingScheduleSection}>
          <Chart />
        </section>
      </section>

      {/* <section className="token-release-section">
        <div className="nitro-container">
          <div className="allocation-inr-div">
            <div className="gameOverview-title">
              <span className="title-borderLine"></span>
              <h2>Token Release Schedule</h2>
            </div>
            <div className="token-release-chart-wrapper">
              <div id="token-release-chart"></div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Tokonomics;
