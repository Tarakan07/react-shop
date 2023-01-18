import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { WithShopService } from "../../hoc";
import { fetchPosts } from "../../../redux/actions";
import PostList from "../post-list";

const GetPosts = ({
	loading,
	error,
	posts,
	fetchPosts,
	skip,
	total,
	limit,
}) => {
	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	window.onscroll = (event) => {
		const height = document.body.offsetHeight;
		const screenHeight = window.innerHeight;
		const scrolled = window.scrollY;
		const threshold = height - screenHeight / 6;
		const position = scrolled + screenHeight;

		if (position >= threshold && skip !== total - 6) {
			fetchPosts(skip + 6, limit);
		}
	};

	return <PostList posts={posts} loading={loading} error={error} />;
};

const mapStateToProps = (state) => {
	const {
		postsList: { posts, loading, error, skip, limit, total },
	} = state;

	return { posts, loading, error, skip, limit, total };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchPosts: (skip, limit) => fetchPosts(dispatch, shopService)(skip, limit),
	};
};

export default compose(
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(GetPosts);
