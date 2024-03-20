import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./daytask.scss";
import React from "react";

const daytask = () => {
  return (
    <div className="daytask">
      <Sidebar />
      <div className="taskContainer">
        <Navbar />
        Daily Tasks
      </div>
    </div>
  );
};
export default daytask;
