import React from "react";
import GetProducts from "../products/get-products";
import "./css/pages.css";
const ProductsPage = () => {
	return (
		<div className="product-block wrap-block-page">
			<GetProducts showProductFilter={true} />
		</div>
	);
};
export default ProductsPage;
