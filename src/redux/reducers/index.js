const reducer = (state, action) => {
	if (state === undefined) {
		return {
			products: [],
			loading: true,
			error: null,
		};
	}

	switch (action.type) {
		case "FETCH_BOOKS_REQUEST":
			return {
				products: [],
				loading: true,
				error: null,
			};
		case "FETCH_PRODUCTS_SUCCESS":
			return {
				products: action.payload,
				loading: false,
				error: null,
			};
		case "FETCH_BOOKS_FAILURE":
			return {
				products: [],
				loading: false,
				error: action.payload,
			};
		default:
			return state.products;
	}
};

export default reducer;
