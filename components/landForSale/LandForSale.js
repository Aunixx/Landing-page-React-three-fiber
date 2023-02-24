import Image from "next/image";
import styles from "./landSale.module.scss";
import deed1 from "/public/Images/deed1.svg";
import deed2 from "/public/Images/deed2.svg";
import deed3 from "/public/Images/deed3.svg";

const LandForSale = () => {
  return (
    <section className={styles.landForSaleWraper}>
      <div className={styles.detail}>
        <h3>Land for sale</h3>
        <p>
          You will be able to decide a coastal property, be up in the hills with
          a lake view, next to a building designed by one of our own reowned
          architects
        </p>
      </div>
      <div className={styles.saleImgWrap}>
        <div className={styles.saleImgs}>
          <Image src={deed1} alt="" />
          <div className={styles.imgDesc}>
            <p className={styles.item}>Land deed</p>
            <p className={styles.zone}>Nitro city - Zone name</p>
            <p className={styles.pricing}>Size: Small</p>
          </div>
        </div>
        <div className={styles.saleImgs}>
          <Image src={deed2} alt="" />
          <div className={styles.imgDesc}>
            <p className={styles.item}>Land deed</p>
            <p className={styles.zone}>Nitro city - Zone name</p>
            <p className={styles.pricing}>Size: Medium</p>
          </div>
        </div>
        <div className={styles.saleImgs}>
          <Image src={deed3} alt="" />
          <div className={styles.imgDesc}>
            <p className={styles.item}>Land deed</p>
            <p className={styles.zone}>Nitro city - Zone name</p>
            <p className={styles.pricing}>Size: Large</p>
          </div>
        </div>
      </div>
      <button className={styles.exploreBtn}>BUY Land</button>
    </section>
  );
};
export default LandForSale;
