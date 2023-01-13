export default class ShopService {
	_api_url = "https://dummyjson.com";
	_api_all_products = `${this._api_url}/products`;
	_api_product = `${this._api_url}/products`;
	_api_categories = `${this._api_product}/categories`;
	_api_posts = `${this._api_url}/posts`;

	getProducts =
		(skip = 0, limit = 10) =>
		async (cat = "all") => {
			let res = undefined;
			if (cat !== "all") {
				res = await fetch(`${this._api_product}/category/${cat}`);
			} else {
				res = await fetch(
					`${this._api_all_products}?skip=${skip}&limit=${limit}`
				);
			}
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

	getPosts = async () => {
		const res = await fetch(`${this._api_posts}?limit=150`);

		if (!res.ok) {
			throw new Error("Error with get data");
		}

		return res.json();
	};
}
