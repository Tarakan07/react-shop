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
	const moveArrowPage = (idx) => {
		if (match.params.page) {
			countPages.length !== Number(match.params.page)
				? setHistory(Number(match.params.page) + idx)
				: idx === -1
				? setHistory(Number(match.params.page) + idx)
				: console.log();
		}
		if (!match.params.page && idx === 1) {
			setHistory(2);
		}
	};
	const setClassArrow = (idx) => {
		if (idx === -1) {
			return match.params.page ? "" : "no_active";
		}
		if (idx === 1)
			return Number(match.params.page) === countPages.length ? "no_active" : "";
	};
	return (
		<div className="pagination">
			<span className={setClassArrow(-1)} onClick={() => moveArrowPage(-1)}>
				{"<"}
			</span>
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
			<span className={setClassArrow(1)} onClick={() => moveArrowPage(1)}>
				{">"}
			</span>
		</div>
	);
};

export default withRouter(Pagination);
