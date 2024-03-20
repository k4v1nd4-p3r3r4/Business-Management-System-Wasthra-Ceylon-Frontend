import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./transaction.scss";
import React from "react";

const Transaction = () => {
  return (
    <div className="transaction">
      <Sidebar />
      <div className="transactionContainer">
        <Navbar />
        Daily transaction
      </div>
    </div>
  );
};
export default Transaction;
