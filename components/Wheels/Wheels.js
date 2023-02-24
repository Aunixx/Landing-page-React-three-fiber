import styles from "./wheels.module.scss";
import Image from "next/image";
import car from "../../public/assets/AionSpirit.png";
import Specs from "../Specs/Specs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { Swipper } from "../../constant/Swipper";
import { useState } from "react";
import swiperCars from "./data";

const Wheels = () => {
  const [asssetInfo, setasssetInfo] = useState();
  const [info, setInfo] = useState("aion  spirit info");
  const [carData, setCarData] = useState(car);

  const [currentAssetDisplayed, setCurrentAssetDisplayed] = useState(
    swiperCars[0]
  );

  return (
    <section className={styles.wheelsWrapper}>
      <div className="nitro-container">
        <h2>The Wheels</h2>
        <div className="row">
          <div className="col-lg-3">
            <div className={styles.carDetail}>
              <h4>{currentAssetDisplayed.carName}</h4>
              <p>{currentAssetDisplayed.carInfo}</p>
            </div>
            <Link href={currentAssetDisplayed.href}>view Details</Link>
          </div>
          <div className="col-lg-6">
            <div className={styles.selectedCar}>
              <Image src={currentAssetDisplayed.featureCar} alt="car" />
            </div>
          </div>
          <div className="col-lg-3 order-last order-lg-0">
            <Specs carStats={currentAssetDisplayed.carStats} />
          </div>
          <Swiper
            slideToClickedSlide={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            allowTouchMove={false}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },

              576: {
                slidesPerView: 2,
              },
              790: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className={styles.mySwiper}
          >
            {swiperCars.map((swipe, index) => (
              <SwiperSlide key={index}>
                <div className={styles.featureCard}>
                  <div
                    className={styles.cmCardImg}
                    onClick={() => {
                      setCurrentAssetDisplayed(swipe);
                    }}
                  >
                    <Image
                      src={swipe.featureCar}
                      alt="car"
                      layout="responsive"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Wheels;
