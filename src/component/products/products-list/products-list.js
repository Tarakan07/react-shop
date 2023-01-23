import React from "react";
import "./products-list.css";
import ProductsItem from "../products-item";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";
const ProductsList = ({ products, loading, error }) => {
	if (loading && products.length < 1) {
		return <Spinner />;
	}
	if (error) {
		return <ErrorIndicator />;
	}
	if (products.length < 1) {
		return <h2>{`Not found((`}</h2>;
	}
	return (
		<div className="block-products">
			{products.map((item) => {
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
