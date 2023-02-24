import { FC } from "react";
import TermsConditions from "../../components/Terms&Conditions/Terms&Conditions";
import Head from "next/head";

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
        <title>Terms & Conditions</title>
        <meta
          name="description"
          content="Full terms and conditions for being part of the racing Metaverse, Nitro League."
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="Terms & Conditions" />
        <meta
          property="twitter:description"
          content="Full terms and conditions for being part of the racing Metaverse, Nitro League."
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <TermsConditions />
    </>
  );
};
export default index;
