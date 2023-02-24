import Image from "next/image";
import styles from "./raceOn.module.scss";
import img from "../../public/Images/raceOnImg.png";

const RaceOn = () => {
  return (
    <section className={styles.RaceOnSection}>
      <div className="nitro-container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className={styles.content}>
              <h3>Race on</h3>
              <p>
                Build a winning machine, customize your vehicle, and rule the
                Arena. Enjoy the ride.
              </p>
              {/* <div className="apk-download-btn-wrappper">
              <a
                href={"/NitroLeague_v1.1.1.apk"}
                className="button button--style1 on-light-bg"
                id="downloadInsallations"
              >
                <span>
                  <small>DOWNLOAD APK</small>
                </span>
              </a>
              <small>Android only, 60 MB</small>
            </div> */}
              <div className={styles.soonWrap}>
                <div className="btn disabled">Coming Soon</div>
                <small>On Android and Web</small>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className={styles.img}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RaceOn;
