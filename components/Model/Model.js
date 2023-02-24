import "@google/model-viewer";
import { useRef, useEffect } from "react";
// import styles from "./model.module.scss";

const Model = () => {
  // const Modelref = useRef(null);
  const earthElement = useRef(null);
  let rotation = 0;

  useEffect(() => {
    const animate = () => {
      rotation += 0.1;
      // earthElement.current.style.transform = `rotate(${rotation}deg) translate(100px, 0)`;
      earthElement.current.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // EARTH SUN ROTATION

  // const sunElement = useRef(null);
  // const earthElement = useRef(null);
  // let sunRotation = 0;
  // let earthRotation = 0;

  // useEffect(() => {
  //   const animate = () => {
  //     sunRotation += 0.1;
  //     earthRotation += 0.1;
  //     // sunElement.current.style.transform = `rotate(${sunRotation}deg)`;
  //     sunElement.current.style.transform = `rotate3d(1, 1, 1, ${rotation}deg)`;
  //     earthElement.current.style.transform = `rotate(${earthRotation}deg) translate(100px, 0)`;
  //     requestAnimationFrame(animate);
  //   };
  //   animate();
  // }, []);
  return (
    <div id="card">
      <model-viewer
        ref={earthElement}
        // src="/export.glb"
        // skybox-image="/reichstag_1_4k.hdr"
        src="/Globe.glb"
        shadow-intensity="10"
        shadow-softness="10"
        //   auto-rotate
        ar
        // ar-placement="wall"
        touch-action="pan-y"
        camera-controls
        disable-zoom
        style={{ width: "450px", height: "450px" }}
      />
    </div>
    // <div className={styles.solarSystem}>
    //   <div ref={sunElement} className={styles.sun}>
    //     <p>sun</p>
    //   </div>
    //   <div ref={earthElement} className={styles.earth}>
    //     <p>earth</p>
    //   </div>
    // </div>
  );
};

export default Model;
