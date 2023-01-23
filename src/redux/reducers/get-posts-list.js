const getPostsList = (state, action) => {
	const initialState = {
		posts: [],
		skip: 0,
		limit: 6,
		total: 150,
		loading: true,
		error: null,
	};
	if (state === undefined) {
		return initialState;
	}

	switch (action.type) {
		case "FETCH_POSTS_REQUEST":
			return {
				...initialState,
				posts: state.postsList.posts,
			};

		case "FETCH_POSTS_SUCCESS":
			const oldState = action.skip !== 0 ? state.postsList.posts : [];
			return {
				posts: [...oldState, ...action.payload],
				skip: action.skip,
				limit: action.limit,
				total: action.total,
				loading: false,
				error: null,
			};
		case "FETCH_POSTS_FAILURE":
			return {
				...initialState,
				loading: false,
				error: action.payload,
			};
		default:
			return state.postsList;
	}
};

export default getPostsList;
