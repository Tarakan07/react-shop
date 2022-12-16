export default class ShopService {
	api = "https://dummyjson.com/products/";

	getAllProducts = async () => {
		const res = await fetch(this.api);
		if (!res.ok) {
			throw new Error("Error with get data", +res.status);
		}
		return await res.json();
	};
}
