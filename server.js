import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(8000, () => {
  console.log(`Server is working on port : 8000`);
});
app.get("/", (req, res) => {
  res.send(
    `<h1>Server is Working Fine. Please Click <a href=solar-power>here</a> to visit the Frontend </h1>`
  );
});
