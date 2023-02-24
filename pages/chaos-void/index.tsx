import { FC } from "react";
import Head from "next/head";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";

import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
const videoUrl = "https://www.youtube.com/embed/YgNDYh9uTcY";

const carStats = [
  {
    label: "Reputation",
    score: "6.0",
  },
  {
    label: "Speed",
    score: "5.1",
  },
  {
    label: "Acceleration",
    score: "4.7",
  },
  {
    label: "Handling",
    score: "4.2",
  },
  {
    label: "Durability",
    score: "5.0",
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
        <title>Chaos Void</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" Chaos Void" />
        <meta
          property="og:description"
          content="Chaos Void is a 'Common' metaverse track car using a combination of an electric motor and smooth aerodynamics to catch the perfect line.
  
    "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Chaos Void" />
        <meta
          property="twitter:description"
          content="Chaos Void is a 'Common' metaverse track car using a combination of an electric motor and smooth aerodynamics to catch the perfect line.
  
   "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <MarketPlaceDetail
        name="Chaos Void"
        model="CVX-104"
        set="ALPHA CLASS"
        rarity="COMMON"
        desc="A capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics. It has a 2330 horsepower twin-turbo engine that can dominate most cars on a straight-line track."
        price="Buy &nbsp; $99.99"
        stats="Car Statistics"
        strengthNum="6.0"
        strengthTitle="Reputation"
        tvLink="https://terravirtua.io/marketplace/nitro_cvx104"
        img={awsAssetsFetcher("chaos-void")}
        statsImg={awsAssetsFetcher("chaos-void-model")}
        videoImg={awsAssetsFetcher("chaos-video-model")}
        videoUrl={videoUrl}
        carStats={carStats}
        features={features}
        strengthDesc={
          <>
            Choas Void’s primary characteristic is <strong>reputation</strong>
            among other vehicles.
          </>
        }
      />
      <RacingBuySlider section="light" title="More Nitro Cars" />
    </>
  );
};
export default index;
