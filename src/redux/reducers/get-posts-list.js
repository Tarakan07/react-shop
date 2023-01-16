const getPostsList = (state, action) => {
	if (state === undefined) {
		return {
			posts: [],
			skip: null,
			limit: null,
			loading: true,
			error: null,
		};
	}

	switch (action.type) {
		case "FETCH_POSTS_REQUEST":
			return {
				posts: state.postsList.posts,
				skip: 0,
				limit: 6,
				loading: true,
				error: null,
			};
		case "FETCH_POSTS_SUCCESS":
			return {
				posts: action.payload,
				skip: action.skip,
				limit: action.limit,
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
				loading: false,
				error: null,
			};
		case "FETCH_POSTS_FAILURE":
			return {
				posts: [],
				skip: null,
				limit: null,
				loading: false,
				error: action.payload,
			};
		default:
			return state.postsList;
	}
};

export default getPostsList;
