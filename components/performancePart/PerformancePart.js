import Image from "next/image";
import styles from "./parts.module.scss";
import Link from "next/link";
import React from "react";
import { awsAssetsFetcher } from "../../utils/awsAssetsFetcher";

const PerformancePart = ({ deadline = new Date().toString() }) => {
  const Timer = () => {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    // const deadline = "2022-10-19T00:00:00.000Z";
    const deadline = new Date(2022, 10, 4, 2, 0, 0, 0);
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
            <Link href="https://opensea.io/login?referrer=%2Faccount" passHref>
              <a
                target="_blank"
                href="https://opensea.io/login?referrer=%2Faccount"
                className="btn"
                rel="noreferrer"
              >
                Go to OpenSea
              </a>
            </Link>
          )}
        </div>
      </>
    );
  };
  return (
    <section className={styles.performancePartWrap}>
      {/* <div className={styles.bgWrap}></div> */}
      <div className="nitro-container">
        <div className="row">
          <div className="col-md-6">
            <div className={styles.content}>
              <h3>Performance Essentials</h3>
              <p className={styles.mintingContent}>
                Our performance essentials are being unveiled now. Head over to
                OpenSea and get to see the exciting performance parts.
              </p>
              {/* <p className={styles.reveal}>mystery reveal coming soon...</p> */}

              {/* <Link href="/performance-parts">
                <button className={styles.proceedBtn} disabled={true}>
                  Proceed to mint
                </button>
              </Link>
              <div className={styles.alertMessage}>
                <Image src={alert} alt="alert" priority />
                <p className={styles.text}>Sorry, we’ve run out of inventory</p>
              </div> */}
              {/* <p className={styles.mintingStarts}>Mystery Reveal in:</p> */}
              <div className={styles.timerWrap}>
                <Timer />
              </div>

              {/* <Link href="">
                <a className="btn">Free mint coming soon</a>
              </Link> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.imgWrap}>
              <div id={styles.infinite} className={styles.highwaySlider}>
                <div className={styles.highwayBarrier}>
                  <ul className={styles.highwayLane}>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideEngine")}
                        width={300}
                        height={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideBrake")}
                        width={300}
                        height={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideGloves")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideHelmet")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideGloves")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideEngine")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideJacket")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideGloves")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideBrake")}
                        width={300}
                        height={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideHelmet")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id={styles.infinite}
                className={`${styles.highwaySlider} ${styles.slider2}`}
              >
                <div className={styles.highwayBarrier}>
                  <ul className={styles.highwayLane}>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={awsAssetsFetcher("slideRim")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={awsAssetsFetcher("slideBoost3")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={awsAssetsFetcher("sildeBoost")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={awsAssetsFetcher("slideBoost3")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={awsAssetsFetcher("slideBoots")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={awsAssetsFetcher("slideEngine2")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={awsAssetsFetcher("slideSpolier")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={awsAssetsFetcher("slideTire")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={awsAssetsFetcher("sildeBoost")}
                        height={300}
                        width={300}
                        alt="parrts"
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={awsAssetsFetcher("slideBoost3")}
                        height={300}
                        width={300}
                        alt="parrts"
                        // priority
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformancePart;
{
  /* <div id={styles.infinite} className={styles.highwaySlider}>
                <div className={styles.highwayBarrier}>
                  <ul className={styles.highwayLane}>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={engine}
                        alt="parrts"
                        // priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={brake}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={glove}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={helmet}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={glove}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={engine}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={jacket}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={glove}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={brake}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={helmet}
                        alt="parrts"
                        priority
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id={styles.infinite}
                className={`${styles.highwaySlider} ${styles.slider2}`}
              >
                <div className={styles.highwayBarrier}>
                  <ul className={styles.highwayLane}>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidTp}
                        src={rim}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={boost2}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={boost1}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={boost2}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={boot}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={engine3}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={spoiler}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={tire}
                        alt="parrts"
                        priority
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={boost1}
                        alt="parrts"
                      />
                    </li>
                    <li className={styles.highwayCar}>
                      <Image
                        className={styles.slidop}
                        src={boost2}
                        alt="parrts"
                        priority
                      />
                    </li>
                  </ul>
                </div>
              </div> */
}
