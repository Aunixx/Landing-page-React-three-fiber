import { useEffect, useRef, useState } from "react";
import style from "./comingSoon.module.scss";

export const ComingSoon = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 7);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo(false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const images = [
    <img
      key="image1"
      src="./images/Azraq.png"
      alt="qr code"
      className={style.qrCode}
    />,
    <img
      key="image2"
      src="./images/xerostia.png"
      alt="qr code"
      className={style.qrCode}
    />,
    <img
      key="image3"
      src="./images/khenon.png"
      alt="qr code"
      className={style.qrCode}
    />,
    <img
      key="image4"
      src="./images/Celeros.png"
      alt="qr code"
      className={style.qrCode}
    />,
    <img
      key="image5"
      src="./images/Hitoshika.png"
      alt="qr code"
      className={style.qrCode}
    />,
    <img
      key="image6"
      src="./images/Zavos.png"
      alt="qr code"
      className={style.qrCode}
    />,
    <img
      key="image7"
      src="./images/Evalon.png"
      alt="qr code"
      className={style.qrCode}
    />,
  ];

  return showVideo ? (
    <video
      src="./images/glitch2.mp4"
      autoPlay
      muted
      className={style.glitchVideo}
    />
  ) : (
    <section className={style.comingSoon}>
      <div className={style.container}>
        <div className={style.main}>
          <section className={style.textSection}>
            <div className={style.textWrapper}>
              <video
                src="./images/VID-20230223-WA0041.mp4"
                loop
                autoPlay
                muted
                playsInline
                className={style.video}
              ></video>
            </div>
          </section>

          <div className={`top-wrapper ${style.topWrapper}`}>
            {images[currentImageIndex]}
          </div>
          <form action="" className={style.newsletter}>
            <input
              type="email"
              placeholder="Enter email address for updates"
              className={style.emailInput}
            />
            <button className={style.subscribe}>Register</button>
          </form>
          <h3 className={style.somethingText}>SOMETHING NEW IS COMING</h3>
          <div className={style.callbackBtns}>
            <button className={style.discord}>
              <a
                href="https://discord.gg/nitroleague"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9308 2.04163C15.6561 1.49351 14.2892 1.08968 12.8599 0.858392C12.8339 0.853928 12.8079 0.865084 12.7945 0.887395C12.6187 1.18041 12.4239 1.56267 12.2876 1.86313C10.7503 1.64746 9.22099 1.64746 7.71527 1.86313C7.57887 1.55599 7.37707 1.18041 7.20048 0.887395C7.18707 0.865828 7.16107 0.854673 7.13504 0.858392C5.70659 1.08894 4.33963 1.49277 3.06411 2.04163C3.05307 2.04609 3.04361 2.05353 3.03732 2.0632C0.444493 5.69323 -0.265792 9.23403 0.0826501 12.7309C0.0842267 12.748 0.0944749 12.7644 0.108665 12.7748C1.81934 13.9521 3.47642 14.6668 5.10273 15.1405C5.12876 15.148 5.15634 15.1391 5.1729 15.119C5.55761 14.6267 5.90054 14.1075 6.19456 13.5616C6.21192 13.5297 6.19535 13.4917 6.15989 13.4791C5.61594 13.2857 5.098 13.05 4.59977 12.7823C4.56037 12.7607 4.55721 12.7079 4.59347 12.6826C4.69831 12.609 4.80318 12.5323 4.9033 12.455C4.92141 12.4409 4.94665 12.4379 4.96794 12.4468C8.24107 13.8472 11.7846 13.8472 15.0191 12.4468C15.0404 12.4372 15.0657 12.4401 15.0846 12.4543C15.1847 12.5316 15.2895 12.609 15.3952 12.6826C15.4314 12.7079 15.4291 12.7607 15.3897 12.7823C14.8914 13.0552 14.3735 13.2857 13.8288 13.4784C13.7933 13.491 13.7775 13.5297 13.7949 13.5616C14.0952 14.1068 14.4381 14.6259 14.8157 15.1182C14.8315 15.1391 14.8599 15.148 14.8859 15.1405C16.5201 14.6668 18.1772 13.9521 19.8879 12.7748C19.9028 12.7644 19.9123 12.7488 19.9139 12.7317C20.3309 8.68887 19.2154 5.1771 16.9568 2.06394C16.9513 2.05353 16.9419 2.04609 16.9308 2.04163ZM6.68335 10.6017C5.69792 10.6017 4.88594 9.75388 4.88594 8.71268C4.88594 7.67148 5.68217 6.82367 6.68335 6.82367C7.69239 6.82367 8.49651 7.67893 8.48073 8.71268C8.48073 9.75388 7.68451 10.6017 6.68335 10.6017ZM13.329 10.6017C12.3435 10.6017 11.5316 9.75388 11.5316 8.71268C11.5316 7.67148 12.3278 6.82367 13.329 6.82367C14.338 6.82367 15.1421 7.67893 15.1264 8.71268C15.1264 9.75388 14.338 10.6017 13.329 10.6017Z"
                    fill="white"
                  />
                </svg>
              </a>
            </button>
            <button className={style.twitter}>
              <a
                href="https://twitter.com/nitroleaguegame?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 1.89355C20.2259 2.21579 19.3961 2.43215 18.5237 2.53035C19.4141 2.03011 20.0982 1.23832 20.419 0.296154C19.5876 0.758032 18.6628 1.09408 17.6825 1.27515C16.8969 0.489498 15.7774 0 14.5385 0C12.1588 0 10.2291 1.80761 10.2291 4.03875C10.2291 4.35485 10.2684 4.66328 10.3421 4.95943C6.76105 4.79064 3.58756 3.18251 1.46154 0.738084C1.09002 1.33653 0.878887 2.03011 0.878887 2.76973C0.878887 4.17071 1.6383 5.4075 2.79542 6.13331C2.08838 6.11182 1.4239 5.92922 0.842881 5.62693C0.842881 5.64381 0.842881 5.66069 0.842881 5.67757C0.842881 7.63556 2.32897 9.26671 4.29787 9.63959C3.93781 9.73166 3.55647 9.78076 3.16367 9.78076C2.88543 9.78076 2.61538 9.75621 2.35188 9.70711C2.9018 11.3106 4.49264 12.4814 6.37643 12.5137C4.90344 13.597 3.04583 14.2415 1.02619 14.2415C0.677578 14.2415 0.335516 14.2231 0 14.1847C1.90507 15.3325 4.17021 16 6.60393 16C14.5286 16 18.8625 9.84521 18.8625 4.5083C18.8625 4.33337 18.8576 4.1569 18.8511 3.98504C19.6923 3.41575 20.4223 2.70375 21 1.89355Z"
                    fill="white"
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
