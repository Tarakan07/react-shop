import React from "react";
import { Link } from "react-router-dom";
import "./products-item.css";
const ProductsItem = ({ product }) => {
	const { id, brand, category, price, thumbnail, title, rating } = product;
	// to={`/product/${link}`}

	return (
		<Link
			to={{
				pathname: `/product/${id}`,
				state: {
					product,
				},
			}}
		>
			<div className="image">
				<img src={thumbnail} alt="" />
				<div>
					<span>Rating:</span>
					<span className="rating">{rating}</span>
				</div>
			</div>
			<div className="box-products__descr">
				<p className="title">{title}</p>
				<span className="price">{price}$</span>
			</div>
			<div className="box-products__info">
				<span>{category}</span>, <span> {brand}</span>
			</div>
		</Link>
	);
};

export default ProductsItem;
