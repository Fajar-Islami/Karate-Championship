import React, { useState } from "react";
import { MDBInput } from "mdbreact";

const RadioButton = ({ label, ...rest }) => {
	const [checked, setChecked] = useState("");
	const handleCheck = (status) => () => {
		setChecked((checked) => status);
	};
	return <MDBInput gap onClick={handleCheck(1)} checked={checked === 1 ? true : false} label={label} type="radio" id="radio1" containerClass="mr-5" {...rest} />;
};

export default RadioButton;
