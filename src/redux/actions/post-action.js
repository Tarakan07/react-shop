const postsRequested = () => {
	return {
		type: "FETCH_POSTS_REQUEST",
	};
};

const postsLoaded = (product) => {
	return {
		type: "FETCH_POSTS_SUCCESS",
		payload: product,
	};
};

const postsFailure = (error) => {
	return {
		type: "FETCH_POSTS_FAILURE",
		payload: error,
	};
};

const fetchPosts = (dispatch, shopService) => () => {
	dispatch(postsRequested());
	shopService
		.getPosts()
		.then((data) => dispatch(postsLoaded(data)))
		.catch((error) => dispatch(postsFailure(error)));
};

export default fetchPosts;
