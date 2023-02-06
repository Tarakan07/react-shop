const getSearchedProducts = (state, action) => {
	const initialState = {
		products: [],
		loading: false,
		error: null,
	};
	if (state === undefined) {
		return initialState;
	}

	switch (action.type) {
		case "FETCH_SEARCHED_PRODUCTS_REQUEST":
			return {
				...initialState,
				loading: true,
				products: state.searchedProducts.products,
			};

		case "FETCH_SEARCHED_PRODUCTS_SUCCESS":
			return {
				products: action.payload.products,
				loading: false,
				error: null,
			};
		case "FETCH_SEARCHED_PRODUCTS_FAILURE":
			return {
				...initialState,
				loading: false,
				error: action.payload,
			};
		default:
			return state.searchedProducts;
	}
};

export default getSearchedProducts;
