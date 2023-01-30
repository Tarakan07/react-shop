import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import BlockDescription from "./block-description";
const ProductBoxDescription = ({
	descriptionProduct,
	history,
	match,
	addedToCart,
	hasInCart,
}) => {
	const [descr, setDescr] = useState({
		titleBtn: "Show description",
		show: false,
	});
	const toggleDescription = (e) => {
		if (descr.show) {
			history.push(match.url);
			setDescr({
				titleBtn: "Show description",
				show: false,
			});
		} else {
			history.push(match.url + "/description");
			setDescr({
				titleBtn: "Close description",
				show: true,
			});
		}
	};
	return (
		<div className="product-box-description">
			<div className="product-box__buttons">
				<button
					onClick={(e) => toggleDescription(e)}
					className="change-description"
				>
					{descr.titleBtn}
				</button>
				<button onClick={addedToCart} className={`add-to-cart ${hasInCart}`}>
					Add to cart
				</button>
			</div>
			<Switch>
				<Route
					path={match.url + "/description"}
					render={() => (
						<BlockDescription descriptionProduct={descriptionProduct} />
					)}
				/>
			</Switch>
		</div>
	);
};

export default withRouter(ProductBoxDescription);
