/* eslint-disable react/no-unescaped-entities */

// import { Html } from "next/document";
import Head from "next/head";
import { useEffect, useState } from "react";
import Backers from "../components/Backers/Backers";
import VideoModal from "../components/common/VideoModal/VideoModal";
import Community from "../components/Community/Community";
import Garage from "../components/Garage/Garage";
import Guild from "../components/Guild/Guild";
import HeroSection from "../components/HeroSection/HeroSection";
import NitroPrime from "../components/NitroPrime/NitroPrime";
import Partners from "../components/Pertners/Partners";
import Spinner from "react-bootstrap/Spinner";
import styles from "../components/HeroSection/heroSection.module.scss";
import Image from "next/image";
import KoraCars from "../components/KoraCars/KoraCars";
import { useRef } from "react";
import GetStarted from "../components/GetStarted/GetStarted";
import PowerUps from "../components/Powerups/PowerUps";
import SnowFall from "../components/snowfall/SnowFall";

export default function Home() {
  const ref = useRef(null);

  // const [isLoading, setIsLaoding] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLaoding(false);
  //   }, 3000);
  // }, []);
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
        />
        <title>Nitro League - The World's Best Racing Metaverse</title>

        <meta
          name="description"
          content="Nitro League is a top racing Metaverse combining GameFi, DeFi, P2E & NFTs. Take part in NFT drops, land sales and earn rewards in $NITRO"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" NFT Marketplace - Nitro League" />
        <meta
          property="og:description"
          content="Buy, sell, and auction Nitro League NFTs and bring them to track in the metaverse. "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta
          property="twitter:title"
          content="NFT Marketplace - Nitro League"
        />
        <meta
          property="twitter:description"
          content="Buy, sell, and auction Nitro League NFTs and bring them to track in the metaverse."
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      {/* {isLoading ? (
        <div className={styles.spinner}>
          <Image src={gif} alt="gif" />
        </div>
      ) : ( */}

      <>
        {/* <VideoModal /> */}

        <HeroSection />
        {/* <KoraCars scrollref={ref} /> */}

        <GetStarted />
        <PowerUps />
        <Garage />
        <Backers />
        <Partners />
        <Guild />

        <Community
          isBtn={true}
          heading="Join the Community"
          detail="Nitro League is an immersive Metaverse with racing at its core. A next level experience for everyone who wishes to participate in a social world, where anyone can thrive, grow and live their dreams"
        />
      </>
      {/* )} */}
    </>
  );
}
