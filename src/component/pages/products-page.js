import React from "react";
import GetProducts from "../get-products";
const ProductsPage = (props) => {
	return (
		<div className="product-block">
			<h1>All products</h1>
			<GetProducts>{props.children}</GetProducts>
		</div>
	);
};
export default ProductsPage;
