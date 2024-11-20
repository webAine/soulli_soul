import React, { useEffect, useState } from "react";
import UploadForm from "./../../components/Admin/UploadForm/UploadForm";
import Gallery from "./../../components/Admin/Gallery/Gallery";
import { loadImages, handleDelete } from "./../../services/imageService";
import styles from "./Admin.module.css";

const Admin = () => {
  const [images, setImages] = useState([]);
  const [folder, setFolder] = useState("twitch_panels");

  useEffect(() => {
    console.log("Текущая папка:", folder);
    loadImages(folder, setImages);
  }, [folder]);

  const handleTabChange = (newFolder) => {
    setFolder(newFolder);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <button
          onClick={() => handleTabChange("twitch_panels")}
          className={`${styles.tab} ${
            folder === "twitch_panels" ? styles.active : ""
          }`}
        >
          Twitch Panels
        </button>
        <button
          onClick={() => handleTabChange("vtuber_models")}
          className={`${styles.tab} ${
            folder === "vtuber_models" ? styles.active : ""
          }`}
        >
          Vtuber Models
        </button>
        <button
          onClick={() => handleTabChange("twitch_emotes")}
          className={`${styles.tab} ${
            folder === "twitch_emotes" ? styles.active : ""
          }`}
        >
          Twitch Emotes
        </button>
        <button
          onClick={() => handleTabChange("png_tuber")}
          className={`${styles.tab} ${
            folder === "png_tuber" ? styles.active : ""
          }`}
        >
          PngTuber
        </button>
      </div>
      <UploadForm
        onUpload={() => loadImages(folder, setImages)}
        currentFolder={folder}
      />
      <Gallery
        folder={folder}
        images={images}
        onDelete={(imageName) => handleDelete(folder, imageName, setImages)}
      />
    </div>
  );
};

export default Admin;
