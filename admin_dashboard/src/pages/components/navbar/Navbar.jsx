import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import user from "../../../images/user.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search......" />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <img src={user} alt="user" className="avtar" />
          </div>
          <div className="item">
            <ExpandCircleDownIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
