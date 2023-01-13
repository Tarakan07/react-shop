import React from "react";
import Spinner from "../../spinner";
import "./loadmore-products.css";
const LoadmoreProducts = ({ loadmoreProducts, showLoadMore, loading }) => {
	if (showLoadMore) {
		return (
			<div className="loadmore-btn loadmore-product">
				<button onClick={loadmoreProducts}>
					{loading ? <Spinner /> : "Load more"}
				</button>
			</div>
		);
	}
};

export default LoadmoreProducts;
