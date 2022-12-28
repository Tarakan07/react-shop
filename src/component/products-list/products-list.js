import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./products-list.css";
import ProductsItem from "../products-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProducts } from "../../redux/actions";
import { WithShopService } from "../hoc";
class ProductsList extends Component {
	// state = {
	// 	products: [],
	// 	loading: true,
	// 	error: null,
	// };
	componentDidMount() {
		this.props.fetchProducts();
		// this.setState({
		// 	products: this.props.products.products,
		// 	loading: this.props.loading,
		// 	error: this.props.error,
		// });
	}
	// componentDidUpdate(prevProps) {
	// 	if (this.props.products.products != undefined) {
	// 		if (prevProps.products.products !== this.props.products.products) {
	// 			this.setState({
	// 				products: this.props.products.products,
	// 				loading: this.props.loading,
	// 				error: this.props.error,
	// 			});
	// 		}
	// 	}
	// }

	render() {
		const { products, loading, error } = this.props;

		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}

		return (
			<div className="block-products">
				{products.products.map((item, idx) => {
					return (
						<div key={item.id} className="box-products">
							<ProductsItem product={item} />
						</div>
					);
				})}
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	if (state.allProductsList === undefined) {
		return {};
	}
	const {
		allProductsList: { products, loading, error },
	} = state;
	// { allProductsList: { products, loading, error } }
	return { products, loading, error };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProducts: fetchProducts(dispatch, shopService),
	};
};

export default withRouter(
	WithShopService()(connect(mapStateToProps, mapDispatchToProps)(ProductsList))
);
