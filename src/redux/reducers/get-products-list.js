const getProductsList = (state, action) => {
	const initialState = {
		products: [],
		skip: 0,
		limit: 10,
		total: 100,
		loading: true,
		error: null,
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
			const oldState =
				action.skip !== 0 ? state.productsList.products.products : [];
			return {
				products: {
					products: [...oldState, ...action.payload.products],
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
