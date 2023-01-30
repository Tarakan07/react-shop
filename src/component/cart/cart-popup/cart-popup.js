import React, { useState } from "react";
import CartListPopup from "./cart-list-popup";
import CartPopupIcon from "./cart-popup-icon";
const CartPopup = () => {
	const [show, setShow] = useState(false);
	const showPopupList = () => {
		setShow(!show);
	};
	return (
		<React.Fragment>
			<CartPopupIcon showPopupList={showPopupList} />
			<CartListPopup showPopup={show} showPopupList={showPopupList}/>
		</React.Fragment>
	);
};
export default CartPopup;
