import React from "react";
import ErrorIndicator from "../../error-indicator";
import Spinner from "../../spinner";
import PostItem from "../post-item";
import "./post-list.css";
const PostList = ({ posts, loading, error }) => {
	if (loading && posts.length === 0) {
		return <Spinner />;
	}
	if (error) return <ErrorIndicator />;

	return (
		<div className="post-list">
			{posts.map((el) => {
				return (
					<div key={el.id} className="box-post" num={el.id}>
						<PostItem post={el} />
					</div>
				);
			})}
		</div>
	);
};

export default PostList;
