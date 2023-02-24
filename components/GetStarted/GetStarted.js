import Image from "next/image";
import styles from "./getStarted.module.scss";
import nitroCar from "../../public/Images/nitroCar.png";
import wallet from "../../public/Images/wallet.png";
import claim from "../../public/Images/claim.png";
import race from "../../public/Images/newStarted.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { awsAssetsFetcher } from "../../utils/awsAssetsFetcher";

const GetStarted = () => {
  return (
    <div className={styles.getStartedWrapper}>
      <section className="nitro-container">
        <h3 className={styles.title}>get started</h3>
        <div className={styles.imgCotainer}>
          {/* <div className="row">
            <div className="col-md-3">
              <div className={styles.imgWrap}>
                <Image src={nitroCar} alt="card" width={500} height={400} />
                <div className={styles.detail}>
                  <h4>Download Game</h4>
                  <p>
                    Install Nitro Arcade to immerse into the world of Nitro
                    League.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.imgWrap}>
                <Image src={wallet} alt="card" width={500} height={400} />
                <div className={styles.detail}>
                  <h4>Connect Wallet</h4>
                  <p>
                    Link your MetaMask wallet and manage motorsport NFT assets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.imgWrap}>
                <Image src={claim} alt="card" width={500} height={400} />
                <div className={styles.detail}>
                  <h4>Claim car</h4>
                  <p>
                    Customize, upgrade, and fuse assets; collect rewards and
                    claim NFT cars.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.imgWrap}>
                <Image src={race} alt="card" width={500} height={400} />
                <div className={styles.detail}>
                  <h4>Start Racing</h4>
                  <p>
                    Start the race by submitting the finest tailored blend of
                    NFT resources for the track and weather.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <Swiper
            // slideToClickedSlide={true}
            grabCursor={true}
            // centeredSlides={true}
            // slidesPerView="auto"
            // loop={true}
            // allowTouchMove={false}
            modules={[Navigation]}
            navigation={true}
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
                slidesPerView: 4,
              },
            }}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <div className={styles.imgWrap}>
                <Image
                  src={awsAssetsFetcher("nitroCar")}
                  alt="card"
                  width={280}
                  height={280}
                />
                <div className={styles.detail}>
                  <h4>Download Game</h4>
                  <p>
                    Install Nitro Arcade to immerse into the world of Nitro
                    League.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imgWrap}>
                <Image
                  src={awsAssetsFetcher("wallet")}
                  alt="card"
                  width={280}
                  height={280}
                />
                <div className={styles.detail}>
                  <h4>Connect Wallet</h4>
                  <p>
                    Link your MetaMask wallet and manage motorsport NFT assets.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imgWrap}>
                <Image
                  src={awsAssetsFetcher("claim")}
                  alt="card"
                  width={280}
                  height={280}
                />
                <div className={styles.detail}>
                  <h4>Claim car</h4>
                  <p>
                    Customize, upgrade, and fuse assets; collect rewards and
                    claim NFT cars.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imgWrap}>
                <Image
                  src={awsAssetsFetcher("newStarted")}
                  alt="card"
                  width={280}
                  height={280}
                />
                <div className={styles.detail}>
                  <h4>Start Racing</h4>
                  <p>
                    Start the race by submitting the finest tailored blend of
                    NFT resources for the track and weather.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};
export default GetStarted;
