const Student = require("../models/studentModel");

exports.getStudents = (req, res) => {
  Student.getAll((err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};
