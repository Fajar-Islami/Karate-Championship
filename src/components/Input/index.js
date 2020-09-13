import React from "react";

const Input = ({ label, type, ...rest }) => {
	return (
		<tr>
			<td className="font-weight-normal">{label} </td>
			<td className="font-weight-bold">:</td>
			<td className=" pt-2">
				<input type={type} id="exampleDisabled" className="form-control" {...rest} />
			</td>
		</tr>
	);
};

export default Input;
