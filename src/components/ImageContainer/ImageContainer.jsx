import styles from "./ImageContainer.module.css";

const ImageContainer = ({ imgRef }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        ref={imgRef}
        src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
        alt="hero image"
      />
    </div>
  );
};

export default ImageContainer;
