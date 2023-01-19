import getProductsList from "./get-products-list";
import onceProduct from "./once-product";
import categories from "./categories";
import getPostsList from "./get-posts-list";
import getPostComments from "./get-post-comments";
import getQuotesList from "./get-quotes-list";
const reducer = (state, action) => {
	return {
		productsList: getProductsList(state, action),
		categories: categories(state, action),
		onceProduct: onceProduct(state, action),
		postsList: getPostsList(state, action),
		postComments: getPostComments(state, action),
		quotesList: getQuotesList(state, action),
	};
};

export default reducer;
