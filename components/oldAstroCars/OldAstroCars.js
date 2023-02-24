/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./oldAstroCars.module.scss";
import astro from "../../public/Images/astro-cars.png";
import peBg from "../../public/Images/performance-part-bg.svg";
import peBox from "../../public/Images/performance-part-box.svg";
import etherium from "../../public/Images/eth-logo.svg";
import { BigNumber, ethers } from "ethers";
import { contract } from "../../constant/contracts";
import { generativeCars_abi } from "../../constant/generativeCars_abi";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import alert from "../../public/Images/alert-circle.svg";
import { set } from "lodash";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";

const OldAstroCars = () => {
  // const [mintingpaused, setMintingPused] = useState(true);
  // const [mintingAmount, setMinitingAmount] = useState(1);
  // const [pricePermint, setPricePerMint] = useState(null);
  // const [totalSup, setTotalSup] = useState(null);
  // const [mintedItems, setMintedItems] = useState(null);
  // const [currentMinting, setCurrentMinting] = useState(null);
  // const [totalPrice, setTotalPrice] = useState(null);
  // const [downloadMetaMaskButton, setDownloadMetaMaskButton] = useState(false);
  // const [connectWallet, setConnectWallet] = useState(false);
  // const [whiteListed, setWhiteListed] = useState(false);
  // const [humanReadablePricePermint, setHumanReadablePricePerMint] =
  //   useState(null);
  // const router = useRouter();
  // const [humanReadAbleMintableQuantity, setHumanReadAbleMintableQuantity] =
  //   useState(null);
  // const [loading, setLoading] = useState(false);

  // const signer = useRef(null);

  // const [totalCount, setTotalCount] = useState(3);

  // const generativeCarsContract = useRef(null);

  // const checkIfPaused = async () => {
  //   try {
  //     let result = await generativeCarsContract.current.mintingPaused();
  //     return result;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const checkIfWhiteListed = async (address) => {
  //   try {
  //     let result = await generativeCarsContract.current.getMaxMintsAllowed(
  //       address
  //     );
  //     return ethers.utils.formatUnits(result, 0);
  //   } catch (e) {
  //     return 0;
  //     console.log(e);
  //   }
  // };

  // const getListIndex = async (signer) => {
  //   try {
  //     let currentList = await generativeCarsContract.current.currentList();
  //     const getCurrentMint = await getCurrentMinting(currentList);
  //     setCurrentMinting(getCurrentMint[0]);
  //     let remainingMints = await getMintableQuantity(currentList, signer);
  //     return currentList;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const getTotalSupply = async () => {
  //   try {
  //     let total = await generativeCarsContract.current.totalSupply();
  //     setTotalSup(ethers.utils.formatUnits(total, 0));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const getCurrentMinting = async (currentList) => {
  //   try {
  //     let currentListName = await generativeCarsContract.current.allowlists(
  //       currentList
  //     );
  //     return currentListName;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const getTokenCount = async () => {
  //   try {
  //     let tokenCount = await generativeCarsContract.current.tokenCount();
  //     setMintedItems(ethers.utils.formatUnits(tokenCount, 0));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const getMintableQuantity = async (list, signer) => {
  //   try {
  //     let mintableQuantity =
  //       await generativeCarsContract.current.getRemainingMints(list, signer);
  //     setHumanReadAbleMintableQuantity(
  //       parseFloat(ethers.utils.formatUnits(mintableQuantity, 0))
  //     );
  //     return parseFloat(ethers.utils.formatUnits(mintableQuantity, 0));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const getPricePerMint = async () => {
  //   try {
  //     let pricePermint = await generativeCarsContract.current.getPricePerMint();
  //     setPricePerMint(pricePermint);
  //     setHumanReadablePricePerMint(
  //       parseFloat(ethers.utils.formatUnits(pricePermint, 18))
  //     );
  //     return pricePermint;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // async function connect() {
  //   if (window.ethereum) {
  //     await window.ethereum.request({ method: "eth_requestAccounts" });
  //     window.web3 = new Web3(window.ethereum);
  //     const account = web3.eth.accounts;
  //     //Get the current MetaMask selected/active wallet
  //     const walletAddress = account.givenProvider.selectedAddress;
  //     console.log(`Wallet: ${walletAddress}`);
  //   } else {
  //     console.log("No wallet");
  //   }
  // }
  // const mintCars = async () => {
  //   const getWhiteListed = await getListIndex(window?.ethereum.selectedAddress);
  //   if (window.ethereum.selectedAddress != null) {
  //     setLoading(true);
  //     // let paused = await checkIfPaused();
  //     let whiteListed = await getMintableQuantity(
  //       getWhiteListed,
  //       window.ethereum.selectedAddress
  //     );
  //     setTotalCount(whiteListed);
  //     if (whiteListed != 0 && whiteListed != "undefined") {
  //       setConnectWallet(false);
  //       setWhiteListed(true);
  //       // setMintingPused(paused);
  //       // if (!paused) {
  //       //   let list = await getListIndex();
  //       //   let mintableQuantity = await getMintableQuantity(parseInt(list));
  //       //   setTotalCount(mintableQuantity);
  //       //   setLoading(false);
  //       // }
  //     }
  //     setLoading(false);
  //   } else {
  //     window.ethereum.enable();
  //   }
  // };
  // const checkConnect = async () => {};

  // useEffect(() => {
  //   if (typeof window.ethereum !== "undefined") {
  //     window.ethereum.on("chainChanged", () => {
  //       window.location.reload();
  //     });
  //     window.ethereum.on("accountsChanged", () => {
  //       window.location.reload();
  //     });
  //     if (window.ethereum.selectedAddress != null) {
  //       debugger;
  //       window.ethereum.on("chainChanged", () => {
  //         window.location.reload();
  //       });
  //       window.ethereum.on("accountsChanged", () => {
  //         window.location.reload();
  //       });
  //       const provider = new ethers.providers.Web3Provider(window?.ethereum);
  //       signer.current = provider.getSigner();
  //       generativeCarsContract.current = new ethers.Contract(
  //         contract.generativeCars.address,
  //         generativeCars_abi,
  //         signer.current
  //       );
  //       mintCars();
  //       setConnectWallet(false);
  //       // getPricePerMint();
  //     } else {
  //       debugger;
  //       const RPC = process.env.NEXT_PUBLIC_RPC_URL;
  //       const provider = new ethers.providers.JsonRpcProvider(RPC);
  //       generativeCarsContract.current = new ethers.Contract(
  //         contract.generativeCars.address,
  //         generativeCars_abi,
  //         provider
  //       );
  //       mintCars();
  //       setConnectWallet(true);

  //       window.ethereum.enable();
  //       window.ethereum.on("chainChanged", () => {
  //         window.location.reload();
  //       });
  //       window.ethereum.on("accountsChanged", () => {
  //         window.location.reload();
  //       });
  //     }
  //   } else {
  //     const RPC = process.env.NEXT_PUBLIC_RPC_URL;
  //     const provider = new ethers.providers.JsonRpcProvider(RPC);
  //     generativeCarsContract.current = new ethers.Contract(
  //       contract.generativeCars.address,
  //       generativeCars_abi,
  //       provider
  //     );
  //     // getTotalSupply();
  //     // getTokenCount();
  //     // getCurrentMinting();
  //     mintCars();
  //     setDownloadMetaMaskButton(true);
  //     setConnectWallet(false);

  //     return;
  //   }
  // }, [typeof ethereum]);
  return (
    <section className={styles.astroCarsWrapper}>
      <div className={styles.bgWrap}></div>
      <div className={styles.carWrap}>
        <Image src={peBox} alt="cars" />
      </div>
      <div className={`${styles.container} nitro-container`}>
        <div className={styles.contentWrap}>
          <div className={styles.content}>
            <h2>Performance Essentials</h2>
            <p>
              our performance essentials are out of stock. <br /> for lucky free
              minters
            </p>

            <p className={styles.reveal}>mystery reveal coming soon...</p>
            {/* <div className={styles.mintingDetails}>
              {mintedItems && (
                <span className={styles.mintingItem}>
                  <p>Total mints</p>
                  <span className={styles.details}>
                    {mintedItems != null && mintedItems}/
                    {totalSup != null && totalSup}
                  </span>
                </span>
              )}
              {currentMinting && (
                <span className={styles.mintingItem}>
                  <p>Current Mint</p>
                  <span className={styles.details}>
                    {currentMinting != null && currentMinting}
                  </span>
                </span>
              )}
            </div> */}
            {/* {loading && (
              <Spinner
                className="text-light"
                animation="border"
                role="status"
              />
            )}
            {true ? (
              true ? (
                true ? (
                  !loading && (
                    <>
                      <div className={styles.inputWrap}>
                        <button
                          onClick={(e) =>
                            setMinitingAmount(
                              mintingAmount > 0 ? mintingAmount - 1 : 0
                            )
                          }
                          disabled={mintingAmount === 0}
                        >
                          -
                        </button>
                        <span className={styles.selectedAmount}>
                          {mintingAmount < totalCount
                            ? mintingAmount
                            : totalCount}
                        </span>
                        <button
                          disabled={mintingAmount === totalCount}
                          onClick={(e) =>
                            setMinitingAmount(
                              mintingAmount < totalCount
                                ? mintingAmount + 1
                                : totalCount
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      {pricePermint && (
                        <div className={styles.etheriumWrap}>
                          <Image src={etherium} alt="ethereummmmm" priority />
                          <p className={styles.quantity}>
                            {parseFloat(
                              ethers &&
                                ethers.utils.formatUnits(
                                  pricePermint.mul(String(mintingAmount))
                                ),
                              18
                            )}{" "}
                            eth
                          </p>
                        </div>
                      )}
                      <button
                        className={styles.priceBtn}
                        onClick={startMinting}
                        disabled={true}
                      >
                        Mint
                      </button>
                      <div className={styles.alertMessage}>
                        <Image src={alert} alt="alert" priority />
                        <p className={styles.text}>
                          Sorry, we’ve run out of inventory
                        </p>
                      </div>
                      {mintingAmount === 0 && totalCount > 0 && (
                        <div className={styles.alertMessage}>
                          <Image src={alert} alt="alert" priority />
                          <p className={styles.text}>
                            Select amount to purchase
                          </p>
                        </div>
                      )}
                    </>
                  )
                ) : (
                  !loading && (
                    <div className={styles.alertMessage}>
                      <Image src={alert} alt="alert" priority />
                      <p className={styles.text}>
                        You are not part of the current whitelist or you have
                        reached your mint limit. We will be glad to see you in
                        the next round.
                      </p>
                    </div>
                  )
                )
              ) : (
                <button
                  className={styles.priceBtn}
                  onClick={() => window.ethereum.enable()}
                >
                  Connect Wallet
                </button>
              )
            ) : (
              <button
                className={styles.priceBtn}
                onClick={() => window.open("https://metamask.io", "_blank")}
              >
                Add Metamask Extension
              </button>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldAstroCars;
