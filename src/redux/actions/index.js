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

const fetchProductsByID = (dispatch, shopService) => (id) => {
	dispatch(productRequested());
	shopService
		.getProductsID(id)
		.then((data) => dispatch(productLoaded(data)))
		.catch((error) => dispatch(productFailure(error)));
};

const fetchProductCategory=(dispatch,shopService)=>(id,title)=>{
	
}
export {
	shopRequested,
	shopLoaded,
	shopFailure,
	productRequested,
	productLoaded,
	productFailure,
	fetchProducts,
	fetchProductsByID,
};
