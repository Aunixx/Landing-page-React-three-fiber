import styles from "./racingBuySlider.module.scss";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Swipper } from "../../constant/Swipper";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FC } from "react";
import { buySliderProps } from "./types";

const RacingBuySlider: FC<buySliderProps> = ({ title, section }) => {
  return (
    <>
      <section
        className={`${styles.darkSec} ${styles.buySliderSection} ${
          styles[`${section}Sec`]
        }`}
      >
        <div className={styles.innerWrap}>
          <div className={styles.Title}>
            <h2>{title}</h2>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              576: {
                slidesPerView: 2,
              },
              790: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className={styles.mySwiper}
          >
            {Swipper.map((swipe, index) => (
              <SwiperSlide key={index}>
                <div className={styles.featureCard}>
                  <Link href={swipe.href}>
                    <div>
                      <div className={styles.cmCardImg}>
                        <Image
                          src={swipe.featureCar}
                          alt="Aion Spirit"
                          layout="responsive"
                          width={558}
                          height={313}
                        />
                      </div>
                      <div className={styles.csmContent}>
                        <h3>{swipe.name}</h3>
                        <div className={styles.csmButtons}>
                          <span className={styles.csmFeature}>
                            {swipe.model}
                          </span>
                          <span className={styles.csmFeature}>
                            {swipe.class}
                          </span>
                          <span className={styles.csmFeature}>
                            {swipe.rarity}
                          </span>
                        </div>
                        {/* <p className={styles.csmPrice}>{swipe.price}</p> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default RacingBuySlider;
