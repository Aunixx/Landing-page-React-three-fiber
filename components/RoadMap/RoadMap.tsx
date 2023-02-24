/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import { RoadmapData } from "../../constant/RoadmapData";
import Image from "next/image";
import styles from "./roadmap.module.scss";

const Roadmap: FC = () => {
  return (
    <div className={styles.roadmapBody}>
      <section className={styles.roadmapCoverWrapper}>
        <div className={` ${styles.roadmapCoverContent} nitro-container `}>
          <div className="row">
            <div
              className={` ${styles.roadmapQuarterTitleCol} col-xl-3 `}
            ></div>
            <div className="col-xl-9">
              <div className={styles.roadmapQuarterContent}>
                <h1>Nitro League Roadmap</h1>
                <p>
                  Nitro League officially entered the public realm with their
                  token launch $NITRO, in December 2021. But long before that,
                  there was a plan and a vision. We wanted to build
                  metaverse-ready NFTs that could solve the main problems within
                  NFT markets today: lack of liquidity, lack of utility, and
                  centralization.
                  <br />
                  <br />
                  That vision has expanded stratospherically since then.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className={styles.roadmapSection}>
          <div className=" nitro-container">
            {RoadmapData.map((roadmap, index) => (
              <div key={index} className="row">
                <div className={` col-xl-3 ${styles.roadmapQuarterTitleCol}`}>
                  <div
                    className={`${styles.roadmapQuarterTitle} ${
                      roadmap.isBlurred ? styles.bluredSec : ""
                    }`}
                  >
                    <h4>{roadmap.title}</h4>
                  </div>
                </div>
                <div className="col-xl-9">
                  {/* <div className={roadmap.isBlurred ?  : ""}> */}
                  <div
                    className={`${styles.roadmapQuarterContent} ${
                      roadmap.isBlurred ? styles.bluredSec : ""
                    }`}
                  >
                    <div className={styles.quarterItem}>
                      <div className="nitro-mb-56">
                        <h3>{roadmap.title2}</h3>
                        <p>{roadmap.desc2}</p>
                      </div>
                      <h3>{roadmap.item}</h3>
                      <Image
                        src={roadmap.Img}
                        alt="quarter"
                        layout="responsive"
                      />
                      <p>{roadmap.desc}</p>
                      <div className="nitro-mt-56">
                        <h3>{roadmap.title3}</h3>
                        <p>{roadmap.desc3}</p>
                      </div>
                      <div className="nitro-mt-56">
                        <h3>{roadmap.item2}</h3>
                        {roadmap.Img2 && (
                          <Image
                            src={roadmap.Img2}
                            alt="quarter"
                            layout="responsive"
                          />
                        )}
                      </div>
                      <p>{roadmap.desc4} </p>
                      <div className="nitro-mt-56">
                        <h3>{roadmap.title4}</h3>
                        <p> {roadmap.desc5}</p>
                      </div>
                      <div className="nitro-mt-56">
                        <h3>{roadmap.title5}</h3>
                        <p> {roadmap.desc6}</p>
                      </div>
                      <h3> {roadmap.title6}</h3>
                      {roadmap.Img3 && (
                        <Image
                          src={roadmap.Img3}
                          alt="quarter"
                          layout="responsive"
                        />
                      )}
                      <p> {roadmap.desc7} </p>
                    </div>
                  </div>
                </div>
              </div>
              // </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Roadmap;
