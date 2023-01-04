export default class ShopService {
	_api_url = "https://dummyjson.com";
	_api_all_products = `${this._api_url}/products?limit=100`;
	_api_product = `${this._api_url}/products`;
	_api_categories = `${this._api_product}/categories`;

	getAllProducts = async () => {
		const res = await fetch(this._api_all_products);
		if (!res.ok) {
			throw new Error("Error with get data", +res.status);
		}
		return await res.json();
	};
	getCategories = async () => {
		const res = await fetch(this._api_categories);
		if (!res.ok) {
			throw new Error("Error with get data", +res.status);
		}
		return await res.json();
	};
	// getCategoryProducts = async (cat) => {
	// 	const res = await fetch(this.api);
	// 	console.log(res.json());
	// 	if (!res.ok) {
	// 		throw new Error("Error with get data");
	// 	}
	// 	const objCat = res.json().then((obj) => {
	// 		if (cat == "All") return obj;

	// 		return obj.products.filter((el) => el.category == cat);
	// 	});

	// 	return objCat;
	// };
	getProductsID = async (id) => {
		const res = await fetch(`${this._api_product}/${id}`);
		if (!res.ok) {
			throw new Error("Error with get data", +res.status);
		}
		return await res.json();
	};
}
