import RacingBanner from "../../components/RacingBanner/RacingBanner";
import Head from "next/head";
import BuyLand from "../../components/BuyLand/BuyLand";
import Community from "../../components/Community/Community";
import RacingBuySlider from "../../components/RacingBuySlider/RacingBuySlider";
import RacingComingSlider from "../../components/RacingComingSlider/RacingComingSlider";
import land from "../../public/Images/rentout-land.png";
import showroom from "../../public/Images/showroom-feature.png";
import store from "../../public/Images/store-feature.png";
import factory from "../../public/Images/factory-feature.png";
import { FC } from "react";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";
import RevealPlots from "../../components/RevealPlots/RevealPlots";
import LandDeed from "../../components/LandDeed/LandDeed";
import PurchaseLand from "../../components/PurchaseLand/PurchaseLand";
import Treasures from "../../components/Treasures/Treasures";
import LandUtilization from "../../components/LandUtilization/LandUtilization";
import Experience from "../../components/experience/Experience";
import LandSale from "../../components/landForSale/LandForSale";

const Swipper = [
  {
    featureCar: awsAssetsFetcher("rentout-land"),
    featureText: "Rent out Land",
  },
  {
    featureCar: awsAssetsFetcher("showroom-feature"),
    featureText: "Own a Showroom",
  },
  {
    featureCar: awsAssetsFetcher("store-feature"),
    featureText: "Own a Store",
  },
  {
    featureCar: awsAssetsFetcher("factory-feature"),
    featureText: "Own a Factory",
  },
];
const Index: FC = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
        />
        <title>Land - Buy Land in the Nitro League</title>
        <meta
          name="description"
          content="Buying land in the Nitro League Metaverse is a revenue generating business. Build cities, rent out offices and host Metaverse events next to famous landmarks."
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta
          property="og:title"
          content="Get your NITRO and enter the world of blockchain in the Nitro League Arena."
        />
        <meta
          property="og:description"
          content="Buying land in the Nitro League Metaverse is a revenue generating business. Build cities, rent out offices and host Metaverse events next to famous landmarks."
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Nitro League" />
        <meta
          property="twitter:description"
          content="Buying land in the Nitro League Metaverse is a revenue generating business. Build cities, rent out offices and host Metaverse events next to famous landmarks."
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <RacingBanner
        page="land"
        isBtn={true}
        heading="Discover Nitro Land"
        description="The Vegas of metaverse with interconnected arcades complementing to bring immersive experience of play-to-earn game"
        btnText={"BUY NOW"}
        downloadText={""}
        isVideo={false}
        show={undefined}
        setShow={undefined}
        isGlobe={true}
      />
      {/* <RacingComingSlider
        Swipper={Swipper}
        title="Build and thrive in the Nitro League"
      /> */}
      <RevealPlots />
      <LandUtilization />
      {/* <BuyLand
        title="Land"
        page=""
        description="Become a self made Metapreneur on Nitro Prime. Buy and sell land,
            build empires and support other players. The more you own, the more
            you earn."
      /> */}
      <LandDeed />
      <Experience
        heading="Experience"
        desc="Play exclusive Web3 games and collect exciting rewards!"
        btnText="Explore Home"
      />
      <LandSale />
      <Experience
        heading="Live. race. own."
        desc="Play exclusive Web3 games and collect exciting rewards!"
        btnText="Explore HUB"
      />

      {/* <PurchaseLand /> */}
      <Treasures />

      {/* <Community
        isBtn={true}
        heading="Join the Community"
        detail=" Nitro League is an immersive Metaverse with racing at its core. A
              next level experience for everyone who wishes to participate in a
              social world, where anyone can thrive, grow and live their dreams"
      /> */}
    </>
  );
};
export default Index;
