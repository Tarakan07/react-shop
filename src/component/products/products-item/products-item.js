import React from "react";
import { Link } from "react-router-dom";
import "./products-item.css";
import GetCart from "../../cart/get-cart";
const ProductsItem = ({ product }) => {
	const { id, brand, category, price, thumbnail, title, rating } = product;

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
			<div className="box-products__add-to-cart">
				<button>Add to Cart</button>
			</div>
		</Link>
	);
};

export default GetCart(ProductsItem);
