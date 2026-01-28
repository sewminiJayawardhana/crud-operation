import { useState } from "react";
import api from "../services/api";

function StudentForm({ loadStudents, selectedStudent, clearSelection }) {
  const [name, setName] = useState(selectedStudent?.name || "");
  const [email, setEmail] = useState(selectedStudent?.email || "");
  const [age, setAge] = useState(selectedStudent?.age || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedStudent) {
      // UPDATE
      await api.put(`/students/${selectedStudent.id}`, {
        name,
        email,
        age,
      });
      clearSelection();
    } else {
      // CREATE
      await api.post("/students", { name, email, age });
    }

    setName("");
    setEmail("");
    setAge("");
    loadStudents();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedStudent ? "Update Student" : "Add Student"}</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <button type="submit">
        {selectedStudent ? "Update" : "Save"}
      </button>
    </form>
  );
}

export default StudentForm;
