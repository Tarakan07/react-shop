const categories = (state, action) => {
	const initialState = {
		categories: [],
		loading: true,
		error: null,
	};
	if (state === undefined) {
		return initialState;
	}
	switch (action.type) {
		case "FETCH_CATEGORIES_REQUEST":
			return initialState;
		case "FETCH_CATEGORIES_SUCCESS":
			return {
				categories: action.payload,
				loading: false,
				error: null,
			};
		case "FETCH_CATEGORIES_FAILURE":
			return {
				categories: [],
				loading: false,
				error: action.payload,
			};
		default:
			return state.categories;
	}
};

export default categories;
