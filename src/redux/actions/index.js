import fetchProducts from "./shop-action";
import fetchCategories from "./cat-action";
import fetchProductsByID from "./product-action";
// const fetchProductCategory = (dispatch, shopService) => (cat) => {
// 	dispatch(shopRequested());
// 	shopService
// 		.getCategoryProducts(cat)
// 		.then((data) => dispatch(shopLoaded(data)))
// 		.catch((error) => dispatch(shopFailure(error)));
// };
export { fetchProducts, fetchCategories, fetchProductsByID };
