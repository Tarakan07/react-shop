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
	};
};
const productsLoadmoreLoaded = (product) => (skip, limit) => {
	return {
		type: "FETCH_LOADMORE_PRODUCTS_SUCCESS",
		payload: product,
		skip: skip,
		limit: limit,
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
			.then((el) => console.log(el))
			.catch((error) => dispatch(productsFailure(error)));
	};
export { fetchProducts, fetchLoadmoreProducts };
