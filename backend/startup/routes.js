const express = require("express");
const cors = require("cors");
const students = require("../routes/students");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());

  app.use("/", students);
};
