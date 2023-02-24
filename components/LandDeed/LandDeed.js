import Image from "next/image";
import styles from "./landDeed.module.scss";
// import deed1 from "../../public/Images/deed1.svg";
// import deed2 from "../../public/Images/deed2.svg";
// import deed3 from "../../public/Images/deed3.svg";
// import deedTop from "../../public/Images/landDeedTop.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { FaEthereum } from "react-icons/fa";

import { deedsData } from "../../constant/deedsData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper";

gsap.registerPlugin(ScrollTrigger);

const LandDeed = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#trigger",
        scrub: 2,
        // markers: true,
        start: "-30% center",
        end: "-20% 10%",
      },
    });
    tl.from(".moveTXT", {
      // x: 100,
      y: 100,
      ease: "slowMo",
      duration: 2,
      opacity: 0,
    }).from(
      ".intro__txt",
      {
        x: -100,
        opacity: 0,
        ease: "power4",
        duration: 3,
      },
      0.7
    );
  }, []);

  return (
    <section className={styles.LandDeedWrapper}>
      {/* <div className={styles.deedTop}>
        <Image src={deedTop} alt="" />
      </div> */}
      <div className="nitro-container" id="trigger">
        <div className={styles.detail}>
          <h3 className="moveTXT">Land Deeds</h3>
          <p>
            You will be able to decide a coastal property, be up in the hills
            with a lake view, next to a building designed by one of our own
            reowned architects
          </p>
        </div>
        <Swiper
          slidesPerView={4.5}
          spaceBetween={30}
          slidesPerGroup={3}
          // loop={true}
          // autoplay={{
          //   delay: 0,
          //   disableOnInteraction: true,
          // }}
          pauseonmouseenter="true"
          // speed={10000}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            560: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },

            1200: {
              slidesPerView: 4.5,
            },
          }}
        >
          {deedsData.map((data, index) => {
            const { img, item, zone, price, theme, deedName, gif } = data;
            return (
              <SwiperSlide
                className={`${styles.mySlides} d-flex flex-column align-items-center`}
                key={index}
              >
                <div className={styles.slideImg}>
                  <Image src={img} alt="deed" />
                </div>
                <div className={styles.imgDesc}>
                  <p className={styles.item}>{item}</p>
                  <p className={styles.zone}>{zone}</p>
                  <p className={styles.pricing}>
                    <FaEthereum />
                    {price}
                  </p>
                </div>
                <div className={styles.slideDesc}>
                  <span>{theme}</span>
                  <p>{deedName}</p>
                </div>
                <div className={styles.gif}>
                  <Image src={gif} alt="gif" height={100} width={100} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default LandDeed;
