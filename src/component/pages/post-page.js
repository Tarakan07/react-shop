import React from "react";
import PostComments from "../posts/post-comments";
import "./css/post-page.css";
import { withRouter } from "react-router";
const PostPage = (props) => {
	if (props.location.state !== undefined) {
		const { id, title, tags, body } = props.location.state.post;

		return (
			<div className="section-post">
				<h1>{title}</h1>
				<div className="wrap-post-block">
					<div className="category-post">
						Category:{" "}
						{tags.map((el, idx) => {
							return tags.length - 1 === idx ? el : el + ",";
						})}
					</div>
					<div className="body-post">{body}</div>
				</div>
				<div className="comments">
					<h2>Comments:</h2>
					<PostComments postId={id} />
				</div>
			</div>
		);
	}
	return <h1>Error</h1>;
};

export default PostPage;
