import React, { useEffect, useCallback } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { WithShopService } from "../../hoc";
import { fetchPosts, fetchLoadmorePosts } from "../../../redux/actions";
import PostList from "../post-list";

const GetPosts = ({
	loading,
	error,
	posts,
	fetchPosts,
	fetchLoadmorePosts,
	skip,
	total,
	limit,
}) => {
	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);
	useCallback(
		(window.onscroll = (event) => {
			const height = document.body.offsetHeight;
			const screenHeight = window.innerHeight;
			const scrolled = window.scrollY;

			// Обозначим порог, по приближении к которому
			// будем вызывать какое-то действие.
			// В нашем случае — четверть экрана до конца страницы:
			const threshold = height - screenHeight / 6;

			// Отслеживаем, где находится низ экрана относительно страницы:
			const position = scrolled + screenHeight;

			if (position >= threshold && skip !== total - 6) {
				console.log("startFetch", skip);
				fetchLoadmorePosts(skip + 6, limit);
			}
		}),
		[skip]
	);

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
		fetchPosts: () => fetchPosts(dispatch, shopService)(),
		fetchLoadmorePosts: (skip, limit) =>
			fetchLoadmorePosts(dispatch, shopService)(skip, limit),
	};
};

export default compose(
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(GetPosts);
