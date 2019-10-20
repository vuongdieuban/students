const config = require("config");
const express = require("express");
const router = express.Router();
const { Student, validate } = require("../models/students");
const BASE_URL = config.get("BaseUrl");
const IMG_PATH = "student_img.jpg";

router.get("/", async (req, res) => {
  const students = await Student.find();
  if (!students) return res.status(404).json("Cannot find any student");
  res.json(students);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  const { firstName, lastName, email, company, city, skill, grades } = req.body;
  const newStudent = new Student({
    firstName,
    lastName,
    email,
    company,
    city,
    skill,
    grades
  });
  newStudent.pic = BASE_URL + "/" + IMG_PATH;
  await newStudent.save();
  res.json(newStudent);
});

module.exports = router;
