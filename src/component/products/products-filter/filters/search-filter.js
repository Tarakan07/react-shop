import React, { useState } from "react";
const SearchFilter = ({ searchFilter }) => {
	const [value, setValue] = useState("");
	const changeSearchPanel = (e) => {
		setValue(e.target.value);
		searchFilter(e.target.value);
	};

	return (
		<div className="search-filter">
			<input
				type="text"
				value={value}
				placeholder="Write brend"
				onChange={changeSearchPanel}
			/>
		</div>
	);
};

export default SearchFilter;
