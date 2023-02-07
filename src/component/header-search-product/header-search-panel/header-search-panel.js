import React, { useState } from "react";
import SearchedProductsList from "../searched-products-list/searched-products-list";
import GetSearchedList from "../get-searched-list/get-searched-list";
import "./header-search-panel.css";
const HeaderSearchPanel = ({
	fetchSearchProducts,
	products,
	loading,
	error,
}) => {
	const [activeLabel, setActiveLabel] = useState(false);
	const [value, setValue] = useState("");
	const clickSearch = () => {
		if (document.querySelector(".search-block input").value === "")
			setActiveLabel(!activeLabel);
	};
	const getValue = (e) => {
		setValue(e.target.value);
		if (e.target.value === "") clickSearch();
		fetchSearchProducts(e.target.value);
	};
	document.onclick = (e) => {
		if (
			!e.target.classList.contains("search-panel") &&
			document.querySelector(".search-block span").classList.contains("active")
		) {
			clickSearch();
		}
	};
	const classLabel = activeLabel ? "active" : "";
	return (
		<div className="header-search">
			<div className="search-block">
				<span className={classLabel}>Find the product</span>
				<input
					className="search-panel"
					onClick={clickSearch}
					onChange={(e) => getValue(e)}
					type="text"
					value={value}
				/>
			</div>
			<div className="searched-block">
				<SearchedProductsList
					products={products}
					loading={loading}
					error={error}
					activeLabel={activeLabel}
					value={value}
				/>
			</div>
		</div>
	);
};

export default GetSearchedList(HeaderSearchPanel);
