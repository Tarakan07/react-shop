import React from "react";
import GetPosts from "../posts/get-posts";
import "./css/posts-page.css";
const PostsPage = () => {
	return (
		<div className="posts-block">
			<h1>Posts page</h1>
			<GetPosts />
		</div>
	);
};

export default PostsPage;
