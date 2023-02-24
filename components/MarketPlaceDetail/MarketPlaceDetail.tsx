/* eslint-disable react/no-unescaped-entities */
import styles from "./marketPlaceDetail.module.scss";
import playBtn from "../../public/Images/play-button.svg";
import tvLogo from "../../public/Images/tv-logo.svg";
import { FC, useState } from "react";
import Image from "next/image";
import VideoModal from "../common/VideoModal/VideoModal";
import { mpDetailProps } from "./types";

const MarketPlaceDetail: FC<mpDetailProps> = ({
  name,
  model,
  set,
  rarity,
  desc,
  price,
  stats,
  strengthNum,
  strengthTitle,
  strengthDesc,
  carStats,
  features,
  img,
  statsImg,
  videoImg,
  videoUrl,
  tvLink,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <section className={styles.rripperSection}>
        <div className="nitro-container">
          <div className={styles.inrRripeSection}>
            <Image
              className={styles.carImg}
              src={img}
              alt="asset Img"
              height={325}
              width={1375}
            />
            <h1>{name}</h1>
            <div className={styles.carDetails}>
              <ul className={styles.modelDel}>
                <li>{model}</li>
                <li>{set}</li>
                <li>{rarity}</li>
              </ul>
              <p>{desc}</p>
              {/* <a href={tvLink} className={`btn ${styles.btnBuy}`}>
                {price}
              </a>
              <div className={styles.availableTv}>
                <span>available on:</span>
                <div className={styles.virtua}>
                  <Image
                    className={styles.tvLogo}
                    src={tvLogo}
                    alt="Terra Virtua"
                    layout="responsive"
                  />
                </div>
              </div> */}
              {/* <!-- <a href="#" className="btn btn-buy">Coming Soon</a> --> */}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.carStats}>
        <div className="nitro-container">
          <div className={styles.inrCarStats}>
            <div className={styles.sectionCenterHeading}>
              <h2 className={styles.titleBorderLine}>{stats}</h2>
            </div>
            <div className={styles.contentStats}>
              <div className="row">
                <div className="col-sm-12 col-lg-6 order-2 order-lg-1">
                  <div className={styles.csContent}>
                    <ul className={styles.csListing}>
                      {carStats.map((stats: any, index: any) => (
                        <li key={index}>
                          <label>{stats.label}</label>
                          <div className={` ${styles.csDiv} ${styles.swDiv} `}>
                            <div className={styles.carProgressBar}>
                              <span className={styles.repProgress}></span>
                            </div>
                            <span className={styles.csCounter}>
                              {stats.score}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6 order-1 order-lg-2">
                  <div className={styles.csPieChart}>
                    <div className={styles.csCircle}>
                      <h3>{strengthNum}</h3>
                      <h4>{strengthTitle}</h4>
                      <p>{strengthDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.csModalCar}>
              <Image
                src={statsImg}
                alt=" Car"
                height={561}
                width={1376}
                objectFit="contain"
              />
            </div>
            <div className={styles.csFeatures}>
              <div className="row">
                {features.map((feature: any, index: any) => (
                  <div key={index} className="col-sm-12 col-md-6">
                    <div className={styles.csSigma}>
                      <div className={styles.gameOverviewTitle}>
                        <span className={styles.titleBorderLine}></span>
                        <h3>{feature.Title}</h3>
                      </div>
                      <p>{feature.Desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        url={videoUrl}
      />
      <section className={styles.mvSection}>
        <div className={styles.mvInrSection}>
          <Image
            src={videoImg}
            alt="Sobek Ward Video Model"
            layout="responsive"
            height={700}
            width={1680}
          />
          <button
            className={`${styles.swVideoButton} ${styles.csModelPreview}`}
            data-video-id="oJFWh8kTKIw"
            onClick={handleShow}
          >
            <span className={styles.mvPlayButton}>
              <Image src={playBtn} alt="play btn" />
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default MarketPlaceDetail;
