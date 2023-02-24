import { FC, useState } from "react";
import { Button, Modal, ModalHeader } from "react-bootstrap";
import styles from "./racingBanner.module.scss";
import { racingBannerProps } from "./types";
import { IoCloseOutline } from "react-icons/io5";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
import globe from "../../public/Images/globe.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import globe3d from "../../public/Images/Globe.glf";
import dynamic from "next/dynamic";

const Model = dynamic(() => import("../Model/Model"), { ssr: false });

const RacingBanner: FC<racingBannerProps> = ({
  page,
  heading,
  description,
  isBtn,
  btnText,
  downloadText,
  isVideo,
  show,
  setShow,
  isGlobe,
}) => {
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    if (setShow && typeof setShow === "function") {
      setShow(false);
    }
  };
  const handleShow = () => {
    if (setShow && typeof setShow === "function") {
      setShow(true);
    }
  };
  gsap.registerPlugin(ScrollTrigger);

  const globeRef = useRef(null);

  const moveGlobe = () => {
    const el = globeRef.current;
    ScrollTrigger.matchMedia({
      "(min-width:800px)": function () {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "80% center",
            end: "80% top",
            scrub: 3,
            // markers: true,
          },
        });
        tl.to(el, {
          xPercent: -160,
          yPercent: 170,
        });
      },
    });
  };

  useEffect(() => {
    moveGlobe();
  }, []);
  return (
    <section
      className={` ${styles.innerHeroBanner} ${styles.banner} ${
        styles[`${page}Banner`]
      } `}
    >
      <div className="nitro-container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className={styles.heroSectionVideo} onClick={handleShow}>
              {isVideo && (
                <video
                  autoPlay
                  muted
                  loop
                  poster={awsAssetsFetcher("racing-banner", "jpg")}
                  className={styles.garageBgVid}
                >
                  <source
                    src={awsAssetsFetcher("NitroArcade_Final1_2", "mp4")}
                    type="video/mp4"
                  />
                  <source
                    src={awsAssetsFetcher("NitroArcade_Final1_2", "webm")}
                    type="video/webm"
                  />
                  Your browser does not support HTML5 video.
                </video>
              )}
              <div className={styles.bannerContent}>
                <h1>{heading}</h1>
                <p>{description}</p>
              </div>
              {isBtn && (
                <div className="apk-download-btn-wrappper">
                  <a
                    href={awsAssetsFetcher("NitroLeague_PROD_V2.0.4", "apk")}
                    className="button button--style1"
                    id="downloadHero"
                  >
                    <span>
                      <small>{btnText}</small>
                    </span>
                  </a>
                  <small>{downloadText}</small>
                </div>
              )}
            </div>
          </div>
          {isGlobe && (
            <>
              <div className="col-lg-7 justify-content-end">
                <div className={styles.imgGlobe} ref={globeRef}>
                  {/* <Image src={globe} alt="globe" className={styles.rotating} /> */}
                  {/* <model-viewer
                    src="/Globe.glb"
                    ios-src=""
                    poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
                    alt="A 3D model of an astronaut"
                    shadow-intensity="1"
                    camera-controls
                    auto-rotate
                    ar
                  ></model-viewer> */}
                  <Model />
                </div>
              </div>

              <div className={` ${styles.bottom} nitro-mt-60`}>
                <div className="row ">
                  <div className="col-md-4 mb-4 mb-lg-0">
                    <p className={styles.heading}>RESOURCES</p>
                    <span className={styles.desc}>
                      A unique collectioon of procedurally generated NFT land in
                      the Metaverse.
                    </span>
                  </div>
                  <div className="col-md-4 mb-4 mb-lg-0">
                    <p className={styles.heading}>AMINITES</p>
                    <span className={styles.desc}>
                      A unique collectioon of procedurally generated NFT land in
                      the Metaverse.
                    </span>
                  </div>
                  <div className="col-md-4 mb-4 mb-lg-0">
                    <p className={styles.heading}>CURRENT METRICES</p>
                    <span className={styles.desc}>
                      A unique collectioon of procedurally generated NFT land in
                      the Metaverse.
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          centered
          className={styles.videoModal}
        >
          <Modal.Body>
            {/* <span className="crossIcon">
              <IoCloseOutline onClick={handleClose} />
            </span>
            <video controls autoPlay>
              <source src={"/popupVideo.mp4"} type="video/mp4" />
              <source src={"/popupVideo.webm"} type="video/webm" />
              Your browser does not support HTML5 video.
            </video> */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/etEsDzaDm9o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default RacingBanner;
