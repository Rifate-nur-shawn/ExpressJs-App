import express from "express";

import router from "./route.js";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/user', router);

app.post('/users',express.json(),(req,res)=>{
  const {name , email} =req.body
  res.json({
    massage:`User ${name}with email ${email} created successfully`
  })
})

// Middleware to parse JSON bodies

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
