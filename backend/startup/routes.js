const express = require("express");
const cors = require("cors");
const students = require("../routes/students");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());

  // allow to access static folder
  app.use("/", express.static("static"));

  app.use("/", students);
};
