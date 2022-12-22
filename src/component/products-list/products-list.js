import React, { Component } from "react";
import { connect } from "react-redux";

import "./products-list.css";
import ProductsItem from "../products-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProducts } from "../../redux/actions";
class ProductsList extends Component {
	state = {
		products: [],
		loading: true,
		error: null,
	};
	componentDidMount() {
		this.props.fetchProducts();
	}
	componentDidUpdate() {
		this.setState({
			products: this.props.products,
			loading: this.props.loading,
			error: this.props.error,
		});
	}
	render() {
		const { products, loading, error } = this.state;

		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}

		return (
			<div className="block-products">
				{products.map((item, idx) => {
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
const mapStateToProps = ({ allProductsList: { products, loading, error } }) => {
	return { products, loading, error };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProducts: fetchProducts(dispatch, shopService),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
