import style from "./newMetaverse.module.scss";
import Image from "next/image";
import nitroLogo from "../../public/Images/footer-logo-red.svg";
import discord from "/public/Images/fl-discord.svg";
import Twitter from "/public/Images/fl-twitter.svg";
import kiirus from "/public/Images/Kiirus_ring.png";

export default function NewMetaverse() {
  return (
    <>
      <section>
        <div className={`${style.kiirus__metaverse}`}>
          <div className={`${style.kiirus__metaverse_logo}`}>
            <Image src={nitroLogo} width={268} height={72} />
          </div>

          <div className={`${style.kiirus__metaverse_content}`}>
            <h1>Incoming Transmission from <span>Kiirus</span> being deciphered</h1>
            <p>Connect us at</p>

            <div className={`${style.kiirus__metaverse_content_btns}`}>

              <a href="https://discord.com/invite/253Zm2Dn7u" target="_blank" rel="noreferrer">
                <button className={`${style.kiirus__metaverse_content_btn1}`}>
                  <Image src={discord} width={20} height={15} />
                  <span> Join Discord </span>
                </button>
              </a>

              <a href="https://twitter.com/NitroLeagueGame" target="_blank" rel="noreferrer">
                <button className={`${style.kiirus__metaverse_content_btn2}`}>
                  <Image src={Twitter} width={21} height={15} />
                  <span> Join Twitter </span>
                </button>
              </a>
            </div>

            <div className={`${style.kiirus__metaverse_content_input}`}>
                <input type="email" placeholder="Enter email address for updates" />
                <button>Subscribe</button>
            </div>

            <button className={`${style.kiirus__metaverse_connectBtn}`}>
              
                Connect wallet
                
            </button>

          </div>

            <div className={`${style.kiirus__metaverse_image}`}>
                <Image src={kiirus} width={1440} height={532} alt="ring" />
            </div>

        </div>
      </section>
    </>
  );
}
