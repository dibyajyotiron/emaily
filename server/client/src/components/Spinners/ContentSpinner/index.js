import React from "react";
import { css } from "@emotion/core";
// First way to import
import { BounceLoader } from "react-spinners";

const override = css`
	margin: auto auto;
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: relative,
    flex: 1,
    self-align: center
`;

export default class ContentSpinner extends React.Component {
	render() {
		return (
			<div style={{ flex: 1, marginTop: "240px", justifyContent: "center", alignItems: "center" }}>
				<BounceLoader css={override} sizeUnit={"px"} size={60} color={"#5bc0be"} />
			</div>
		);
	}
}
