import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./leaves.scss";
import React from "react";

const Employee = () => {
  return (
    <div className="leaves">
      <Sidebar />
      <div className="leavesContainer">
        <Navbar />
        Leave Mangement
      </div>
    </div>
  );
};
export default Employee;
