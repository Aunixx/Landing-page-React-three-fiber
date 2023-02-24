import Image from "next/image";
import { useRef } from "react";
import discordQr from "../../public/Images/DiscordQR.png";
import festivalQr from "../../public/Images/qr-code-festival.png";
import ltr from "../../public/Images/ltr.svg";
import discord from "../../public/Images/discord-icon.svg";
import LogoWhite from "../../public/Images/festivalLogo.svg";

import styles from "./form.module.scss";
const Form = ({ onAddEmail }) => {
  const emailRef = useRef("");
  const discordRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const email = {
      email: emailRef.current.value,
      discord: discordRef.current.value,
    };

    onAddEmail(email);
    emailRef.current.value = "";
    discordRef.current.value = "";
  };
  return (
    <section className={styles.registerWrap}>
      <div className="nitro-container">
        <div className="row align-items-center">
          <div className={`${styles.border} col-md-7 nitro-mb-32`}>
            <div className={styles.rightContent}>
              <div className={styles.logo}>
                <Image src={LogoWhite} alt="logo" />
              </div>
              <h3 className={styles.title}>
                Register for a chance to win up to <span>$1,000</span>{" "}
                in Nitro Assets.
              </h3>
              <form onSubmit={submitHandler}>
                <div className={styles.inputWrap}>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your Email adress"
                    ref={emailRef}
                    required
                  />
                  <div className={styles.icon1}>
                    <Image src={ltr} alt="qr" objectFit="contain" />
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your Discord handle (optional)"
                    ref={discordRef}
                  />
                  <div className={styles.icon2}>
                    <Image src={discord} alt="qr" objectFit="contain" />
                  </div>
                </div>

                <button className={styles.cta}>Submit</button>
              </form>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className={styles.qrWrap}>
              <div className={`${styles.qrImages} nitro-mb-40`}>
                <Image src={discordQr} alt="qr" objectFit="contain" />
                <p>
                  Scan the <span> QR Code</span> <br />
                  to join our <span>Discord community</span>
                </p>
              </div>
              <div className={styles.qrImages}>
                <Image src={festivalQr} alt="qr" objectFit="contain" />
                <p>
                  Scan the <span>QR Code</span> <br />
                  To download the <span>Nitro Arcade</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Form;
