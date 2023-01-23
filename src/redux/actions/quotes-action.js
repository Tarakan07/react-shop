const quotesRequested = () => {
	return {
		type: "FETCH_QUOTES_REQUEST",
	};
};

const quotesLoaded = (quotes) => (skip, limit) => {
	return {
		type: "FETCH_QUOTES_SUCCESS",
		payload: quotes,
		skip: skip,
		limit: limit,
		total: 100,
	};
};
const quotesFailure = (error) => {
	return {
		type: "FETCH_QUOTES_FAILURE",
		payload: error,
	};
};

const fetchQuotes =
	(dispatch, shopService) =>
	(skip = 0, limit = 8) => {
		dispatch(quotesRequested());
		shopService
			.getQuotes(skip, limit)
			.then(({ quotes }) => dispatch(quotesLoaded(quotes)(skip, limit)))
			.catch((error) => dispatch(quotesFailure(error)));
	};
export default fetchQuotes;
