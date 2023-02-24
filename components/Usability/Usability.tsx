import React from "react";
import styles from "../Usability/Usability.module.scss";

function Usability() {
  return (
    <>
      {" "}
      <section className={styles.UsabilitySec}>
        <div className={`${styles.UsabilityContainer} nitro-container py-5`}>
          <div className="row align-items-center">
            <div className="col-md-12">
              <h3>Usability testing has 3 parts!</h3>
            </div>
          </div>
          <div className="row align-items-center pt-5">
            <div className="col-md-12">
              <ol
                className={`{ ${styles.stepsList} styled-list-1 d-flex justify-content-between`}
              >
                <li>
                  <h4>Get Set Up</h4>
                </li>
                <li>
                  <h4>Start testing</h4>
                </li>
                <li>
                  <h4>Give feedback</h4>
                </li>
              </ol>
            </div>
          </div>
          <div className={`${styles.UsabilityRow} row py-5 mb-5`}>
            <div className="col-lg-12 px-5">
              <p>
                if you can record yourselves testing or even have someone else
                take a video of yourself from your phone, with your initial
                reactions.
              </p>
              <p>
                Bonus: send us a video of yourself testing out Nitroleague and
                get featured on our social media.
              </p>
            </div>
          </div>
          <div className={`${styles.SetRow} row py-5`}>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Get set up</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul>
                <li>
                  Signup for a <a href="#">Virtua account</a>
                </li>
                <li>Download and Install the game on your android phone</li>
                <li>
                  Launch the game on your device and sign in using your Virtua
                  credentials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.UsabilitySec} ${styles.StartingSec}`}>
        <div className={`${styles.UsabilityContainer} nitro-container pt-5`}>
          <div className={`${styles.StarttingRow} row pb-5`}>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Start testing</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul>
                <li>Claim one free car, driver and fuel to last 10 races</li>
                <li>Enter an event you are eligible for</li>
                <li>Join a Race</li>
                <li>
                  Prepare for the race by selecting your car, car components,
                  driver and driver components
                </li>
                <li>Lock your components for the race</li>
                <li>View the simulation race</li>
                <li>View race results and claim race rewards when race ends</li>
                <li>Claim event rewards after the event ends</li>
                <li>Don’t forget to record your reactions! </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.UsabilitySec} ${styles.FeedbackSec}`}>
        <div className={`${styles.UsabilityContainer} nitro-container pb-5`}>
          <div className={`${styles.FeedbackRow} row py-5`}>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Give Feedback</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul>
                <li>Fill out the questionnaire form.</li>
                <li>
                  Send us your video of yourself playing the game to get
                  featured on social media
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Usability;
