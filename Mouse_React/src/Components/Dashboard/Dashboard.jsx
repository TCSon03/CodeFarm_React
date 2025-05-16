import React from "react";
import { students } from "../../DataStudents";

function getAcademicPerformance(avg) {
  if (avg >= 8) return "Giỏi";
  if (avg >= 6.5) return "Khá";
  if (avg >= 5) return "Trung bình";
  return "Yếu";
}

function Dashboard() {
  // State cho các bộ lọc
  const [searchTerm, setSearchTerm] = React.useState("");
  const [avgFilter, setAvgFilter] = React.useState("all");
  const [academicFilter, setAcademicFilter] = React.useState("all");

  // Xử lý thay đổi giá trị ô input tìm kiếm
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log("Tìm kiếm với từ khóa:", event.target.value); // Debug
  };

  // Xử lý thay đổi giá trị select ĐTB
  const handleAvgFilter = (event) => {
    setAvgFilter(event.target.value);
    console.log("Lọc theo ĐTB:", event.target.value); // Debug
  };

  // Xử lý thay đổi giá trị select học lực
  const handleAcademicFilter = (event) => {
    setAcademicFilter(event.target.value);
    console.log("Lọc theo học lực:", event.target.value); // Debug
  };

  // Lọc danh sách học sinh dựa trên các bộ lọc
  const filteredStudents = students.filter((student) => {
    const avg = (student.math + student.literature + student.english) / 3;
    const academic = getAcademicPerformance(avg);

    // Lọc theo tên
    const matchesName = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Lọc theo ĐTB
    let matchesAvg = true;
    if (avgFilter === "below5") matchesAvg = avg < 5;
    else if (avgFilter === "5to65") matchesAvg = avg >= 5 && avg < 6.5;
    else if (avgFilter === "65to8") matchesAvg = avg >= 6.5 && avg < 8;
    else if (avgFilter === "above8") matchesAvg = avg >= 8;

    // Lọc theo học lực
    const matchesAcademic =
      academicFilter === "all" || academic === academicFilter;

    return matchesName && matchesAvg && matchesAcademic;
  });

  return (
    <div>
      <h2>Danh sách học sinh</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Tìm kiếm theo tên..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ padding: "5px", marginRight: "10px", width: "200px" }}
        />
        <select
          value={avgFilter}
          onChange={handleAvgFilter}
          style={{ padding: "5px", marginRight: "10px" }}
        >
          <option value="all">Tất cả ĐTB</option>
          <option value="below5">ĐTB dưới 5</option>
          <option value="5to65">ĐTB từ 5 đến 6.5</option>
          <option value="65to8">ĐTB từ 6.5 đến 8</option>
          <option value="above8">ĐTB trên 8</option>
        </select>
        <select
          value={academicFilter}
          onChange={handleAcademicFilter}
          style={{ padding: "5px" }}
        >
          <option value="all">Tất cả học lực</option>
          <option value="Giỏi">Giỏi</option>
          <option value="Khá">Khá</option>
          <option value="Trung bình">Trung bình</option>
          <option value="Yếu">Yếu</option>
        </select>
      </div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Tên</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Toán</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Văn</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Anh</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>ĐTB</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Học lực</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => {
            const avg = (student.math + student.literature + student.english) / 3;
            const academic = getAcademicPerformance(avg);
            return (
              <tr key={student.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {student.id}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {student.name}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {student.math}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {student.literature}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {student.english}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {avg.toFixed(2)}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {academic}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;