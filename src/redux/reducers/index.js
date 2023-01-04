import updateAllProductsList from "./update-all-products-list";
import onceProduct from "./once-product";
import categories from "./categories";
const reducer = (state, action) => {
	return {
		allProductsList: updateAllProductsList(state, action),
		categories: categories(state, action),
		onceProduct: onceProduct(state, action),
	};
};

export default reducer;
