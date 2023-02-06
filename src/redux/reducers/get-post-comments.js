const getPostComments = (state, action) => {
	const initialState = {
		comments: [],
		loading: true,
		error: null,
	};
	if (state === undefined) {
		return initialState;
	}

	switch (action.type) {
		case "FETCH_COMMENTS_REQUEST":
			return initialState;
		case "FETCH_COMMENTS_SUCCESS":
			return {
				comments: action.payload,
				loading: false,
				error: null,
			};
		case "FETCH_COMMENTS_FAILURE":
			return {
				comments: [],
				loading: false,
				error: action.payload,
			};
		default:
			return state.postComments;
	}
};
export default getPostComments;
