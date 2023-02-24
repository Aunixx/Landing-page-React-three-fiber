import Head from "next/head";
import { FC } from "react";
import Roadmap from "../../components/RoadMap/RoadMap";

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
        <title>Roadmap - Nitro League</title>

        <meta
          name="description"
          content=" Nitro League roadmap contains the latest product developments and milestones from the most anticipated p2e gaming experience in the GameFi space"
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
          content=" Nitro League roadmap contains the latest product developments and milestones from the most anticipated p2e gaming experience in the GameFi space"
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Nitro League" />
        <meta
          property="twitter:description"
          content=" Nitro League roadmap contains the latest product developments and milestones from the most anticipated p2e gaming experience in the GameFi space"
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <Roadmap />
    </>
  );
};

export default index;
