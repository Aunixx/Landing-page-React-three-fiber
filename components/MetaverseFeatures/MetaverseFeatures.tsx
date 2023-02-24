import { FC } from "react";
import { featureLsit } from "../../constant/featureLsit";

import Image from "next/image";

import styles from "./metaverseFeatures.module.scss";

const MetaverseFeatures: FC<any> = ({ title }) => {
  return (
    <section className={styles.metaverseFeatures}>
      <div className="nitro-container">
        <div className="heading-style-1">
          <span className="title-borderLine h2"></span>
          <h2>{title}</h2>
        </div>
        <ul className={styles.buildFeaturesList}>
          {featureLsit.map((features, index) => (
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
      </div>
    </section>
  );
};
export default MetaverseFeatures;
