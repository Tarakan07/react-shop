import React from "react";
import { Route, Switch } from "react-router-dom";
import FooterShop from "../footer-shop";
import HeaderShop from "../header-shop";
import CartPopup from "../cart/cart-popup/cart-popup";
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
			<CartPopup />
			<div className="project-block">
				<HeaderShop />
				<Switch>
					<Route path="/react-shop/" component={MainPageShop} exact />
					<Route path="/react-shop/product/:id/" component={ProductPage} />
					<Route path="/react-shop/products/:filter/" render={ProductsPage} />
					<Route path="/react-shop/products/" component={ProductsPage} />
					<Route path="/react-shop/posts/:id" component={PostPage} />
					<Route path="/react-shop/posts/" component={PostsPage} />
					<Route path="/react-shop/quotes/:page" component={QuotesPage} />
					<Route path="/react-shop/quotes/" component={QuotesPage} />
					<Route path="/react-shop/cart" component={CartPage} />
				</Switch>
				<FooterShop />
			</div>
		</div>
	);
};

export default App;
