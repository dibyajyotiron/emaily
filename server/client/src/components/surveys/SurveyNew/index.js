// SurveyNew shows SurveyForm and SurveyForm Review
import React, { Component } from "react";
import SurveyForm from "./../SurveyForm/index";
import SurveyReview from "./../SurveyForm/SurveyReview";

import { reduxForm } from "redux-form";

class SurveyNew extends Component {
	state = {
		showFormReview: false,
	};

	renderContent() {
		if (this.state.showFormReview) {
			return <SurveyReview onSurveyCancel={() => this.setState({ showFormReview: false })} />;
		}
		return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: "surveyForm",
})(SurveyNew);
