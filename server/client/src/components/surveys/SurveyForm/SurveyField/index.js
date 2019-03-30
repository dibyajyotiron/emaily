import React from "react";

const SurveyField = ({ input, label, meta: { active, error, touched } }) => {
	return (
		<div className="red-text" style={{ marginBottom: "15px" }}>
			<label for={label} className={active ? "active" : null} style={{ fontSize: "15px" }}>
				{label}
			</label>
			<input className="" id={label} style={{ marginBottom: "5px" }} {...input} />
			{touched && error}
		</div>
	);
};

export default SurveyField;
