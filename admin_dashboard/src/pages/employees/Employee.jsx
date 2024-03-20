import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./employee.scss";
import React from "react";

const Employee = () => {
  return (
    <div className="employees">
      <Sidebar />
      <div className="employeesContainer">
        <Navbar />
        Employees
      </div>
    </div>
  );
};
export default Employee;
