import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../../spinner";
import { WithShopService } from "../../../hoc";
import ErrorIndicator from "../../../error-indicator";
import { fetchCategories } from "../../../../redux/actions";
class CategoryFilter extends Component {
	componentDidMount() {
		if (this.props.categories.length < 1) {
			this.props.fetchCategories();
		}
	}

	render() {
		const { error, loading, categories, activeCat } = this.props;
		const updCat = ["all", ...categories];
		const activeIdx = updCat.findIndex((el) => el === activeCat);
		const setClass = (idx) => {
			if (idx === activeIdx) return "active";
		};
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
						if (idx === 0) {
							return (
								<li
									onClick={() => this.props.setCategory("all")}
									className={setClass(idx)}
									key={idx + 1}
								>
									<Link to={`/products/`}>{el}</Link>
								</li>
							);
						}
						return (
							<li
								className={setClass(idx)}
								onClick={() => this.props.setCategory(el)}
								key={idx + 1}
							>
								<Link to={`/products/${el}`}>{el}</Link>
							</li>
						);
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
