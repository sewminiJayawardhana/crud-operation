import api from "../services/api";

function StudentList({ students, loadStudents, setSelectedStudent }) {
  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/students/${id}`);
      loadStudents();
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4 text-center">Student List</h3>

      {students.length === 0 ? (
        <p className="text-center text-gray-500">No students found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Age</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="text-center hover:bg-gray-100">
                  <td className="border p-2">{s.name}</td>
                  <td className="border p-2">{s.email}</td>
                  <td className="border p-2">{s.age}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => setSelectedStudent(s)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteStudent(s.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentList;
