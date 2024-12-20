import React, { useState } from "react";
import { handleUpload } from "./../../../services/imageService";

const UploadForm = ({ onUpload, currentFolder }) => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);

    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };

   const handleSubmit = async (event) => {
    event.preventDefault();
    
    for (let file of files) {
      await handleUpload(file, currentFolder, onUpload, () => {});
    }

    setFiles([]);
    setPreviews([]);
    onUpload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleFileChange} />
      <div>
        {previews.length > 0 && previews.map((previewUrl, index) => (
          <img key={index} src={previewUrl} alt={`Preview ${index + 1}`} style={{ maxWidth: "200px", marginTop: "10px" }} />
        ))}
      </div>
      <button type="submit">Загрузить</button>
    </form>
  );
};

export default UploadForm;
