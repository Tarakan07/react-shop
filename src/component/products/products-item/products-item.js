import React from "react";
import { Link } from "react-router-dom";
import "./products-item.css";
const ProductsItem = ({ product, productAddedToCart }) => {
	const { id, brand, category, price, thumbnail, title, rating } = product;

	return (
		<React.Fragment>
			<Link to={`/product/${id}`}>
				<div className="image">
					<img src={thumbnail} alt="" />
					<div>
						<span>Rating:</span>
						<span className="rating">{rating}</span>
					</div>
				</div>
			</Link>
			<div className="box-products__descr">
				<p className="title">{title}</p>
				<span className="price">{price}$</span>
			</div>
			<div className="box-products__info">
				<span>{category}</span>, <span> {brand}</span>
			</div>
			<div className="box-products__add-to-cart">
				<button onClick={() => productAddedToCart(Number(id))}>
					Add to Cart
				</button>
			</div>
		</React.Fragment>
	);
};

export default ProductsItem;
