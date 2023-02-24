import { FC } from "react";
import FAQs from "../../components/FAQ/FAQ";
import Head from "next/head";

const index: FC = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FAQs- Nitro League</title>
        <meta
          name="description"
          content=" Got a question about Nitro League? We have all the answers and more, in our FAQs. "
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nitroleague.com/" />
        <meta property="twitter:title" content="FAQs- Nitro League" />
        <meta
          property="twitter:description"
          content=" Got a question about Nitro League? We have all the answers and more, in our FAQs. "
        />
        <meta
          property="twitter:image"
          content="https://nitroleague.com/og.png"
        />
      </Head>
      <FAQs />
    </>
  );
};

export default index;
