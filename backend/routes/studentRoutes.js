const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/", studentController.createStudent);
router.get("/", studentController.getStudents);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
router.get("/search/:name", studentController.searchStudent);

module.exports = router;
