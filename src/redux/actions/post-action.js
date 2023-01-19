const postsRequested = () => {
	return {
		type: "FETCH_POSTS_REQUEST",
	};
};

const postsLoaded = (posts) => (skip, limit) => {
	return {
		type: "FETCH_POSTS_SUCCESS",
		payload: posts,
		skip: skip,
		limit: limit,
		total: 150,
	};
};
const postsFailure = (error) => {
	return {
		type: "FETCH_POSTS_FAILURE",
		payload: error,
	};
};

const fetchPosts =
	(dispatch, shopService) =>
	(skip = 0, limit = 6) => {
		dispatch(postsRequested());
		shopService
			.getPosts(skip, limit)
			.then((data) => dispatch(postsLoaded(data)(skip, limit)))
			.catch((error) => dispatch(postsFailure(error)));
	};
export default fetchPosts;
