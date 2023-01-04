import React from "react";
import { Route, Switch } from "react-router-dom";
import FooterShop from "../footer-shop";
import HeaderShop from "../header-shop";
import { MainPageShop, ProductPage, ProductsPage } from "../pages";
import ProductsFilter from "../products-filter";
import "./app.css";
const App = () => {
	return (
		<div className="wrap-project">
			<HeaderShop />
			<Switch>
				<Route path="/" component={MainPageShop} exact />
				<Route path="/product/:id/" component={ProductPage} />

				<Route path="/products" component={ProductsPage} />
			</Switch>
			<FooterShop />
		</div>
	);
};

export default App;
