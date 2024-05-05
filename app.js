import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Form verilerini işlemek için express'in yerleşik middleware'ini kullanın
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Form submitted successfully!"); // Yanıt gönder
});

app.listen(port, () => {
    console.log(`Listening port ${port}`);
});
