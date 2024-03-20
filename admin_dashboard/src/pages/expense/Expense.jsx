import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./expense.scss";
import React from "react";

const Expense = () => {
  return (
    <div className="expense">
      <Sidebar />
      <div className="expenseContainer">
        <Navbar />
        Expenses
      </div>
    </div>
  );
};
export default Expense;
