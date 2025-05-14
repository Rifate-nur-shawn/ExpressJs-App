import express from "express";
import router from "./route.js";

const app = express();
const PORT = 3000;

//set EJs as the view engine

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const userName = "mark";
  res.render("index", { userName });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
