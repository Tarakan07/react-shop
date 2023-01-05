const productRequested = () => {
	return {
		type: "FETCH_PRODUCT_REQUEST",
	};
};

const productLoaded = (product) => {
	return {
		type: "FETCH_PRODUCT_SUCCESS",
		payload: product,
	};
};

const productFailure = (error) => {
	return {
		type: "FETCH_PRODUCT_FAILURE",
		payload: error,
	};
};

const fetchProductsByID = (dispatch, shopService) => (id) => {
	dispatch(productRequested());
	shopService
		.getProductsByID(id)
		.then((data) => dispatch(productLoaded(data)))
		.catch((error) => dispatch(productFailure(error)));
};

export default fetchProductsByID;
