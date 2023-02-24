import { FC } from "react";
import Head from "next/head";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
const videoUrl = "https://www.youtube.com/embed/i2t4EBxPNRM";

const carStats = [
  {
    label: "Reputation",
    score: "7.0",
  },
  {
    label: "Speed",
    score: "6.1",
  },
  {
    label: "Acceleration",
    score: "5.7",
  },
  {
    label: "Handling",
    score: "5.2",
  },
  {
    label: "Durability",
    score: "6.0",
  },
];

const features = [
  {
    Title: "Time Leaper",
    Desc: "Aion Spirit is a comfortable road car that readily transitions to a capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics.",
  },
  {
    Title: "Glore Magnet",
    Desc: " This model has been winning races since the year 2000 A.D. and is one of the most trusted and durable model on the track. It is powered by a 2450 horsepower twin-turbo engine that can dominate most cars on a straight line track.",
  },
];
const index: FC = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aion Spirit</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" Aion Spirit" />
        <meta
          property="og:description"
          content="Aion Spirit is an 'Uncommon' NFT car using a combination of varying aerodynamics, given its massive front lip, sucking in the air across the car, and its impeccably low weight to fly through. 
 
   "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Aion Spirit" />
        <meta
          property="twitter:description"
          content="Aion Spirit is an 'Uncommon' NFT car using a combination of varying aerodynamics, given its massive front lip, sucking in the air across the car, and its impeccably low weight to fly through. 
 
  "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <MarketPlaceDetail
        name="Aion Spirit"
        model="ASX-104"
        set="ALPHA CLASS"
        rarity="UNCOMMON"
        desc="A capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics. It has a 2450 horsepower twin-turbo engine that can dominate most cars on a straight-line track."
        price="Buy &nbsp; $149.99"
        stats="Car Statistics"
        strengthNum="7.0"
        strengthTitle="Reputation"
        tvLink="https://terravirtua.io/marketplace/nitro_asx104"
        img={awsAssetsFetcher("aion-spirit")}
        statsImg={awsAssetsFetcher("aion-spirit-model")}
        videoImg={awsAssetsFetcher("aion-video-model")}
        videoUrl={videoUrl}
        carStats={carStats}
        features={features}
        strengthDesc={
          <>
            Aion Spirit’s primary characteristic is <strong>reputation</strong>
            among other vehicles.
          </>
        }
      />
      <RacingBuySlider section="light" title="More Nitro Cars" />
    </>
  );
};
export default index;
