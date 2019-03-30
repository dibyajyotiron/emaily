import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch =>
	dispatch({
		type: FETCH_USER,
		payload: (await axios.get("/auth/me")).data,
	});

export const handleToken = token => async dispatch =>
	dispatch({
		type: FETCH_USER,
		payload: (await axios.post("/api/payment", token)).data,
	});

export const submitSurvey = (values, history) => async dispatch => {
	history.push("/surveys");
	dispatch({
		type: FETCH_USER,
		payload: (await axios.post("/api/surveys", {
			title: values.surveyTitle,
			subject: values.surveySubject,
			body: values.body,
			recipients: values.recipients,
		})).data,
	});
};
