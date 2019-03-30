// SurveyForm shows a form to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import validateEmails from "../../../utils/validateEmails";
import SurveyField from "./SurveyField";
import fieldArr from "../formFields";

class SurveyForm extends Component {
	renderFields() {
		const renderField = () => {
			return fieldArr.map(({ label, name }) => {
				return <Field key={name} label={label} name={name} type="text" component={SurveyField} />;
			});
		};

		return <div>{renderField()}</div>;
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/surveys">
						<button className="orange lighten-2 btn-flat white-text" type="submit">
							Cancel
						</button>
					</Link>
					<button className="teal btn-flat right white-text" type="submit">
						Review
						<i className="material-icons right">arrow_forward</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.surveyTitle) {
		errors.surveyTitle = "Please provide a title!";
	}
	if (!values.surveySubject) {
		errors.surveySubject = "A subject is required!";
	}
	if (!values.body) {
		errors.body = "Please provide your email body!";
	}
	errors.recipients = validateEmails(values.recipients || "");
	return errors;
}

export default reduxForm({
	validate,
	form: "surveyForm",
	destroyOnUnmount: false,
})(SurveyForm);
// export default SurveyForm;
