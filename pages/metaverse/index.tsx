// import Metaverse from "@components/Metaverse/Metaverse";
import Head from "next/head";
import NewMetaverse from "@components/NewMetaverse/NewMetavrse";

export default function MetaverseIndex() {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
        />
        <title>Metaverse</title>
      </Head>

      <NewMetaverse />
      {/* <Metaverse /> */}
    </>
  );
}
