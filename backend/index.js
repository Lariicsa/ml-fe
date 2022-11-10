const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { urlencoded } = require("express");
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.set("port", 1987);

app.listen(app.get("port"));
console.log(`Meli Server is ready on port http://localhost:${app.get("port")}`);

const main = require("./src/routes/mainRouter");
const products = require("./src/routes/productRouter");

app.use("/", main);
app.use("/items", products);
