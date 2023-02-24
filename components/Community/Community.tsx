import styles from "./community.module.scss";
import Image from "next/image";
import discord from "/public/Images/fl-discord.svg";
import telegram from "/public/Images/fl-telegram.svg";
import leftVector from "/public/Images/community-left-vectors.svg";
import rightVector from "/public/Images/community-right-vectors.svg";
import Link from "next/link";
import { FC } from "react";
import { communityProps } from "./types";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const Community: FC<communityProps> = ({ heading, detail, isBtn }) => {
  return (
    <section className={styles.nitroCommunitySection}>
      <div className="nitro-container">
        <div className={styles.nitroCommunityTextWrapper}>
          <span className={styles.communityLeftVectors}>
            <Image src={leftVector} alt="" layout="responsive" />
          </span>
          <span className={styles.communityRightVectors}>
            <Image src={rightVector} alt="" layout="responsive" />
          </span>
          <div className={styles.nitroCommunityText}>
            <h3>{heading}</h3>
            <p>{detail}</p>
            <div className={styles.communityBtns}>
              {isBtn ? (
                <>
                  <Link
                    href="https://discord.com/invite/253Zm2Dn7u"
                    rel="noopener noreferrer"
                    passHref
                  >
                    <a target="_blank">
                      <span className={`btn ${styles.discordBtn} `}>
                        <Image
                          src={awsAssetsFetcher("fl-discord", "svg")}
                          alt="Discord Icon"
                          width={16}
                          height={16}
                        />
                        <span className="nitro-ml-16">Join Discord</span>
                      </span>
                    </a>
                  </Link>
                  <Link
                    href="https://t.me/nitroleaguegame"
                    rel="noopener noreferrer"
                    passHref
                  >
                    <a target="_blank">
                      <span className={`btn ${styles.telegramBtn} `}>
                        <Image
                          src={awsAssetsFetcher("fl-telegram", "svg")}
                          alt="Telegram Icon"
                          width={16}
                          height={16}
                        />
                        <span className="nitro-ml-16"> Join Telegram</span>
                      </span>
                    </a>
                  </Link>
                </>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
