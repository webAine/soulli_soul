import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";

const Gallery = ({ loadImages }) => {
  const { folder } = useParams();
  const [images, setImages] = useState([]);
  const [imageStates, setImageStates] = useState([]);
  const ref = useRef(null);

  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  useEffect(() => {
    loadImages(folder, setImages);
  }, [folder]);

  useEffect(() => {
    const initialStates = images.map(() => ({
      isLoaded: false,
      isInView: false,
    }));
    setImageStates(initialStates);
  }, [images]);

  const handleLoad = (index) => {
    setImageStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isLoaded = true;
      return newStates;
    });
  };

  const handleViewportEnter = (index) => {
    setImageStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isInView = true;
      return newStates;
    });
  };

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div className={styles.galleryItem} key={image.name}>
          <motion.div
            ref={ref}
            initial={false}
            animate={
              imageStates[index]?.isLoaded && imageStates[index]?.isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            onViewportEnter={() => handleViewportEnter(index)}
          >
            <img
              src={`/uploads/${folder}/${image.name}`}
              alt={image.name}
              onLoad={() => handleLoad(index)}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
