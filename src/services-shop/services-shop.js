export default class ShopService {
	_api_url = "https://dummyjson.com";
	_api_all_products = `${this._api_url}/products?limit=100`;
	_api_product = `${this._api_url}/products`;
	_api_categories = `${this._api_product}/categories`;

	getProducts = async (cat = "all") => {
		let res = undefined;
		if (cat !== "all") {
			res = await fetch(`${this._api_product}/category/${cat}`);
		}
		res = await fetch(`${this._api_product}/`);
		if (!res.ok) {
			throw new Error("Error with get data");
		}

		return res.json();
	};
	getCategories = async () => {
		const res = await fetch(this._api_categories);
		if (!res.ok) {
			throw new Error("Error with get data", +res.status);
		}
		return await res.json();
	};

	getProductsByID = async (id) => {
		const res = await fetch(`${this._api_product}/${id}`);
		if (!res.ok) {
			throw new Error("Error with get data", +res.status);
		}
		return await res.json();
	};
}
