import express from "express";

import { connectDB } from "./config/db.js";
import { Person } from "./models/person.js";

const app = express();
const PORT = 3000;
await connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO EXPRESS");
});
//saveing data in mongoDb
app.post("/person", async (req, res) => {
  const { email, name, age } = req.body;
  const newPerson = new Person({
    name,
    age,
    email,
  });
  await newPerson.save();
  console.log(newPerson)
  res.send("Person data received");
});
//updating data in mongoDb
app.put("/person",  async (req, res) => {
  const { id} = req.body;

  const personData =await Person.findByIdAndUpdate(id,{age:"28"});
  personData.age =30
  personData.save();

  console.log(personData)
  res.send("Person data updated");
});
//Deleting data in mongoDb

app.delete("/person/:id", async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.send("Person data deleted");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
