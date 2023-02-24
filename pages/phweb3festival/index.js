import Festival from "../../components/festival/Festival";
import GetStarted from "../../components/GetStarted/GetStarted";
import styles from "../../components/festival/festival.module.scss";
import Image from "next/image";
import car from "../../public/Images/Nyx-Lightening.png";
import pod from "../../public/Images/featureCar.svg";
import parking from "../../public/Images/pimp.svg";
import rewards from "../../public/Images/earn.svg";
import consume from "../../public/Images/consume.svg";
import news from "../../public/Images/view.svg";
import win from "../../public/Images/win.svg";
import { awsAssetsFetcher } from "../../utils/awsAssetsFetcher";

const index = () => {
  return (
    <section>
      <Festival />
      <GetStarted />
      <section className={styles.lastSection}>
        <div className="nitro-container">
          <div className={styles.car}>
            <Image src={car} alt="car" />
          </div>
          <div>
            <ul>
              <div className="row">
                <div className="col-md-6">
                  <li>
                    <div className={styles.img}>
                      <Image src={pod} alt="car" />
                    </div>
                    <span>Vehicle Customization</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <div className={styles.img}>
                      <Image src={win} alt="car" />
                    </div>
                    <span>Strategize Your Win</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <div className={styles.img}>
                      <Image src={rewards} alt="car" />
                    </div>
                    <span>Get rewarded</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <div className={styles.img}>
                      <Image src={news} alt="car" />
                    </div>
                    <span>Top the Leaderboards</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <div className={styles.img}>
                      <Image src={consume} alt="car" />
                    </div>
                    <span>The Latest and Greatest Consumables</span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <div className={styles.img}>
                      <Image src={parking} alt="car" />
                    </div>
                    <span>Claims Portal</span>
                  </li>
                </div>
              </div>
            </ul>
            <div className="apk-download-btn-wrappper d-flex justify-content-center nitro-mt-32">
              <a
                href={awsAssetsFetcher("NitroLeague_PROD_V2.0.4", "apk")}
                className="button button--style1 on-light-bg"
                id="downloadInsallations"
              >
                <span>
                  <small>Download App</small>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default index;
