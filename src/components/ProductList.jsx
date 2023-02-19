import React from "react";
import Product from "./Product";
import "./ProductList.css";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire, Its Raj</h1>
        <p className="p-desc">
          Raj is a creative portfolio that your work has been waiting. Nothing
          like that you can the this text after the completion of this portfolio
          website.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
