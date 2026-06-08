const express = require("express");
const cors = require("cors");

const routes = require("./routes/Routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("URL Shortener API Running");
});

app.use("/", routes);

module.exports = app;