import React from "react";
import { ServiceConsumer } from "../service-context";

const WithShopService = () => (Wrap) => {
	return (props) => {
		return (
			<ServiceConsumer>
				{(shopService) => {
					return <Wrap {...props} shopService={shopService} />;
				}}
			</ServiceConsumer>
		);
	};
};

export default WithShopService;
