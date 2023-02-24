import { FC } from "react";
import Head from "next/head";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
const videoUrl = "https://www.youtube.com/embed/pH9bQEOqg2k";

const carStats = [
  {
    label: "Reputation",
    score: "7.0",
  },
  {
    label: "Speed",
    score: "7.9",
  },
  {
    label: "Acceleration",
    score: "8.2",
  },
  {
    label: "Handling",
    score: "9.0",
  },
  {
    label: "Durability",
    score: "7.9",
  },
];

const features = [
  {
    Title: "War Machine",
    Desc: "Bellona Eternity is a comfortable road car that readily transitions to a capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics.",
  },
  {
    Title: "Unparallel Agility",
    Desc: "The car is powered by a 2700 horsepower twin-turbo engine. That much power going to all four wheels can launch the Bellona Eternity to unmatched velocity in a few neck-straining seconds making it ideal for tracks with twists and turns.",
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
        <title>Bellona Eternity</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" Bellona Eternity " />
        <meta
          property="og:description"
          content="Bellona Eternity is a 'Special' NFT car to bring it the world's best racing Metaverse. Given its massive forged alloy wheels and aggressive front lip, this car is ready to take over Nitro League racing metaverse.  

  "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Bellona Eternity " />
        <meta
          property="twitter:description"
          content="Bellona Eternity is a 'Special' NFT car to bring it the world's best racing Metaverse. Given its massive forged alloy wheels and aggressive front lip, this car is ready to take over Nitro League racing metaverse.  

 "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <MarketPlaceDetail
        name="Bellona Eternity"
        model="BEX-204"
        set="BETA CLASS"
        rarity="SPECIAL"
        desc="A capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics. It can launch to unmatched velocity in a few neck-straining seconds making it ideal for tracks with twists and turns."
        price="Buy &nbsp; $2499.99"
        stats="Car Statistics"
        strengthNum="9.0"
        strengthTitle="Handling"
        tvLink="https://terravirtua.io/marketplace/nitro_bex204"
        img={awsAssetsFetcher("bellona-eternity")}
        statsImg={awsAssetsFetcher("bellona-eternity-model")}
        videoImg={awsAssetsFetcher("bellona-video-model")}
        videoUrl={videoUrl}
        carStats={carStats}
        features={features}
        strengthDesc={
          <>
            Bellona Eternity’s key strength <strong>handling</strong> provides
            it a competitive edge for racing on tracks.
          </>
        }
      />
      <RacingBuySlider section="light" title="More Nitro Cars" />
    </>
  );
};
export default index;
