import React from "react";

const CartItemPage = ({
	item,
	idx,
	productAddedToCart,
	productRemovedFromCart,
	allProductsRemovedFromCart,
}) => {
	const { id, title, thumbnail, count, price } = item;
	console.log(thumbnail);
	return (
		<div className="box-list">
			<div className="number">{idx}</div>
			<div className="image">
				<img src={thumbnail} alt="" />
			</div>
			<div className="title">{title}</div>
			<div className="count">{count}</div>
			<div className="total">{price}</div>
			<div className="config-item">
				<div className="add" onClick={() => productAddedToCart(id)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25px"
						height="25px"
						fill="currentColor"
						className="bi bi-plus-circle"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
					</svg>
				</div>
				<div className="remove" onClick={() => productRemovedFromCart(id)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25px"
						height="25px"
						fill="currentColor"
						className="bi bi-dash-circle"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
					</svg>
				</div>
				<div
					className="remove-all"
					onClick={() => allProductsRemovedFromCart(id)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25px"
						height="25px"
						fill="currentColor"
						className="bi bi-x-circle"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default CartItemPage;
