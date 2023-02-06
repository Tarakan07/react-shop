import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchSearchProducts } from "../../../redux/actions";
import { WithShopService } from "../../hoc";
const GetSearchedList = (View) =>
	compose(
		WithShopService(),
		connect(mapStateToProps, mapDispatchToProps)
	)(View);

const mapStateToProps = ({
	searchedProducts: { products, loading, error },
}) => {
	return { products, loading, error };
};
const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchSearchProducts: (word) =>
			fetchSearchProducts(dispatch, shopService)(word),
	};
};
export default GetSearchedList;
