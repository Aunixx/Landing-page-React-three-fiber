import Image from "next/image";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
import styles from "./experience.module.scss";
import experience from "../../public/Images/experience.png";

const Experience = ({ heading, desc, btnText }) => {
  return (
    <section className={styles.experienceWrapper}>
      {/* <video autoPlay muted loop className={styles.experienceBgVid}>
        <source src={awsAssetsFetcher("experience", "mp4")} type="video/mp4" />
        <source src={awsAssetsFetcher("garage-bg", "webm")} type="video/webm" />
        Your browser does not support HTML5 video.
      </video> */}
      <Image src={experience} alt="experience" />

      <div className={styles.experienceContent}>
        <div className="nitro-container">
          <div className={styles.experienceContentWrapper}>
            <h2>{heading}</h2>
            <p>{desc}</p>
            <button className={styles.exploreBtn}>{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
