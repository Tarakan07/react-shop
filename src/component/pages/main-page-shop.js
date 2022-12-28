import React from "react";
import "./css/main-page-shop.css";
import ProductsList from "../products-list";
const MainPageShop = ({ shopService }) => {
	return (
		<div className="product-block">
			<h1>All products</h1>
			<ProductsList shopService={shopService} />
		</div>
	);
};
export default MainPageShop;
