import Head from "next/head";
import { FC } from "react";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";

import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const videoUrl = "https://www.youtube.com/embed/9ufhmhCm8zc";

const carStats = [
  {
    label: "Reputation",
    score: "5.0",
  },
  {
    label: "Speed",
    score: "5.2",
  },
  {
    label: "Acceleration",
    score: "4.7",
  },
  {
    label: "Handling",
    score: "5.5",
  },
  {
    label: "Durability",
    score: "4.6",
  },
];

const features = [
  {
    Title: "King of Commoners",
    Desc: 'Horus Quake was the first ever "Common" vehicle produced for the Sigma class by the Amenthes nation in the year 3003 A.D. Although designed for new comers of Nitro League, it posses all the aerodynamic advancements from the Road Ripper.',
  },
  {
    Title: "High Balance",
    Desc: "Horus Quake is the most well-balanced vehicle in the Common rarity, giving it a competitive edge for racing on tracks which contain both straight line stretches as well as twists and turns.",
  },
];

const index = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Horus Quake</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" Horus Quake" />
        <meta
          property="og:description"
          content="The king of commoners, this Nitro League NFT is highly balanced and built to provide a competitive edge on the track, whether straight or a twisted piece of land in the metaverse. 
    "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Horus Quake" />
        <meta
          property="twitter:description"
          content="The king of commoners, this Nitro League NFT is highly balanced and built to provide a competitive edge on the track, whether straight or a twisted piece of land in the metaverse. 
   "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <MarketPlaceDetail
        name="Hours Quake Dafi"
        model="HQX-600D"
        set="SIGMA CLASS"
        rarity="COMMON"
        desc='Horus Quake, the king of commoners, was the first-ever "Common" vehicle produced for the Sigma class by the Amenthes nation. Highly balanced and built to provide competitive edge on the track, whether its a straight or a twist.'
        price="Buy &nbsp; $99s"
        stats="Car Statistics"
        strengthNum="5.5"
        strengthTitle="Handling"
        tvLink="https://terravirtua.io/marketplace/nitro_hqx600"
        img={awsAssetsFetcher("dafi")}
        statsImg={awsAssetsFetcher("dafi-model")}
        videoImg={awsAssetsFetcher("dafi-video-bg")}
        videoUrl={videoUrl}
        carStats={carStats}
        features={features}
        strengthDesc={
          <>
            Horus Quake’s key strength <strong>handling</strong> provides it a
            competitive edge for racing on tracks.
          </>
        }
      />
      <RacingBuySlider title="More Nitro Cars" section="" />
    </>
  );
};
export default index;
