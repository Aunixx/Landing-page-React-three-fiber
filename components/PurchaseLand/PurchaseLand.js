import Image from "next/image";
import styles from "./purchaseLand.module.scss";
import purcahseImg from "../../public/Images/purchaseLand1.png";
import Img2 from "../../public/Images/deed1.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    num: "01",
    desc: " Create your own metaverse home from scratch",
    img: purcahseImg,
  },
  {
    num: "02",
    desc: " Create your own metaverse home from scratch",
    img: Img2,
  },
  {
    num: "03",
    desc: " Create your own metaverse home from scratch",
    img: purcahseImg,
  },
  {
    num: "04",
    desc: " Create your own metaverse home from scratch",
    img: Img2,
  },
];
const PurchaseLand = () => {
  const [currentImage, setCurrentImage] = useState(content[0]);
  const [isActive, setIsActive] = useState(0);
  const clickHandler = (index) => {
    setIsActive(index);
  };
  useEffect(() => {
    const quotes = new SplitType(".quote");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#text",
        start: "top center",
        scrub: 2,
        // markers: true,
        end: "center 80%",
      },
    });
    // tl.from("#text", {
    //   x: -300,
    //   ease: "slowMo",
    //   // duration: 5,
    //   opacity: 0,
    // })
    //   .from("#Img", {
    //     x: 300,
    //     ease: "slowMo",
    //     // duration: 5,
    //     opacity: 0,
    //   })
    tl.to("#cards", {
      // opacity: 1,
      y: 0,
      duration: 0.1,
      ease: "Power2.inOut",
      stagger: 0.2,
    }).to(".char", {
      duration: 0.6,
      ease: "Power2.inOut",
      y: 0,
      stagger: 0.2,
      duration: 1,
      opacity: 1,
    });
    // const quotes = document.querySelectorAll(".quote");

    // function setupSplits() {
    //   quotes.forEach((quote) => {
    //     quote.split = new SplitType(quote, {
    //       type: "lines,words,chars",
    //       linesClass: "split-line",
    //     });

    //     // Set up the anim
    //     quote.anim = gsap.from(quote.split.chars, {
    //       scrollTrigger: {
    //         trigger: quote,
    //         toggleActions: "restart pause resume reverse",
    //         start: "top 50%",
    //         markers: true,
    //       },
    //       duration: 0.6,
    //       ease: "circ.out",
    //       y: 80,
    //       stagger: 0.02,
    //     });
    //   });
    // }
    // setupSplits();
  }, []);
  return (
    <section className={styles.purchaseLandWrapper}>
      <div className="nitro-container">
        <div className="row">
          <div className="col-md-6 align-self-center" id="text">
            <div className={styles.content}>
              <h3>Why purchase land in Nitro</h3>
              <p className="quote">
                The Nitrio metaverse is a community owned through the use of
                NFTs. Essentially by owning a piece of land you get exposure to
                the following benefits.
              </p>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4" id="Img">
            <div className={styles.imgWrap} key="index">
              <Image src={currentImage.img} alt="img" />
            </div>
          </div>
        </div>
        <section className={styles.footer}>
          {content.map((data, index) => {
            const { num, desc } = data;
            return (
              <div
                className={`${styles.content} ${
                  index === isActive ? styles.active : ""
                }  mb-4 mb-lg-0`}
                id="cards"
                onClick={() => {
                  setCurrentImage(data);
                  clickHandler(index);
                }}
                key={index}
              >
                <p className={styles.num}>{num}</p>
                <p className={styles.text}>{desc}</p>
                <div
                  className={`${styles.underline} ${
                    index === isActive ? styles.active : ""
                  }`}
                ></div>
              </div>
            );
          })}
          {/* <div className={`${styles.content} mb-4 mb-lg-0`}>
            <p className={styles.num}>02</p>
            <p className={styles.text}>
              Create your own metaverse home from scratch
            </p>
            <div className={styles.underline}></div>
          </div>
          <div className={`${styles.content} mb-4 mb-lg-0`}>
            <p className={styles.num}>03</p>
            <p className={styles.text}>
              Create your own metaverse home from scratch
            </p>
            <div className={styles.underline}></div>
          </div>
          <div className={`${styles.content} mb-4 mb-lg-0`}>
            <p className={styles.num}>04</p>
            <p className={styles.text}>
              Create your own metaverse home from scratch
            </p>
            <div className={styles.underline}></div>
          </div> */}
        </section>
      </div>
    </section>
  );
};

export default PurchaseLand;
