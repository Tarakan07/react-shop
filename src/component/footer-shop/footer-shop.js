import React from "react";
import { withRouter } from "react-router";
import "./footer-shop.css";
const FooterShop = ({ location }) => {
	if (location.pathname === "/posts/") return null;
	return (
		<div className="block-footer">
			<span>footer shop</span>
		</div>
	);
};
export default withRouter(FooterShop);
