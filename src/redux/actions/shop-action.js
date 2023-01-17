const productsRequested = () => {
	return {
		type: "FETCH_PRODUCTS_REQUEST",
	};
};

const productsLoaded = (product) => {
	return {
		type: "FETCH_PRODUCTS_SUCCESS",
		payload: product,
		skip: 0,
		limit: 10,
		total: 100,
	};
};
const productsLoadmoreLoaded = (product) => (skip, limit) => {
	return {
		type: "FETCH_LOADMORE_PRODUCTS_SUCCESS",
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

const fetchProducts = (dispatch, shopService) => (cat) => {
	dispatch(productsRequested());
	shopService
		.getProducts()(cat)
		.then((data) => dispatch(productsLoaded(data)))
		.catch((error) => dispatch(productsFailure(error)));
};
const fetchLoadmoreProducts =
	(dispatch, shopService) => (cat) => (skip, limit) => {
		dispatch(productsRequested());
		shopService
			.getProducts(
				skip,
				limit
			)(cat)
			.then((data) => dispatch(productsLoadmoreLoaded(data)(skip, limit)))
			.catch((error) => dispatch(productsFailure(error)));
	};
export { fetchProducts, fetchLoadmoreProducts };
