const searchProductRequested = () => {
	return {
		type: "FETCH_SEARCHED_PRODUCTS_REQUEST",
	};
};

const searchProductLoaded = (product) => {
	return {
		type: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
		payload: product,
	};
};

const searchProductFailure = (error) => {
	return {
		type: "FETCH_SEARCHED_PRODUCTS_FAILURE",
		payload: error,
	};
};

const fetchSearchProducts =
	(dispatch, shopService) =>
	(word = "") => {
		dispatch(searchProductRequested());
		shopService
			.getSearchProducts(word)
			.then((data) => dispatch(searchProductLoaded(data)))
			.catch((error) => dispatch(searchProductFailure(error)));
	};

export default fetchSearchProducts;
