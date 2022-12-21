import React from "react";

const ProductBoxDescription = () => {
	return (
		<div className="product-box-description">
			<div className="product-box__buttons">
				<button className="change-description">Show description</button>
				<button className="add-to-cart">Add to cart</button>
			</div>
			<div className="description">
				<ul>
					<li>
						<span>brand</span>
						<p>Apple</p>
					</li>
					<li>
						<span>category</span>
						<p>smartphones</p>
					</li>
					<li>
						<span>description</span>
						<p>
							SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED
							technology A12 Bionic chip with ...
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProductBoxDescription;
