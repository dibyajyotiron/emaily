import React, { Component } from "react";
class Header extends Component {
	render() {
		return (
			<nav>
				<div className="container nav-wrapper">
					<a style={{ paddingLeft: "1%" }} href="#" className="left brand-logo">
						Emaily
					</a>

					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a>Login with Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
