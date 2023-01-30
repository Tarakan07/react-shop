import React from "react";
import GetCart from "../..";
import CartItemPage from "../cart-item";
import "./cart-list-page.css";

const CartListPage = (props) => {
	const {
		productsCart: { cartItems, orderPrice, orderCount },
		productAddedToCart,
		productRemovedFromCart,
		allProductsRemovedFromCart,
	} = props;
	if (cartItems.length === 0) {
		return (
			<span style={{ textAlign: "center" }}>I mean, your cart's empty...</span>
		);
	}

	return (
		<div className="cart-page-list">
			<div className="table-page-list">
				<div className="header-list">
					<div className="box-list">
						<div className="number">Number</div>
						<div className="title">Title</div>
						<div className="count">Count</div>
						<div className="total">Total</div>
						<div className="config-item"></div>
					</div>
				</div>
				<div className="body-list">
					{cartItems.map((el, idx) => {
						return (
							<CartItemPage
								key={el.id}
								item={el}
								idx={idx + 1}
								productAddedToCart={productAddedToCart}
								productRemovedFromCart={productRemovedFromCart}
								allProductsRemovedFromCart={allProductsRemovedFromCart}
							/>
						);
					})}
				</div>
				<div className="order-info">Cart count: {orderCount}</div>
				<div className="order-info">Cart price value: {orderPrice}</div>
			</div>
		</div>
	);
};

export default GetCart(CartListPage);
