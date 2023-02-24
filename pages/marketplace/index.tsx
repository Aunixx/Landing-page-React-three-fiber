import MarketPlace from "../../components/MarketPlace/MarketPlace";
import Head from "next/head";
import { FC } from "react";

const index: FC = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Marketplace - Nitro League</title>
        <meta
          name="description"
          content="Nitro League, an immersive Metaverse with racing at its core."
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitroleague.com/" />
        <meta property="og:title" content=" NFT Marketplace - Nitro League" />
        <meta
          property="og:description"
          content="Buy, sell, and auction Nitro League NFTs and bring them to track in the metaverse.  "
        />
        <meta property="og:image" content="https://nitroleague.com/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta
          property="twitter:title"
          content="NFT Marketplace - Nitro League"
        />
        <meta
          property="twitter:description"
          content="Buy, sell, and auction Nitro League NFTs and bring them to track in the metaverse. "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <MarketPlace />
    </>
  );
};
export default index;
