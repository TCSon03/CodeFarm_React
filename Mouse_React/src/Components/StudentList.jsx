// import React from "react";

// function StudentList({ students }) {

//   console.log(students);

//   return (
//     <div>
//       <h1>Danh sách sinh viên</h1>
//       <select name="gender" id="">
//         <option value="all">All</option>
//         <option value="nam">Nam</option>
//         <option value="nu">Nữ</option>
//       </select>
//       <ul>
//         {students.map((student, index) => (
//           <li key={student.id}>
//             {index + 1}. {student.name} - {student.email} -{" "}
//             {student.gender === "male" ? "Nam" : "Nữ"}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StudentList;

import React, { useState } from "react";

function StudentList({ students }) {
  const [genderFilter, setGenderFilter] = useState("all");

  const handleGenderChange = (e) => {
    setGenderFilter(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    if (genderFilter === "all") return true;
    if (genderFilter === "nam") return student.gender === "male";
    if (genderFilter === "nu") return student.gender === "female";
  });

  return (
    <div>
      <h1>Danh sách sinh viên</h1>

      <select name="gender" value={genderFilter} onChange={handleGenderChange}>
        <option value="all">Tất cả</option>
        <option value="nam">Nam</option>
        <option value="nu">Nữ</option>
      </select>

      <ul>
        {filteredStudents.map((student, index) => (
          <li key={student.id}>
            {index + 1}. {student.name} - {student.email} -{" "}
            {student.gender === "male" ? "Nam" : "Nữ"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
