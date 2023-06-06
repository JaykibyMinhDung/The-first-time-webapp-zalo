import React from "react";
import HeaderShop from "../components/ListShop/HeaderShop";
import HeaderMenu from "../components/navbar/HeaderMenu";
import Products from "../components/ListShop/Products";

const ListShop = () => {
  return (
    <div>
      <HeaderShop />
      <HeaderMenu />
      <Products />
    </div>
  );
};

export default ListShop;
