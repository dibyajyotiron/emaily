import React, { Component } from "react";
import { connect } from "react-redux";
import AuthSpinner from "./Spinners/AuthSpinner/AuthSpinner";
import { Link } from "react-router-dom";
import Payments from "./Payments";
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
					<React.Fragment>
						<li>
							<Payments />
						</li>
						<li style={{ margin: "0 10px" }}>Credits: {this.props.auth.credits || this.props.auth.user.credits}</li>
						<li>
							<a href="/auth/logout">Logout</a>
						</li>
					</React.Fragment>
				);
		}
	}

	render() {
		return (
			<nav style={{ background: "#5BC0BE" }}>
				<div className="container nav-wrapper">
					<Link style={{ paddingLeft: "1%" }} to={this.props.auth ? "/surveys" : "/"} className="left brand-logo">
						Emaily
					</Link>

					<ul id="nav-mobile" className="right">
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
