export default class ShopService {
	_api_url = "https://dummyjson.com";
	_api_all_products = `${this._api_url}/products`;
	_api_product = `${this._api_url}/products`;
	_api_search_product = `${this._api_url}/products/search?q=`;
	_api_comments = `${this._api_url}/comments/post`;
	_api_categories = `${this._api_product}/categories`;
	_api_posts = `${this._api_url}/posts`;
	_api_quotes = `${this._api_url}/quotes`;

	getProducts = (skip, limit) => async (cat) => {
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
	getSearchProducts = async (word) => {
		let res = await fetch(`${this._api_search_product}${word}`);
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

	getPosts = async (skip, limit) => {
		const res = await fetch(`${this._api_posts}?skip=${skip}&limit=${limit}`);

		if (!res.ok) {
			throw new Error("Error with get data");
		}

		return res.json();
	};
	getCommentPost = async (id) => {
		const res = await fetch(`${this._api_comments}/${id}`);
		if (!res.ok) {
			throw new Error("Error with get data");
		}

		return res.json();
	};

	getQuotes = async (skip, limit) => {
		const res = await fetch(`${this._api_quotes}?skip=${skip}&limit=${limit}`);

		if (!res.ok) {
			throw new Error("Error with get data");
		}
		return res.json();
	};
}
