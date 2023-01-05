import getProductsList from "./get-products-list";
import onceProduct from "./once-product";
import categories from "./categories";
const reducer = (state, action) => {
	return {
		productsList: getProductsList(state, action),
		categories: categories(state, action),
		onceProduct: onceProduct(state, action),
	};
};

export default reducer;
