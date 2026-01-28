const db = require("../db");

const Student = {
  // CREATE
  create: (data, callback) => {
    const sql = "INSERT INTO students (name, email, age) VALUES (?, ?, ?)";
    db.query(sql, [data.name, data.email, data.age], callback);
  },

  // READ
  getAll: (callback) => {
    db.query("SELECT * FROM students", callback);
  },

  // UPDATE
  update: (id, data, callback) => {
    const sql = "UPDATE students SET name=?, email=?, age=? WHERE id=?";
    db.query(sql, [data.name, data.email, data.age, id], callback);
  },

  // DELETE
  delete: (id, callback) => {
    db.query("DELETE FROM students WHERE id=?", [id], callback);
  },

  // SEARCH
  search: (name, callback) => {
    const sql = "SELECT * FROM students WHERE name LIKE ?";
    db.query(sql, [`%${name}%`], callback);
  },
};

module.exports = Student;
