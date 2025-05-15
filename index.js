import express from "express";
import router from "./route.js";
import multer from "multer";
import { connectDB } from "./config/db.js";


const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.filename + "-" + Date.now() + file.originalname);
  },
});

const app = express();
const upload = multer({ storage: storage });
const PORT = 3000;
await connectDB();


 

app.use(express.urlencoded({ extended: true }));
app.use(upload.single("image"));

app.get("/", (req, res) => {
  res.send("HELLO EXPRESS");
});
app.post('/person',express.json, (req, res) => {
  console.log(req.body);
  res.send("Person Recived");
});

app.post("/form", (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("From Recived");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
