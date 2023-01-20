import React from "react";
import GetQuotes from "../quotes/get-quotes";
import "./css/quotes-page.css";
import "./css/pages.css";
const QuotesPage = () => {
	return (
		<div className="quotes-block wrap-block-page">
			<h1>Quotes page</h1>
			<GetQuotes />
		</div>
	);
};
export default QuotesPage;
