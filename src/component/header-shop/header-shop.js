import React from "react";
import HeaderMenu from "./header-menu";
import HeaderSearchPanel from "../header-search-product/header-search-panel";
import "./header-shop.css";
const HeaderShop = () => {
	return (
		<div className="wrap-header">
			<HeaderMenu />
			<HeaderSearchPanel />
		</div>
	);
};

export default HeaderShop;
