import React, { Component } from "react";

export default class ErrorBoundary extends Component {
	state = {
		error: false,
		message: "",
	};

	componentDidCatch(e) {
		this.setState({
			error: true,
			message: e,
		});
	}

	render() {
		return this.state.error ? (
			<span>Error: {this.state.message}</span>
		) : (
			this.props.children
		);
	}
}
