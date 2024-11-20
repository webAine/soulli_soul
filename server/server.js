const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Настройка хранилища
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Обработка POST-запроса для загрузки файла
app.post("/api/upload", upload.single("file"), (req, res) => {
  const folder = req.body.folder;
  console.log(folder, "folder");

  if (!folder) {
    return res.status(400).send("Папка не указана");
  }

  const uploadDir = path.join(__dirname, "../public/uploads", folder);

  fs.mkdir(uploadDir, { recursive: true }, (err) => {
    if (err) {
      return res.status(500).send("Ошибка при создании папки: " + err.message);
    }

    const tempPath = path.join(
      __dirname,
      "../public/uploads",
      req.file.filename
    );
    const targetPath = path.join(uploadDir, req.file.originalname);

    fs.rename(tempPath, targetPath, (err) => {
      if (err) {
        return res.status(500).send("Ошибка перемещения файла: " + err.message);
      }

      res.send("Файл загружен в папку " + folder);
    });
  });
});

// Обработка GET-запроса для получения списка изображений из определенной папки
app.get("/api/images/:folder", async (req, res) => {
  const folder = req.params.folder;
  const folderPath = path.join(__dirname, "../public/uploads", folder);

  try {
    const files = await fs.promises.readdir(folderPath);
    const images = files.map((file) => ({ name: file }));

    res.json(images);
  } catch (err) {
    console.error("Ошибка получения изображений:", err);
    res.status(500).send("Ошибка получения изображений");
  }
});

// Обработка DELETE-запроса для удаления изображения
app.delete("/api/images/:folder/:name", (req, res) => {
  const folder = req.params.folder;
  const imageName = req.params.name;
  const imagePath = path.join(
    __dirname,
    "../public/uploads",
    folder,
    imageName
  );

  console.log("Запрос на удаление:", { folder, imageName, imagePath });

  fs.unlink(imagePath, (err) => {
    if (err) {
      return res.status(500).send("Ошибка удаления изображения");
    }
    res.status(200).send("Изображение удалено успешно");
  });
});

// Статическая раздача изображений
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
