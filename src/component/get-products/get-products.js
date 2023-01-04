import React, { Component, Fragment } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import ProductsList from "../products-list";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProductCategory, fetchProducts } from "../../redux/actions";
import { WithShopService } from "../hoc";
import ProductsFilter from "../products-filter";
class GetProducts extends Component {
	state = {
		category: "laptops",
	};
	componentDidMount() {
		if (this.props.products.products == undefined) {
			this.props.fetchProducts();
		}
	}
	componentDidUpdate(prevProps) {
		if (this.props.products.products !== prevProps.products.products) {
			// this.props.fetchProductCategory(this.state.category);
		}
	}
	setCategory = (cat) => {
		this.setState({ category: cat });
	};
	render() {
		const { products, loading, error } = this.props;

		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator error={error} />;
		}

		return (
			<React.Fragment>
				<ProductsFilter  />
				<ProductsList products={products} />
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	const {
		allProductsList: { products, loading, error },
	} = state;
	return { products, loading, error };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProducts: fetchProducts(dispatch, shopService),
	};
};

export default compose(
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(GetProducts);
