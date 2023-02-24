import Head from "next/head";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

import { FC } from "react";
const carStats = [
  {
    label: "Reputation",
    score: "4.5",
  },
  {
    label: "Speed",
    score: "5.0",
  },
  {
    label: "Acceleration",
    score: "3.8",
  },
  {
    label: "Durability",
    score: "4.0",
  },
];

const features = [
  {
    Title: "Tech Miracle",
    Desc: "Chaos Void is a comfortable road car that readily transitions to a capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics.",
  },
  {
    Title: "Fame Magnet",
    Desc: " This model has been winning races since the year 2000 A.D. and is one of the most trusted and durable model on the track. It is powered by a 2330 horsepower twin-turbo engine that can dominate most cars on a straight line track.",
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
        <title>Fusion Engine</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content="Fusion Engine" />
        <meta
          property="og:description"
          content="The lion of nights, the fear of competitors on metaverse track was the first-ever 'Rare' NFT vehicle produced for the Sigma class by the Amenthes nation.
  "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Fusion Engine" />
        <meta
          property="twitter:description"
          content="The lion of nights, the fear of competitors on metaverse track was the first-ever 'Rare' NFT vehicle produced for the Sigma class by the Amenthes nation.
 "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <MarketPlaceDetail
        name="Fusion Engine"
        model="RRX-600"
        set="CAR PARTS"
        rarity="SPECIAL"
        desc="Fusion Engines are the rarest type of Engines in the Nitro Universe. Fusion engines can supply great quantities of power, enough to power massive vehicles."
        price="Coming soon"
        stats="Engine Statistics"
        strengthNum="5.0"
        strengthTitle="Speed"
        img={awsAssetsFetcher("fusion-engine-hero-img")}
        statsImg={awsAssetsFetcher("fusion-engine-from-top")}
        videoImg={awsAssetsFetcher("fusion-engine-video-bg")}
        carStats={carStats}
        features={features}
        strengthDesc={<></>}
      />
      <RacingBuySlider section="light" title="More Nitro Cars" />
    </>
  );
};
export default index;
