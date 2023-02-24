import styles from "./revealPlots.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import revealBg from "../../public/Images/revealBg.png";

gsap.registerPlugin(ScrollTrigger);

const RevealPlots = () => {
  // const plotRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset;
  //     if (scrollTop > 0 && scrollTop < 800) {
  //       plotRef.current.style.transform = `translateY(${scrollTop * 0.225}px)`;
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const plotRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset;
  //     if (scrollTop > 0 && scrollTop < 800) {
  //       plotRef.current.style.transform = `translateY(${scrollTop * 0.3}px)`;
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#wrap",
        start: "top center",
        scrub: 2,
        // markers: true,
        end: "center center",
      },
    });
    tl.to("#content", {
      // "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 0.1,
      ease: "Power2.inOut",
    });
  }, []);
  return (
    <section className={styles.RevealPlotsWrapper} id="wrap">
      <div className="nitro-container h-100">
        <div className="row h-100 align-content-center">
          <div className="col-md-2"></div>
          <div className="col-lg-6">
            <div className={styles.content} id="content">
              <h3>Reveal Plots</h3>
              <p>
                Plots will be revealed in 10 days. Be part of our ever-growing
                community, create your own story within the Metaverse along side
                12k+ holders. Register now to be whitelisted{" "}
              </p>
              <button className="btn">Register now</button>
            </div>
          </div>
          <div className={`${styles.imgBg} col-lg-4`} ref={plotRef}>
            {/* <div className={styles.bg}>
              <Image src={revealBg} alt="revealBg" />
            </div> */}
            <div className={`${styles.outer} mt-4 mt-lg-0`}>
              <div className={styles.inner}>
                <p className={styles.text}>Revealing in</p>
                <p className={styles.days}>365</p>
                <div className={styles.timer}>
                  <p className={styles.time}>
                    08 <small>h</small>
                  </p>
                  <p className={styles.time}>
                    08 <small>m</small>
                  </p>
                  <p className={styles.time}>
                    08 <small>s</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RevealPlots;
