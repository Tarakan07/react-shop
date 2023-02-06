import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import ErrorBoundary from "./component/error-boundary";
import { ServiceProvider } from "./component/service-context";
import App from "./component/app";
import ShopService from "./services-shop/services-shop";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const shopService = new ShopService();
root.render(
	<Provider store={store}>
		<ErrorBoundary>
			<ServiceProvider value={shopService}>
				<Router>
					<App />
				</Router>
			</ServiceProvider>
		</ErrorBoundary>
	</Provider>
);
