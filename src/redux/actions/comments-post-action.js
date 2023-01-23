const commentsRequested = () => {
	return {
		type: "FETCH_COMMENTS_REQUEST",
	};
};

const commentsLoaded = (comments) => {
	return {
		type: "FETCH_COMMENTS_SUCCESS",
		payload: comments,
	};
};

const commentsFailure = (error) => {
	return {
		type: "FETCH_COMMENTS_FAILURE",
		payload: error,
	};
};

const fetchCommentsPost = (dispatch, shopService) => (id) => {
	dispatch(commentsRequested());
	shopService
		.getCommentPost(id)
		.then(({ comments }) => dispatch(commentsLoaded(comments)))
		.catch((error) => dispatch(commentsFailure(error)));
};

export default fetchCommentsPost;
