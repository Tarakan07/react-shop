import React from "react";
import "./pagination.css";
import { withRouter } from "react-router";
const Pagination = ({ total, defaultUrl, history, match }) => {
	const countPages = Array.from(Array(Math.ceil(total / 8)).keys()).map(
		(el) => el + 1
	);
	const setHistory = (page) => {
		history.push(`${page !== 1 ? page : defaultUrl}`);
	};
	const setClass = (el) => {
		return el == match.params.page ? "active" : "";
	};

	return (
		<div className="pagination">
			{countPages.map((el) => {
				return (
					<span
						key={el}
						className={
							match.params.page ? setClass(el) : el == 1 ? "active" : ""
						}
						onClick={() => setHistory(el)}
					>
						{el}
					</span>
				);
			})}
		</div>
	);
};

export default withRouter(Pagination);
