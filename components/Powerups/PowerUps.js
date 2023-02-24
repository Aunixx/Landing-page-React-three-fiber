import styles from "./powerUps.module.scss";
import powerupImg from "../../public/Images/powerUpImg.png";
import Image from "next/image";
import { awsAssetsFetcher } from "../../utils/awsAssetsFetcher";

// import Button from "@components/Button/Button";

const PowerUps = () => {
  return (
    <section className={styles.PowerUpsWrap}>
      <div className="row row-gutter-0">
        <div className={` ${styles.imgContainer} col-md-6`}>
          <Image
            src={awsAssetsFetcher("powerUpImg")}
            height={1063}
            width={840}
            alt="img"
            layout="responsive"
            // placeholder="blur"
          />
        </div>
        <div className="col-md-6">
          <div className={styles.content}>
            <h3>Components & Power ups</h3>
            <p>
              Gear up for an unlimited experience in Nitro Arcade with
              Components & Power Ups that enable you to win more races and get
              more rewards.
            </p>
            <p>
              <span>Rarity</span> <br />
              NFT Assets are available in distinct degrees of rarity. Ranging
              from Common, Uncommon, Rare, Special, and Legendary.
            </p>
            {/* <button className={styles.exploreBtn}> Explore</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default PowerUps;
