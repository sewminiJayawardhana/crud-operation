import api from "../services/api";

function StudentList({ students, loadStudents, setSelectedStudent }) {
  const deleteStudent = async (id) => {
    await api.delete(`/students/${id}`);
    loadStudents();
  };

  return (
    <div>
      <h3>Student List</h3>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} | {s.email} | {s.age}

            <button onClick={() => setSelectedStudent(s)}>Edit</button>
            <button onClick={() => deleteStudent(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
