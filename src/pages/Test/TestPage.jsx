import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Test.css";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const animatedTitlesRef = useRef([]);
  const divAnimRef = useRef([]);
  const section3Ref = useRef(null);

  useEffect(() => {
    const timeline2 = gsap.timeline();

    animatedTitlesRef.current.forEach((title) => {
      timeline2.from(title, {
        x: 150,
        y: 0,
        scale: 1.2,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
        scrollTrigger: {
          trigger: title,
          scrub: true,
          start: "top center",
          end: "bottom 200",
        },
      });
    });

    const backAnim = gsap.timeline({
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    backAnim.from(divAnimRef.current, {
      opacity: 0.6,
      width: "0%",
      duration: 1.2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div>
      <div className="section1">
        section1
        <div className="animated-circle" id="animated-circle">
          Bienvenidos
        </div>
      </div>
      <div className="section2">
        <h1
          ref={(el) => (animatedTitlesRef.current[0] = el)}
          className="animated-title"
        >
          Scroll
        </h1>
      </div>
      <div ref={section3Ref} className="section3">
        <div ref={(el) => (divAnimRef.current[0] = el)} className="backAnim">
          <h1
            ref={(el) => (animatedTitlesRef.current[1] = el)}
            className="animated-title"
          >
            Haru
          </h1>
        </div>
      </div>
      <div className="section4">
        <h1
          ref={(el) => (animatedTitlesRef.current[2] = el)}
          className="animated-title"
        >
          section 4
        </h1>
      </div>
    </div>
  );
};

export default Test;
