const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the MiddleWare");
  next(); //this allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In Another MiddleWare");
  res.send("<h1>hello from express</h1>");
});

// const server = http.createServer(app);
// server.listen(4000);

app.listen(4000);
