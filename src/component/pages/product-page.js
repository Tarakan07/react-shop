import React, { Component } from "react";
import { connect } from "react-redux";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProductsByID } from "../../redux/actions";
import { WithShopService } from "../hoc";
import ProductBoxDescription from "../products/product-box-description";
import ProductBoxImages from "../products/product-box-images";
import compose from "../../utils/compose";
import { productAddedToCart } from "../../redux/actions";
import "./css/product-page.css";
class ProductPage extends Component {
	componentDidMount() {
		this.props.fetchProductsByID(Number(this.props.match.params.id));
	}
	componentDidUpdate() {}
	addedToCart = () => {
		this.props.productAddedToCart(Number(this.props.match.params.id));
	};
	render() {
		const { product, loading, error } = this.props;
		const images = product.images;
		const hasInCart =
			this.props.cartItems.find((el) => el.id === product.id) !== undefined
				? "hasCart"
				: "";
		if (loading) return <Spinner />;
		if (error) return <ErrorIndicator />;
		return (
			<BlockProduct
				images={images}
				product={product}
				hasInCart={hasInCart}
				addedToCart={this.addedToCart}
			/>
		);
	}
}

const BlockProduct = ({ images, product, addedToCart, hasInCart }) => {
	return (
		<section className="section-product">
			<h1>{`${product.title},(${product.category})`}</h1>
			<div className="wrap-product-block">
				<ProductBoxImages images={images} />
				<ProductBoxDescription
					descriptionProduct={product}
					addedToCart={addedToCart}
					hasInCart={hasInCart}
				/>
			</div>
		</section>
	);
};

const mapStateToProps = ({
	onceProduct: { product, loading, error },
	productsCart: { cartItems },
}) => {
	return { product, cartItems, loading, error };
};

const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProductsByID: (id) => fetchProductsByID(dispatch, shopService)(id),
		productAddedToCart: (id) => dispatch(productAddedToCart(id)),
	};
};
export default compose(
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(ProductPage);
