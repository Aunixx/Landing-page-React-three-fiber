import Image from "next/image";
import styles from "./thankYou.module.scss";
import thankyouImg from "../../public/Images/thankyou.png";
import Reward, { useReward } from "react-rewards";
import { useEffect } from "react";
import PEBox from "../../public/Images/performance-part-box.svg";

const ThankYou = () => {
  const { reward: confettiReward, isAnimating } = useReward(
    "rewardId",
    "confetti"
  );
  const { reward: confettiReward2 } = useReward("rewardId2", "confetti");
  const { reward: confettiReward3 } = useReward("rewardId3", "confetti");
  const { reward: confettiReward4 } = useReward("rewardId4", "confetti");
  useEffect(() => {
    confettiReward();
    confettiReward2();
    confettiReward3();
    confettiReward4();
  }, []);

  return (
    <>
      <section className={styles.thankYouWrap}>
        <div className={styles.content}>
          <h2>Congratulations!</h2>
          <p className={styles.details}>You have minted succesfully</p>
          <button
            onClick={() =>
              window.open(process.env.NEXT_PUBLIC_OPENSEA_URL, "_blank")
            }
          >
            VIEW ON OPENSEA
          </button>
        </div>
        <div className={styles.imgWrap}>
          <Image src={PEBox} alt="thankyou" />
        </div>
      </section>
      <span id="rewardId" className="reward"></span>
      <span id="rewardId2" className="reward2"></span>
      <span id="rewardId3" className="reward3"></span>
      <span id="rewardId4" className="reward4"></span>
    </>
  );
};
export default ThankYou;
