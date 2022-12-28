import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import "./products-list.css";
import ProductsItem from "../products-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProducts } from "../../redux/actions";
import { WithShopService } from "../hoc";
class ProductsList extends Component {
	componentDidMount() {
		this.props.fetchProducts();
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
)(ProductsList);
