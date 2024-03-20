import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./product.scss";
import React from "react";
import Protab from "../components/protab/Protab";

const Product = () => {
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="tabcontainer">
          <Protab />
        </div>
      </div>
    </div>
  );
};
export default Product;
