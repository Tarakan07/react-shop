import React, { useEffect } from "react";
import "./post-list.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { WithShopService } from "../../hoc";
import { fetchPosts } from "../../../redux/actions";
import PostItem from "../post-item";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";
const PostList = ({ loading, error, posts, fetchPosts }) => {
	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);
	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return <ErrorIndicator error={error} />;
	}
	return (
		<div className="post-list">
			{posts.posts.map((el) => {
				return (
					<div key={el.id} className="box-post">
						<PostItem post={el} />
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	const {
		postsList: { posts, loading, error },
	} = state;
	return { posts, loading, error };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchPosts: () => fetchPosts(dispatch, shopService)(),
	};
};

export default compose(
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(PostList);
