// Получаем список изображений из указанной папки
export const fetchImages = async (folder) => {
  const response = await fetch(`/api/images/${folder}`);
  if (!response.ok) {
    throw new Error("Ошибка получения изображений");
  }
  const images = await response.json();

  return images;
};

// Удаление изображения из указанной папки
export const deleteImage = async (folder, imageName) => {
  console.log(folder, "folder");
  console.log(imageName, "imageName");

  try {
    const response = await fetch(`/api/images/${folder}/${imageName}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(`Ошибка удаления изображения: ${response.statusText}`);
      throw new Error("Ошибка удаления изображения");
    }
    console.log(`Изображение ${imageName} успешно удалено из папки ${folder}.`);
  } catch (error) {
    console.error("Ошибка удаления изображения:", error);
    throw error;
  }
};

// Загружаем файл в указанную папку
export const uploadFile = async (file, folder) => {
  console.log("Загружаемый файл:", file);
  console.log("Папка:", folder);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Ошибка загрузки файла: ${errorMessage}`);
      throw new Error(`Ошибка загрузки файла: ${errorMessage}`);
    }

    console.log(`Файл ${file.name} успешно загружен в папку ${folder}`);
    return response;
  } catch (error) {
    console.error("Ошибка загрузки файла:", error);
    throw error;
  }
};
