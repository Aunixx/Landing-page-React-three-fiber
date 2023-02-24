/* eslint-disable react/no-unescaped-entities */
import styles from "./testimonialSlider.module.scss";
import Image from "next/image";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { testimonialSlides, slideDesc } from "../../constant/testimonialSlides";

const TestimonialSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className={styles.TestimonialSliderWrapper}>
      <div className="nitro-container">
        <div className="heading-style-1">
          <span className="title-borderLine"> </span>
          <h2>Everyone loves it!</h2>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }}
          onSwiper={setThumbsSwiper}
          spaceBetween={1}
          slidesPerView={6}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <div className={styles.testimonialsThumb}>
            {testimonialSlides.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Image src={testimonial.Img} alt="aaron" layout="intrinsic" />
                <h5>{testimonial.name}</h5>
                <div className={styles.testimonialDesignation}>
                  {testimonial.member}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={40}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
        >
          <div className={styles.descSlides}>
            {slideDesc.map((desc) => (
              <SwiperSlide key={desc.id} className={styles.customSlide}>
                <Image src={desc.Image} alt="quotes" layout="intrinsic" />
                <p>{desc.detail}</p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default TestimonialSlider;
