import React from "react";

const BlockDescription = ({ descriptionProduct }) => {
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
	);
};

export default BlockDescription;
