import React, { Component } from "react";
import { connect } from "react-redux";
import AuthSpinner from "./Spinners/AuthSpinner/AuthSpinner";
import { Link } from "react-router-dom";
import Landing from "./Landing";
class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return <AuthSpinner />;
			case false:
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);
			default:
				return (
					<li>
						<a href="/auth/logout">Logout</a>
					</li>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="container nav-wrapper">
					<Link style={{ paddingLeft: "1%" }} to="/" className="left brand-logo">
						Emaily
					</Link>

					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
