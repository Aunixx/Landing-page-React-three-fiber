import Image from "next/image";
import styles from "./landUtilization.module.scss";
import landUtilization from "../../public/Images/landUtilization.png";

const LandUtilization = () => {
  return (
    <section className={styles.landUtilizationWrapper}>
      <div className="nitro-container">
        <h3>Land Utilization</h3>
        <Image src={landUtilization} alt="landUtilization" />
      </div>
    </section>
  );
};
export default LandUtilization;
