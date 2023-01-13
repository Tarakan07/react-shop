import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import ProductsList from "../products-list";
import ErrorIndicator from "../../error-indicator";
import { fetchProducts, fetchLoadmoreProducts } from "../../../redux/actions";
import { WithShopService } from "../../hoc";
import ProductsFilter from "../products-filter";
import { withRouter } from "react-router";
import LoadmoreProducts from "../loadmore-products";
class GetProducts extends Component {
	state = {
		category: "all",
		search: "",
		skip: 0,
		limit: 0,
		total: 100,
	};
	setCategory = (cat) => {
		this.setState((state) => {
			return {
				...state,
				category: cat,
			};
		});
	};
	setCountProducts = () => {
		this.setState((state) => {
			return {
				...state,
				skip: state.skip + 10,
				limit: 10,
			};
		});
	};
	componentDidMount() {
		if (this.props.match.params.filter) {
			this.setCategory(this.props.match.params.filter);
			this.props.fetchProducts(this.props.match.params.filter);
		} else {
			this.props.fetchProducts("all");
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.filter !== this.props.match.params.filter) {
			this.props.fetchProducts(this.props.match.params.filter);
		}
		if (prevState.skip !== this.state.skip) {
			this.props.fetchLoadmoreProducts(
				this.props.match.params.filter,
				this.state.skip,
				this.state.limit
			);
		}
	}
	searchFilter = (value) => {
		this.setState((state) => {
			return {
				...state,
				search: value,
			};
		});
	};
	visibleProducts = (products, valueSearch) => {
		if (products.products !== undefined) {
			const newProductsList = products.products.filter((el) => {
				return el.brand.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1;
			});

			return { products: newProductsList };
		}
		return {
			products: products,
		};
	};
	render() {
		const { products, loading, error } = this.props;
		const visibleProducts = this.visibleProducts(products, this.state.search);

		const titlePage =
			this.state.category === "all" ? "All products" : this.state.category;
		const showLoadMore =
			this.state.skip !== this.state.total - 10
				? visibleProducts.products.length > 9
					? true
					: false
				: false;

		// if (loading) {
		// 	return <Spinner />;
		// }
		if (error) {
			return <ErrorIndicator error={error} />;
		}
		if (this.props.showProductFilter) {
			return (
				<React.Fragment>
					<h1>{titlePage}</h1>
					<ProductsFilter
						setCategory={(cat) => this.setCategory(cat)}
						activeCat={this.state.category}
						searchFilter={(value) => this.searchFilter(value)}
					/>

					<ProductsList products={visibleProducts} />
					<LoadmoreProducts
						loadmoreProducts={() => this.setCountProducts()}
						showLoadMore={showLoadMore}
						loading={loading}
					/>
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				<ProductsList products={visibleProducts} />
				<LoadmoreProducts
					loadmoreProducts={this.setCountProducts}
					showLoadMore={showLoadMore}
					loading={loading}
				/>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	const {
		productsList: { products, loading, error, skip, limit },
	} = state;
	return { products, loading, error, skip, limit };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProducts: (cat) => fetchProducts(dispatch, shopService)(cat),
		fetchLoadmoreProducts: (cat, skip, limit) =>
			fetchLoadmoreProducts(dispatch, shopService)(cat)(skip, limit),
	};
};

export default compose(
	withRouter,
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(GetProducts);
