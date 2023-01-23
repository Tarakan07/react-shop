import React, { useEffect } from "react";
import { WithShopService } from "../../hoc/";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";
import compose from "../../../utils/compose";
import { connect } from "react-redux";
import { fetchCommentsPost } from "../../../redux/actions";
import "./post-comments.css";
const PostComments = ({
	postId,
	fetchCommentsPost,
	comments,
	loading,
	error,
}) => {
	useEffect(() => {
		fetchCommentsPost(postId);
	}, [fetchCommentsPost, postId]);

	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return <ErrorIndicator />;
	}
	return comments.map((el) => {
		return (
			<div key={el.id} className="box-comment">
				<span>Name's: {el.user.username}</span>
				<p>{el.body}</p>
			</div>
		);
	});
};

const mapStateToProps = ({ postComments: { comments, loading, error } }) => {
	return {
		comments,
		loading,
		error,
	};
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchCommentsPost: (id) => fetchCommentsPost(dispatch, shopService)(id),
	};
};
export default compose(
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(PostComments);
