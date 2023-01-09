import getProductsList from "./get-products-list";
import onceProduct from "./once-product";
import categories from "./categories";
import getPostsList from "./get-posts-list";
const reducer = (state, action) => {
	return {
		productsList: getProductsList(state, action),
		categories: categories(state, action),
		onceProduct: onceProduct(state, action),
		postsList: getPostsList(state, action),
	};
};

export default reducer;
