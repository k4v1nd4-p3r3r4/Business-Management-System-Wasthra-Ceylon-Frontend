import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./attendence.scss";
import React from "react";

const Expense = () => {
  return (
    <div className="attendence">
      <Sidebar />
      <div className="attendenceContainer">
        <Navbar />
        Attendence
      </div>
    </div>
  );
};
export default Expense;
