import Head from "next/head";
import { FC } from "react";
import Community from "../../components/Community/Community";
import DownloadSteps from "../../components/DownloadBanner/DownloadSteps";
import FAQ from "../../components/FrequentlyAskedQuestions/FAQ";
import MetaverseFeatures from "../../components/MetaverseFeatures/MetaverseFeatures";
import RacingBanner from "../../components/RacingBanner/RacingBanner";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";

import GarageBuild from "../../components/garageBuild/GarageBuild";

const index: FC = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
        />
        <title>Download Nitro League - Android</title>

        <meta
          name="description"
          content="Download Nitro League, the world's best racing Metaverse. Store NFT’s and earn daily rewards.
    "
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content="Earn rewards in the Nitro League" />
        <meta
          property="og:description"
          content="Nitro League P2E game (Beta). Access the Garage, showcase NFT cars, earn crypto rewards and share pictures on Facebook"
        />
        <meta
          property="og:image"
          content="https://nitroleague.com/download-app-og.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta
          property="twitter:title"
          content="Download Nitro League - Android"
        />
        <meta
          property="twitter:description"
          content="Download Nitro League, the world's best racing Metaverse. Store NFT’s and earn daily rewards.
    "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/download-app-og.png"
        />
      </Head>
      <RacingBanner
        page="download"
        heading={
          <>
            Drive into the <br />
            Nitro Arcade
          </>
        }
        isBtn={true}
        isVideo={false}
        description={
          <>
            A strategy based simulation racing game where you participate in
            events, customize your cars according to track conditions and earn
            rewards. Make your mark now and join the race!
          </>
        }
        btnText={"Download App"}
        downloadText={"Android only, 113 MB"}
        show={undefined}
        setShow={undefined}
        isGlobe={false}
      />
      <MetaverseFeatures title="Nitro Arcade highlights" />
      {/* <GarageBuild title="Garage with Metamask" /> */}
      <DownloadSteps />

      <TestimonialSlider />
      <FAQ />
      <Community
        isBtn={false}
        heading={
          <>
            Jump right into the <br /> Nitro Arcade
          </>
        }
        detail=" Download the latest APK to access your garage."
      />
    </>
  );
};
export default index;
