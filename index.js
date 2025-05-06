import { usernameController, searchController } from "./controller.js";

import express from "express";

const app = express();
const PORT = 3000;
//Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, !");
})

app.get("/user/:username", usernameController);

app.get("/search", searchController);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
