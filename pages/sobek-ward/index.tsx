import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import Head from "next/head";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";
import { FC } from "react";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const videoUrl = "https://www.youtube.com/embed/oJFWh8kTKIw";

const carStats = [
  {
    label: "Reputation",
    score: "8.0",
  },
  {
    label: "Speed",
    score: "8.2",
  },
  {
    label: "Acceleration",
    score: "7.7",
  },
  {
    label: "Handling",
    score: "8.5",
  },
  {
    label: "Durability",
    score: "7.6",
  },
];

const features = [
  {
    Title: "Godly crocodile",
    Desc: "Sobek Ward, the croc, was the first-ever `Special` vehicle produced for the Sigma className by the Amenthes nation in the year 3012 A.D. Designed for exceptional racers in the Nitro League, it possesses godly technology that makes untouchable on the race tracks.",
  },
  {
    Title: "Divine Balance",
    Desc: " Sobek Ward is the most well-balanced vehicle in the Epic rarity, giving it an unparallel crocodile-like advantage for racing on tracks that contain both straight-line stretches as well as twists and turns.",
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
        <title>Sobek Ward</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" Sobek Ward" />
        <meta
          property="og:description"
          content="The godly crocodile - one of the fastest cars in the metaverse, was the first-ever 'Special' NFT car produced for the Sigma class by the Amenthes nation.  "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Sobek Ward" />
        <meta
          property="twitter:description"
          content="The godly crocodile - one of the fastest cars in the metaverse, was the first-ever 'Special' NFT car produced for the Sigma class by the Amenthes nation. "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/marketplace/sobek-ward.png"
        />
      </Head>
      <MarketPlaceDetail
        name="Sobek Ward"
        model="SWX-600"
        set="SIGMA CLASS"
        rarity="SPECIAL"
        desc='Sobek Ward, the croc, was the first-ever "Epic" vehicle produced for the Sigma class by the Amenthes nation. Its well-balanced stats give a competitive edge for racing on tracks that contain both straight-line stretches as well as twists and turns.'
        price="Buy &nbsp; $2499.99"
        stats="Car Statistics"
        strengthNum="8.5"
        strengthTitle="Handling"
        tvLink="https://terravirtua.io/marketplace/nitro_swx600"
        carStats={carStats}
        features={features}
        img={awsAssetsFetcher("sobek-ward-bnr")}
        statsImg={awsAssetsFetcher("sobek-ward-model")}
        videoImg={awsAssetsFetcher("sobek-video-model")}
        videoUrl={videoUrl}
        strengthDesc={
          <>
            Sobek Ward’s key strength <strong>handling</strong> provides it a
            competitive edge for racing on tracks.
          </>
        }
      />
      <RacingBuySlider section="light" title="More Nitro Cars" />
    </>
  );
};

export default index;
