/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
import styles from "./downloadSteps.module.scss";

const DownloadSteps: FC = () => {
  return (
    <section className={styles.installStepsSection}>
      <div className="nitro-container">
        <div className="row">
          <div className="col-lg-8 offset-xl-5">
            <div className="heading-style-1">
              <span className="title-borderLine h2"></span>
              <h2>Arcade with Metamask</h2>
              {/* <p>Download the latest version to access your garage.</p> */}
            </div>
            <ol className={`{ ${styles.stepsList} styled-list-1`}>
              <li>
                <h6>Login Using MetaMask</h6>
                <p>
                  Now you can log in using MetaMask. Install the MetaMask app on
                  your Android device and choose 'Login with MetaMask'.
                </p>
              </li>
              <li>
                <h6>Multi chain assets support</h6>
                <p>
                  Assets on Polygon, Virtua and Nitro League ecosystems can now
                  be seen.
                </p>
              </li>
              {/* <li>
                <h6>Login to the Game with Metamask</h6>
                <p>
                  Upon installation, you can open the game. You have
                  successfully installed the game once you see a login screen.
                  Log in with your Metamask wallet. Get Metamask from the Google
                  Playstore if you don`t already have it.
                </p>
              </li> */}
              <li>
                <h6>Viewing Virtua Assets</h6>
                <p>
                  To view your Virtua assets, link your wallet address to your
                  account using 'Wallet Management'.
                  {/* <a href="https://terravirtua.io/register" target="blank">
                    {" "}
                    {""}here{" "}
                  </a> */}
                </p>
              </li>
              <li>
                <h6>Wallet management</h6>
                <p>
                  You can add/link multiple wallets to your primary account.
                </p>
              </li>
            </ol>
            <div className="apk-download-btn-wrappper">
              <a
                href={awsAssetsFetcher("NitroLeague_PROD_V2.0.4", "apk")}
                className="button button--style1 on-light-bg"
                id="downloadInsallations"
                // style={{
                //   opacity: "0.4",
                //   pointerEvents: "none",
                //   cursor: "not-allowed",
                // }}
              >
                <span>
                  <small>Download App</small>
                </span>
              </a>
              <small>Android only, 113 MB</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSteps;
