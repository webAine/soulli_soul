import { fetchImages, deleteImage, uploadFile } from './api';

// Функция для загрузки изображений из указанной папки
export const loadImages = async (folder, setImages) => {
  try {
    const data = await fetchImages(folder);
    setImages(data);
  } catch (error) {
    console.error('Ошибка загрузки изображений:', error);
  }
};

// Функция для удаления изображения и обновления списка изображений
export const handleDelete = async (folder, imageName, setImages) => {
  try {
    await deleteImage(folder, imageName);
    await loadImages(folder, setImages);
  } catch (error) {
    console.error('Ошибка удаления изображения:', error);
  }
};

// Функция для загрузки файла в указанную папку
export const handleUpload = async (file, currentFolder, onUpload, setFile) => {
  if (!file) {
    console.error("Файл не выбран.");
    return;
  }

  console.log("Отправляем файл:", file);
  console.log("Отправляем папку:", currentFolder);

  try {
    await uploadFile(file, currentFolder);
    onUpload();
    setFile(null);
  } catch (error) {
    console.error("Ошибка загрузки файла:", error);
  }
};
