const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const app = express();

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept,"
  );
  next();
};

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.options("*", cors());

app.set("port", 1987);

app.listen(app.get("port"));
console.log(
  "Server is ready on port",
  app.get("port"),
  "MeLi Server is running!"
);
