import React from "react";
import { students } from "../../DataStudents";
function genderAcademi(avgStudent) {
//   console.log("Diem trung binh: ", avgStudent);
  if (avgStudent >= 8) {
    return "Gioi";
  } else if (avgStudent >= 6.5) {
    return "Kha";
  } else if (avgStudent >= 5) {
    return "Trung binh";
  } else {
    return "Yeu";
  }
}

function HomePage() {
  return (
    <div style={{ background: "#ccc" }}>
      <table border={1}>
        <thead>
          <tr>
            <th>Order</th>
            <th>Name</th>
            <th>Math</th>
            <th>Literature</th>
            <th>English</th>
            <th>Average score</th>
            <th>Academic performance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const avg = (
              (student.math + student.literature + student.english) /
              3
            ).toFixed(2);
            const academi = genderAcademi(avg);
            console.log(`Tuoi: ${student.id}, Ten: ${student.name}, DTB: ${avg}, Hoc luc: ${academi}`);
            

            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.math}</td>
                <td>{student.literature}</td>
                <td>{student.english}</td>
                <td>{avg}</td>
                <td>{academi}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
