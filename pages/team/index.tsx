import PoweredBy from "../../components/PoweredBy/PoweredBy";
import TeamNitro from "../../components/TeamNitro/TeamNitro";
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
        <title>Meet the Team - Nitro League</title>
        <meta
          name="description"
          content="Meet the team behind the world’s best racing Metaverse, Nitro League. "
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Meet the Team - Nitro League" />
        <meta
          property="twitter:description"
          content="Meet the team behind the world’s best racing Metaverse, Nitro League. "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <TeamNitro />
      <PoweredBy />
    </>
  );
};
export default index;
