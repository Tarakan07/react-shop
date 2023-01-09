import React from "react";
import { Link } from "react-router-dom";
const PostItem = ({ post }) => {
	const { id, title, tags, body } = post;
	const sliceTxt = (str) => {
		return str.split(" ").slice(0, 25).join(" ");
	};

	sliceTxt(body);
	return (
		<Link
			to={{
				pathname: `/posts/${id}`,
				state: {
					post,
				},
			}}
		>
			<img
				src="https://www.digiseller.ru/preview/887435/p1_2746191_e5be61eb.jpg"
				alt=""
			/>

			<div className="post-category">
				<span>Cat:</span>
				{tags.map((el, idx) => {
					return <span key={idx}>{el}</span>;
				})}
			</div>

			<div className="post-info">
				<p className="post-title">{title}</p>
				<p className="body">{sliceTxt(body) + "..."}</p>
			</div>
		</Link>
	);
};

export default PostItem;
