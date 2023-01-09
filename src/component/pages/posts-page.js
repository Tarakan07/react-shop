import React from "react";
import PostList from "../posts/post-list";
import "./css/posts-page.css";
const PostsPage = () => {
	return (
		<div className="posts-block">
			<h1>Posts page</h1>
			<PostList />
		</div>
	);
};

export default PostsPage;
