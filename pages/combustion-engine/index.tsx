import { FC } from "react";
import Head from "next/head";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const carStats = [
  {
    label: "Reputation",
    score: "1.5",
  },
  {
    label: "Speed",
    score: "1.5",
  },
  {
    label: "Acceleration",
    score: "1.0",
  },
  {
    label: "Durability",
    score: "1.5",
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
        <title>Combustion Engine</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content="Combustion Engine" />
        <meta
          property="og:description"
          content="The lion of nights, the fear of competitors on metaverse track was the first-ever 'Rare' NFT vehicle produced for the Sigma class by the Amenthes nation.
  "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Combustion Engine" />
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
        name="Combustion Engine"
        model="RRX-600"
        set="CAR PARTS"
        rarity="COMMON"
        desc="The V12 engine is one of the most powerful engines used in automobiles. It is known for generating higher horsepower and efficient function. Luxury and sports cars were the first to use these engines on a wide scale."
        price="Coming soon"
        stats="Engine Statistics"
        strengthNum="1.5"
        strengthTitle="Reputation"
        img={awsAssetsFetcher("combustion-Engine-hero-img")}
        statsImg={awsAssetsFetcher("combustion-engine-top-view")}
        videoImg={awsAssetsFetcher("combustion-engine-video-bg")}
        carStats={carStats}
        features={features}
        strengthDesc={<></>}
      />
      <RacingBuySlider section="light" title="More Nitro Cars" />
    </>
  );
};
export default index;
