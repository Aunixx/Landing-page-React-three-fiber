import React, { useState } from "react";
import Head from "next/head";
import HeaderSection from "../../components/PasswordHero/HeaderSection";
import Usability from "../../components/Usability/Usability";
import Style from "../download-apk/download-apk.module.scss";

const DownloadApk = ({}) => {
  const [Password, SetPassword] = useState("");
  const [IsCorrectCred, SetIsCorrectCred] = useState(true);

  const PasswordSetter = (e: string) => {
    SetPassword(e);
  };

  const checkCred = (e: any) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_NEXTAUTH_PASSWORD);
    if (Password === process.env.NEXT_PUBLIC_NEXTAUTH_PASSWORD) {
      SetIsCorrectCred(false);
    } else {
      console.log("Incorrect Password");
    }
  };

  return (
    <>
      {IsCorrectCred ? (
        <div className={`${Style.formparent}`}>
          <form className={`${Style.FormDownload}`} onSubmit={checkCred}>
            <h3>Enter Password</h3>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => PasswordSetter(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <input
                className={`${Style.Formbtn}`}
                type="submit"
                value="submit"
              />
            </div>
          </form>
        </div>
      ) : (
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
            <meta
              property="og:title"
              content="Earn rewards in the Nitro League"
            />
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

          <HeaderSection />
          <Usability />
        </>
      )}
    </>
  );
};

export default DownloadApk;
