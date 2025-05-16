// import React, { useState } from "react";
// // const arrNumber = [1, 5, 7, 4, 2, 3];
// const student = [
//   {id: 1, name: "TruongCongSon",Clas: "codeFarm"}
// ];
// const App = () => {
//   // const [number, setNumber] = useState([...arrNumber]);
//   // const handleSort = (sortBy) => {
//   //   const sorted = [...number];
//   //   if (sortBy === "increase") {
//   //     sorted.sort((a, b) => a - b);
//   //   }
//   //   if (sortBy === "decrease") {
//   //     sorted.sort((a, b) => b - a);
//   //   }
//   //   setNumber(sorted);
//   // };
//   // return (
//   //   <>
//   //     <button onClick={() => handleSort("increase")}>Tăng</button>
//   //     {JSON.stringify(number)}
//   //     <button onClick={() => handleSort("decrease")}>Giảm</button>
//   //   </>
//   // );
// };
// export default App;

import React, { useState } from "react";

const students = [
  { id: 1, fullname: "Nguyen Minh Hoang" },
  { id: 2, fullname: "Nguyen Ton Quy" },
  { id: 3, fullname: "Phung Minh Phuong" },
];

const App = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };

  const filteredStudents = students.filter((student) =>
    student.fullname.toLowerCase().includes(keyword)
  );

  return (
    <div>
      <input type="text" onChange={handleChange} value={keyword} />
      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <li key={student.id}>{student.fullname}</li>
          ))
        ) : (
          <li>Không tìm thấy sinh viên nào</li>
        )}
      </ul>
    </div>
  );
};

export default App;