import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing/index";
import Dashboard from "./Dashboard/index";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<div className="container">
							<Route path="/" exact component={Landing} />
							<Route path="/surveys" exact component={Dashboard} />
							<Route path="/surveys/new" component={SurveyNew} />
							{/* <Route path="/surveys/review" component={Survey} /> */}
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(
	null,
	actions,
)(App);
