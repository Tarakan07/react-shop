import React from "react";
import { Link } from "react-router-dom";
const SearchedProductsItem = ({
	product: { id, title, thumbnail, brand, price, description },
}) => {
	return (
		<div className="box-searched">
			<div className="image">
				<img src={thumbnail} alt="" />
			</div>
			<div className="description">
				<p className="title">
					{title}({brand}),{price}
				</p>
				<p className="description">{description}</p>
				<Link to={`/product/${id}`}>Open product{`->`}</Link>
			</div>
		</div>
	);
};
export default SearchedProductsItem;
