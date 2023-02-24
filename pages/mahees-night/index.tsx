import Head from "next/head";
import { FC } from "react";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";
const videoUrl = "https://www.youtube.com/embed/aQfLXE3kmZs";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const carStats = [
  {
    label: "Reputation",
    score: "7.0",
  },
  {
    label: "Speed",
    score: "7.2",
  },
  {
    label: "Acceleration",
    score: "6.7",
  },
  {
    label: "Handling",
    score: "7.5",
  },
  {
    label: "Durability",
    score: "6.6",
  },
];

const features = [
  {
    Title: "The Loin of the Night",
    Desc: 'Maahes Night, the lion, was the first ever "Rare" vehicle produced for the Sigma class by the Amenthes nation in the year 3005 A.D. Designed for expert racers participating in the Nitro League, it posses all the technological advancements from the Road Ripper on steroids.',
  },
  {
    Title: "Unparallel Balance",
    Desc: " Maahes Night is the most well-balanced vehicle in the Rare rarity, giving it a competitive edge for racing on tracks which contain both straight line stretches as well as twists and turns.",
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
        <title>Maahes Night</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" Maahes Night" />
        <meta
          property="og:description"
          content="The lion of nights, the fear of competitors on metaverse track was the first-ever 'Rare' NFT vehicle produced for the Sigma class by the Amenthes nation.
  "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Maahes Night" />
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
        name="Mahees Night"
        model="MNX-600"
        set="SIGMA CLASS"
        rarity="RARE"
        desc='Maahes Night, the lion, was the first-ever "Rare" vehicle produced for the Sigma class by the Amenthes nation. Its well-balanced stats give a competitive edge for racing on tracks that contain both straight-line stretches as well as twists and turns.'
        price="Buy &nbsp; $499.99"
        stats="Car Statistics"
        strengthNum="7.5"
        strengthTitle="Handling"
        tvLink="https://terravirtua.io/marketplace/nitro_mnx600"
        img={awsAssetsFetcher("maahes-night-bnr")}
        statsImg={awsAssetsFetcher("maahes-night-model")}
        videoImg={awsAssetsFetcher("maahes-video-model")}
        videoUrl={videoUrl}
        carStats={carStats}
        features={features}
        strengthDesc={
          <>
            Maahes Night’s key strength <strong>handling</strong> provides it a
            competitive edge for racing on tracks.
          </>
        }
      />
      <RacingBuySlider section="light" title="More Nitro Cars" />
    </>
  );
};

export default index;
