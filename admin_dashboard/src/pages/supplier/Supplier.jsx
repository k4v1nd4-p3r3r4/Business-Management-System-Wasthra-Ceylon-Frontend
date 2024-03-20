import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./supllier.scss";
import React from "react";

const supplier = () => {
  return (
    <div className="supplier">
      <Sidebar />
      <div className="supplierContainer">
        <Navbar />
        suppliers
      </div>
    </div>
  );
};
export default supplier;
