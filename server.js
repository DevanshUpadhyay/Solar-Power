import app from "./app.js";

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(process.env.PORT, () => {
  console.log(`Server is working on port : ${process.env.PORT}`);
});
