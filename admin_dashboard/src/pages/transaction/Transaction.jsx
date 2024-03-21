import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./transaction.scss";
import React from "react";
import Home from "../components/Transactionss/Home";
import View from "../components/Transactionss/View";
import Edit from "../components/Transactionss/Edit";
import { Route, Router, Routes } from "react-router-dom";


const Transaction = () => {
  return (
    <div className="transaction">
      <Sidebar />
      <div className="transactionContainer">
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/view/:id" element={<View/>}/>
            <Route exact path="/edit/:id" element={<Edit/>}/>
          </Routes>
      </div>
    </div>
  );
};
export default Transaction;
