import React from "react";
import './App.css'
import HomePage from "./Components/HomePage/HomePage";
import SiderBar from "./Components/SiderBar/SiderBar";

function App() {
  return (
    <div className="container">
      <SiderBar className='sider'/>
      <HomePage className='main'/>
    </div>
  );
}

export default App;
