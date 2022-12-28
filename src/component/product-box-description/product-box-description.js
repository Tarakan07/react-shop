import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import BlockDescription from "./block-description";
const ProductBoxDescription = ({ descriptionProduct, history, match }) => {
	const [descr, setDescr] = useState(false);
	console.log(match, history);
	const toggleDescription = (e) => {
		if (descr) {
		}
		history.push(match.url + "/description");
		e.target.innerHTML = "Close description";
	};
	return (
		<div className="product-box-description">
			<div className="product-box__buttons">
				<button
					onClick={(e) => toggleDescription(e)}
					className="change-description"
				>
					Show description
				</button>
				<button className="add-to-cart">Add to cart</button>
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
