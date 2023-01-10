import React from "react";
import SearchFilter from "./filters/search-filter";
import CategoryFilter from "./filters/category-filter";
import "./products-filter.css";
const ProductsFilter = ({ setCategory, activeCat, searchFilter }) => {
	return (
		<div className="block-filter">
			<CategoryFilter setCategory={setCategory} activeCat={activeCat} />
			<SearchFilter searchFilter={searchFilter} />
		</div>
	);
};

export default ProductsFilter;
