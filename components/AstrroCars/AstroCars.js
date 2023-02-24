import Image from "next/image";
import styles from "./astroCars.module.scss";
import astro from "../../public/Images/newAstro.png";
import fb from "../../public/Images/fl-facebook.svg";
import discord from "../../public/Images/fl-discord.svg";
import linkedin from "../../public/Images/fl-linkedin.svg";
import medium from "../../public/Images/fl-medium.svg";
import telegram from "../../public/Images/fl-telegram.svg";
import twitter from "../../public/Images/fl-twitter.svg";
import youtube from "../../public/Images/fl-youtube.svg";
import insta from "../../public/Images/insta.svg";

const AstroCars = () => {
  const socialLinks = [
    {
      Icon: discord,
      href: "https://discord.com/invite/253Zm2Dn7u",
    },
    {
      Icon: telegram,
      href: "https://t.me/nitroleaguegame",
    },
    {
      Icon: insta,
      href: "https://www.instagram.com/nitroleagueracing/?r=nametag",
    },
    {
      Icon: linkedin,
      href: "https://www.linkedin.com/company/nitro-league",
    },
    {
      Icon: medium,
      href: "https://medium.com/nitro-league",
    },
    {
      Icon: fb,
      href: "https://www.facebook.com/nitroleagueracing",
    },
    {
      Icon: twitter,
      href: "https://twitter.com/NitroLeagueGame",
    },
    {
      Icon: youtube,
      href: "https://www.youtube.com/channel/UCU26AuRMNTkMZfELd3bBnXQ",
    },
  ];
  return (
    <section className={styles.astroCarsWrapper}>
      <div className={styles.carWrap}>
        <Image src={astro} alt="cars" />
      </div>
      <div className={`${styles.container} nitro-container`}>
        <div className={styles.contentWrap}>
          <div className={styles.content}>
            <h2>Astro Cars</h2>
            <p>Stay connected for the mystery reveal.</p>
            <div className={styles.socialLinks}>
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} target="blank">
                      <Image src={link.Icon} alt="fb" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.closed}>Minting Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AstroCars;
