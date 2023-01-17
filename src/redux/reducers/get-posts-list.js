const getPostsList = (state, action) => {
	const initialState = {
		posts: [],
		skip: null,
		limit: null,
		total: null,
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
			return {
				posts: action.payload,
				skip: action.skip,
				limit: action.limit,
				total: action.total,
				loading: false,
				error: null,
			};
		case "FETCH_LOADMORE_POSTS_SUCCESS":
			return {
				posts: {
					posts: [...state.postsList.posts.posts, ...action.payload.posts],
				},
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
