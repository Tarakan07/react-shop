const getProductsList = (state, action) => {
	if (state === undefined) {
		return {
			products: [],
			skip: null,
			limit: null,
			loading: true,
			error: null,
		};
	}

	switch (action.type) {
		case "FETCH_PRODUCTS_REQUEST":
			return {
				products: state.productsList.products,
				skip: 0,
				limit: 10,
				loading: true,
				error: null,
			};
		case "FETCH_PRODUCTS_SUCCESS":
			return {
				products: action.payload,
				skip: action.skip,
				limit: action.limit,
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
				loading: false,
				error: null,
			};
		case "FETCH_PRODUCTS_FAILURE":
			return {
				products: [],
				skip: null,
				limit: null,
				loading: false,
				error: action.payload,
			};
		default:
			return state.productsList;
	}
};

export default getProductsList;
