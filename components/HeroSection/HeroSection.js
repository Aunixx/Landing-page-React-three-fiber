/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import bannerLogo from "../../public/Images/arcadeLogo.svg";
import carNext from "../../public/Images/car-next.png";
import explore from "../../public/Images/car-next.png";
import land from "../../public/Images/land-next.png";
import lifeStyle from "../../public/Images/Performance-Parts.png";
import astro from "../../public/Images/Astro.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, EffectFade, Autoplay } from "swiper";
import styles from "./heroSection.module.scss";
import Link from "next/link";
import PerformancePart from "../performancePart/PerformancePart";
import KoraCars from "../KoraCars/KoraCars";
import { awsAssetsFetcher } from "../../utils/awsAssetsFetcher";

const paginationNames = [
  "Nitro Arcade",
  "Astro  Cars",
  "Performance Parts",
  "Land",
];
const paginationClasses = [
  "performance-slide-1",
  "astro-silde-2",
  "arcade-slide-3",
  "land-slide-4",
];
const slideImages = [lifeStyle, astro, carNext, land, explore];

const HeroSection = () => {
  const [currentSlideCount, setCurrentSlideCount] = useState(2);

  // const countHandler = () => {
  //   setCount(count + 1);
  // };
  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index) {
      return `<span class="swiper-pagination-bullet ${paginationClasses[index]} ">${paginationNames[index]}</span>`;
    },
  };

  const socialLinks = [
    {
      Icon: awsAssetsFetcher("fl-discord", "svg"),
      href: "https://discord.com/invite/nitroleague",
    },
    {
      Icon: awsAssetsFetcher("fl-telegram", "svg"),
      href: "https://t.me/nitroleaguegame",
    },
    {
      Icon: awsAssetsFetcher("fl-linkedin", "svg"),
      href: "https://www.linkedin.com/company/nitro-league",
    },
    {
      Icon: awsAssetsFetcher("fl-medium", "svg"),
      href: "https://medium.com/nitro-league",
    },
    {
      Icon: awsAssetsFetcher("fl-facebook", "svg"),
      href: "https://www.facebook.com/nitroleagueracing",
    },
    {
      Icon: awsAssetsFetcher("fl-twitter", "svg"),
      href: "https://twitter.com/NitroLeagueGame",
    },
    {
      Icon: awsAssetsFetcher("fl-youtube", "svg"),
      href: "https://www.youtube.com/channel/UCU26AuRMNTkMZfELd3bBnXQ",
    },
  ];
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className={styles.heroSection}>
      <Swiper
        onSwiper={setSwiperRef}
        loop={true}
        // autoplay={{
        //   delay: 7000,
        //   disableOnInteraction: false,
        // }}
        pagination={pagination}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiper"
        onSlideChange={() => {
          if (swiperRef !== null) {
            const currentSlide = swiperRef.activeIndex;
            if (currentSlide < paginationNames.length) {
              setCurrentSlideCount(currentSlide + 1);
            } else {
              setCurrentSlideCount(1);
            }
          }
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          576: {
            slidesPerView: 1,
          },
          790: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <div className={styles.heroSectionVideo}>
            <video autoPlay muted loop className={styles.garageBgVid}>
              {/* <source src={"/explore-bg-720.mp4"} type="video/mp4" /> */}
              <source
                src={awsAssetsFetcher("NitroArcadeTrailerWebCut", "mp4")}
                type="video/mp4"
              />
              <source
                src={awsAssetsFetcher("NitroArcadeTrailerWebCut", "webm")}
                type="video/webm"
              />
              Your browser does not support HTML5 video.
            </video>
            <div className="nitro-container">
              <div className={styles.sliderTxtSection}>
                <Image src={bannerLogo} alt="Logo" />
                <h1>Live - Race - Own</h1>
                <Link href="/download-app.html" passHref>
                  <a className="btn">Download</a>
                </Link>
                <Link href="https://arcade.nitroleague.com" passHref>
                  <a
                    className="btn nitro-ml-12 ArcadePlay"
                    target="_blank"
                    style={{ width: "152px" }}
                  >
                    Play
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.koraCars}>
          {/* <KoraCars /> */}
          <div className={styles.heroSectionVideo}>
            <video autoPlay muted loop className={styles.garageBgVid}>
              <source
                src={awsAssetsFetcher("astro-cars-video", "mp4")}
                type="video/mp4"
              />
              <source
                src={awsAssetsFetcher("astro-cars-video", "webm")}
                type="video/webm"
              />
              Your browser does not support HTML5 video.
            </video>
            <div className="nitro-container">
              <div className={styles.sliderTxtSection}>
                <h3>Astro Cars</h3>
                <p>
                  Unveiling of all Astro Cars. Get ready and head over to
                  OpenSea to view your new Astro Car.
                </p>
                <Link href="https://opensea.io/collection/astro-cars" passHref>
                  <a
                    target="_blank"
                    href="https://opensea.io/collection/astro-cars"
                    className="btn"
                  >
                    Go to OpenSea
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.heroSectionVideo}>
            <PerformancePart />
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.landSlide}>
          <div className="nitro-container">
            <div className={styles.sliderTxtSection}>
              <h3>WELCOME TO META LAND</h3>
              <p>
                A unique collection of procedurally generated NFT land in the
                Metaverse.
              </p>
              <Link href="/land" passHref>
                <a className="btn">Buy Land</a>
              </Link>
              <Link href="/land" passHref>
                <a className={styles.learnMore}>Learn more </a>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="nitro-cover-carousel-pagination">
        <div className="nitro-container">
          <div className="swiper-pagination"></div>
          <span className="slide-progress-wrapper">
            <span className="slide-progress"></span>
          </span>
        </div>
      </div>
      <div className={styles.coverCarouselWrapper}>
        <div className={styles.linksBtnWrap}>
          <div className={styles.socialLinks}>
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="blank">
                    <Image src={link.Icon} alt="fb" height={16} width={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.carouselContent}>
            <button onClick={() => swiperRef.slideTo(currentSlideCount)}>
              <div>
                <Image
                  src={slideImages[currentSlideCount - 1]}
                  alt="logo"
                  layout="intrinsic"
                />
              </div>
              <div className={styles.carouselBtn}>
                <span className={styles.slideNum}>0{currentSlideCount}</span>
                <div>
                  <strong>Next</strong>
                  <h4>{paginationNames[currentSlideCount - 1]}</h4>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
