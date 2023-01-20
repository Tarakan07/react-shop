import React from "react";
import "./css/main-page-shop.css";
import "./css/pages.css";
import GetProducts from "../products/get-products";
const MainPageShop = () => {
	return (
		<div className="product-block wrap-block-page">
			<GetProducts showProductFilter={false} />
		</div>
	);
};
export default MainPageShop;
