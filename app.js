import express from "express";
import { config } from "dotenv";

import ErrorMiddleware from "./middlewares/Error.js";
import cors from "cors";
config({
  path: "./config/config.env",
});
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

import user from "./routes/userRoutes.js";

app.use("/api/v1", user);

app.get("/", (req, res) => {
  res.send(
    `<h1>Server is Working Fine. Please Click <a href=${process.env.FRONTEND_URL}>here</a> to visit the Frontend which is jainshreesolar.com </h1>`
  );
});

app.use(ErrorMiddleware);
export default app;
