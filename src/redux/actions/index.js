const shopRequested = () => {
	return {
		type: "FETCH_BOOKS_REQUEST",
	};
};

const shopLoadedSuccess = (products) => {
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
export { shopRequested, shopLoadedSuccess, shopFailure };
