import Image from "next/image";
import styles from "./festival.module.scss";
import LogoWhite from "../../public/Images/festivalLogo.svg";
import Link from "next/link";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

const Festival = () => {
  return (
    <section className={styles.FestivalWrap}>
      <video autoPlay muted loop playsInline className={styles.garageBgVid}>
        <source
          src={awsAssetsFetcher("website-render-file-web", "mp4")}
          type="video/mp4"
        />
        <source
          src={awsAssetsFetcher("website-render-file-web", "webm")}
          type="video/webm"
        />
        Your browser does not support HTML5 video.
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.garageBgVidMobile}
      >
        <source
          src={awsAssetsFetcher("website-render-file-mobile", "mp4")}
          type="video/mp4"
        />
        <source
          src={awsAssetsFetcher("website-render-file-mobile", "webm")}
          type="video/webm"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className={styles.festivalContent}>
        <div className={styles.logo}>
          <Link passHref href="/">
            <a>
              <Image src={LogoWhite} alt="logo" />
            </a>
          </Link>
        </div>

        <div className={styles.bottomText}>
          <p>
            Strategize your win, earn rewards. Make your mark now and join the
            race!
          </p>
          <div className="apk-download-btn-wrappper">
            <a
              href={awsAssetsFetcher("NitroLeague_PROD_V2.0.4", "apk")}
              className="button button--style1 on-light-bg"
              id="downloadInsallations"
            >
              <span>
                <small>Download App</small>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Festival;
