const catRequested = () => {
	return {
		type: "FETCH_CATEGORIES_REQUEST",
	};
};

const catLoaded = (categories) => {
	return {
		type: "FETCH_CATEGORIES_SUCCESS",
		payload: categories,
	};
};

const catFailure = (error) => {
	return {
		type: "FETCH_CATEGORIES_FAILURE",
		payload: error,
	};
};
const fetchCategories = (dispatch, shopService) => () => {
	dispatch(catRequested());
	shopService
		.getCategories()
		.then((data) => dispatch(catLoaded(data)))
		.catch((error) => dispatch(catFailure(error)));
};

export default fetchCategories;
