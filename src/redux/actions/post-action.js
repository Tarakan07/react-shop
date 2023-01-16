const postsRequested = () => {
	return {
		type: "FETCH_POSTS_REQUEST",
	};
};

const postsLoaded = (posts) => {
	return {
		type: "FETCH_POSTS_SUCCESS",
		payload: posts,
		skip: 0,
		limit: 6,
	};
};
const postsLoadmoreLoaded = (posts) => (skip, limit) => {
	return {
		type: "FETCH_LOADMORE_POSTS_SUCCESS",
		payload: posts,
		skip: skip,
		limit: limit,
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
const fetchLoadmorePosts = (dispatch, shopService) => (skip, limit) => {
	dispatch(postsRequested());
	shopService
		.getPosts(skip, limit)
		.then((data) => dispatch(postsLoadmoreLoaded(data)(skip, limit)))
		.catch((error) => dispatch(postsFailure(error)));
};
export { fetchPosts, fetchLoadmorePosts };
