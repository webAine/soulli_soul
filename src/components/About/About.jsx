import React from "react";
import styles from "./About.module.css";
import AnimatedTitle from "../AnimationTitle/AnimatedTitle";

const About = () => {
  return (
    <section className={styles.about}>
      <AnimatedTitle>Section 1 Title</AnimatedTitle>
    </section>
  );
};

export default About;
