import React from "react";
import { Link } from "react-router-dom";
const HeaderMenu = () => {
	return (
		<div className="header-menu">
			<Link to="/react-shop/">
				<img
					src="https://pp.userapi.com/c638829/v638829698/66551/OD7He2C9Kl0.jpg"
					alt=""
					className="header-logo"
				/>
			</Link>
			<ul>
				<li>
					<Link to="/react-shop/products/">Products</Link>
				</li>
				<li>
					<Link to="/react-shop/posts/">Posts</Link>
				</li>
				<li>
					<Link to="/react-shop/quotes/">Quotes</Link>
				</li>
				<li>
					<Link to="/react-shop/cart">Cart</Link>
				</li>
			</ul>
		</div>
	);
};

export default HeaderMenu;
