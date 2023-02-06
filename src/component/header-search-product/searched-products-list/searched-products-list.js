import React from "react";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";
import SearchedProductsItem from "../searched-products-item";

const SearchedProductsList = ({ products, loading, error, activeLabel }) => {
	if (loading) {
		return (
			<div className="box-searched">
				<Spinner />
			</div>
		);
	}
	if (error) {
		return <ErrorIndicator />;
	}
	if (activeLabel) {
		return (
			<div className="wrapped-searched">
				{products.map((el) => {
					return <SearchedProductsItem product={el} />;
				})}
			</div>
		);
	}
};

export default SearchedProductsList;
