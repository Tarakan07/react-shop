const onceProduct = (state, action) => {
	const initialState = {
		product: [],
		loading: true,
		error: null,
	};
	if (state === undefined) {
		return initialState;
	}
	switch (action.type) {
		case "FETCH_PRODUCT_REQUEST":
			return initialState;
		case "FETCH_PRODUCT_SUCCESS":
			return {
				product: action.payload,
				loading: false,
				error: null,
			};
		case "FETCH_PRODUCT_FAILURE":
			return {
				product: [],
				loading: false,
				error: action.payload,
			};
		default:
			return state.onceProduct;
	}
};

export default onceProduct;
