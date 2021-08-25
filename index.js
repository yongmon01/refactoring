const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("success");
});

app.listen(5000);
