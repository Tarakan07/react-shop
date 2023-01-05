const productsRequested = () => {
	return {
		type: "FETCH_PRODUCTS_REQUEST",
	};
};

const productsLoaded = (product) => {
	return {
		type: "FETCH_PRODUCTS_SUCCESS",
		payload: product,
	};
};

const productsFailure = (error) => {
	return {
		type: "FETCH_PRODUCTS_FAILURE",
		payload: error,
	};
};

const fetchProducts = (dispatch, shopService) => (cat) => {
	dispatch(productsRequested());
	shopService
		.getProducts(cat)
		.then((data) => dispatch(productsLoaded(data)))
		.catch((error) => dispatch(productsFailure(error)));
};

export default fetchProducts;
