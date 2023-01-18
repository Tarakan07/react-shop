const productsRequested = () => {
	return {
		type: "FETCH_PRODUCTS_REQUEST",
	};
};

const productsLoaded = (product) => (skip, limit) => {
	return {
		type: "FETCH_PRODUCTS_SUCCESS",
		payload: product,
		skip: skip,
		limit: limit,
		total: 100,
	};
};
const productsFailure = (error) => {
	return {
		type: "FETCH_PRODUCTS_FAILURE",
		payload: error,
	};
};

const fetchProducts =
	(dispatch, shopService) =>
	(cat) =>
	(skip = 0, limit = 10) => {
		dispatch(productsRequested());

		shopService
			.getProducts(
				skip,
				limit
			)(cat)
			.then((data) => dispatch(productsLoaded(data)(skip, limit)))
			.catch((error) => dispatch(productsFailure(error)));
	};
export default fetchProducts;
