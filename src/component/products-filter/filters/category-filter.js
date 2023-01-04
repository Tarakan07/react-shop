import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Spinner from "../../spinner";
import { WithShopService } from "../../hoc";
import ErrorIndicator from "../../error-indicator";
import { fetchCategories } from "../../../redux/actions";
class CategoryFilter extends Component {
	componentDidMount() {
		if (this.props.categories.length < 1) {
			this.props.fetchCategories();
		}
	}

	render() {
		console.log(this.props);
		const { error, loading, categories } = this.props;
		const updCat = ["all", ...categories];
		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}
		return (
			<div className="category-filter">
				<ul>
					{updCat.map((el, idx) => {
						if (idx == 0) {
							return (
								<li
									onClick={() => console.log(el)}
									className="active"
									key={idx + 1}
								>
									{el}
								</li>
							);
						}
						return <li key={idx + 1}>{el}</li>;
					})}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	const {
		categories: { categories, loading, error },
	} = state;
	return { categories, loading, error };
};

const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchCategories: fetchCategories(dispatch, shopService),
	};
};

export default compose(
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(CategoryFilter);
