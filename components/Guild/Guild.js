import styles from "./guild.module.scss";
import Image from "next/image";
import { GuildData } from "../../constant/GuildData";

const Guilds = () => {
  return (
    <section
      className={` ${styles.investorSection} nitro-section game-over-section  align-items-center`}
      id="nitro-investor-section"
    >
      <div className="nitro-container">
        <h2>Guilds</h2>
        <div className={styles.investorsGrid}>
          <ul className={styles.invListing}>
            {GuildData.map((partner, index) => (
              <li key={index}>
                <Image
                  src={partner}
                  alt="partners"
                  layout="intrinsic"
                  placeholder="blur"
                  blurDataURL
                  height={84.92}
                  width={209.33}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guilds;
