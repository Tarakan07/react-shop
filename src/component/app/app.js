import React from "react";
import { Route, Switch } from "react-router-dom";
import FooterShop from "../footer-shop";
import HeaderShop from "../header-shop";
import { MainPageShop, ProductPage } from "../pages";
import "./app.css";
const App = () => {
	return (
		<div className="wrap-project">
			<HeaderShop />
			<Switch>
				<Route path="/" component={MainPageShop} exact />
				<Route path="/product/:id/" component={ProductPage} />
			</Switch>
			<FooterShop />
		</div>
	);
};

export default App;
