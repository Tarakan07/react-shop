import React from "react";
import GetProducts from "../products/get-products";
const ProductsPage = () => {
	return (
		<div className="product-block">
			<GetProducts showProductFilter={true}/>
		</div>
	);
};
export default ProductsPage;
