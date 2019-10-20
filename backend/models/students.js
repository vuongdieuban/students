const Joi = require("joi");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  company: String,
  city: String,
  skill: String,
  pic: String,
  grades: [Number]
});

const Student = mongoose.model("Student", studentSchema);

// Validating req.body
function validateReq(body) {
  const schema = {
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    company: Joi.string(),
    city: Joi.string(),
    skill: Joi.string(),
    grades: Joi.array().items(Joi.number())
  };
  const result = Joi.validate(body, schema);
  return result;
}

module.exports.Student = Student;
module.exports.validate = validateReq;
