const getProductsCart = (state, action) => {
	const initialState = {
		cartItems: [],
		orderPrice: 0,
		orderCount: 0,
	};

	const updateCartItems = (cartItems, item, itemIndex) => {
		if (item.count === 0) {
			return [
				...cartItems.slice(0, itemIndex),
				...cartItems.slice(itemIndex + 1),
			];
		}
		if (itemIndex === -1) {
			return [...cartItems, item];
		}
		return [
			...cartItems.slice(0, itemIndex),
			item,
			...cartItems.slice(itemIndex + 1),
		];
	};
	const updateCartItem = (product, item = {}, idx) => {
		const {
			id = product.id,
			count = 0,
			thumbnail = product.thumbnail,
			title = product.title,
			price = 0,
		} = item;
		return {
			id,
			title,
			thumbnail,
			count: count + idx,
			price: price + idx * product.price,
		};
	};
	const updateOrder = (state, productId, idx) => {
		const {
			productsList: { products },
			onceProduct,
			productsCart: { cartItems },
		} = state;

		const getProductItem = (products = {}, onceProduct = {}) => {
			return products.length > 0
				? products.find((product) => product.id == productId)
				: onceProduct.product.id === productId
				? onceProduct.product
				: [];
		};
		const product =
			getProductItem(products, onceProduct) === undefined
				? getProductItem(cartItems)
				: getProductItem(products, onceProduct);

		const itemIndex = cartItems.findIndex(
			(product) => product.id === productId
		);
		const item = cartItems[itemIndex];
		const newItem = updateCartItem(product, item, idx);
		return {
			orderCount: state.productsCart.orderCount + idx,
			orderPrice: state.productsCart.orderPrice + idx * product.price,
			cartItems: updateCartItems(cartItems, newItem, itemIndex),
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
			const item = state.productsCart.cartItems.find(
				(product) => product.id === action.payload
			);
			return updateOrder(state, action.payload, -item.count);
		default:
			return state.productsCart;
	}
};

export default getProductsCart;
