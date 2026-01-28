const Student = require("../models/studentModel");

// CREATE
exports.createStudent = (req, res) => {
    console.log(req.body);
  Student.create(req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.send("Student added successfully");
  });
};

// READ
exports.getStudents = (req, res) => {
  Student.getAll((err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};

// UPDATE
exports.updateStudent = (req, res) => {
  Student.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.send("Student updated successfully");
  });
};

// DELETE
exports.deleteStudent = (req, res) => {
  Student.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.send("Student deleted successfully");
  });
};

// SEARCH
exports.searchStudent = (req, res) => {
  Student.search(req.params.name, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};
