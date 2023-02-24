import Head from "next/head";
import { FC } from "react";
import MarketPlaceDetail from "../../components/MarketPlaceDetail/MarketPlaceDetail";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";
const videoUrl = "https://www.youtube.com/embed/9ufhmhCm8zc";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const carStats = [
  {
    label: "Reputation",
    score: "6.0",
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
    score: "4.2",
  },
  {
    label: "Durability",
    score: "5.2",
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

const index = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chaos Void Polka Lokr</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" Chaos Void Polka Lokr" />
        <meta
          property="og:description"
          content="The king of commoners, this Nitro League NFT is highly balanced and built to provide a competitive edge on the track, whether straight or a twisted piece of land in the metaverse. 
    "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Chaos Void Polka Lokr" />
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
        name="Chaos Void Polka Lokr"
        model="CVX-104L"
        set="Alpha Class"
        rarity="COMMON"
        desc="Chaos Void is a 'Common' track car using a combination of an electric motor and smooth aerodynamics. It has a 2330 horsepower twin-turbo engine that can dominate most cars in the same rarity on a straight line."
        price="Buy &nbsp; $99s"
        stats="Car Statistics"
        strengthNum="5.5"
        strengthTitle="Handling"
        tvLink="https://terravirtua.io/marketplace/nitro_hqx600"
        img={awsAssetsFetcher("polka")}
        statsImg={awsAssetsFetcher("polka-model")}
        videoImg={awsAssetsFetcher("polkr-video-model")}
        videoUrl={videoUrl}
        carStats={carStats}
        features={features}
        strengthDesc={
          <>
            Choas Void’s primary characteristic is <strong>reputation </strong>
            among other vehicles.
          </>
        }
      />
      <RacingBuySlider title="More Nitro Cars" section="" />
    </>
  );
};
export default index;
