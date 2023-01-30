import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
	productAddedToCart,
	productRemovedFromCart,
	allProductsRemovedFromCart,
} from "../../redux/actions";

const GetCart = (View) => connect(mapStateToProps, mapDispatchToProps)(View);
const mapStateToProps = ({ productsCart }) => {
	return { productsCart };
};
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{ productAddedToCart, productRemovedFromCart, allProductsRemovedFromCart },
		dispatch
	);
};

export default GetCart;
