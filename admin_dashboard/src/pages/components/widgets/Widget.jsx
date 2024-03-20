import React from "react";
import "./widget.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PaidIcon from "@mui/icons-material/Paid";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
const Widget = ({ type }) => {
  let data;

  //tempory for now
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "employees":
      data = {
        title: "Employees",
        isMoney: false,
        link: "See all Employees",
        icon: (
          <GroupIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "sales":
      data = {
        title: "Sales",
        isMoney: false,
        link: "See all sales",
        icon: (
          <ShoppingCartCheckoutIcon
            className="icon"
            style={{ color: "blue", backgroundColor: "rgba(0,0,255,0.2)" }}
          />
        ),
      };
      break;
    case "income":
      data = {
        title: "Income",
        isMoney: true,
        link: "See total income",
        icon: (
          <PaidIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "profit":
      data = {
        title: "Profit",
        isMoney: true,
        link: "See total profit",
        icon: (
          <CardGiftcardIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};
export default Widget;
