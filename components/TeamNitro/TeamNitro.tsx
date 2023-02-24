/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import { NitroTeam } from "../../constant/NitroTeam";
import Image from "next/image";
import styles from "./teamNitro.module.scss";

const TeamNitro: FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className="nitro-container">
        <div className={styles.teamInerSection}>
          <div className={styles.teamHeading}>
            <div className={styles.headingWrap}>
              <span className={styles.border}></span>
              <h1>Team Nitro</h1>
            </div>
            <p>
              Nitro League is being built by an amazing team with
              world-className credentials
            </p>
          </div>
          <div className={styles.ourTeamContent}>
            <ul className={styles.teamListing}>
              {NitroTeam.map((team, index) => (
                <li key={index}>
                  <div className={styles.teamMember}>
                    <div className={styles.tmImage}>
                      <Image
                        src={team.Image}
                        alt="profile image"
                        layout="intrinsic"
                      />
                    </div>
                    <div className={styles.teamContent}>
                      <h3>{team.name}</h3>
                      <p className={styles.teamDesignation}>
                        {team.designation}
                      </p>
                      <p>{team.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamNitro;
