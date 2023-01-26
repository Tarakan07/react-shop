const getProductsCart = (state, action) => {
	const initialState = {
		productsCart: [],
		orderPrice: 0,
	};

	const updateCartItems = (productsCart, item, itemIndex) => {
		if (item.count === 0) {
			return [
				...productsCart.slice(0, itemIndex),
				...productsCart.slice(itemIndex + 1),
			];
		}
		if (itemIndex === -1) {
			return [...productsCart, item];
		}
		return [
			...productsCart.slice(0, itemIndex),
			item,
			...productsCart.slice(itemIndex + 1),
		];
	};
	const updateCartItem = (product, item = {}, idx) => {
		const {
			id = product.id,
			count = 0,
			title = product.title,
			total = 0,
		} = item;
		return {
			id,
			title,
			count: count + idx,
			total: total + idx * product.price,
		};
	};
	const updateOrder = (state, productId, idx) => {
		const {
			productsList: { products },
			onceProduct,
			productsCart: { productsCart },
		} = state;

		const getProductItem = (products, onceProduct) => {
			return products.length > 0
				? products.find((product) => product.id == productId)
				: onceProduct.product.find((product) => product.id == productId);
		};
		const product = getProductItem(products, onceProduct);

		const itemIndex = productsCart.findIndex(
			(product) => product.id === productId
		);
		const item = productsCart[itemIndex];
		const newItem = updateCartItem(product, item, idx);
		return {
			orderPrice: state.productsCart.orderPrice + idx * product.price,
			productsCart: updateCartItems(productsCart, newItem, itemIndex),
		};
	};

	if (state === undefined) {
		return initialState;
	}
	switch (action.type) {
		case "PRODUCT_ADDED_TO_CART":
			return updateOrder(state, action.payload, 1);

		case "PRODUCT_REMOVED_FROM_CART":
			return updateOrder(state, action.payload, -1);
		case "ALL_PRODUCTS_REMOVED_FROM_CART":
			const item = state.productsCart.find(
				(product) => product.id === action.payload
			);
			return updateOrder(state, action.payload, -item.count);
		default:
			return state.productsCart;
	}
};

export default getProductsCart;
