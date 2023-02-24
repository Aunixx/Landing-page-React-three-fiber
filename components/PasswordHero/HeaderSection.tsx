import React from "react";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
import styles from "../PasswordHero/Header.module.scss";

const HeaderSection = () => {
  return (
    <>
      {" "}
      <section className={styles.HeaderSec}>
        <div className="nitro-container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Welcome!</h1>
              <p className="py-3">To the Nitro Arcade Usability testing.</p>
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
    </>
  );
};

export default HeaderSection;
