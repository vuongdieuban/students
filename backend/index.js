const config = require("config");
const express = require("express");
const app = express();

// setup
require("./startup/db")();
require("./startup/routes")(app);

// Listen on Port
const port = config.get("Port");
const server = app.listen(port, () =>
  console.log(`Success! Listen on Port ${port}`)
);

module.exports = server;
