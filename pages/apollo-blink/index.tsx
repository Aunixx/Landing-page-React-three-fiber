import { FC } from "react";
import Head from "next/head";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const videoUrl = "https://www.youtube.com/embed/kK18BnEdAVk";

const carStats = [
  {
    label: "Reputation",
    score: "6.0",
  },
  {
    label: "Speed",
    score: "6.9",
  },
  {
    label: "Acceleration",
    score: "7.2",
  },
  {
    label: "Handling",
    score: "8.0",
  },
  {
    label: "Durability",
    score: "6.9",
  },
];

const features = [
  {
    Title: "Miracle Design",
    Desc: "Apollo Blink is a comfortable road car that readily transitions to a capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics.",
  },
  {
    Title: "Swift Agility",
    Desc: "The car is powered by a 2550 horsepower twin-turbo engine. That much power going to all four wheels can launch the Apollo Blink to unmatched velocity in a few neck-straining seconds making it ideal for tracks with twists and turns.",
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
        <title>Apollo Blink</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" Apollo Blink" />
        <meta
          property="og:description"
          content="Apollo Blink is a 'Rare' track NFT car using a combination of low weight, an electric motor, and aggressive aerodynamics to fly through the Nitro League metaverse racing game.

  "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Apollo Blink" />
        <meta
          property="twitter:description"
          content="Apollo Blink is a 'Rare' track NFT car using a combination of low weight, an electric motor, and aggressive aerodynamics to fly through the Nitro League metaverse racing game.

 "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <MarketPlaceDetail
        name="Apollo Blink"
        model="ABX-600"
        set="BETA CLASS"
        rarity="RARE"
        desc="A capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics. It can launch to unmatched velocity in a few neck-straining seconds making it ideal for tracks with twists and turns."
        price="Buy &nbsp; $499.99"
        stats="Car Statistics"
        strengthNum="8.0"
        strengthTitle="Handling"
        tvLink="https://terravirtua.io/marketplace/nitro_abx204"
        img={awsAssetsFetcher("apollo-blink")}
        statsImg={awsAssetsFetcher("apollo-blink-model")}
        videoImg={awsAssetsFetcher("apollo-video-model")}
        videoUrl={videoUrl}
        carStats={carStats}
        features={features}
        strengthDesc={
          <>
            Apollo Blink’s key strength <strong>handling</strong> provides it a
            competitive edge for racing on tracks.
          </>
        }
      />
      <RacingBuySlider section="light" title="More Nitro Cars" />
    </>
  );
};
export default index;
