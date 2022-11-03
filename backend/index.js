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

const main = require("./src/routes/mainRouter");

app.use("/", main);

app.listen(app.get("port"));
console.log(`Meli Server is ready on port http://localhost:${app.get("port")}`);
