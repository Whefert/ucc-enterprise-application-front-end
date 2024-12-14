import { Link } from "react-router-dom";

function StudentTable({ students }) {
  return (
    <table className="w-full table-auto border-collapse border text-center border-blue-600">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="border border-blue-600 px-3 ">Id</th>
          <th className="border border-blue-600 px-3">Name</th>
          <th className="border border-blue-600 px-3 w-[30%]">Email</th>
          <th className="border border-blue-600 px-3 w-[25%]">Program</th>
          <th className="border border-blue-600 px-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {students &&
          students.map((student) => (
            <tr key={student.id}>
              <td className="border border-blue-600 text-center p-2">
                <Link to={`${student.id}`} className="underline text-blue-900">
                  {student.id}
                </Link>
              </td>
              <td className="border border-blue-600 p-2">
                {student.user.first_name.concat(" ", student.user.last_name)}
              </td>
              <td className="border border-blue-600 p-2">
                {student.user.contact_details.email}
              </td>
              <td className="border border-blue-600 p-2">
                {student.program_of_study}
              </td>
              <td className="border border-blue-600 p-2">{student?.status}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
