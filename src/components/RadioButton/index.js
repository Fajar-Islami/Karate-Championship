import React, { useState } from "react";
import { MDBInput } from "mdbreact";

const RadioButton = ({ label, ...rest }) => {
	const [checked, setChecked] = useState("");
	const handleCheck = (status) => () => {
		setChecked((checked) => status);
	};
	return (
		<MDBInput gap onClick={handleCheck(1)} checked={checked === 1 ? true : false} type="radio" id="radio1" containerClass="mr-5" {...rest}>
			<div className="font-weight-normal"> {label} </div>
		</MDBInput>
	);
};

export default RadioButton;
