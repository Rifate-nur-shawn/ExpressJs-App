import express from "express";
import router from "./route.js";

const app = express();
const PORT = 3000;

//set EJs as the view engine
app.use('/public',express.static("public"));
app.use('/images',express.static("images"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("HELLO EXPRESS");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
