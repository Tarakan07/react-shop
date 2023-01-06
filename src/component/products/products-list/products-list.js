import React from "react";
import "./products-list.css";
import ProductsItem from "../products/products-item";
const ProductsList = ({ products }) => {
	return (
		<div className="block-products">
			{products.products.map((item, idx) => {
				return (
					<div key={item.id} className="box-products">
						<ProductsItem product={item} />
					</div>
				);
			})}
		</div>
	);
};

export default ProductsList;
