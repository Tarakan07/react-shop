import React from "react";
import "./quotes-item.css";
const QuotesItem = ({ quotes }) => {
	return (
		<React.Fragment>
			<span>{quotes.author}</span>
			<p>{quotes.quote}</p>
		</React.Fragment>
	);
};

export default QuotesItem;
