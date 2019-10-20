const config = require("config");
const express = require("express");
const router = express.Router();
const { Student, validate } = require("../models/students");
const BASE_URL = config.get("BaseUrl");
const IMG_PATH = "student_img.jpg";

router.get("/", async (req, res) => {
  const students = await Student.find();
  if (!students) return res.status(404).json("Cannot find any student");
  res.json({ students });
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id });
    if (!student) return res.status(404).json("This student does not exist");
    res.json(student);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
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

router.put("/:id", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const {
      firstName,
      lastName,
      email,
      company,
      city,
      skill,
      grades
    } = req.body;

    const student = await Student.findOneAndUpdate(
      { _id: req.params.id },
      {
        firstName,
        lastName,
        email,
        company,
        city,
        skill,
        grades
      },
      { new: true }
    );
    if (!student) return res.status(404).json("This student does not exist");
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ _id: req.params.id });
    if (!student) return res.status(404).json("This student does not exist");
    res.json(student);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
});

module.exports = router;
