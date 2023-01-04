import React from "react";
import { connect } from "react-redux";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";
const CategoryFilter = ({ products, error, loading }) => {
	const productCat = new Array();
	productCat.push("All");
	products.products.filter((obj, index, array) => {
		if (array.map((el) => el.category).indexOf(obj.category) == index) {
			productCat.push(obj.category);
		}
	});

	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return <ErrorIndicator />;
	}

	return (
		<div className="category-filter">
			<ul>
				{productCat.map((el, idx) => {
					if (idx == 0) {
						return (
							<li className="active" key={idx + 1}>
								{el}
							</li>
						);
					}
					return <li key={idx + 1}>{el}</li>;
				})}
			</ul>
		</div>
	);
};
const mapStateToProps = (state) => {
	const {
		allProductsList: { products, loading, error },
	} = state;
	return { products, loading, error };
};

export default connect(mapStateToProps)(CategoryFilter);
