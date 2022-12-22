import React from "react";

const ProductBoxDescription = ({ descriptionProduct }) => {
	console.log(descriptionProduct);
	const {
		brand,
		category,
		description,
		discountPercentage,
		rating,
		stock,
		price,
	} = descriptionProduct;
	return (
		<div className="product-box-description">
			<div className="product-box__buttons">
				<button className="change-description">Show description</button>
				<button className="add-to-cart">Add to cart</button>
			</div>
			<div className="description">
				<ul>
					<li>
						<span>Rating</span>
						<p>{rating}</p>
					</li>
					<li>
						<span>Brand</span>
						<p>{brand}</p>
					</li>
					<li>
						<span>Category</span>
						<p>{category}</p>
					</li>
					<li>
						<span>Description</span>
						<p>{description}</p>
					</li>
					<li>
						<span>Discount percentage</span>
						<p>{discountPercentage}</p>
					</li>
					<li>
						<span>Stock</span>
						<p>{stock}</p>
					</li>
					<li>
						<span>Price</span>
						<p>{price}</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProductBoxDescription;
