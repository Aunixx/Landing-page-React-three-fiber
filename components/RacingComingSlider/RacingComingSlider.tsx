import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import styles from "./racingComing.module.scss";
import Link from "next/link";
import { FC } from "react";
import { comingSliderProps } from "./types";

const RacingComingSlider: FC<comingSliderProps> = ({
  title,
  Swipper,
  isBtn,
}) => {
  return (
    <section className={styles.racingFeatureSection}>
      <div>
        <div className={styles.Title}>
          <h3 className={` ${styles.nitroSectionTitle} ${styles.racingTitle}`}>
            {title}
          </h3>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },

            576: {
              slidesPerView: 2.2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3.4,
              spaceBetween: 32,
            },
          }}
          className={styles.mySwiper}
        >
          {Swipper.map((swipe: any, index: any) => (
            <SwiperSlide key={index}>
              <div
                className={
                  swipe.isBtn ? styles.featureCardHover : styles.featureCard
                }
              >
                <div className={styles.featureImg}>
                  <Image
                    src={swipe.featureCar}
                    alt="Unique Cars"
                    // layout="responsive"

                    height={650}
                    width={531}
                  />
                </div>
                <div className={styles.featureCardText}>
                  <h3>{swipe.featureText}</h3>
                  {swipe.isBtn && (
                    <span className={styles.garageBtn}>
                      <Link href="/download-app.html">
                        <a href="" className="btn btn-market">
                          {swipe.link}
                        </a>
                      </Link>
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RacingComingSlider;
