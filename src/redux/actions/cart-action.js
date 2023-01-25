const productAddedToCart = (productId) => {
	return {
		type: "PRODUCT_ADDED_TO_CART",
		payload: productId,
	};
};
const productRemovedFromCart = (productId) => {
	return {
		type: "PRODUCT_REMOVED_FROM_CART",
		payload: productId,
	};
};
const allProductsRemovedFromCart = (productId) => {
	return {
		type: "ALL_PRODUCTS_REMOVED_FROM_CART",
		payload: productId,
	};
};

export {
	productAddedToCart,
	productRemovedFromCart,
	allProductsRemovedFromCart,
};
