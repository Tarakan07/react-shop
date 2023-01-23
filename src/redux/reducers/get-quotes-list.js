const getQuotesList = (state, action) => {
	const initialState = {
		quotes: [],
		skip: 0,
		limit: 8,
		total: 100,
		loading: true,
		error: null,
	};
	if (state === undefined) {
		return initialState;
	}

	switch (action.type) {
		case "FETCH_QUOTES_REQUEST":
			return {
				...initialState,
				quotes: state.quotesList.quotes,
			};

		case "FETCH_QUOTES_SUCCESS":
			return {
				quotes: action.payload,
				skip: action.skip,
				limit: action.limit,
				total: action.total,
				loading: false,
				error: null,
			};
		case "FETCH_QUOTES_FAILURE":
			return {
				...initialState,
				loading: false,
				error: action.payload,
			};
		default:
			return state.quotesList;
	}
};

export default getQuotesList;
