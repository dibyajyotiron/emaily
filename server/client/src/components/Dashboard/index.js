import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
	return (
		<div className="fixed-action-btn">
			<Link to="/surveys/new" style={{ background: "#5BC0BE" }} className="btn-floating btn-large">
				<i className="large material-icons">add</i>
			</Link>
		</div>
	);
};

export default Dashboard;
