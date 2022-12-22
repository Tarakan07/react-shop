import updateAllProductsList from "./update-all-products-list";
import onceProduct from "./once-product";
const reducer = (state, action) => {
	return {
		allProductsList: updateAllProductsList(state, action),
		onceProduct: onceProduct(state, action),
	};
};

export default reducer;
