import React from "react";
import { Route, Switch } from "react-router-dom";
import FooterShop from "../footer-shop";
import HeaderShop from "../header-shop";
import {
	MainPageShop,
	ProductPage,
	ProductsPage,
	PostsPage,
	PostPage,
	QuotesPage,
	CartPage,
} from "../pages";
import "./app.css";
const App = () => {
	return (
		<div className="wrap-project">
			<HeaderShop />
			<Switch>
				<Route path="/" component={MainPageShop} exact />
				<Route path="/product/:id/" component={ProductPage} />
				<Route path="/products/:filter/" render={ProductsPage} />
				<Route path="/products/" component={ProductsPage} />
				<Route path="/posts/:id" component={PostPage} />
				<Route path="/posts/" component={PostsPage} />
				<Route path="/quotes/:page" component={QuotesPage} />
				<Route path="/quotes/" component={QuotesPage} />
				<Route path="/cart" component={CartPage} />
			</Switch>
			<FooterShop />
		</div>
	);
};

export default App;
