import React, { useEffect } from "react";
import QuotesList from "../quotes-list";
import { compose } from "redux";
import { connect } from "react-redux";
import { WithShopService } from "../../hoc";
import { fetchQuotes } from "../../../redux/actions";
import ErrorIndicator from "../../error-indicator";
import Spinner from "../../spinner";
const GetQuotes = ({
	quotes,
	loading,
	error,
	skip,
	limit,
	total,
	fetchQuotes,
}) => {
	useEffect(() => {
		fetchQuotes();
	}, []);
	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return <ErrorIndicator />;
	}
	return <QuotesList quotes={quotes} />;
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
	WithShopService(),
	connect(mapStateToProps, mapDispatchToProps)
)(GetQuotes);
