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
app.get('/things/:name/:id',(req,res)=>{
  const {name,id}=req.params
    res.json({
      id,
      name
    })
})
// app.delete ('')

// Middleware to parse JSON bodies

// app.put('/users/:id', (req, res) => {
//   const  userId=req.params.id
//   const { name, email } = req.body;
//   res.json({
//     message: `User with ID ${userId} updated successfully with name ${name},  ${email}`
//   }); 
// });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
