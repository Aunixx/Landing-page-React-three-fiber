import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.scss";
import { useRouter } from "next/router";
import Custom404 from "../../pages/404";
import SnowFall from "../snowfall/SnowFall";
import Image from "next/image";

import Link from "next/link";
import Metaverse from "../Metaverse/Metaverse";
import NewMetaverse from "../NewMetaverse/NewMetavrse";
import { ComingSoon } from "../ComingSoon/comingSoon";
import { redirect } from "next/dist/server/api-utils";
import Zavos from "../../pages/zavos";
import Xerostia from "../../pages/xerostia";
import Khenon from "../../pages/khenon";
import Hitoshika from "../../pages/hitoshika";
import Evalon from "../../pages/evalon";
import Azraq from "../../pages/azraq";
import Celeros from "../../pages/celeros";

const Layout = (props) => {
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(true);

  const [isOpen, setIsOpen] = useState("");
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  if (router.pathname === "/download-apk") {
    return (
      <>
        <Header />
        <Custom404 />,
        <Footer />
      </>
    );
  }
  if (router.pathname === "/xerostia") {
    return (
      <>
        <Xerostia />
      </>
    );
  }

  switch (router.pathname) {
    case "/zavos":
      return <Zavos />;
    case "/xerostia":
      return <Xerostia />;
    case "/khenon":
      return <Khenon />;
    case "/hitoshika":
      return <Hitoshika />;
    case "/evalon":
      return <Evalon />;
    case "/azraq":
      return <Azraq />;
    case "/celeros":
      return <Celeros />;
  }
  setTimeout(() => {
    setShowComponent(false);
  }, 2000);

  return showComponent ? (
    <>
      {router.pathname !== "/play" &&
        router.pathname !== "/selection" &&
        router.pathname !== "/docs" &&
        router.pathname !== "/phweb3festival" &&
        router.pathname !== "/phweb3festival-form" &&
        router.pathname !== "/raceDetail" &&
        !router.pathname.startsWith("/profile") &&
        !router.pathname.startsWith("/raceDetail") &&
        !router.pathname.startsWith("/selectCar") &&
        !router.pathname.startsWith("/play") && (
          <>
            <Header
              isOpen={isOpen}
              coinsData={props.coinsData}
              showNavbar={setIsOpen}
              toggleNavbarHandler={toggleHandler}
            />

            <main className={styles.main} onClick={() => setIsOpen(false)}>
              <SnowFall />
              {props.children}
            </main>

            <Footer onClick={() => setIsOpen(false)} />
          </>
        )}

      {(router.pathname === "/play" ||
        router.pathname === "/docs" ||
        router.pathname === "/phweb3festival" ||
        router.pathname === "/phweb3festival-form" ||
        router.pathname === "/selection" ||
        router.pathname === "/raceDetail" ||
        router.pathname.startsWith("/play") ||
        router.pathname.startsWith("/raceDetail") ||
        router.pathname.startsWith("/selectCar") ||
        router.pathname.startsWith("/profile")) &&
        props.children}
    </>
  ) : (
    <ComingSoon />
  );
};

export default Layout;
