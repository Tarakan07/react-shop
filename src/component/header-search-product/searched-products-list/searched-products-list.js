import React from "react";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";
import SearchedProductsItem from "../searched-products-item";

const SearchedProductsList = ({ products, loading, error, value }) => {
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
	if (products.length < 1 && value.length > 0) {
		return (
			<div className="box-searched">
				<span>No found</span>
			</div>
		);
	}
	if (value.length > 0) {
		return (
			<div className="wrapped-searched">
				{products.map((el) => {
					return <SearchedProductsItem key={el.id} product={el} />;
				})}
			</div>
		);
	}
};

export default SearchedProductsList;
