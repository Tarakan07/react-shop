const getProductsList = (state, action) => {
	const initialState = {
		products: [],
		skip: null,
		limit: null,
		loading: true,
		error: null,
		total: null,
	};
	if (state === undefined) {
		return initialState;
	}

	switch (action.type) {
		case "FETCH_PRODUCTS_REQUEST":
			return {
				...initialState,
				products: state.productsList.products,
			};
		case "FETCH_PRODUCTS_SUCCESS":
			return {
				products: action.payload,
				skip: action.skip,
				limit: action.limit,
				total: action.total,
				loading: false,
				error: null,
			};
		case "FETCH_LOADMORE_PRODUCTS_SUCCESS":
			return {
				products: {
					products: [
						...state.productsList.products.products,
						...action.payload.products,
					],
				},
				skip: action.skip,
				limit: action.limit,
				total: action.total,
				loading: false,
				error: null,
			};
		case "FETCH_PRODUCTS_FAILURE":
			return {
				...initialState,
				loading: false,
				error: action.payload,
			};
		default:
			return state.productsList;
	}
};

export default getProductsList;
