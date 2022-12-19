const shopRequested = () => {
	return {
		type: "FETCH_BOOKS_REQUEST",
	};
};

const shopLoaded = (products) => {
	return {
		type: "FETCH_PRODUCTS_SUCCESS",
		payload: products,
	};
};

const shopFailure = (error) => {
	return {
		type: "FETCH_BOOKS_FAILURE",
		payload: error,
	};
};

const fetchProducts = (dispatch, shopService) => () => {
	dispatch(shopRequested());
	shopService
		.getAllProducts()
		.then((data) => dispatch(shopLoaded(data)))
		.catch((error) => dispatch(shopFailure(error)));
};
export { shopRequested, shopLoaded, shopFailure, fetchProducts };
