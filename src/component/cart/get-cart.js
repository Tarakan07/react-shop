import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
	productAddedToCart,
	productRemovedFromCart,
	allProductsRemovedFromCart,
} from "../../redux/actions";

// const GetCart =
// 	({
// 		productsCart,
// 		orderTotal,
// 		productAddedToCart,
// 		productRemovedFromCart,
// 		allProductsRemovedFromCart,
// 	}) =>
// 	(View) => {
// 		return (props) => {
// 			return (
// 				<View
// 					{...props}
// 					productsCart={productsCart}
// 					orderTotal={orderTotal}
// 					productAddedToCart={productAddedToCart}
// 					productRemovedFromCart={productRemovedFromCart}
// 					allProductsRemovedFromCart={allProductsRemovedFromCart}
// 				/>
// 			);
// 		};
// 	};

// const mapStateToProps = ({ productsCart, orderTotal }) => {
// 	return { productsCart, orderTotal };
// };
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(
// 		{ productAddedToCart, productRemovedFromCart, allProductsRemovedFromCart },
// 		dispatch
// 	);
// };
// export default compose(connect(mapStateToProps, mapDispatchToProps))(GetCart);
const mapStateToProps = ({ productsCart, orderTotal }) => {
	return { productsCart, orderTotal };
};

const GetCart = (View) => {
	return (props) => {
		return <View {...props} />;
	};
};
export default GetCart;
