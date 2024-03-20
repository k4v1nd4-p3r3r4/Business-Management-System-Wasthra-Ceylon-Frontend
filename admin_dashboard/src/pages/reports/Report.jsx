import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./report.scss";
import React from "react";

const Report = () => {
  return (
    <div className="report">
      <Sidebar />
      <div className="reportContainer">
        <Navbar />
        Reports
      </div>
    </div>
  );
};
export default Report;
