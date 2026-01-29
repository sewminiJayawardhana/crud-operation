import { useEffect, useState } from "react";
import api from "../services/api";

function StudentForm({ loadStudents, selectedStudent, clearSelection }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // 🔹 When selecting a student for edit
  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name);
      setEmail(selectedStudent.email);
      setAge(selectedStudent.age);
    }
  }, [selectedStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedStudent) {
        // 🔄 UPDATE
        await api.put(`/students/${selectedStudent.id}`, {
          name,
          email,
          age,
        });
        clearSelection();
      } else {
        // ➕ CREATE
        await api.post("/students", {
          name,
          email,
          age,
        });
      }

      setName("");
      setEmail("");
      setAge("");
      loadStudents();
    } catch (error) {
      console.error("Error saving student", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">
        {selectedStudent ? "Update Student" : "Add Student"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className={`flex-1 text-white py-2 rounded ${
              selectedStudent
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {selectedStudent ? "Update" : "Save"}
          </button>

          {selectedStudent && (
            <button
              type="button"
              onClick={clearSelection}
              className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
