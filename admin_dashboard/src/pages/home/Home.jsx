import React from "react";
import "./home.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Widget from "../components/widgets/Widget";
import Chart from "../components/chart/Chart";
import Featured from "../components/featured/Featured";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="employees" />
          <Widget type="sales" />
          <Widget type="income" />
          <Widget type="profit" />
        </div>

        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};
export default Home;
