import { FC } from "react";
import Image from "next/image";
import planet from "../../public/Images/planet.png";

import styles from "./nitroPrime.module.scss";
const NitroPrime: FC = () => {
  return (
    <section className={styles.nitroPrimeSection}>
      <div className="nitro-container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h2>Nitro Prime</h2>
            <p>
              Nitro Prime is a hyper-realistic, 3D, game paradise. Famous for
              the intergalactic hyper-racing event, Nitro League. You will find;
              islands, cities, vast landscapes, each one unique and diverse.
            </p>
          </div>
          <div className="col-md-5 offset-md-1">
            <Image src={planet} alt="planet" layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NitroPrime;
