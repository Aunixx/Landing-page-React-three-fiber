import Link from "next/link";
import style from "./comingsoonlayout.module.scss";

export default function ComingSoonLayout({ name }) {
  return (
    <div className={style.comingSoonLayout}>
      <img src="./images/logo.svg" alt="logo" />
      <img src={`./images/${name}-n.png`} alt={name} className={style.icon} />
      <span className={style.lfg}>LFG</span>
      <span
        onClick={() =>
          window.location.assign(`https://discord.gg/nitroleague/${name}`)
        }
        className={style.link}
        rel="noopener noreferrer"
      >
        Click takes you to discord.gg/nitroleague/{name}
      </span>
    </div>
  );
}
