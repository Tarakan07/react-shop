import React from "react";
import "./css/main-page-shop.css";
import GetProducts from "../products/get-products";
const MainPageShop = () => {
	return (
		<div className="product-block">
			<h1>All products</h1>
			<GetProducts />
		</div>
	);
};
export default MainPageShop;
