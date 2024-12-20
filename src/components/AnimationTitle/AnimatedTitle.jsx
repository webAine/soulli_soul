import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimatedTitle.module.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ children, containerClass }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.from(titleRef.current, {
      x: 150,
      y: 100,
      scale: 1.2,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
      scrollTrigger: {
        trigger: titleRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 200",
      },
    });
  }, []);

  return (
    <h2
      ref={titleRef}
      className={`${styles.animateTitle} ${containerClass || ""}`.trim()}
    >
      {children}
    </h2>
  );
};

export default AnimatedTitle;
