import express from "express";
const app = express();
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is working on port : ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("I am solar server..");
});
