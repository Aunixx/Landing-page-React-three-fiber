/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link";
import Image from "next/image";
import footerLogo from "../../../public/Images/footer-logo-red.svg";
import styles from "./footer.module.scss";
import Discord from "../../../public/Images/fl-discord.svg";
import Medium from "../../../public/Images/fl-medium.svg";
import Telegram from "../../../public/Images/fl-telegram.svg";
import Linkedin from "../../../public/Images/fl-linkedin.svg";
import Facebook from "../../../public/Images/fl-facebook.svg";
import Youtube from "../../../public/Images/fl-youtube.svg";
import Twitter from "../../../public/Images/fl-twitter.svg";
import LeftBg from "../../../public/Images/footer-left-bg.png";
import RightBg from "../../../public/Images/footer-right-bg.png";
import insta from "../../../public/Images/insta.svg";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const Footer = ({ onClick }) => {
  return (
    <>
      <footer
        onClick={onClick}
        className={` ${styles.footer} ${styles.footerv2}`}
        id="nitro-footer"
      >
        <span className={styles.footerVectorLeft}>
          <Image src={LeftBg} alt="footer-left-bg" layout="intrinsic" />
        </span>
        <span className={styles.footerVectorRight}>
          <Image src={RightBg} alt="footer-right-bg" layout="intrinsic" />
        </span>
        <div className="nitro-container">
          <div className={styles.allContent}>
            <div className={styles.footerLower}>
              <div className={styles.lowerContentWrapper}>
                <a href="/" className={styles.footerLogo}>
                  <Image
                    src={awsAssetsFetcher("footer-logo-red", "svg")}
                    alt="Discord Icon"
                    layout="intrinsic"
                    height={80}
                    width={298}
                  />
                </a>
                <p>
                  © 2022 Nitro League and all linked logos, cars, digital
                  assets, naming conventions are exclusive property of Nitro
                  League, Inc. All Rights Reserved.
                </p>
              </div>
              <div className={styles.footerUpper}>
                <ul className={styles.footerSocialLst}>
                  <li className={styles.socialItem}>
                    <a
                      href="https://discord.com/invite/253Zm2Dn7u"
                      className={styles.socialLinks}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={awsAssetsFetcher("fl-discord", "svg")}
                        alt="Discord Icon"
                        layout="intrinsic"
                        height={40}
                        width={40}
                      />
                    </a>
                  </li>
                  <li className={styles.socialItem}>
                    <a
                      href="https://t.me/nitroleaguegame"
                      className={styles.socialLinks}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <img
                    src="../assets/images/fl-telegram.svg"
                    alt="Telegram Icon"
                  /> */}
                      <Image
                        src={awsAssetsFetcher("fl-telegram", "svg")}
                        alt="Discord Icon"
                        layout="intrinsic"
                        height={40}
                        width={40}
                      />
                    </a>
                  </li>
                  <li className={styles.socialItem}>
                    <a
                      href="https://www.linkedin.com/company/nitro-league"
                      className={styles.socialLinks}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <img
                    src="../assets/images/fl-linkedin.svg"
                    alt="Linkedin Icon"
                  /> */}
                      <Image
                        src={awsAssetsFetcher("fl-linkedin", "svg")}
                        alt="Discord Icon"
                        layout="intrinsic"
                        height={40}
                        width={40}
                      />
                    </a>
                  </li>
                  <li className={styles.socialItem}>
                    <a
                      href="https://www.instagram.com/nitroleagueracing/?r=nametag"
                      className={styles.socialLinks}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <img
                    src="../assets/images/fl-linkedin.svg"
                    alt="Linkedin Icon"
                  /> */}
                      <Image
                        src={awsAssetsFetcher("insta", "svg")}
                        alt="Discord Icon"
                        layout="intrinsic"
                        height={40}
                        width={40}
                      />
                    </a>
                  </li>
                  <li className={styles.socialItem}>
                    <a
                      href="https://medium.com/nitro-league"
                      className={styles.socialLinks}
                      target="_blank"
                    >
                      {/* <img src="../assets/images/fl-medium.svg" alt="Medium Icon" /> */}
                      <Image
                        src={awsAssetsFetcher("fl-medium", "svg")}
                        alt="Discord Icon"
                        layout="intrinsic"
                        height={40}
                        width={40}
                      />
                    </a>
                  </li>
                  <li className={styles.socialItem}>
                    <a
                      href="https://www.facebook.com/nitroleagueracing"
                      className={styles.socialLinks}
                      target="_blank"
                    >
                      {/* <img
                    src="../assets/images/fl-facebook.svg"
                    alt="Facebook Icon"
                  /> */}
                      <Image
                        src={awsAssetsFetcher("fl-facebook", "svg")}
                        alt="Discord Icon"
                        height={40}
                        width={40}
                      />
                    </a>
                  </li>
                  <li className={styles.socialItem}>
                    <a
                      href="https://twitter.com/NitroLeagueGame"
                      className={styles.socialLinks}
                      target="_blank"
                    >
                      {/* <img
                    src="../assets/images/fl-twitter.svg"
                    alt="Twitter Icon"
                  /> */}
                      <Image
                        src={awsAssetsFetcher("fl-twitter", "svg")}
                        alt="Discord Icon"
                        layout="intrinsic"
                        height={40}
                        width={40}
                      />
                    </a>
                  </li>
                  <li className={styles.socialItem}>
                    <a
                      href="https://www.youtube.com/channel/UCU26AuRMNTkMZfELd3bBnXQ"
                      className={styles.socialLinks}
                      target="_blank"
                    >
                      {/* <img
                    src="../assets/images/fl-youtube.svg"
                    alt="Youtube Icon"
                  /> */}
                      <Image
                        src={awsAssetsFetcher("fl-youtube", "svg")}
                        alt="Discord Icon"
                        layout="intrinsic"
                        height={40}
                        width={40}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.navigationWrapper}>
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link href="/roadmap">ROADMAP</Link>
                </li>
                <li>
                  <Link href="https://docs.nitroleague.com/">
                    <a
                      href="https://docs.nitroleague.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      docs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/download-app.html">download</Link>
                </li>
                <li>
                  <Link href="/faqs">faqs</Link>
                </li>

                <li>
                  <Link href="/Terms&Conditions">terms & conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
