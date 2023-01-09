import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import ProductsList from "../products-list";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";
import { fetchProducts } from "../../../redux/actions";
import { WithShopService } from "../../hoc";
import ProductsFilter from "../products-filter";
import { withRouter } from "react-router";
class GetProducts extends Component {
	state = {
		category: "all",
	};
	setCategory = (cat) => {
		this.setState({ category: cat });
	};
	componentDidMount() {
		if (this.props.match.params.filter) {
			this.setCategory(this.props.match.params.filter);
			this.props.fetchProducts(this.props.match.params.filter);
		} else {
			this.props.fetchProducts("all");
			return;
		}
	}
	componentDidUpdate(prevProps) {
		if (prevProps.match.params.filter !== this.props.match.params.filter) {
			this.props.fetchProducts(this.props.match.params.filter);
		}
	}

	render() {
		const { products, loading, error } = this.props;
		const titlePage =
			this.state.category === "all" ? "All products" : this.state.category;
		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator error={error} />;
		}

		return (
			<React.Fragment>
				<h1>{titlePage}</h1>
				<ProductsFilter
					setCategory={(cat) => this.setCategory(cat)}
					activeCat={this.state.category}
				/>
				<ProductsList products={products} />
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	const {
		productsList: { products, loading, error },
	} = state;
	return { products, loading, error };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProducts: (cat) => fetchProducts(dispatch, shopService)(cat),
	};
};

export default compose(
	withRouter,
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(GetProducts);
