import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProductsByID } from "../../redux/actions";
import { WithShopService } from "../hoc";
import ProductBoxDescription from "../product-box-description";
import ProductBoxImages from "../product-box-images";
import "./css/product-page.css";
class ProductPage extends Component {
	componentDidMount() {
		this.props.fetchProductsByID(this.props.location.state.id);
	}
	render() {
		const { products: product, loading, error } = this.props;
		const images = product.images;
		if (loading) return <Spinner />;
		if (error) return <ErrorIndicator />;
		return <BlockProduct images={images} />;
	}
}

const BlockProduct = ({ images }) => {
	return (
		<section className="section-product">
			<h1>Telephoneeee</h1>
			<div className="wrap-product-block">
				<ProductBoxImages images={images} />
				<ProductBoxDescription />
			</div>
		</section>
	);
};

const mapStateToProps = ({ products, loading, error }) => {
	return { products, loading, error };
};

const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProductsByID: (id) => fetchProductsByID(dispatch, shopService)(id),
	};
};
export default WithShopService()(
	connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
