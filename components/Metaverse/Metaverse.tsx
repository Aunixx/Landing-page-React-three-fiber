import Image from "next/image";
import style from "./metaverse.module.scss";
import discord from "/public/Images/fl-discord.svg";
import Twitter from "/public/Images/fl-twitter.svg";
import metamask from "/public/Images/s_metamask.svg";
import globe from "/public/Images/metamask_kiirus.png"

export default function Metaverse() {
  return (
    <section className={`${style.metaverse}`}>
      <div className={`${style.metaverse__content}`}>
        <div className={`${style.metaverse__content_detail}`}>
          <h1>Incoming Transmission from <span>Kiirus</span> being deciphered</h1>
          <p>Connect us at</p>
          <div className={`${style.metaverse__content_btns}`}>
           
              <a href="https://discord.com/invite/253Zm2Dn7u" target="_blank" rel="noreferrer">
                <button className={`${style.metaverse__content_btn1}`}>
                  <Image src={discord} width={20} height={15} />
                  <span> Join Discord </span>
                </button>
              </a>
            

            <a href="https://twitter.com/NitroLeagueGame" target="_blank" rel="noreferrer">
              <button className={`${style.metaverse__content_btn2}`}>
                <Image src={Twitter} width={20} height={15} />
                <span> Join Twitter </span>
              </button>
            </a>
          </div>

          <div className={`${style.metaverse__content_btn3}`}>
            
              
                <Image src={metamask} width={20} height={15} />
                <span> Login with Metamask </span>
              
            
          </div>
          <p className={`${style.metaverse__content_email}`}> Email Address - info@nitroleague.com </p>
        </div>

        <div>
          <Image src={globe} width={647} height={708} />
        </div>
      </div>
    </section>
  );
}
