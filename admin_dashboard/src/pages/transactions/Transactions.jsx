import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./transaction.scss";
import React from "react";

const Transactions = () => {
  return (
    <div className="transaction">
      <Sidebar />
      <div className="transactionContainer">
        <Navbar />
          
      </div>
    </div>
  );
};
export default Transaction;
