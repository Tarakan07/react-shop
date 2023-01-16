import getProductsList from "./get-products-list";
import onceProduct from "./once-product";
import categories from "./categories";
import getPostsList from "./get-posts-list";
import getPostComments from "./get-post-comments";
const reducer = (state, action) => {
	return {
		productsList: getProductsList(state, action),
		categories: categories(state, action),
		onceProduct: onceProduct(state, action),
		postsList: getPostsList(state, action),
		postComments: getPostComments(state, action),
	};
};

export default reducer;
