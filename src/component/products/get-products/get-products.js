import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import ProductsList from "../products-list";
import { fetchProducts, productAddedToCart } from "../../../redux/actions";
import { WithShopService } from "../../hoc";
import ProductsFilter from "../products-filter";
import { withRouter } from "react-router";
import LoadmoreProducts from "../loadmore-products";
class GetProducts extends Component {
	state = {
		category: "all",
		search: "",
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
		this.props.fetchProducts(
			this.props.match.params.filter,
			this.props.skip + 10,
			this.props.limit
		);
	};
	componentDidMount() {
		if (this.props.match.params.filter) {
			this.setCategory(this.props.match.params.filter);
			this.props.fetchProducts(this.props.match.params.filter);
		} else {
			this.props.fetchProducts("all");
		}
	}
	componentDidUpdate(prevProps) {
		if (prevProps.match.params.filter !== this.props.match.params.filter) {
			this.props.fetchProducts(this.props.match.params.filter);
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
		if (products !== undefined) {
			const newProductsList = products.filter((el) => {
				return el.brand.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1;
			});

			return newProductsList;
		}
		return products;
	};
	render() {
		const { products, loading, error } = this.props;
		const visibleProducts = this.visibleProducts(products, this.state.search);
		const titlePage =
			this.state.category === "all" ? "All products" : this.state.category;
		const showLoadMore =
			this.props.skip !== this.props.total - 10
				? visibleProducts.length > 9
					? true
					: false
				: false;

		console.log(visibleProducts);
		if (this.props.showProductFilter) {
			return (
				<React.Fragment>
					<h1>{titlePage}</h1>
					<ProductsFilter
						setCategory={(cat) => this.setCategory(cat)}
						activeCat={this.state.category}
						searchFilter={(value) => this.searchFilter(value)}
						loading={loading}
						error={error}
					/>

					<ProductsList
						products={visibleProducts}
						loading={loading}
						error={error}
					/>
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
				<ProductsList
					products={visibleProducts}
					loading={loading}
					error={error}
				/>
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
		productsList: { products, loading, error, skip, limit, total },
	} = state;
	return { products, loading, error, skip, limit, total };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProducts: (cat, skip, limit) =>
			fetchProducts(dispatch, shopService)(cat)(skip, limit),
	};
};

export default compose(
	withRouter,
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(GetProducts);
