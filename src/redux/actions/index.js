const shopRequested = () => {
	return {
		type: "FETCH_PRODUCTS_REQUEST",
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
		type: "FETCH_PRODUCTS_FAILURE",
		payload: error,
	};
};
const catRequested = () => {
	return {
		type: "FETCH_CATEGORIES_REQUEST",
	};
};

const catLoaded = (categories) => {
	return {
		type: "FETCH_CATEGORIES_SUCCESS",
		payload: categories,
	};
};

const catFailure = (error) => {
	return {
		type: "FETCH_CATEGORIES_FAILURE",
		payload: error,
	};
};
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

const fetchProducts = (dispatch, shopService) => () => {
	dispatch(shopRequested());
	shopService
		.getAllProducts()
		.then((data) => dispatch(shopLoaded(data)))
		.catch((error) => dispatch(shopFailure(error)));
};

const fetchCategories = (dispatch, shopService) => () => {
	dispatch(catRequested());
	shopService
		.getCategories()
		.then((data) => dispatch(catLoaded(data)))
		.catch((error) => dispatch(catFailure(error)));
};
const fetchProductsByID = (dispatch, shopService) => (id) => {
	dispatch(productRequested());
	shopService
		.getProductsID(id)
		.then((data) => dispatch(productLoaded(data)))
		.catch((error) => dispatch(productFailure(error)));
};

const fetchProductCategory = (dispatch, shopService) => (cat) => {
	dispatch(shopRequested());
	shopService
		.getCategoryProducts(cat)
		.then((data) => dispatch(shopLoaded(data)))
		.catch((error) => dispatch(shopFailure(error)));
};
export {
	shopRequested,
	shopLoaded,
	shopFailure,
	catRequested,
	catLoaded,
	catFailure,
	productRequested,
	productLoaded,
	productFailure,
	fetchProducts,
	fetchProductsByID,
	fetchProductCategory,
	fetchCategories,
};
