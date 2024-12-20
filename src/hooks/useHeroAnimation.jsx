import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const useHeroAnimation = (imgRef, wrapperRef) => {

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
      },
    });

    timeline
      .to(imgRef.current, {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })

    return () => {
      if (timeline) timeline.kill();
    };
  }, [imgRef, wrapperRef]);

  return null;
};

export default useHeroAnimation;
