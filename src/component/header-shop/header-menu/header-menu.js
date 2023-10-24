import React from "react";
import { Link } from "react-router-dom";
const HeaderMenu = () => {
	return (
		<div className="header-menu">
			<Link to="/">
				<img
					src="https://pp.userapi.com/c638829/v638829698/66551/OD7He2C9Kl0.jpg"
					alt=""
					className="header-logo"
				/>
			</Link>
			<ul>
				<li>
					<Link to="/products/">Products</Link>
				</li>
				<li>
					<Link to="/posts/">Posts</Link>
				</li>
				<li>
					<Link to="/quotes/">Quotes</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
			</ul>
		</div>
	);
};

export default HeaderMenu;
