import React, { useRef } from "react";
import Hero from "../../components/Hero/Hero";
import Gallery from "../../components/Gallery/Gallery";
import Contacts from "../../components/Contacts/Contacts";
import About from "../../components/About/About";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import useHeroAnimation from "../../hooks/useHeroAnimation"; // Подключаем хук

const Home = () => {
  const imgRef = useRef(null);
  const wrapperRef = useRef(null);

  useHeroAnimation(imgRef, wrapperRef);

  return (
    <div>
      <div className="wrapper">
        <div className="content">
          <div ref={wrapperRef}>
            <Hero />
            <ImageContainer imgRef={imgRef} />
          </div>
          <About />
          <Gallery />
          <About />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
