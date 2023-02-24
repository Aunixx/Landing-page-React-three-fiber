/* eslint-disable @next/next/no-html-link-for-pages */
import { FC } from "react";
import Link from "next/link";
import styles from "./garage.module.scss";
import { awsAssetsFetcher } from "../../utils/awsAssetsFetcher";

const Garage: FC = () => {
  return (
    <section className={styles.garageExperienceSection}>
      <video autoPlay muted loop className={styles.garageBgVid}>
        <source src={awsAssetsFetcher("garage-bg", "mp4")} type="video/mp4" />
        <source src={awsAssetsFetcher("garage-bg", "webm")} type="video/webm" />
        Your browser does not support HTML5 video.
      </video>

      <div className={styles.garageContent}>
        <div className="nitro-container">
          <div className={styles.garageContentWrapper}>
            <h2>Garage Experience</h2>
            <p>
              View your cars in the Car Pod, showcase up to 6 cars in your
              personalised space - walk around your Garage and share pictures,
              earn daily rewards and more.
            </p>
            {/* <p>
              {" "}
              Build a winning machine, customize your vehicle, and rule the
              Arena. Enjoy the ride.
            </p> */}
            <Link href="/download-app.html">
              <a className="btn">Explore Garage</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Garage;
