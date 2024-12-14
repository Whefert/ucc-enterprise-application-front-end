import { Outlet, useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "../components/StudentCard";

function StudentLayout() {
  const [student, setStudent] = useState(useLoaderData());

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://randomuser.me/api/`);
      const data = await response.json();
      setStudent((prevStudent) => {
        return {
          ...prevStudent,
          picture: data.results[0].picture.large,
        };
      });
    })();
  }, []);

  return (
    <main className="flex gap-5">
      <menu className="basis-1/6 text-center h-[50vh] flex items-center">
        <div className="grow flex flex-col bg-blue-600">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "bg-yellow-500 " : null) +
              " hover:bg-blue-950 hover:text-white text-xl p-2"
            }
            to=""
            end
          >
            Courses
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              (isActive ? "bg-yellow-500 " : null) +
              " hover:bg-blue-950 hover:text-white text-xl p-2"
            }
            to="contact_details"
          >
            Contact Details
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              (isActive ? "bg-yellow-500 " : null) +
              " hover:bg-blue-950 hover:text-white text-xl p-2"
            }
            to="next_of_kin"
          >
            Next of Kin
          </NavLink>
        </div>
      </menu>
      <div>
        <StudentCard student={student} />
        {/* <div className="flex flex-col gap-5">
        <div className="flex gap-2 p-4">
          <div>
            <img
              src={student.picture}
              className="h-[150px] w-[150px] rounded-[50%]"
              alt={student.user.first_name.concat(" ", student.user.last_name)}
            />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-2xl">
              Student Name:{" "}
              {student.user.first_name.concat(" ", student.user.last_name)}
            </h1>
            <div className="flex gap-3">
              <p>Student Id: {student.id}</p>
              <p>Program: {student.program_of_study}</p>
            </div>
            <div className="flex gap-3">
              <p>GPA: {student.gpa}</p>
              <p>Student email: {student.ucc_email}</p>
            </div>
            <div className="flex gap-3">
              <p>Completed Credits: {student?.completedCredits}</p>
              <p>Advisor: {student?.advisor}</p>
            </div>
          </div>
        </div> */}
        <Outlet context={[student, setStudent]} />
      </div>
    </main>
  );
}

export default StudentLayout;

export async function loader({ params, request }) {
  const url = import.meta.env.VITE_BACKEND_URL + `student/${params.id}`;
  const response = await axios.get(url);
  return response.data;
}
