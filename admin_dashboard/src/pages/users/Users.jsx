import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./users.scss";
import React from "react";

const Users = () => {
  return (
    <div className="users">
      <Sidebar />
      <div className="usersContainer">
        <Navbar />
        Addusers
      </div>
    </div>
  );
};
export default Users;
