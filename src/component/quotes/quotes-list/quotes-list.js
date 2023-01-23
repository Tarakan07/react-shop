import React from "react";
import QuotesItem from "../quotes-item";
import "./quotes-list.css";

const QuotesList = ({ quotes }) => {
	return (
		<div className="block-quote">
			{quotes.map((el) => {
				return (
					<div key={el.id} className="box-quote">
						<QuotesItem quotes={el} />
					</div>
				);
			})}
		</div>
	);
	// return ;
};

export default QuotesList;
