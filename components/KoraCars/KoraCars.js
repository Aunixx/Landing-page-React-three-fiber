import styles from "./koraCars.module.scss";
import Image from "next/image";
import koraBg from "../../public/Images/astroSlider.png";
import AstroGif from "../../public/Images/astro-cars-gif.gif";
import Countdown from "react-countdown";

import Link from "next/link";
import React from "react";
import { useEffect } from "react";

const KoraCars = ({ scrollref, deadline = new Date().toString() }) => {
  const handleClick = () => {
    scrollref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const Timer = () => {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    // const deadline = "2022-10-19T00:00:00.000Z";
    const deadline = new Date(2022, 9, 28, 18, 60, 0, 0);
    const getTime = () => {
      // console.log(Date.parse(deadline), "date");
      const time = Date.parse(deadline) - Date.now();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    // console.log(Date.now(), "date now");

    React.useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <>
        <div>
          {Date.now() < deadline ? (
            <div className={styles.timer} role="timer">
              <div className="co">
                <div className={styles.box}>
                  <div className={styles.time}>
                    <span className={styles.text}>Days</span>
                    <div className="d-flex">
                      <p id={styles.day}>{days < 10 ? "0" + days : days}</p>
                      {/* <p id={styles.day}>00</p> */}
                      <span>:</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="co">
                <div className={styles.box}>
                  <div className={styles.time}>
                    <span className={styles.text}>Hours</span>
                    <div className="d-flex">
                      <p id={styles.day}>{hours < 10 ? "0" + hours : hours}</p>
                      {/* <p id={styles.day}>00</p> */}

                      <span>:</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="co">
                <div className={styles.box}>
                  <div className={styles.time}>
                    <span className={styles.text}>Minutes</span>
                    <div className="d-flex">
                      <p id={styles.day}>
                        {minutes < 10 ? "0" + minutes : minutes}
                      </p>
                      {/* <p id={styles.day}>00</p> */}

                      <span>:</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="co">
                <div className={styles.box}>
                  <div className={styles.time}>
                    <span className={styles.text}>Seconds</span>
                    <p id={styles.day}>
                      {seconds < 10 ? "0" + seconds : seconds}
                    </p>
                    {/* <p id={styles.day}>00</p> */}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  };
  return (
    <section className={styles.koraCarsWrapper}>
      <div className={styles.heroSectionVideo}>
        {/* <Image src={AstroGif} alt="bg" /> */}
        <div className="nitro-container">
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>Astro Cars</h3>
              <p>
                <span className={styles.unique}>
                  Every car is unique! Lucky owners will get a performance
                  essentials free mint.
                </span>
                <br />
              </p>
              {/* <p className={styles.reveal}>Mystery reveal in</p> */}
              {/* <div className={styles.timerWrap}>
                <Timer />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KoraCars;
