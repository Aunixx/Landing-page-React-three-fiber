import { FC } from "react";
import styles from "./buyLand.module.scss";
import { buyLandProps } from "./types";

const BuyLand: FC<buyLandProps> = ({ page, title, description }) => {
  return (
    <section
      className={` ${styles.buyLandSection} ${styles[`${page}Section`]}`}
    >
      <div className="nitro-container">
        <div className="col-md-5">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="btn disabled">Coming Soon</div>
        </div>
      </div>
    </section>
  );
};
export default BuyLand;
