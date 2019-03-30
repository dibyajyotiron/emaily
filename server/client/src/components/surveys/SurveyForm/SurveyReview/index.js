import React from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import fieldArr from "../../formFields";
import * as actions from "../../../../actions";

const SurveyReview = ({ onSurveyCancel, formValues, submitSurvey, history }) => {
	const renderReviewFields = () => {
		return fieldArr.map(({ name, label }) => {
			return (
				<div key={name}>
					<label>{label}</label>
					<div>{formValues[name]}</div>
				</div>
			);
		});
	};
	return (
		<div>
			<h5>Please confirm your inputs</h5>
			{renderReviewFields()}
			<button className="yellow white-text darken-3 btn-flat" onClick={() => onSurveyCancel()}>
				Back
			</button>
			<button onClick={() => submitSurvey(formValues, history)} className="btn green btn-flat right white-text">
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(
	mapStateToProps,
	actions,
)(withRouter(SurveyReview));
