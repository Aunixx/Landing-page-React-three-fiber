import { FC } from "react";
import { marketPlaceData } from "../../constant/MarketPlaceData";
import Image from "next/image";
import Link from "next/link";
import styles from "./marketPlace.module.scss";

const MarketPlace: FC = () => {
  return (
    <section className={styles.nreleaseCars}>
      <div className="nitro-container">
        <div className={styles.inrNreleaseCars}>
          <div className={styles.nreleaseGrid}>
            <ul className={styles.nreleaseListing}>
              {marketPlaceData.map((info, index) => (
                <li key={index}>
                  <Link href={info.href}>
                    <div className={styles.csmCard}>
                      <div className={styles.csmCardImg}>
                        <Image
                          src={info.Image}
                          alt="Sobek Ward"
                          layout="responsive"
                          height={256}
                          width={456}
                        />
                      </div>
                      <div className={styles.csmContent}>
                        <h3>{info.name}</h3>
                        <div className={styles.csmButtons}>
                          <span className={styles.csmFeature}>
                            {info.model}
                          </span>
                          <span className={styles.csmFeature}>
                            {info.class}
                          </span>
                          <span className={styles.csmFeature}>
                            {info.rarity}
                          </span>
                        </div>
                        {/* <p className={styles.csmPrice}>{info.price}</p> */}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
