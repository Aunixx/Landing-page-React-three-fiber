import styles from "./treasures.module.scss";
import Image from "next/image";
// import purcahseImg from "../../public/Images/purchaseLand1.png";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper";
const Treasures = () => {
  return (
    <section className={styles.treasureWrapper}>
      <div className="nitro-contaier">
        <h3>Resources</h3>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          // slidesPerGroup={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          allowTouchMove={false}
          speed={10000}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper nitro-mb-32"
          // breakpoints={{
          //   0: {
          //     slidesPerView: 2,
          //   },
          //   560: {
          //     slidesPerView: 3,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //   },

          //   1200: {
          //     slidesPerView: 2,
          //   },
          // }}
        >
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("black-stone")}
                height={80}
                width={80}
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <Image
                src={awsAssetsFetcher("neon")}
                alt="img"
                height={80}
                width={80}
              />
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("lime")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("iron")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("gold")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("black-stone")}
                height={80}
                width={80}
                alt="img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("lime")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          // slidesPerGroup={3}
          dir="rtl"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          allowTouchMove={false}
          speed={10000}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          // breakpoints={{
          //   0: {
          //     slidesPerView: 2,
          //   },
          //   560: {
          //     slidesPerView: 3,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //   },

          //   1200: {
          //     slidesPerView: 2,
          //   },
          // }}
        >
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("glass4")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("devine-crystal")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("chaos-emerald")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("bamboo")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("neon")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("glass4")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgWrap} key="index">
              <span className={styles.span1}></span>
              <span className={styles.span2}></span>
              <span className={styles.span3}></span>
              <span className={styles.span4}></span>
              <Image
                src={awsAssetsFetcher("bamboo")}
                alt="img"
                height={80}
                width={80}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Treasures;
