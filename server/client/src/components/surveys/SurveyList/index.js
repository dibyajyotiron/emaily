import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSurveys } from "../../../actions/index";
import ContentSpinner from "../../../../src/components/Spinners/ContentSpinner";

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	processTime(time) {
		// Check correct time format and split into components
		time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

		if (time.length > 1) {
			// If time format correct
			time = time.slice(1); // Remove full string match value
			time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
			time[0] = +time[0] % 12 || 12; // Adjust hours
		}
		return time.join(""); // return adjusted time or original string
	}

	processDate(dateSent) {
		const dateArr = new Date(dateSent).toUTCString().split(",");
		const day = dateArr[0];
		const [date, month, year, time, zone] = dateArr[1].trim().split(" ");
		const processedTime = this.processTime(time);
		const newDate = `${day}, ${date}-${month}-${year}, ${processedTime}, ${zone}`;
		return newDate;
	}

	renderSurveys() {
		return this.props.surveys
			.map(survey => (
				<div className="row">
					<div className="container">
						<div className="col s12 m12">
							<div className="card teal lighten-1 hoverable" key={survey.id}>
								<div className="card-content" style={{ color: "white" }}>
									<span className="card-title"> {survey.title}</span>
									<p>{survey.body}</p>
									<p className="right">
										Sent: <span>{this.processDate(survey.dateSent)}</span>
									</p>
								</div>
								<div className="card-action teal lighten-5">
									<a style={{ color: "black", textTransform: "none" }}>
										Yes: <span style={{ color: "blue" }}>{survey.yes}</span>
									</a>
									<a style={{ color: "black", textTransform: "none" }}>
										No: <span style={{ color: "red" }}>{survey.no}</span>
									</a>
									<a style={{ color: "black", textTransform: "none" }} className="right">
										Last Responded:
										<span style={{ color: "#107895" }}>{survey.lastResponded ? this.processDate(survey.lastResponded) : " Not yet responded!"}</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			))
			.reverse();
	}

	render() {
		return <div>{this.renderSurveys().length ? this.renderSurveys() : <ContentSpinner />}</div>;
	}
}

const mapStateToProps = ({ surveys }) => {
	return { surveys };
};

export default connect(
	mapStateToProps,
	{ fetchSurveys },
)(SurveyList);
