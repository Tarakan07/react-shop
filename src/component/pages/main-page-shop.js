import React from "react";
import "./css/main-page-shop.css";
import GetProducts from "../products/get-products";
const MainPageShop = () => {
	return (
		<div className="product-block">
			<GetProducts showProductFilter={false} />
		</div>
	);
};
export default MainPageShop;
