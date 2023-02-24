import Head from "next/head";
import { FC } from "react";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";

const videoUrl =
  "https://www.youtube-nocookie.com/embed/adGCcU9N6RQ?controls=0&nocookie=true&autoPlay=true";

const carStats = [
  {
    label: "Reputation",
    score: "6.0",
  },
  {
    label: "Speed",
    score: "6.2",
  },
  {
    label: "Acceleration",
    score: "5.7",
  },
  {
    label: "Handling",
    score: "6.5",
  },
  {
    label: "Durability",
    score: "5.6",
  },
];

const features = [
  {
    Title: "Father of Sigma",
    Desc: "Road Ripper was designed using never-seen-before technology provided by the Amenthes nation in the year 3002 A.D. It was the first ever vehicle produced with aerodynamics so advanced that a new class of cars had to be introduced, the Sigma Class.",
  },
  {
    Title: "Excellent Balance",
    Desc: "Road Ripper is the most well-balanced vehicle in the Uncommon rarity, giving it a competitive edge for racing on tracks which contain both straight line stretches as well as twists and turns.",
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
        <title>Road Ripper</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" Road Ripper" />
        <meta
          property="og:description"
          content="The father of Sigma was the original car designed for the Nitro League. It used never-before-seen technology by the Amenthes nation, which gave birth to the Sigma class. 
   "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Road Ripper" />
        <meta
          property="twitter:description"
          content="The father of Sigma was the original car designed for the Nitro League. It used never-before-seen technology by the Amenthes nation, which gave birth to the Sigma class. 
  "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <MarketPlaceDetail
        name="Road Ripper"
        model="RRX-600"
        set="SIGMA CLASS"
        rarity="UNCOMMON"
        desc="Road Ripper was designed using never-seen-before technology provided by the Amenthes nation. Its well-balanced stats give a competitive edge for racing on tracks that contain both straight-line stretches as well as twists and turns."
        price="Buy &nbsp; $149.99"
        stats="Car Statistics"
        strengthNum="6.5"
        strengthTitle="Handling"
        img={awsAssetsFetcher("road-ripper-bnr")}
        statsImg={awsAssetsFetcher("road-ripper-model")}
        videoImg={awsAssetsFetcher("road-video-model")}
        carStats={carStats}
        videoUrl={videoUrl}
        features={features}
        strengthDesc={
          <>
            Roadripper’s key strength <strong>handling</strong> provides it a
            competitive edge for racing on tracks.
          </>
        }
      />
      <RacingBuySlider section="light" title="More Nitro Cars" />
    </>
  );
};
export default index;
