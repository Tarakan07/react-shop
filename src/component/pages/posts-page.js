import React from "react";
import GetPosts from "../posts/get-posts";
import "./css/posts-page.css";
import "./css/pages.css";
const PostsPage = () => {
	return (
		<div className="posts-block wrap-block-page">
			<h1>Posts page</h1>
			<GetPosts />
		</div>
	);
};

export default PostsPage;
