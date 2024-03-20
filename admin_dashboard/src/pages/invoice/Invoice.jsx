import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./invoice.scss";
import React from "react";

const Invoice = () => {
  return (
    <div className="invoice">
      <Sidebar />
      <div className="invoiceContainer">
        <Navbar />
        Invoice
      </div>
    </div>
  );
};
export default Invoice;
