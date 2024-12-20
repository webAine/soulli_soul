import React, { useEffect, useRef } from "react";
import styles from "./Gallery.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const gridContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const size = Math.max(window.innerWidth, window.innerHeight);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: gridContainerRef.current,
          start: "top top",
          end: () => window.innerHeight * 4,
          scrub: true,
          pin: `.${styles.grid}`,
          anticipatePin: 1,
        },
      })
      .set(`.${styles.gridBlock}:not(.${styles.centerBlock})`, { autoAlpha: 0 })
      .to(
        `.${styles.gridBlock}:not(.${styles.centerBlock})`,
        { duration: 0.1, autoAlpha: 1 },
        0.001
      )
      .from(`.${styles.gridLayer}`, {
        scale: 3.3333,
        ease: "none",
      });

    gsap.set(`.${styles.gridBlock}`, {
      backgroundImage: (i) => `url(https://picsum.photos/${size}?random=${i})`,
    });

    const bigImg = new Image();
    bigImg.addEventListener("load", function () {
      gsap.to(`.${styles.centerPiece} .${styles.gridBlock}`, {
        autoAlpha: 1,
        duration: 0.5,
      });
    });

    bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
  }, []);

  return (
    <section className={styles.gallery}>
      <div ref={gridContainerRef} className={styles.gridContainer}>
        <div className={styles.grid}>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
          <div className={`${styles.gridLayer} ${styles.centerPiece}`}>
            <div className={`${styles.gridBlock} ${styles.centerBlock}`}></div>
          </div>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}>
              <a
                href="https://greensock.com"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
          <div className={styles.gridLayer}>
            <div className={styles.gridBlock}></div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => navigate("/gallery/twitch_panels")}>
          Twitch Panels
        </button>
        <button onClick={() => navigate("/gallery/vtuber_models")}>
          Vtuber Models
        </button>
        <button onClick={() => navigate("/gallery/twitch_emotes")}>
          Twitch Emotes
        </button>
        <button onClick={() => navigate("/gallery/png_tuber")}>
          PNG Tuber
        </button>
      </div>
    </section>
  );
};

export default Gallery;
