import "./App.css";
import Banner from "./Components/Banner";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import StudentList from "./Components/StudentList";
// import SideBar from "./Layouts/SideBar";
// import HomePage from "./Pages/HomePage";
const students = [
  {
    id: 1,
    name: "Nguyen Minh Hoang",
    email: "hoang@gmail.com",
    gender: "male",
  },
  { id: 2, name: "Tran Duy Dong", email: "dong@gmail.com", gender: "male" },
  {
    id: 3,
    name: "Nguyen Hong Nhung",
    email: "hongnhung@gmail.com",
    gender: "female",
  },
];
function App() {
  return (
    <>
      <StudentList students={students} />;
    </>
  );
}

export default App;
