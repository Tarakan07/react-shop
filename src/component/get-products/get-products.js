import React, { Component, Fragment } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import ProductsList from "../products-list";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProducts } from "../../redux/actions";
import { WithShopService } from "../hoc";
class GetProducts extends Component {
	componentDidMount() {
		if (this.props.products.products == undefined) {
			this.props.fetchProducts();
		}
	}

	render() {
		const { products, loading, error } = this.props;

		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}

		return (
			<React.Fragment>
				{this.props.children}
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
