import { useEffect, useState } from "react";
import api from "./services/api";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const loadStudents = async () => {
    const res = await api.get("/students");
    setStudents(res.data);
  };

  const clearSelection = () => {
    setSelectedStudent(null);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div>

      <StudentForm
        loadStudents={loadStudents}
        selectedStudent={selectedStudent}
        clearSelection={clearSelection}
      />

      <StudentList
        students={students}
        loadStudents={loadStudents}
        setSelectedStudent={setSelectedStudent}
      />
    </div>
  );
}

export default App;
