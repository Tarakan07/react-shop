import React from "react";
import GetProducts from "../get-products";
import ProductsFilter from "../products-filter";
const ProductsPage = () => {
	return (
		<div className="product-block">
			<h1>All products</h1>
			<GetProducts />
		</div>
	);
};
export default ProductsPage;
