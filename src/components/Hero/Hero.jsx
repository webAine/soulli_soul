import AnimatedTitle from "../AnimationTitle/AnimatedTitle";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <AnimatedTitle containerClass={styles.heroTitle}>Hero section title</AnimatedTitle>
      </div>
    </section>
  );
};

export default Hero;
