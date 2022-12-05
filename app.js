const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always works");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In Another MiddleWare");
  res.send("<h1>The add-product page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In Another MiddleWare");
  res.send("<h1>hello from express</h1>");
});

app.listen(4000);
