import React from "react";
import SearchFilter from "./filters/search-filter";
import CategoryFilter from "./filters/category-filter";
import "./products-filter.css";
const ProductsFilter = () => {
	return (
		<div className="block-filter">
			<CategoryFilter />
			<SearchFilter />
		</div>
	);
};

export default ProductsFilter;
