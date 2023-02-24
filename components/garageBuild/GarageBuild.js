import Image from "next/image";
import { featureLsitTwo } from "../../constant/featureListTwo";
import styles from "./garageBuild.module.scss";
import Link from "next/link";

const GarageBuild = ({ title }) => {
  return (
    <section className={styles.metaverseFeatures}>
      <div className="nitro-container">
        <div className="heading-style-1">
          <span className="title-borderLine h2"></span>
          <h2>{title}</h2>
        </div>
        <ul className={styles.buildFeaturesList}>
          {featureLsitTwo.map((features, index) => (
            <li key={index}>
              <div className={`${styles.FeatureIcons}`}>
                <Image src={features.Image} alt="car" layout="intrinsic" />
              </div>
              <div className={`${styles.content}`}>
                <span>{features.detail}</span>
                <p>{features.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <div
          className={`${styles.detailButton} mt-4 d-flex justify-content-center`}
        >
          <Link
            href="https://docs.nitroleague.com/the-game/the-nitro-guide/release-notes/garage-v1.3.0"
            passHref
          >
            <a href="" target="_blank">
              More Details
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default GarageBuild;
