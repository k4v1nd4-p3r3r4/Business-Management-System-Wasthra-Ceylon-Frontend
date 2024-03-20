import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./rmaterials.scss";
import React from "react";
import Rawtab from "../components/rawtab/Rawtab";

const Rmaterials = () => {
  return (
    <div className="inventory">
      <Sidebar />
      <div className="inventoryContainer">
        <Navbar />
        <div className="tabcontainer">
          <Rawtab />
        </div>
      </div>
    </div>
  );
};
export default Rmaterials;
