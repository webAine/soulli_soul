import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Contacts.module.css";
import AnimatedTitle from "../AnimationTitle/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const Contacts = ({ contactsTitle }) => {
  const contactsSectionRef = useRef(null);
  const divAnimRef = useRef(null);

  useEffect(() => {
    const backAnim = gsap.timeline({
      scrollTrigger: {
        trigger: contactsSectionRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    backAnim.from(divAnimRef.current, {
      opacity: 0,
      width: "0%",
      duration: 1.2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section ref={contactsSectionRef} className={styles.contacts}>
      <div ref={divAnimRef} className={styles.backAnim}>
        <AnimatedTitle>
          Section 3 Title
        </AnimatedTitle>
      </div>
    </section>
  );
};

export default Contacts;
