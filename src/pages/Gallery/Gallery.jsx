import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Gallery.module.css";

const Gallery = ({ loadImages }) => {
  const { folder } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages(folder, setImages);
  }, [folder]);

  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <div className={styles.galleryItem} key={image.name}>
          <img src={`/uploads/${folder}/${image.name}`} alt={image.name} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
