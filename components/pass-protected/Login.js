// /components/login.js

import { useState } from "react";
import Cookies from "universal-cookie";
import consts from "./../../consts";
import styles from "../pass-protected/Login.module.scss";
import logo from "../../public/Images/alphaLogo.svg";
import Image from "next/image";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const checkPass = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (process.env.NEXT_PUBLIC_PROTECTED_PASSWORD === password) {
      setPasswordMatch(true);
      setSubmitted(true);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className={styles.passWrap}>
      <form className={styles.form}>
        <div className={styles.content}>
          <Image src={logo} alt="logo" />
          <p className={styles.text}>
            Get in the action with Nitro League Arcade, a Play to Own,
            motorsport management racing game. Compete with other players and
            race for glory. Get on the leaderboards and get into the nitro
            league!
          </p>
        </div>
        <div className={styles.inputWrap}>
          {!passwordMatch && (
            <div>
              <label className="block">
                <input
                  type="password"
                  className="form-input block w-full bg-gray-50"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </label>

              <button
                type="submit"
                className="mt-3 bg-green-400 text-white p-2 font-bold rounded hover:bg-green-600"
                onClick={(e) => checkPass(e)}
              >
                Enter
              </button>
            </div>
          )}

          {passwordMatch && (
            <div className="apk-download-btn-wrappper">
              <a
                href={awsAssetsFetcher("NitroLeague_PROD_V2.0.4", "apk")}
                className="button button--style1 on-light-bg"
                id="downloadInsallations"
                // style={{ pointerEvents: "none", opacity: "0.3" }}
              >
                <span>
                  <small>Download APP</small>
                </span>
              </a>
            </div>
          )}
          {!passwordMatch && password?.trim("")?.length && submitted ? (
            <span className={styles.wrong}>Password Incorrect !</span>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
