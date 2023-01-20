import React, { useEffect } from "react";
import QuotesList from "../quotes-list";
import { compose } from "redux";
import { connect } from "react-redux";
import { WithShopService } from "../../hoc";
import { fetchQuotes } from "../../../redux/actions";
import ErrorIndicator from "../../error-indicator";
import Spinner from "../../spinner";
import { withRouter } from "react-router";
import Pagination from "../pagination";
const GetQuotes = ({
	quotes,
	loading,
	error,
	limit,
	total,
	fetchQuotes,
	match,
}) => {
	useEffect(() => {
		fetchQuotes(match.params.page ? limit * (match.params.page - 1) : 0);
	}, [match.params.page]);

	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return <ErrorIndicator />;
	}
	return (
		<React.Fragment>
			<QuotesList quotes={quotes} />
			<Pagination total={total} defaultUrl={"/quotes/"} />
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	const {
		quotesList: { quotes, loading, error, skip, limit, total },
	} = state;

	return { quotes, loading, error, skip, limit, total };
};

const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchQuotes: (skip, limit) =>
			fetchQuotes(dispatch, shopService)(skip, limit),
	};
};

export default compose(
	withRouter,
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(GetQuotes);
