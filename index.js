import express from "express";

import router from "./route.js";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/user', router);
app.post('/user',()=>{
  const {name , email} =req.body
})

// app.get("/user/signup", userSignup);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
