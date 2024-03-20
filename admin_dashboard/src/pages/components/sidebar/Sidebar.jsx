import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import Person4Icon from "@mui/icons-material/Person4";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SellIcon from "@mui/icons-material/Sell";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DescriptionIcon from "@mui/icons-material/Description";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import logo2 from "../../../images/logo2.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/Home">
          <img src={logo2} alt="Wasthra Ceylone" className="navbar-brand" />
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Inventory</p>

          <Link
            to="/inventory"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <ShoppingCartIcon className="icon" />
              <span>Raw Materials</span>
            </li>
          </Link>

          <Link
            to="/product"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <Inventory2Icon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <Link
            to="/supplier"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <Person4Icon className="icon" />
              <span>Suppliers</span>
            </li>
          </Link>
          <p className="title">Employees</p>

          <Link
            to="/users"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <PersonAddIcon className="icon" />
              <span>Add Users</span>
            </li>
          </Link>

          <Link
            to="/employees"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <ManageAccountsIcon className="icon" />
              <span>All Employees</span>
            </li>
          </Link>

          <Link
            to="/attendence"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <AddBusinessIcon className="icon" />
              <span>Attendence</span>
            </li>
          </Link>

          <Link
            to="/daytask"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <BookmarkAddedIcon className="icon" />
              <span>Daily Tasks</span>
            </li>
          </Link>

          <Link
            to="/leaves"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <DirectionsWalkIcon className="icon" />
              <span>Leaves</span>
            </li>
          </Link>
          <p className="title">Finance</p>

          <Link
            to="/transaction"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <CurrencyExchangeIcon className="icon" />
              <span>Transactions</span>
            </li>
          </Link>

          <Link
            to="/expense"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <SellIcon />
              <span>Other Expenses</span>
            </li>
          </Link>
          <Link
            to="/invoice"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <ReceiptIcon className="icon" />
              <span>Invoice</span>
            </li>
          </Link>

          <Link
            to="/report"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <DescriptionIcon className="icon" />
              <span>Reports</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
