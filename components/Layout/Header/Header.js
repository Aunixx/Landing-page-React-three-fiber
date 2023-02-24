import Image from "next/image";
import React, {
  useLayoutEffect,
  useCallback,
  useState,
  useEffect,
} from "react";
import Link from "next/link";
import { BsArrowUpShort } from "react-icons/bs";
import logo from "../../../public/Images/winterLogo.svg";
import statsLogo from "../../../public/Images/statsLogo.svg";
import winterMobile from "../../../public/Images/winterFestMobile.png";

import { gsap } from "gsap";
import { useRouter } from "next/router";
import { Dropdown } from "react-bootstrap";
import { awsAssetsFetcher } from "../../../utils/awsAssetsFetcher";
import { MdClose } from "react-icons/md";

// import { Modaal } from "../../modal/modaal";

const Header = ({
  isOpen,
  coinsData = [],
  showNavbar,
  toggleNavbarHandler,
}) => {
  /* Creating a state variable called authModalOpen and a function called setAuthModalOpen. */
  const [authModalOpen, setAuthModalOpen] = useState(null);
  // Scroll to top
  const [visible, setVisible] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const visibleHandler = () => {
    setIsShown(!isShown);
  };
  /**
   * If the user has scrolled more than 300px, set the visibility of the button to true. If the user has
   * scrolled less than 300px, set the visibility of the button to false
   */
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, [""]);

  // API data
  let priceChange =
    coinsData?.length && coinsData[0]?.price_change_percentage_24h?.toFixed(1);

  // animation for API
  useLayoutEffect(() => {
    const statsRotatorTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
    });

    statsRotatorTimeline
      .to(".stats-desktop-rotator .stats-rotator-inner-wrapper", {
        // duration: 2,
        // y: -20,
        // delay: 1,
        ease: "none",
      })
      .to(".stats-desktop-rotator .stats-rotator-inner-wrapper", {
        duration: 2,
        y: -30,
        delay: 1,
        ease: "none",
      })
      .to(".stats-desktop-rotator .stats-rotator-inner-wrapper", {
        duration: 2,
        y: -60,
        delay: 1,
        ease: "none",
      });
  }, []);

  // Onscroll Navbar hide or show
  const [oldValue, setOldValue] = useState(50);
  // const [addClass, setAddClass] = useState(50);
  // let oldValue = 100;
  // let newValue = 0;

  const [colorChange, setColorChange] = useState(false);
  const [backChange, setBackChange] = useState(false);

  const navBarColorChange = useCallback(() => {
    const scrollY = window.scrollY;
    if (oldValue + 50 < scrollY) {
      setColorChange(true);
      setOldValue(scrollY);
      setBackChange(false);
    } else if (oldValue > scrollY + 50) {
      setColorChange(false);
      setOldValue(scrollY);
      setBackChange(true);
    } else if (scrollY < 49) {
      setBackChange(false);
    }
  }, [oldValue]);

  // const [ScrollUp, setScrollUp] = useState(false);
  // const navBarScrollUp = useCallback(() => {
  //   const scrollY = window.scrollY;
  //   if (oldValue + 50 < scrollY) {
  //     setColorChange(true);
  //     setOldValue(scrollY);
  //   } else if (oldValue > scrollY + 50) {
  //     setColorChange(false);
  //     setOldValue(scrollY);
  //   }
  // }, [oldValue]);

  const router = useRouter();

  // useEffect(() => {
  //   window.addEventListener("scroll", navBarColorChange);
  //   return () => window.removeEventListener("scroll", navBarColorChange);
  // }, [navBarColorChange]);

  const getClassName = () => {
    let classes = "";

    if (colorChange) {
      if (isOpen) {
        classes = "colorChange show collapse  navbar-collapse navbar-listing";
      } else {
        classes = "colorChange collapse navbar-collapse navbar-listing";
      }
    } else {
      if (isOpen) {
        classes = "collapse show navbar-collapse navbar-listing";
      } else {
        classes = "collapse navbar-collapse navbar-listing";
      }
    }
    return classes;
  };

  const getBackClassName = () => {
    let classes = "";

    if (backChange) {
      if (isOpen) {
        classes = "back-changed show inr-nitro-wrap dark-blue-navbar";
      } else {
        classes = "back-changed inr-nitro-wrap dark-blue-navbar";
      }
    } else {
      if (isOpen) {
        classes = "inr-nitro-wrap show dark-blue-navbar";
      } else {
        classes = "inr-nitro-wrap dark-blue-navbar";
      }
    }
    return classes;
  };

  // const getBackClassName = () => {
  //   let classes = "";
  //   if (backChange) {
  //     if (isOpen) {
  //       classes = "";
  //     } else {
  //       classes = "back-changed ";
  //     }
  //     return classes;
  //   }
  // };
  // dark or light navbar based on page we are on

  const [darkNav, setDarkNav] = useState("");

  useEffect(() => {
    darkNaveHandler();
  }, [router.pathname]);

  const darkNaveHandler = () => {
    const pathName = router.pathname;
    if (
      [
        "/marketplace",
        "/aion-spirit",
        "/team",
        "/terms&conditions",
        "/faqs",
        "/combustionengine",
        "/electricmotor",
        "/fusionengine",
        "/apollo-blink",
        "/bellona-eternity",
        "/chaos-void",
        "/chaos-void-polka-lokr",
        "/horus-quake",
        "/mahees-night",
        "/sobek-ward",
        "/road-ripper",
        "/horus-quake-dafi",
        "/horus-quake-polinate",
        "/chaos-void-polygen",
        "/404",
      ].includes(pathName)
    ) {
      setDarkNav("darkNav");
    } else {
      setDarkNav("");
    }
  };

  return (
    <div className="allWrap">
      <div className={` winterFestWrap ${isShown ? "hidden" : ""}`}>
        <Link href="https://www.premint.xyz/winter-fest-022/">
          <>
            <a
              href="https://www.premint.xyz/winter-fest-022/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="winterDesktop">
                <Image
                  src={awsAssetsFetcher("winterFest")}
                  alt="winter"
                  width={100}
                  height={100}
                />
              </div>
              <div className="winterMobile">
                <Image
                  src={winterMobile}
                  alt="winter"
                  width={100}
                  height={100}
                />
              </div>
            </a>
            <MdClose onClick={visibleHandler} />
          </>
        </Link>
      </div>
      <header className={darkNav}>
        <nav className="navbar navbar-light home-nav">
          <div className="nitro-container header-container">
            <div className={getBackClassName()}>
              <div className="mobile-navbar">
                <div className="logo-branding">
                  <div className="navbar-brand">
                    <Link href="/">
                      <span>
                        <Image
                          // src={awsAssetsFetcher("logo", "svg")}
                          src={logo}
                          alt="logo"
                          width={80}
                          height={80}
                        />
                      </span>
                    </Link>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleNavbarHandler}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="nav-buttons btn btn-market">
                  {/* <Link passHref href="/marketplace" className="btn btn-market">
                    <a
                      className={
                        router.pathname == "/MarketPlace" ? "active" : ""
                      }
                    >
                      Marketplacessss
                    </a>
                  </Link> */}
                  <Link
                    href="https://arcade.nitroleague.com"
                    className="btn btn-market"
                  >
                    <a target="_blank">Play</a>
                  </Link>
                </div>
              </div>
              <div className={getClassName()} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nitro-navbar">
                  {/* <li className="nav-item">
                    <Link className="nav-link reset-style" href="/racing">
                      <a
                        onClick={() => showNavbar(false)}
                        className={router.pathname == "/racing" ? "active" : ""}
                      >
                        Racing
                      </a>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link reset-style" href="/land">
                      <a
                        onClick={() => showNavbar(false)}
                        className={router.pathname == "/land" ? "active" : ""}
                      >
                        Land
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link reset-style" href="/lifestyle">
                      <a
                        onClick={() => showNavbar(false)}
                        className={
                          router.pathname == "/lifestyle" ? "active" : ""
                        }
                      >
                        Lifestyle
                      </a>
                    </Link>
                  </li> */}

                  <li className="nav-item">
                    <Link className="nav-link reset-style" href="/roadmap">
                      <a
                        onClick={() => showNavbar(false)}
                        className={
                          router.pathname == "/roadmap" ? "active" : ""
                        }
                      >
                        Roadmap
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link reset-style"
                      href="https://docs.nitroleague.com"
                    >
                      <a
                        onClick={() => showNavbar(false)}
                        href="https://docs.nitroleague.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Docs
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link reset-style" href="/marketplace">
                      <span>
                        <a
                          onClick={() => showNavbar(false)}
                          className={
                            router.pathname == "/marketplace" ? "active" : ""
                          }
                        >
                          nitro cars
                        </a>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link reset-style"
                      href="https://nitro.superstaking.io/"
                    >
                      <a
                        onClick={() => showNavbar(false)}
                        href="https://nitro.superstaking.io/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        staking
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link reset-style"
                      href="/download-app.html"
                    >
                      <span>
                        <a
                          onClick={() => showNavbar(false)}
                          className={
                            router.pathname == "/download-app.html"
                              ? "active"
                              : ""
                          }
                        >
                          Download
                        </a>
                        <span className="hot">Hot</span>
                      </span>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link reset-style" href="/astro-carfs">
                      <a
                        onClick={() => showNavbar(false)}
                        className={
                          router.pathname == "/astro-cars" ? "active" : ""
                        }
                      >
                        Mint Astro Cars
                      </a>
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link className="nav-link reset-style" href="">
                      <a
                        onClick={() => {
                          showNavbar(false);
                          !storageService.getToken()
                            ? setAuthModalOpen("authOptions")
                            : Router.push("/play");
                        }}
                        className={router.pathname == "/play" ? "active" : ""}
                      >
                        Play
                      </a>
                    </Link>
                  </li> */}
                </ul>
                <div className="d-flex position-relative nitro-stats-dd-wrapper">
                  {/* <div className="nitro-stats-logo">
                    <Image
                      src={statsLogo}
                      alt="Nitro rounded logo"
                      layout="responsive"
                    />
                  </div> */}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <div className="stats-desktop-rotator">
                        <div className="nitro-stats-upper-text">
                          NITRO
                          <span> Nitro League</span>
                        </div>
                        <div className="stats-rotator-wrapper">
                          <div className="stats-rotator-inner-wrapper">
                            <div className="stats-rotator stats-rotator-1">
                              <strong className="dark-value">
                                {coinsData?.length &&
                                  coinsData[0]?.current_price}
                                : &nbsp;
                              </strong>
                              <span
                                className={priceChange < 0 ? "red" : "green"}
                              >
                                {priceChange} %
                              </span>
                            </div>
                            <div className="stats-rotator stats-rotator-2">
                              <strong>Mkt. Cap: &nbsp;</strong>
                              <span className="dark-value">
                                ${coinsData?.length && coinsData[0]?.market_cap}
                              </span>
                            </div>
                            <div className="stats-rotator stats-rotator-3">
                              <strong>24H Vol: &nbsp; </strong>
                              <span className="dark-value">
                                $
                                {coinsData?.length &&
                                  coinsData[0]?.total_volume}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          href="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x695FC8B80F344411F34bDbCb4E621aA69AdA384b"
                          rel="noreferrer"
                          passHref
                        >
                          <Dropdown.Item target="_blank">
                            Buy Via Quickswap
                          </Dropdown.Item>
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="dropdown-item"
                          href="https://app.uniswap.org/#/swap?use=v2&outputCurrency=0x0335a7610d817aeca1bebbefbd392ecc2ed587b8&inputCurrency=ETH&chain=mainnet"
                          rel="noreferrer"
                          passHref
                        >
                          <Dropdown.Item target="_blank">
                            Buy Via Uniswap
                          </Dropdown.Item>
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                  <ul className="side-navbar">
                    <li className="side-navbar-item header-cta">
                      <Link
                        href="https://arcade.nitroleague.com"
                        className="btn btn-market ArcadePlay"
                      >
                        <a target="_blank">Play</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div
          style={{ display: visible ? "inline" : "none" }}
          onClick={scrollToTop}
          className="circle"
        >
          <span>
            <BsArrowUpShort />
          </span>
        </div>
      </header>
      <div className="nitro-stats-topbar">
        <div className="nitro-stats-left d-flex align-items-center">
          {/* <div className="nitro-stats-logo">
            <Image
              src={statsLogo}
              alt="Nitro rounded logo"
              layout="responsive"
            />
          </div> */}
          <div className="nitro-stats-upper-text">
            NITRO
            <span>Nitro League</span>
          </div>
        </div>
        <div className="stats-desktop-rotator">
          <div className="stats-rotator-wrapper">
            <div className="stats-rotator-inner-wrapper">
              <div className="stats-rotator stats-rotator-1">
                <strong>
                  {coinsData?.length && coinsData[0].current_price}:{" "}
                </strong>
                <span className={priceChange < 0 ? "red" : "green"}>
                  {priceChange}
                </span>
              </div>
              <div className="stats-rotator stats-rotator-2">
                <strong>Mkt. Cap:</strong>
                <span>${coinsData?.length && coinsData[0].market_cap}</span>
              </div>
              <div className="stats-rotator stats-rotator-3">
                <strong>24H Vol:</strong>
                <span>${coinsData?.length && coinsData[0].total_volume}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
